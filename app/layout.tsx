import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caption That",
  description: "Upload an image. Ruin it with a caption."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
