import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "ScraPack Solutions LLC | OCC & Scrap Tire Export — USA Worldwide",
    template: "%s | ScraPack Solutions LLC",
  },
  description:
    "ScraPack Solutions LLC — Philadelphia-based export trading company. We export OCC Grade 11 & 12 and baled scrap tires from the USA to paper mills and rubber processors worldwide.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "ScraPack Solutions LLC | OCC & Scrap Tire Export",
    description:
      "Connecting US recyclers with paper mills and rubber processors worldwide. OCC Grade 11 & 12 and baled scrap tires, FOB from major U.S. ports.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScraPack Solutions LLC | OCC & Scrap Tire Export",
    description:
      "Connecting US recyclers with paper mills and rubber processors worldwide. OCC Grade 11 & 12 and baled scrap tires, FOB from major U.S. ports.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "ScraPack Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/NewLogo2.png`,
  description:
    "Philadelphia-based export trading company. ScraPack Solutions LLC exports OCC Grade 11 & 12 corrugated cardboard and baled scrap tires from the USA to paper mills and rubber processors worldwide.",
  email: "info@scrapacksolutions.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9830 Walley Ave",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    postalCode: "19115",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-201-914-2222",
      contactType: "sales",
      email: "info@scrapacksolutions.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col pb-16 md:pb-0">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomNav />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
