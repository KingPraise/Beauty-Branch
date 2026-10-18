import { ShieldCheck, Clock, Calendar, Check, AlertCircle } from "lucide-react";
import { BRAND_CONFIG } from "@/data/siteData";

export function PoliciesGuidelines() {
  return (
    <section id="guidelines" className="py-20 bg-[#FAF5EE] border-t border-[#E8DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EBD9] text-[#8B6528] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Appointment Etiquette</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#221815]">
            Client Preparation &amp; Salon Guidelines
          </h2>
          <p className="text-sm sm:text-base text-[#6E5F5A]">
            Clear, transparent policies to ensure seamless, relaxing, and on-time service for every client.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Preparation */}
          <div className="bg-white rounded-2xl p-7 border border-[#E8DED3] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F4EBD9] text-[#8B6528] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221815]">
                Before Your Appointment
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#6E5F5A]">
                {BRAND_CONFIG.policies.preparation.map((prep, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C59B51] shrink-0 mt-0.5" />
                    <span>{prep}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-[11px] text-[#8B6528] font-medium pt-2 border-t border-[#E8DED3]">
              Need hair washing? Add it to your booking as an Add-on (₦3,000).
            </div>
          </div>

          {/* Card 2: Deposit & Rescheduling */}
          <div className="bg-white rounded-2xl p-7 border border-[#E8DED3] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#9C5861]/15 text-[#9C5861] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221815]">
                ₦5,000 Booking Deposit
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5F5A] leading-relaxed">
                {BRAND_CONFIG.policies.deposit}
              </p>
              <div className="bg-[#FAF5EE] p-3.5 rounded-xl border border-[#E8DED3] space-y-2 text-xs text-[#6E5F5A]">
                <div className="flex items-center gap-1.5 font-semibold text-[#221815]">
                  <Calendar className="w-4 h-4 text-[#9C5861]" />
                  <span>Reschedule Policy</span>
                </div>
                <p>
                  Life happens! Give at least <strong>24 hours notice</strong>, and your ₦5,000 deposit carries forward intact to your next scheduled date.
                </p>
              </div>
            </div>
            <div className="text-[11px] text-[#9C5861] font-medium pt-2 border-t border-[#E8DED3]">
              Deposits are deducted from your final total on service day.
            </div>
          </div>

          {/* Card 3: Punctuality & Mobile Service */}
          <div className="bg-white rounded-2xl p-7 border border-[#E8DED3] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#C59B51]/20 text-[#8B6528] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221815]">
                Punctuality &amp; Lateness
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5F5A] leading-relaxed">
                {BRAND_CONFIG.policies.lateness}
              </p>
              <div className="bg-[#FAF5EE] p-3.5 rounded-xl border border-[#E8DED3] space-y-2 text-xs text-[#6E5F5A]">
                <div className="flex items-center gap-1.5 font-semibold text-[#221815]">
                  <Clock className="w-4 h-4 text-[#C59B51]" />
                  <span>30-Minute Transit Buffer</span>
                </div>
                <p>
                  We schedule 30 minutes between appointments for road transit and thorough station sanitation.
                </p>
              </div>
            </div>
            <div className="text-[11px] text-[#6E5F5A] font-medium pt-2 border-t border-[#E8DED3]">
              Home service transit fee is confirmed prior to appointment based on your location.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
