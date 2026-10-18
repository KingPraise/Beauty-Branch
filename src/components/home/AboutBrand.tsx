import { Sparkles, Heart, Shield, Clock, Award } from "lucide-react";
import { BRAND_CONFIG } from "@/data/siteData";

export function AboutBrand() {
  return (
    <section id="about" className="py-20 bg-[#FCF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-[#FAF5EE] to-[#F4EBD9] border border-[#E8DED3] shadow-lg space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#9C5861] text-white flex items-center justify-center font-serif text-3xl font-bold shadow-md">
                  J
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221815]">
                    Janneatte
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#8B6528] font-bold">
                    Founder &amp; Lead Hair Artisan
                  </p>
                </div>
                <p className="text-sm text-[#6E5F5A] leading-relaxed italic">
                  &ldquo;At Beauty Branch, we believe that hairstyling is more than just making hair; it is about beauty, confidence, creativity, and excellence.&rdquo;
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8DED3]">
                  <div>
                    <div className="font-serif text-3xl font-bold text-[#9C5861]">10+</div>
                    <div className="text-xs text-[#6E5F5A]">Years in Hair Artistry</div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl font-bold text-[#C59B51]">100%</div>
                    <div className="text-xs text-[#6E5F5A]">Dedication to Excellence</div>
                  </div>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-[#E8DED3] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF5EE] text-[#C59B51] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#221815]">Ibadan Base</div>
                  <div className="text-[11px] text-[#6E5F5A]">University of Ibadan / Bodija</div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EBD9] text-[#8B6528] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Brand Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#221815] leading-tight">
              Where Beauty Meets Excellence
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6E5F5A] leading-relaxed font-light">
              <p>
                <strong className="text-[#221815] font-semibold">Beauty Branch</strong> was born out of a profound passion for hairstyling and the desire to help people look beautiful and feel confident. With over 10 years of experience in the hairstyling industry, Janneatte has developed an unwavering commitment to creating stunning hairstyles while giving every client a pleasant, peaceful, and professional experience.
              </p>
              <p>
                Whether you need lightweight, tension-free knotless braids that last for months, a seamless HD lace frontal installation, or healthy natural hair maintenance, our mobile salon model ensures you receive five-star salon quality in the comfort and privacy of your own home in Ibadan.
              </p>
              <p>
                From young professionals to university students, stylish children (ages 8+), and busy mothers, Beauty Branch is dedicated to leaving every client feeling their absolute best.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#E8DED3]">
                <Heart className="w-5 h-5 text-[#9C5861] mb-2" />
                <h4 className="font-serif text-base font-bold text-[#221815]">Comfort First</h4>
                <p className="text-xs text-[#6E5F5A] mt-1">Zero headache or scalp trauma. We prioritize your hair health.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8DED3]">
                <Shield className="w-5 h-5 text-[#C59B51] mb-2" />
                <h4 className="font-serif text-base font-bold text-[#221815]">Craftsmanship</h4>
                <p className="text-xs text-[#6E5F5A] mt-1">Clean lines, symmetric parts, and high aesthetic standards.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8DED3]">
                <Clock className="w-5 h-5 text-[#8B6528] mb-2" />
                <h4 className="font-serif text-base font-bold text-[#221815]">Time Punctual</h4>
                <p className="text-xs text-[#6E5F5A] mt-1">Dedicated buffer times ensure your appointment is never rushed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
