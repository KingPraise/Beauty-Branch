import Link from "next/link";
import { Sparkles, Calendar, BookOpen, ShoppingBag, CheckCircle, ArrowRight } from "lucide-react";

export function AcademyWaitlist() {
  return (
    <section id="academy" className="py-20 bg-[#221815] text-[#FAF5EE] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B51]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9C5861]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C59B51]/20 border border-[#C59B51]/40 text-[#F4EBD9] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B51]" />
            <span>Coming January 2027 • Exclusive Expansion</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Beauty Branch Academy &amp; Luxury Hair Extensions
          </h2>

          <p className="text-sm sm:text-base text-[#BFB3A8] font-light leading-relaxed">
            Elevating the craft. Starting January 2027, Janet will open enrollment for accredited masterclasses and launch the official Beauty Branch raw virgin hair collection.
          </p>
        </div>

        {/* Two Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pillar 1: Training Academy */}
          <div className="rounded-3xl bg-[#2A1E1A] border border-[#3E2D27] p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C59B51]/20 text-[#C59B51] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#C59B51] font-semibold">
                  Professional Certifications
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Hairstyling Training Academy
                </h3>
              </div>
              <p className="text-sm text-[#BFB3A8] leading-relaxed">
                Comprehensive practical training for aspiring and intermediate stylists. Master knotless braiding, flawless lace customization, scalp prep, and high-earning salon business skills.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#EFE6DC]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C59B51] shrink-0" />
                  <span>Hands-on In-Person Masterclasses (Ibadan Hub)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C59B51] shrink-0" />
                  <span>Global Online Video Curriculum with Lifetime Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C59B51] shrink-0" />
                  <span>Official Beauty Branch Accredited Certificate of Mastery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C59B51] shrink-0" />
                  <span>1-on-1 Mentorship &amp; Hair Issue Consultation Coaching</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#3E2D27]">
              <div className="text-xs text-[#C59B51] font-medium mb-3">
                First Cohort Starts January 2027 • Limited Seats
              </div>
              <a
                href={`https://wa.me/2348072223017?text=${encodeURIComponent(
                  "Hello Janet! I want to join the VIP Waitlist for the Beauty Branch Hairstyling Training Academy launching January 2027."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C59B51] hover:bg-[#b88b3d] text-[#221815] font-bold text-sm transition-all shadow-md active:scale-95"
              >
                <span>Join Academy Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pillar 2: Hair Extensions Shop */}
          <div className="rounded-3xl bg-[#2A1E1A] border border-[#3E2D27] p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#9C5861]/30 text-[#E8C4C0] flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#E8C4C0] font-semibold">
                  E-Commerce Collection
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Beauty Branch Hair Extensions
                </h3>
              </div>
              <p className="text-sm text-[#BFB3A8] leading-relaxed">
                Direct access to top-grade virgin hair bundles, HD lace frontals, 5x5 closures, and luxury ready-to-wear glueless wigs curated and tested by Janet.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#EFE6DC]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E8C4C0] shrink-0" />
                  <span>100% Unprocessed Raw Human Hair Bundles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E8C4C0] shrink-0" />
                  <span>Ultra-thin Swiss HD Lace Frontals &amp; Closures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E8C4C0] shrink-0" />
                  <span>Pre-Plucked &amp; Bleached Ready-to-Wear Wigs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E8C4C0] shrink-0" />
                  <span>Doorstep Delivery Across Nigeria &amp; International Shipping</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#3E2D27]">
              <div className="text-xs text-[#E8C4C0] font-medium mb-3">
                Early Bird VIP Discount of 15% for Waitlist Members
              </div>
              <a
                href={`https://wa.me/2348072223017?text=${encodeURIComponent(
                  "Hello Janet! I want to join the VIP Waitlist for the Beauty Branch Hair Extensions shop launching January 2027."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#9C5861] hover:bg-[#86464F] text-white font-bold text-sm transition-all shadow-md active:scale-95"
              >
                <span>Join Extensions Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
