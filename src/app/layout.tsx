import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BRAND_CONFIG } from "@/data/siteData";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://beautybranch.netlify.app"),
  title: {
    default: `${BRAND_CONFIG.name} | ${BRAND_CONFIG.tagline} — Hair Salon & Mobile Stylist in Ibadan`,
    template: `%s | ${BRAND_CONFIG.name}`,
  },
  description:
    "Premium hairstyling and mobile salon in Ibadan by master stylist Janneatte (10+ years mastery). Knotless Braids, Boho Goddess Braids, Frontal Lace Installs, Wig Revamping, and Natural Hair Care. Doorstep home service across University of Ibadan, Bodija, and all Ibadan.",
  applicationName: BRAND_CONFIG.name,
  authors: [{ name: "Janneatte", url: "https://beautybranch.netlify.app" }],
  generator: "Next.js",
  keywords: [
    "Hair stylist Ibadan",
    "Braids Bodija",
    "Knotless Braids Ibadan",
    "Boho Braids Ibadan",
    "Wig Installation Ibadan",
    "Wig Revamping Ibadan",
    "Beauty Branch",
    "Hair stylist University of Ibadan",
    "Home service hair stylist Ibadan",
    "Mobile hair salon Nigeria",
    "Janet hairstylist",
  ],
  creator: "Beauty Branch",
  publisher: "Beauty Branch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BRAND_CONFIG.name} — Where Beauty Meets Excellence`,
    description:
      "Book luxury knotless braids, flawless lace installs, and natural hair styling in Ibadan. Doorstep mobile salon by Janneatte with 10+ years mastery. ₦5,000 flat deposit.",
    url: "https://beautybranch.netlify.app",
    siteName: BRAND_CONFIG.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beauty Branch — Where Beauty Meets Excellence in Ibadan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_CONFIG.name} | Where Beauty Meets Excellence`,
    description:
      "Luxury hair styling and doorstep home service in Ibadan. Knotless Braids, Boho Curls, Wig Melts & Revamping. Book online now with a flat ₦5k deposit.",
    images: ["/images/og-image.jpg"],
    creator: "@janneatte_beauty_branch",
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
  icons: {
    icon: "/images/flyer_raw.jpg",
    apple: "/images/flyer_raw.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <head>
        {/* Structured LocalBusiness JSON-LD schema for Google Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: BRAND_CONFIG.name,
              image: "https://beautybranch.netlify.app/images/og-image.jpg",
              description:
                "Premium hairstyling and mobile home salon in Ibadan specializing in Knotless Braids, Boho Braids, Wig Installations, and Natural Hair Care.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "University of Ibadan / Bodija",
                addressLocality: "Ibadan",
                addressRegion: "Oyo State",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.4433",
                longitude: "3.9003",
              },
              url: "https://beautybranch.netlify.app",
              telephone: BRAND_CONFIG.phone,
              priceRange: "₦3,000 - ₦25,000",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "15:00",
                  closes: "19:00",
                },
              ],
            }),
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
