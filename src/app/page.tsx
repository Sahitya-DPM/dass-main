import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import InvisalignSection from "@/components/InvisalignSection";
import TopRatedSection from "@/components/TopRatedSection";
import SeeResultsSection from "@/components/SeeResultsSection";
import TourOfficeSection from "@/components/TourOfficeSection";
import GoatAwardSection from "@/components/GoatAwardSection";
import AskExpertSection from "@/components/AskExpertSection";
import CosmeticDentistrySection from "@/components/CosmeticDentistrySection";
import AwardSection from "@/components/AwardSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px] md:pt-[140px] lg:pt-[160px]">
        <ImageSlider />
        <InvisalignSection />
        <TopRatedSection />
        <SeeResultsSection />
        <TourOfficeSection />
        <GoatAwardSection />
        <AskExpertSection />
        <CosmeticDentistrySection />
        <AwardSection />
        <Footer />
      </div>
    </div>
  );
}
