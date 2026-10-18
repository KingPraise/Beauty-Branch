"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICE_CATEGORIES, SERVICES_DATA } from "@/data/siteData";
import { formatPrice, formatDuration } from "@/lib/utils";
import { Clock, Sparkles, ArrowRight, Check } from "lucide-react";

export function ServicesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("braids");

  const currentCategory = SERVICE_CATEGORIES.find((c) => c.id === selectedCategory) || SERVICE_CATEGORIES[0];
  const filteredServices = SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-[#FCF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EBD9] text-[#8B6528] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Service Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#221815]">
            Artisan Hairstyling &amp; Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base text-[#6E5F5A] font-light leading-relaxed">
            Every appointment includes attentive styling, scalp comfort, and premium finish. Prices shown are starting rates based on standard length and density.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#221815] text-[#F4EBD9] shadow-md scale-105"
                    : "bg-white text-[#6E5F5A] border border-[#E8DED3] hover:border-[#9C5861] hover:text-[#221815]"
                }`}
              >
                {cat.title}
                {cat.badge && (
                  <span
                    className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-[#C59B51] text-[#221815] font-bold" : "bg-[#F4EBD9] text-[#8B6528]"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#F4EBD9]/80 via-[#FAF5EE] to-[#F4EBD9]/80 border border-[#E8DED3] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h3 className="font-serif text-2xl font-bold text-[#221815]">{currentCategory.title}</h3>
            <p className="text-sm text-[#8B6528] font-medium">{currentCategory.subtitle}</p>
            <p className="text-xs sm:text-sm text-[#6E5F5A] pt-1">{currentCategory.description}</p>
          </div>
          <Link
            href={`/book?category=${selectedCategory}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9C5861] hover:bg-[#86464F] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <span>Book This Category</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-serif text-lg font-bold text-[#221815] group-hover:text-[#9C5861] transition-colors">
                    {service.name}
                  </h4>
                  {service.popular && (
                    <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#9C5861]/10 text-[#9C5861]">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#6E5F5A] leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E8DED3]/70 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#8B6528] font-medium">Starting from</div>
                  <div className="text-xl font-bold font-serif text-[#221815]">
                    {formatPrice(service.startingPrice)}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-[#6E5F5A]" title="Estimated styling duration">
                    <Clock className="w-3.5 h-3.5 text-[#C59B51]" />
                    {formatDuration(service.durationMins)}
                  </span>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="p-2 rounded-full bg-[#FAF5EE] text-[#9C5861] hover:bg-[#9C5861] hover:text-white transition-colors"
                    aria-label={`Book ${service.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price Variation Note */}
        <div className="mt-12 text-center text-xs text-[#6E5F5A] max-w-xl mx-auto bg-white/70 border border-[#E8DED3] p-4 rounded-xl">
          <strong className="text-[#221815]">Transparency Promise:</strong> Stated prices are base starting rates. Final investment varies based on custom length, small braid density, or special accessories. The flat ₦5,000 deposit confirms your reservation and is credited toward your balance on service day.
        </div>
      </div>
    </section>
  );
}
