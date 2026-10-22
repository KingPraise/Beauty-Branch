"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICE_CATEGORIES, SERVICES_DATA } from "@/data/siteData";
import { formatPrice, formatDuration } from "@/lib/utils";
import { Clock, Sparkles, ArrowRight, Check, ArrowUpRight } from "lucide-react";

export function ServicesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("braids");

  const currentCategory = SERVICE_CATEGORIES.find((c) => c.id === selectedCategory) || SERVICE_CATEGORIES[0];
  const filteredServices = SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-[#FCF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EBD9] text-[#7A4B52] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B51]" />
            <span>Complete Hairstyle Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#221815]">
            Artisan Services &amp; Transparent Rates
          </h2>
          <p className="text-sm sm:text-base text-[#6E5F5A] font-light leading-relaxed">
            Every session is treated with individualized scalp care, gentle hand tension, and a clean finish. Choose your desired style below.
          </p>
        </motion.div>

        {/* Category Tabs with Animated Pill */}
        <div className="mt-12 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-[#FAF5EE]"
                    : "bg-white text-[#6E5F5A] border border-[#E8DED3] hover:border-[#9C5861] hover:text-[#221815]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#221815] rounded-full shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat.title}
                  {cat.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-[#C59B51] text-[#221815] font-bold" : "bg-[#F4EBD9] text-[#7A4B52]"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Details Banner */}
        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 bg-gradient-to-r from-[#F4EBD9]/90 via-[#FAF5EE] to-[#F4EBD9]/90 border border-[#E8DED3] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs"
        >
          <div className="space-y-1 max-w-2xl">
            <h3 className="font-serif text-2xl font-semibold text-[#221815]">{currentCategory.title}</h3>
            <p className="text-xs sm:text-sm text-[#7A4B52] font-medium">{currentCategory.subtitle}</p>
            <p className="text-xs sm:text-sm text-[#6E5F5A] pt-1">{currentCategory.description}</p>
          </div>
          <Link
            href={`/book?category=${selectedCategory}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9C5861] hover:bg-[#86464F] text-white text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            <span>Book from this Category</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Animated Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 border border-[#E8DED3] hover:border-[#9C5861] shadow-xs hover:shadow-xl hover:shadow-[#9C5861]/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-lg font-bold text-[#221815] group-hover:text-[#9C5861] transition-colors">
                      {service.name}
                    </h4>
                    {service.popular && (
                      <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#9C5861]/10 text-[#9C5861]">
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
                    <div className="text-[10px] uppercase tracking-wider text-[#8A7973] font-medium">Starting from</div>
                    <div className="text-xl font-bold font-serif text-[#221815]">
                      {formatPrice(service.startingPrice)}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-[#6E5F5A]">
                      <Clock className="w-3.5 h-3.5 text-[#C59B51]" />
                      {formatDuration(service.durationMins)}
                    </span>
                    <Link
                      href={`/book?service=${service.id}`}
                      className="w-8 h-8 rounded-full bg-[#FAF5EE] text-[#9C5861] group-hover:bg-[#9C5861] group-hover:text-white flex items-center justify-center transition-all duration-300"
                      aria-label={`Book ${service.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-xs text-[#6E5F5A] max-w-xl mx-auto bg-white/80 border border-[#E8DED3] p-4 rounded-2xl shadow-xs"
        >
          <strong className="text-[#221815]">Transparency Promise:</strong> Starting rates based on shoulder/mid-back lengths. Final pricing tailored to custom lengths or special hair accessories. The ₦5,000 deposit locks your date &amp; time and is fully credited toward your balance on appointment day.
        </motion.div>
      </div>
    </section>
  );
}
