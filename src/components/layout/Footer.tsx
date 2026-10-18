import Link from "next/link";
import { Phone, Mail, MapPin, Sparkles, Clock, Heart } from "lucide-react";
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

export function Footer() {
  return (
    <footer className="bg-[#1A1210] text-[#EFE6DC] pt-16 pb-12 border-t border-[#332420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#332420]/80">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
              Beauty Branch
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#C59B51] font-semibold">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="text-sm text-[#BFB3A8] leading-relaxed">
              With over 10 years of hairstyling mastery, we provide premium, gentle, and long-lasting hair artistry tailored to bring out your confidence and natural radiance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A1E1A] hover:bg-[#9C5861] text-[#EFE6DC] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A1E1A] hover:bg-[#9C5861] text-[#EFE6DC] flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C59B51]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#BFB3A8]">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Braiding & Cornrows
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Wig Customization & Installs
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Natural Hair Treatments
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Children&apos;s Hairstyles (8+)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Bridal & Photoshoot Glam
                </Link>
              </li>
              <li>
                <Link href="/#academy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Academy (Jan 2027)</span>
                  <span className="text-[10px] bg-[#C59B51]/20 text-[#C59B51] px-1.5 py-0.5 rounded">Waitlist</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours & Service Area */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C59B51]">
              Working Hours
            </h4>
            <div className="space-y-2.5 text-sm text-[#BFB3A8]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C59B51] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Monday – Saturday</div>
                  <div>{BRAND_CONFIG.hours.monSat}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C59B51] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Sunday</div>
                  <div>{BRAND_CONFIG.hours.sun}</div>
                </div>
              </div>
              <div className="pt-2 text-xs text-[#9C8E84] leading-relaxed border-t border-[#2A1E1A]">
                <strong>Notice:</strong> 24 hours advance booking required. 30-minute buffer allocated between sessions.
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C59B51]">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-[#BFB3A8]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B51] shrink-0 mt-0.5" />
                <span>
                  <strong>Home Services Across Ibadan</strong>
                  <br />
                  Hub: University of Ibadan, Bodija, Oyo State
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59B51] shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B51] shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-white transition-colors break-all">
                  {BRAND_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9C8E84] gap-4">
          <p>© 2026 Beauty Branch. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#9C5861] fill-[#9C5861]" /> for Beauty Branch
          </p>
        </div>
      </div>
    </footer>
  );
}
