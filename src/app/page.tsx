import { Hero } from "@/components/home/Hero";
import { ServicesCatalog } from "@/components/home/ServicesCatalog";
import { PortfolioGallery } from "@/components/home/PortfolioGallery";
import { AboutBrand } from "@/components/home/AboutBrand";
import { AcademyWaitlist } from "@/components/home/AcademyWaitlist";
import { PoliciesGuidelines } from "@/components/home/PoliciesGuidelines";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesCatalog />
      <PortfolioGallery />
      <AboutBrand />
      <AcademyWaitlist />
      <PoliciesGuidelines />
    </div>
  );
}
