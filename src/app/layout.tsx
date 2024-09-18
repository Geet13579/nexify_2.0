import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from '@/components/Navbar';



const geistSans = localFont({
  src: "../app/fonts/Satoshi-Black.woff", // Removed the extra slash
  variable: "--font-geist-sans",
  weight: "100 900 200 400 500",
});
const light = localFont({
  src: "./fonts/Satoshi-Light.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const regular = localFont({
  src: "./fonts/Satoshi-Regular.woff",
  variable: "--font-geist-regular",
  weight: "700",
});


const medium = localFont({
  src: "./fonts/Satoshi-Medium.woff",
  variable: "--font-geist-medium",
  weight: "700",
});
const bold = localFont({
  src: "./fonts/Satoshi-Bold.woff",
  variable: "--font-geist-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Nexify World",
  description: "Ecosystem With Tech Enabled Vehicle Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${light.variable} ${regular.variable} ${medium.variable} ${bold.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
