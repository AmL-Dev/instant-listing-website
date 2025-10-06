import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instant Listing - Scan, Snap, Sell with AI",
  description: "Turn photos into perfect product listings instantly! Create AI-powered listings in seconds for eBay, Etsy, Facebook Marketplace and more. Download the app today!",
  icons: {
    icon: [
      { url: '/Instant_Listing_Logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' }
    ],
    apple: '/Instant_Listing_Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
