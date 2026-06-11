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
  title: 'ScraPack Solutions LLC | OCC Export Trading — USA to India',
  description: 'ScraPack Solutions LLC — Philadelphia-based OCC export trading company. We export OCC Grade 11 & 12 from the USA to paper mills across India.',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'ScraPack Solutions LLC | OCC Export Trading',
    description: 'Connecting US OCC recyclers with Indian paper mills. Export Grade 11 & 12 from Philadelphia to India.',
    url: 'https://scrapack.vercel.app',
    siteName: 'ScraPack Solutions LLC',
    locale: 'en_US',
    type: 'website',
  },
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
