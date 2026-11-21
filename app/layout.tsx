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
