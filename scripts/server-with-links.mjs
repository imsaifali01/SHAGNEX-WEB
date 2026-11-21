import os from "node:os";
import { spawn } from "node:child_process";
import net from "node:net";

const mode = process.argv[2] === "start" ? "start" : "dev";
const requestedPort = Number(process.env.PORT || 3000);

const isPortAvailable = (port) =>
  new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", (error) => {
      // A restricted environment may reject the probe even though Next can
      // still report the useful URL itself.
      resolve(error.code === "EACCES");
    });

    server.listen(port, "0.0.0.0", () => {
      server.close(() => resolve(true));
    });
  });

let port = requestedPort;
while (!(await isPortAvailable(port))) {
  port += 1;
}

const interfaces = Object.values(os.networkInterfaces()).flatMap(
  (entries) => entries ?? [],
);

const networkAddresses = [
  ...new Set(
    interfaces
      .filter(
        (entry) =>
          entry.family === "IPv4" &&
          !entry.internal &&
          !entry.address.startsWith("169.254."),
      )
      .map((entry) => entry.address),
  ),
];

console.log("");
console.log("SHAGNEX Web server links");
console.log(`Local:   http://localhost:${port}`);

if (networkAddresses.length === 0) {
  console.log("Network: No active IPv4 network address detected");
} else {
  for (const address of networkAddresses) {
    console.log(`Network: http://${address}:${port}`);
  }
}

console.log("");

const nextArgs = [
  "next",
  mode,
  "--hostname",
  "0.0.0.0",
  "--port",
  String(port),
];

const isWindows = process.platform === "win32";
const npmCommand = isWindows ? process.env.ComSpec || "cmd.exe" : "npx";
const nextCommandArgs = ["--no-install", ...nextArgs];
const npmArgs = isWindows
  ? ["/d", "/s", "/c", `npx ${nextCommandArgs.join(" ")}`]
  : nextCommandArgs;

const child = spawn(
  npmCommand,
  npmArgs,
  {
    env: process.env,
    stdio: "inherit",
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});
