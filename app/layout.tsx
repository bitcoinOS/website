import type { Metadata } from "next";
import {  Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Bifipal - A bitcoin native smart contact & finance layer",
  description: "A bitcoin native smart contact & finance layer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-white`}>{children}</body>
    </html>
  );
}
