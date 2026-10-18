import Link from "next/link";
import { ExternalLink, Sparkles, Heart } from "lucide-react";
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
}

const FEATURED_WORKS: GalleryItem[] = [
  { id: "1", title: "Clean Medium Knotless Braids", category: "Braids", tag: "Signature", accent: "from-[#9C5861] to-[#733F46]" },
  { id: "2", title: "Flawless Frontal Lace Melt & Wand Curls", category: "Wigs", tag: "HD Lace", accent: "from-[#C59B51] to-[#916E2E]" },
  { id: "3", title: "Boho Goddess Braids with Human Hair Curls", category: "Braids", tag: "Trending", accent: "from-[#4D3F3A] to-[#2B1E1A]" },
  { id: "4", title: "All-Back Precision Ghana Weaving", category: "Braids", tag: "Neat Parts", accent: "from-[#8B6528] to-[#5E4215]" },
  { id: "5", title: "Gentle Beaded Protective Style (Kids 8+)", category: "Kids", tag: "Tension-Free", accent: "from-[#B76E79] to-[#86464F]" },
  { id: "6", title: "Deep Revamp & Silk Press on 30\" Bone Straight Unit", category: "Wigs", tag: "Restoration", accent: "from-[#2A1E1A] to-[#120B09]" },
];

export function PortfolioGallery() {
  return (
    <section id="portfolio" className="py-20 bg-[#FAF5EE] border-t border-[#E8DED3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EBD9] text-[#8B6528] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Artistry Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#221815]">
              Showcasing Our Work
            </h2>
            <p className="text-sm sm:text-base text-[#6E5F5A]">
              Explore hairstyles crafted for our clients across Ibadan. Follow our official Instagram for daily reels, client reactions, and behind-the-scenes transformations.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F4EBD9] text-[#221815] border border-[#DBC8B5] text-xs sm:text-sm font-semibold transition-all shadow-xs"
          >
            <InstagramIcon className="w-4 h-4 text-[#9C5861]" />
            <span>Visit @janneatte_beauty_branch</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#6E5F5A]" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_WORKS.map((work) => (
            <div
              key={work.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br shadow-md hover:shadow-xl transition-all duration-300 border border-[#E8DED3]"
            >
              {/* Background aesthetic gradient block */}
              <div className={`absolute inset-0 bg-gradient-to-br ${work.accent} opacity-85 transition-transform duration-500 group-hover:scale-105`} />
              
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
                  {work.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#C59B51] text-[#221815] text-[10px] font-bold uppercase tracking-wider">
                  {work.tag}
                </span>
              </div>

              {/* Heart like visual */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-red-400 transition-colors">
                <Heart className="w-4 h-4 fill-current opacity-70 group-hover:opacity-100" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 space-y-2">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F4EBD9] transition-colors leading-snug">
                  {work.title}
                </h3>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-[#EFE6DC]/90 font-light">
                    Home Service in Ibadan
                  </span>
                  <Link
                    href="/book"
                    className="text-xs text-[#C59B51] font-semibold flex items-center gap-1 group-hover:underline"
                  >
                    Book This Style &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Callout */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-[#E8DED3] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shrink-0 shadow-md">
              <InstagramIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#221815]">
                See Hundreds of Transformations on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5F5A]">
                Follow <strong className="text-[#221815]">@janneatte_beauty_branch</strong> and TikTok <strong className="text-[#221815]">@.janneatte</strong> for client before-and-afters, haircare reels, and weekly updates.
              </p>
            </div>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-[#9C5861] hover:bg-[#86464F] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
