"use client";

import { useState, useTransition, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  SERVICES_DATA,
  SERVICE_CATEGORIES,
  BRAND_CONFIG,
  ServiceItem,
} from "@/data/siteData";
import { formatPrice, formatDuration } from "@/lib/utils";
import {
  Calendar,
  Clock,
  MapPin,
  Upload,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  User,
  Phone,
  Mail,
} from "lucide-react";

function BookingWizardContent() {
  const searchParams = useSearchParams();
  const preselectedServiceId = searchParams.get("service");
  const preselectedCategory = searchParams.get("category");

  // Step 1: Service Selection
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(() => {
    if (preselectedServiceId) {
      return SERVICES_DATA.find((s) => s.id === preselectedServiceId) || null;
    }
    return null;
  });

  const [activeTab, setActiveTab] = useState<string>(
    preselectedCategory || (selectedService ? selectedService.category : "braids")
  );

  // Step 2: Date & Time
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Step 3: Client Details & Home Service Address
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [inspoNotes, setInspoNotes] = useState("");
  const [inspoImageName, setInspoImageName] = useState("");

  // Step 4: UI state
  const [step, setStep] = useState<number>(selectedService ? 2 : 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Available Time Slots based on Day (10am–7pm Mon-Sat; 3pm–7pm Sun)
  const isSunday = selectedDate ? new Date(selectedDate).getDay() === 0 : false;
  const timeSlots = isSunday
    ? ["03:00 PM", "04:30 PM", "05:30 PM"]
    : ["10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

  // Min Date: Tomorrow (24h minimum notice)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split("T")[0];

  // Max Date: 60 days ahead
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const handleServiceSelect = (service: ServiceItem) => {
    setSelectedService(service);
    setStep(2);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime || !clientName || !clientPhone || !address) {
      alert("Please fill in all required fields including your address for home service.");
      return;
    }

    setIsSubmitting(true);

    // Simulate Paystack Test Mode / Webhook flow with unique Reference
    setTimeout(() => {
      const generatedRef = "BB-" + Math.random().toString(36).substring(2, 9).toUpperCase();
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 1200);
  };

  if (bookingConfirmed && selectedService) {
    const waBookingMsg = `Hello Janet! I just confirmed my booking for ${selectedService.name} on ${selectedDate} at ${selectedTime}.\n\nReference: ${bookingRef}\nName: ${clientName}\nAddress: ${address} (${landmark})\nDeposit: ₦5,000 paid.`;
    const cleanPhone = "234" + BRAND_CONFIG.phone.slice(1);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waBookingMsg)}`;

    return (
      <div className="py-20 px-4 max-w-2xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#8B6528] font-bold">
            Appointment Reserved
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#221815]">
            You&apos;re Booked with Beauty Branch!
          </h1>
          <p className="text-sm text-[#6E5F5A]">
            Booking Ref: <strong className="text-[#221815] font-mono">{bookingRef}</strong>
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DED3] text-left space-y-4 shadow-sm text-sm">
          <div className="flex justify-between pb-3 border-b border-[#E8DED3]">
            <span className="text-[#6E5F5A]">Hairstyle:</span>
            <strong className="text-[#221815]">{selectedService.name}</strong>
          </div>
          <div className="flex justify-between pb-3 border-b border-[#E8DED3]">
            <span className="text-[#6E5F5A]">Date &amp; Time:</span>
            <strong className="text-[#221815]">{selectedDate} at {selectedTime}</strong>
          </div>
          <div className="flex justify-between pb-3 border-b border-[#E8DED3]">
            <span className="text-[#6E5F5A]">Service Location:</span>
            <strong className="text-[#221815] text-right max-w-xs">{address} ({landmark})</strong>
          </div>
          <div className="flex justify-between pb-3 border-b border-[#E8DED3]">
            <span className="text-[#6E5F5A]">Deposit Paid:</span>
            <strong className="text-green-600 font-bold">₦5,000 (Paystack Confirmed)</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6E5F5A]">Balance on Service Day:</span>
            <span className="text-[#221815] font-medium">
              From {formatPrice(Math.max(0, selectedService.startingPrice - 5000))} (+ transit if applicable)
            </span>
          </div>
        </div>

        <div className="bg-[#FAF5EE] p-4 rounded-xl border border-[#E8DED3] text-xs text-[#6E5F5A] text-left space-y-1">
          <p className="font-bold text-[#221815]">What happens next?</p>
          <p>1. A confirmation email has been dispatched to <strong>{clientEmail || "your email"}</strong>.</p>
          <p>2. Janet will contact you via WhatsApp / call at <strong>{clientPhone}</strong> to confirm exact travel details and inspiration photo prep.</p>
          <p>3. Rescheduling is available with 24 hours notice.</p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow hover:bg-[#20bd5a] transition-all"
          >
            <span>Message Janet on WhatsApp</span>
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-[#DBC8B5] text-[#221815] text-sm font-semibold hover:bg-[#FAF5EE] transition-all"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Step Indicator */}
      <div className="mb-10 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EBD9] text-[#8B6528] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Online Salon Booking</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#221815]">
          Book Your Appointment
        </h1>
        <p className="text-xs sm:text-sm text-[#6E5F5A]">
          Home service across Ibadan • Flat ₦5,000 deposit to secure your slot
        </p>

        {/* Stepper bubbles */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 1 ? "text-[#9C5861]" : "text-[#6E5F5A]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? "bg-[#9C5861] text-white" : "bg-[#E8DED3]"}`}>
              1
            </span>
            <span>Style</span>
          </div>
          <span className="w-8 h-px bg-[#E8DED3]" />
          <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 2 ? "text-[#9C5861]" : "text-[#6E5F5A]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? "bg-[#9C5861] text-white" : "bg-[#E8DED3]"}`}>
              2
            </span>
            <span>Date &amp; Time</span>
          </div>
          <span className="w-8 h-px bg-[#E8DED3]" />
          <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 3 ? "text-[#9C5861]" : "text-[#6E5F5A]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? "bg-[#9C5861] text-white" : "bg-[#E8DED3]"}`}>
              3
            </span>
            <span>Address &amp; Pay</span>
          </div>
        </div>
      </div>

      {/* STEP 1: SELECT SERVICE */}
      {step === 1 && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-[#221815] text-[#F4EBD9]"
                    : "bg-white text-[#6E5F5A] border border-[#E8DED3]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES_DATA.filter((s) => s.category === activeTab).map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className={`luxury-card p-5 rounded-2xl cursor-pointer border transition-all flex flex-col justify-between ${
                  selectedService?.id === service.id ? "border-[#9C5861] ring-2 ring-[#9C5861]/20 bg-[#FAF5EE]" : "border-[#E8DED3]"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#221815]">{service.name}</h3>
                    {service.popular && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#9C5861]/10 text-[#9C5861] font-bold uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6E5F5A] line-clamp-2">{service.description}</p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#E8DED3] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#8B6528] font-semibold">Starting</span>
                    <div className="font-serif font-bold text-base text-[#221815]">
                      {formatPrice(service.startingPrice)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#6E5F5A]">
                    <Clock className="w-3.5 h-3.5 text-[#C59B51]" />
                    <span>{formatDuration(service.durationMins)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: SELECT DATE & TIME */}
      {step === 2 && selectedService && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DED3] shadow-sm space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8DED3]">
            <div>
              <span className="text-xs uppercase text-[#8B6528] font-semibold">Selected Hairstyle</span>
              <h2 className="font-serif text-2xl font-bold text-[#221815]">{selectedService.name}</h2>
              <div className="text-xs text-[#6E5F5A] flex items-center gap-3 pt-1">
                <span>From {formatPrice(selectedService.startingPrice)}</span>
                <span>•</span>
                <span>Est. {formatDuration(selectedService.durationMins)}</span>
              </div>
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-[#9C5861] font-semibold hover:underline"
            >
              Change Style
            </button>
          </div>

          {/* Date Picker */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#221815]">
              1. Choose Preferred Date (Min. 24h notice)
            </label>
            <input
              type="date"
              min={minDateStr}
              max={maxDateStr}
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedTime("");
              }}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-[#DBC8B5] bg-[#FAF5EE] text-[#221815] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#9C5861]"
            />
            <p className="text-xs text-[#6E5F5A]">
              Operating Hours: Mon–Sat 10:00 AM – 7:00 PM | Sun 3:00 PM – 7:00 PM
            </p>
          </div>

          {/* Time Picker */}
          {selectedDate && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-[#221815]">
                2. Choose Available Time Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-center ${
                        isSelected
                          ? "bg-[#9C5861] text-white border-[#9C5861] shadow-md"
                          : "bg-[#FAF5EE] text-[#221815] border-[#E8DED3] hover:border-[#9C5861]"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-[#E8DED3]">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#6E5F5A] hover:text-[#221815]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Styles</span>
            </button>
            <button
              type="button"
              disabled={!selectedDate || !selectedTime}
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#9C5861] hover:bg-[#86464F] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <span>Continue to Address &amp; Pay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CLIENT DETAILS, ADDRESS & DEPOSIT */}
      {step === 3 && selectedService && (
        <form onSubmit={handlePayment} className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DED3] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8DED3]">
            <div>
              <span className="text-xs uppercase text-[#8B6528] font-semibold">Your Appointment Summary</span>
              <h2 className="font-serif text-xl font-bold text-[#221815]">
                {selectedService.name} • {selectedDate} at {selectedTime}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs text-[#9C5861] font-semibold hover:underline"
            >
              Edit Time
            </button>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#221815] flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#C59B51]" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Bukola Adeyemi"
                className="w-full px-4 py-3 rounded-xl border border-[#DBC8B5] text-sm text-[#221815] focus:outline-none focus:ring-2 focus:ring-[#9C5861]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#221815] flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#C59B51]" />
                <span>Phone Number (WhatsApp) *</span>
              </label>
              <input
                type="tel"
                required
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="e.g. 08012345678"
                className="w-full px-4 py-3 rounded-xl border border-[#DBC8B5] text-sm text-[#221815] focus:outline-none focus:ring-2 focus:ring-[#9C5861]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#221815] flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#C59B51]" />
              <span>Email Address (for instant receipt)</span>
            </label>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="e.g. name@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-[#DBC8B5] text-sm text-[#221815] focus:outline-none focus:ring-2 focus:ring-[#9C5861]"
            />
          </div>

          {/* Home Service Address in Ibadan */}
          <div className="pt-2 space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C59B51]" />
              <h3 className="text-sm font-bold text-[#221815]">
                Home Service Address in Ibadan *
              </h3>
            </div>

            <div className="space-y-1.5">
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street address, Estate or Compound name (e.g. 14 Awolowo Way, Bodija)"
                className="w-full px-4 py-3 rounded-xl border border-[#DBC8B5] text-sm text-[#221815] focus:outline-none focus:ring-2 focus:ring-[#9C5861]"
              />
            </div>

            <div className="space-y-1.5">
              <input
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="Closest Landmark / Area (e.g. Close to UI Second Gate / FoodCo Bodija)"
                className="w-full px-4 py-3 rounded-xl border border-[#DBC8B5] text-sm text-[#221815] focus:outline-none focus:ring-2 focus:ring-[#9C5861]"
              />
            </div>
          </div>

          {/* Inspiration Photo Upload */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-[#221815] flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5 text-[#C59B51]" />
              <span>Upload Hairstyle Inspiration Photo (Recommended)</span>
            </label>
            <div className="border-2 border-dashed border-[#DBC8B5] rounded-xl p-4 text-center bg-[#FAF5EE]/50 hover:bg-[#FAF5EE] transition-colors cursor-pointer relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setInspoImageName(file.name);
                }}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="text-xs text-[#6E5F5A] space-y-1">
                <p className="font-semibold text-[#221815]">
                  {inspoImageName ? `Selected: ${inspoImageName}` : "Click or tap to upload photo from your phone"}
                </p>
                <p className="text-[11px] text-[#8B6528]">
                  JPG, PNG up to 10MB • Helps Janet prepare the exact hair length &amp; texture
                </p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#221815]">
              Special Requests or Hair Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={inspoNotes}
              onChange={(e) => setInspoNotes(e.target.value)}
              placeholder="e.g. Sensitive scalp, bringing my own extensions, or extra length request..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#DBC8B5] text-sm text-[#221815] focus:outline-none focus:ring-2 focus:ring-[#9C5861]"
            />
          </div>

          {/* Deposit Breakdown */}
          <div className="bg-[#FAF5EE] p-5 rounded-2xl border border-[#E8DED3] space-y-2 text-xs">
            <div className="flex justify-between items-center text-sm font-bold text-[#221815]">
              <span>Deposit Due Now (Paystack NGN):</span>
              <span className="font-serif text-lg text-[#9C5861]">₦5,000</span>
            </div>
            <p className="text-[#6E5F5A] leading-relaxed">
              • Secures your time slot and protects against double-booking.
              <br />
              • Fully credited toward your balance on appointment day.
              <br />
              • Rescheduling is 100% free with at least 24 hours notice.
            </p>
          </div>

          {/* Submit Action */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E8DED3]">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs sm:text-sm font-medium text-[#6E5F5A] hover:text-[#221815]"
            >
              &larr; Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#9C5861] hover:bg-[#86464F] disabled:opacity-50 text-white text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <CreditCard className="w-4 h-4" />
              <span>{isSubmitting ? "Processing Payment..." : "Pay ₦5,000 Deposit with Paystack"}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-[#6E5F5A]">Loading booking system...</div>}>
      <BookingWizardContent />
    </Suspense>
  );
}
