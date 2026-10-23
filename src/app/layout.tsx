import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BRAND_CONFIG, SERVICES_DATA } from "@/data/siteData";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#221815",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = "https://beautybranch.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND_CONFIG.name} | ${BRAND_CONFIG.tagline} — Luxury Hair Salon & Mobile Stylist Ibadan`,
    template: `%s | ${BRAND_CONFIG.name}`,
  },
  description:
    "Beauty Branch by Janneatte (10+ years mastery). Ibadan's premier online hair salon. Knotless Braids, Boho Goddess Braids, Frontal Lace Installs, Wig Revamping, Natural Hair Treatments & Kids (8+) Styles. Doorstep mobile service across University of Ibadan, Bodija, and all Ibadan. Flat ₦5,000 deposit.",
  applicationName: BRAND_CONFIG.name,
  authors: [{ name: "Janneatte (Beauty Branch)", url: siteUrl }],
  generator: "Next.js 15",
  keywords: [
    "Hair stylist Ibadan",
    "Beauty Branch Ibadan",
    "Braids Bodija Ibadan",
    "Knotless Braids Ibadan",
    "Boho Braids Ibadan",
    "Ghana Weaving Ibadan",
    "Wig Installation Ibadan",
    "Wig Revamping Bodija",
    "Hair stylist University of Ibadan",
    "Home service hair stylist Ibadan",
    "Mobile hair salon Nigeria",
    "Natural hair salon Ibadan",
    "Janet hairstylist",
    "Painless braiding Ibadan",
  ],
  creator: "Beauty Branch",
  publisher: "Beauty Branch",
  category: "Beauty & Personal Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${BRAND_CONFIG.name} — Where Beauty Meets Excellence`,
    description:
      "Book luxury knotless braids, flawless lace installs, and natural hair styling in Ibadan. Doorstep mobile salon by Janneatte with 10+ years mastery. ₦5,000 flat deposit.",
    url: siteUrl,
    siteName: BRAND_CONFIG.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Beauty Branch — Where Beauty Meets Excellence in Ibadan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_CONFIG.name} | Luxury Hair Styling & Salon in Ibadan`,
    description:
      "Tension-free Knotless Braids, Boho Goddess Styles, Wig Melts & Revamping in Ibadan. Doorstep home service. Flat ₦5k deposit.",
    images: ["/images/og-image.jpg"],
    creator: "@janneatte_beauty_branch",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HairSalon",
        "@id": `${siteUrl}/#salon`,
        name: BRAND_CONFIG.name,
        alternateName: "Beauty Branch by Janneatte",
        image: `${siteUrl}/images/og-image.jpg`,
        logo: `${siteUrl}/images/logo.jpg`,
        description:
          "Premium online hair salon and doorstep mobile service in Ibadan specializing in Knotless Braids, Boho Braids, Wig Installations, and Natural Hair Care.",
        url: siteUrl,
        telephone: BRAND_CONFIG.phone,
        email: BRAND_CONFIG.email,
        priceRange: "₦3,000 - ₦25,000",
        currenciesAccepted: "NGN",
        paymentAccepted: "Cash, Bank Transfer, Paystack, Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: "University of Ibadan / Bodija",
          addressLocality: "Ibadan",
          addressRegion: "Oyo State",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 7.4433,
          longitude: 3.9003,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Ibadan",
          },
          {
            "@type": "Place",
            name: "University of Ibadan",
          },
          {
            "@type": "Place",
            name: "Bodija",
          },
          {
            "@type": "Place",
            name: "Akobo",
          },
          {
            "@type": "Place",
            name: "Ring Road",
          },
          {
            "@type": "Place",
            name: "Oluyole",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "15:00",
            closes: "19:00",
          },
        ],
        sameAs: [
          BRAND_CONFIG.instagramUrl,
          BRAND_CONFIG.tiktokUrl,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: BRAND_CONFIG.name,
        description: BRAND_CONFIG.tagline,
        publisher: {
          "@id": `${siteUrl}/#salon`,
        },
        inLanguage: "en-NG",
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FCF9F5] text-[#221815] min-h-screen flex flex-col selection:bg-[#F4EBD9] selection:text-[#86464F]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
