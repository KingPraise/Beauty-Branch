import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: `${BRAND_CONFIG.name} | ${BRAND_CONFIG.tagline}`,
  description:
    "Premium hairstyling in Ibadan. Specialized in Knotless Braids, Boho Braids, Ghana Weaving, Wig Installs & Customization, and Natural Hair Care. Home service available across Ibadan.",
  keywords: [
    "Hair stylist Ibadan",
    "Braids Bodija",
    "Knotless Braids Ibadan",
    "Wig Installation Ibadan",
    "Beauty Branch",
    "Hair stylist University of Ibadan",
    "Home service hair stylist Ibadan",
  ],
  openGraph: {
    title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`,
    description: "Book your luxury hair styling session with Janet in Ibadan. Premium braids, wigs, and healthy hair care.",
    url: "https://beautybranch.ng",
    siteName: BRAND_CONFIG.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FCF9F5] text-[#221815] min-h-screen flex flex-col selection:bg-[#F4EBD9] selection:text-[#86464F]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
