import Link from "next/link";
import { Sparkles, Calendar, MessageCircle, ShieldCheck, Clock, Award, Star } from "lucide-react";
import { BRAND_CONFIG } from "@/data/siteData";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 bg-gradient-to-b from-[#FAF5EE] via-[#FCF9F5] to-[#FCF9F5]">
      {/* Decorative background aura */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#F4EBD9]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#E8C4C0]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EBD9] border border-[#E8DED3] text-xs font-semibold tracking-wider uppercase text-[#8B6528]">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B51]" />
              <span>Ibadan&apos;s Premium Hair Salon & Mobile Stylist</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#221815] leading-[1.1]">
              Flawless Braids &amp; Luxury Wigs,{" "}
              <span className="italic font-normal text-[#9C5861]">Delivered to You.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6E5F5A] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to <strong className="font-semibold text-[#221815]">Beauty Branch</strong>, where master artisan{" "}
              <strong>Janneatte</strong> brings 10+ years of hairstyling excellence directly to your doorstep in Ibadan. Pain-free knotless braids, seamless wig melts, and healthy hair styling.
            </p>

            {/* Core Value Props Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-[#4D3F3A]">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E8DED3] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#C59B51]" />
                <span>100% Tension-Free Braiding</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E8DED3] shadow-xs">
                <Clock className="w-4 h-4 text-[#C59B51]" />
                <span>Reliable Home Service</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E8DED3] shadow-xs">
                <Award className="w-4 h-4 text-[#C59B51]" />
                <span>10+ Years Craftsmanship</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#9C5861] hover:bg-[#86464F] text-white font-semibold text-base shadow-lg shadow-[#9C5861]/25 hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Session (₦5k Deposit)</span>
              </Link>
              <a
                href={`https://wa.me/234${BRAND_CONFIG.phone.slice(1)}?text=${encodeURIComponent(
                  "Hello Janet! I would like to consult with you about styling my hair."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-[#FAF5EE] text-[#221815] font-semibold text-base border border-[#DBC8B5] shadow-xs transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-6 border-t border-[#E8DED3]/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#6E5F5A]">
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59B51] text-[#C59B51]" />
                  ))}
                </div>
                <span className="font-semibold text-[#221815] ml-1.5">5.0 Star Praise</span>
              </div>
              <span>•</span>
              <div>Young people, kids (8+) &amp; adults</div>
              <span className="hidden sm:inline">•</span>
              <div className="hidden sm:inline">UI / Bodija &amp; all Ibadan</div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Main Styled Card */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2A1E1A] to-[#1A1210] p-1 border-2 border-[#E8DED3]">
                <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-[#2A1E1A] flex flex-col justify-end p-6 text-white">
                  {/* Atmospheric overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />
                  
                  {/* Visual Hair Artwork Placeholder Pattern with Luxury Tone */}
                  <div className="absolute inset-0 bg-[radial-gradient(#C59B51_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6 space-y-2 opacity-90">
                      <div className="w-20 h-20 mx-auto rounded-full bg-[#C59B51]/20 border border-[#C59B51]/50 flex items-center justify-center text-[#F4EBD9] font-serif text-3xl font-bold">
                        BB
                      </div>
                      <div className="font-serif text-2xl text-white">Beauty Branch</div>
                      <div className="text-xs tracking-widest uppercase text-[#C59B51]">By Janneatte</div>
                    </div>
                  </div>

                  {/* Overlaid Badge */}
                  <div className="relative z-20 space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59B51] text-[#221815] text-[11px] font-bold uppercase tracking-wider">
                      ★ Master Hairstylist
                    </div>
                    <h3 className="font-serif text-2xl font-bold leading-tight">
                      Where Beauty Meets Excellence
                    </h3>
                    <p className="text-xs text-[#EFE6DC]/90 line-clamp-2">
                      Knotless Braids, Boho Styles, Frontal &amp; Closure Installs, Revamping, and Care for Natural Hair.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E8DED3] max-w-xs hidden sm:block animate-in fade-in duration-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#9C5861] text-white flex items-center justify-center font-bold text-xs">
                    J
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#221815]">Janneatte (Lead Stylist)</div>
                    <div className="text-[10px] text-[#8B6528] font-medium">Home Service Across Ibadan</div>
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-[#6E5F5A]">
                  &ldquo;Every hairstyle is crafted with neatness, care, and scalp wellness.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
