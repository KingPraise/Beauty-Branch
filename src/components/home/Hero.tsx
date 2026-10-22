"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, MessageCircle, Star, ArrowUpRight, CheckCircle2, Shield, Heart } from "lucide-react";
import { BRAND_CONFIG } from "@/data/siteData";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAF6F0] pt-6 pb-20 lg:py-24">
      {/* Editorial Luxury Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#E8C4C0]/35 blur-[120px]" />
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full bg-[#EBD8B8]/40 blur-[130px]" />
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] rounded-full bg-[#F4EBD9]/60 blur-[100px]" />
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#221815_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Haute Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Elegant pill tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DED3] shadow-xs text-xs tracking-wider uppercase font-medium text-[#7A4B52]"
            >
              <span className="w-2 h-2 rounded-full bg-[#9C5861] animate-ping" />
              <span className="font-semibold">Ibadan • University of Ibadan / Bodija</span>
              <span className="text-[#C59B51]">✦</span>
              <span className="text-[#6E5F5A] lowercase">home service</span>
            </motion.div>

            {/* Haute Couture Headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-serif text-4xl sm:text-6xl lg:text-[4.2rem] font-medium tracking-tight text-[#221815] leading-[1.08]"
              >
                Where Braiding <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#9C5861] font-serif">Becomes Pure Art.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-base sm:text-lg text-[#635550] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
              >
                Experience tension-free Knotless braids, immaculate Boho curls, and flawless lace customization crafted by master stylist{" "}
                <strong className="font-medium text-[#221815]">Janneatte</strong> with 10+ years of elevated hair craftsmanship.
              </motion.p>
            </div>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="/book"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#221815] hover:bg-[#9C5861] text-[#FAF5EE] font-medium text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#9C5861]/20 active:scale-[0.98]"
              >
                <span>Book Appointment (₦5k Deposit)</span>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C59B51]" />
                </span>
              </Link>

              <a
                href={`https://wa.me/2348072223017?text=${encodeURIComponent(
                  "Hello Janet! I would like to consult with you about styling my hair with Beauty Branch."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-[#FAF6F0] text-[#221815] font-medium text-sm border border-[#E0D5C7] shadow-xs hover:border-[#9C5861] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Editorial Badges & Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-6 border-t border-[#E8DED3]/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#221815]">10+</div>
                <div className="text-[11px] uppercase tracking-wider text-[#8A7973] font-medium mt-0.5">Years Styling</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#9C5861]">Zero</div>
                <div className="text-[11px] uppercase tracking-wider text-[#8A7973] font-medium mt-0.5">Scalp Tension</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#C59B51]">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-[#8A7973] font-medium mt-0.5">Ibadan Mobile</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Fashion Collage Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Luxury Frame */}
              <div className="relative rounded-[32px] p-2 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#EFE7DC] border border-[#E8DED3] shadow-[0_25px_60px_-15px_rgba(34,24,21,0.12)] overflow-hidden">
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#241A17]">
                  
                  {/* Actual Real Brand Creative Asset */}
                  <Image
                    src="/images/flyer_raw.jpg"
                    alt="Beauty Branch Hair Artistry by Janneatte"
                    fill
                    className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700 brightness-[0.95] contrast-[1.05]"
                    priority
                  />

                  {/* Elegant Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1210] via-black/20 to-black/10 pointer-events-none" />

                  {/* Haute Overlay Pill */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] tracking-wide font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#E8C4C0]" />
                      <span>Original Brand Work</span>
                    </div>
                  </div>

                  {/* Bottom Vignette Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-20 space-y-1.5 text-white">
                    <div className="flex items-center gap-1 text-[#C59B51]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C59B51]" />
                      ))}
                      <span className="text-xs font-semibold text-white ml-2">Top Salon Experience</span>
                    </div>
                    <div className="font-serif text-2xl font-medium tracking-tight">
                      Beauty Branch
                    </div>
                    <div className="text-xs text-[#EFE6DC]/90 font-light tracking-wide flex items-center justify-between">
                      <span>Where Beauty Meets Excellence</span>
                      <span className="text-[#C59B51] font-medium">Ibadan, Nigeria</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Curated Stylist Pill (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute -top-5 -right-3 sm:-right-6 z-30 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-[#E8DED3] flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-[#9C5861] text-[#FAF5EE] flex items-center justify-center font-serif font-bold text-sm">
                  J
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#221815]">Janneatte</div>
                  <div className="text-[10px] text-[#7A4B52] font-medium">Lead Hair Artisan</div>
                </div>
              </motion.div>

              {/* Floating Guarantee Badge (Bottom-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="absolute -bottom-5 -left-3 sm:-left-6 z-30 bg-[#221815] text-[#FAF5EE] px-4 py-3 rounded-2xl shadow-2xl border border-[#3E2D27] flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#C59B51]/20 text-[#C59B51] flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium text-white">Painless Braiding</div>
                  <div className="text-[10px] text-[#C59B51]">Scalp health prioritized</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
