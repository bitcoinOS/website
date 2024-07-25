import type { Metadata } from "next";
import {  Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Bifipal - Unlocking the DeFi Gaming Paradigm for Bitcoin",
  description: "Unlocking the DeFi Gaming Paradigm for Bitcoin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, target-densitydpi=device-dpi"></meta>
      <body className={`${ubuntu.className} bg-white`}>{children}</body>
    </html>
  );
}
