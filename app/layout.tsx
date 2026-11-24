import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shagnexweb.site"),
  title: "SHAGNEX Web | Web Development & Digital Solutions",
  description:
    "SHAGNEX Web builds modern websites, web applications, and digital solutions that help businesses grow online.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    apple: [
      {
        url: "/images/shagnex.logo.png",
        type: "image/png",
        sizes: "1254x1254",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
