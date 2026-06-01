import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScraPack Solutions LLC | OCC Export Trading — USA to India",
  description:
    "Philadelphia-based OCC export company. We export OCC Grade 11 & Grade 12 scrap material from the USA to India. Connecting US recyclers with Indian paper mills.",
  keywords:
    "OCC export, OCC Grade 11, OCC Grade 12, old corrugated cardboard, USA to India export, paper mill supply, scrap trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomNav />
        <WhatsAppButton />
      </body>
    </html>
  );
}
