"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Sparkles, Heart, ArrowUpRight } from "lucide-react";
import { BRAND_CONFIG } from "@/data/siteData";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  accent: string;
  price: string;
}

const FEATURED_WORKS: GalleryItem[] = [
  { id: "1", title: "Clean Medium Knotless Braids", category: "Braids", tag: "Signature", accent: "from-[#9C5861] to-[#60333A]", price: "From ₦18,000" },
  { id: "2", title: "Flawless Frontal Lace Melt & Styling", category: "Wigs", tag: "HD Lace", accent: "from-[#B8863A] to-[#6B4B18]", price: "From ₦15,000" },
  { id: "3", title: "Boho Goddess Braids with Human Curls", category: "Braids", tag: "Trending", accent: "from-[#3D2F2B] to-[#1F1715]", price: "From ₦20,000" },
  { id: "4", title: "All-Back Precision Ghana Weaving", category: "Braids", tag: "Neat Parts", accent: "from-[#7A4B52] to-[#45272B]", price: "From ₦8,000" },
  { id: "5", title: "Gentle Beaded Protective Style (Kids 8+)", category: "Kids", tag: "Tension-Free", accent: "from-[#A86F77] to-[#6B3F46]", price: "From ₦5,000" },
  { id: "6", title: "Deep Wig Revamp & Silky Press", category: "Wigs", tag: "Revival", accent: "from-[#2A1E1A] to-[#120B09]", price: "From ₦15,000" },
];

export function PortfolioGallery() {
  return (
    <section id="portfolio" className="py-24 bg-[#FAF5EE] border-t border-[#E8DED3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EBD9] text-[#7A4B52] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B51]" />
              <span>Real Artistry Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#221815]">
              Curated Salon Creations
            </h2>
            <p className="text-sm sm:text-base text-[#6E5F5A] font-light">
              A curated look into our favorite protective styling and luxury lace installations crafted across Ibadan.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F4EBD9] text-[#221815] border border-[#DBC8B5] text-xs sm:text-sm font-medium transition-all shadow-xs group"
          >
            <InstagramIcon className="w-4 h-4 text-[#9C5861] group-hover:scale-110 transition-transform" />
            <span>@janneatte_beauty_branch</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#6E5F5A]" />
          </a>
        </motion.div>

        {/* Gallery Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_WORKS.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#E8DED3]"
            >
              {/* Rich Editorial Color Wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${work.accent} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
              
              {/* Subtle Texture Grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF5EE_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Badges */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
                  {work.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#C59B51] text-[#221815] text-[10px] font-bold uppercase tracking-wider">
                  {work.tag}
                </span>
              </div>

              {/* Floating Heart Icon */}
              <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-rose-300 transition-colors">
                <Heart className="w-4 h-4 fill-current opacity-70 group-hover:opacity-100" />
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 space-y-2 text-white">
                <div className="text-xs text-[#E8C4C0] font-medium">{work.price}</div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium group-hover:text-[#F4EBD9] transition-colors leading-snug">
                  {work.title}
                </h3>
                
                <div className="pt-2 flex items-center justify-between border-t border-white/20 text-xs text-[#EFE6DC]/90 font-light">
                  <span>Home Service Ibadan</span>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-1 text-[#C59B51] font-medium group-hover:underline"
                  >
                    <span>Book Style</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Converting Social Feed Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DED3] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shrink-0 shadow-md">
              <InstagramIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#221815]">
                Real Transformations on Instagram &amp; TikTok
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5F5A] mt-1">
                Catch client unboxings, fresh partings, and tutorial reels on <strong className="text-[#221815]">@janneatte_beauty_branch</strong> and TikTok <strong className="text-[#221815]">@.janneatte</strong>.
              </p>
            </div>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#221815] hover:bg-[#9C5861] text-[#FAF5EE] text-xs sm:text-sm font-medium transition-all duration-300 shadow-md active:scale-95"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
