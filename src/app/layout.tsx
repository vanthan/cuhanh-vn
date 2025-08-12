import Navbar from '@/components/nav/Navbar';
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const geistLato = Lato({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistLato.variable}`}>
        <Navbar/>          
        {children}
      </body>
    </html>
  );
}
