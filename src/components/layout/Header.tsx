"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sparkles, Phone, Calendar } from "lucide-react";
import { BRAND_CONFIG } from "@/data/siteData";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Services & Prices", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "About Janet", href: "/#about" },
    { name: "Academy & Shop (2027)", href: "/#academy" },
    { name: "Guidelines", href: "/#guidelines" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FCF9F5]/90 backdrop-blur-md border-b border-[#E8DED3]/80 transition-all">
      {/* Top micro bar for phone & location */}
      <div className="bg-[#221815] text-[#F4EBD9] text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C59B51] animate-pulse"></span>
              {BRAND_CONFIG.serviceMode} (Hub: {BRAND_CONFIG.location.split(",")[1]?.trim() || "Bodija"})
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${BRAND_CONFIG.phone}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C59B51]" />
              {BRAND_CONFIG.phone}
            </a>
            <span className="text-[#C59B51]">•</span>
            <span>Mon–Sat 10am–7pm | Sun 3pm–7pm</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C59B51] shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.jpg"
              alt="Beauty Branch Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#221815] group-hover:text-[#9C5861] transition-colors">
              Beauty Branch
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase font-medium text-[#C59B51] -mt-0.5">
              Where Beauty Meets Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#221815]/85 hover:text-[#9C5861] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9C5861] hover:bg-[#86464F] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-[#221815] hover:bg-[#E8DED3]/50 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FCF9F5] border-b border-[#E8DED3] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#221815] py-2 border-b border-[#E8DED3]/50"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#9C5861] text-white font-semibold text-sm shadow"
            >
              Book Appointment (₦5,000 Deposit)
            </Link>
            <div className="text-center text-xs text-[#6E5F5A] pt-2">
              Questions? Call or WhatsApp:{" "}
              <a href={`tel:${BRAND_CONFIG.phone}`} className="font-semibold text-[#221815]">
                {BRAND_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
