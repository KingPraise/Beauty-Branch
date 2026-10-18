"use client";

import { MessageCircle } from "lucide-react";
import { BRAND_CONFIG } from "@/data/siteData";

interface WhatsAppButtonProps {
  customMessage?: string;
  variant?: "floating" | "inline";
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  customMessage = "Hello Janet! I would like to inquire about booking a hairstyling appointment with Beauty Branch.",
  variant = "floating",
  className = "",
  label = "Chat with Janet",
}: WhatsAppButtonProps) {
  const cleanPhone = BRAND_CONFIG.phone.startsWith("0")
    ? `234${BRAND_CONFIG.phone.slice(1)}`
    : BRAND_CONFIG.phone.replace("+", "");

  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(customMessage)}`;

  if (variant === "inline") {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg active:scale-95 ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <div className="hidden md:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-lg border border-[#E8DED3] text-xs font-medium text-[#221815] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Book & chat with Janet on WhatsApp
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Beauty Branch on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Contact on WhatsApp</span>
      </a>
    </aside>
  );
}
