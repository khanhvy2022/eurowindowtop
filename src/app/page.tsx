import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HeroVideo from "@/components/HeroVideo";
import ProductSection from "@/components/ProductSection";
import BusinessSolution from "@/components/BusinessSolution";
import ProjectsSection from "@/components/ProjectsSection";
import Achievements from "@/components/Achievements";
import ContactSection from "@/components/ContactSection";
import ArchitectHub from "@/components/ArchitectHub";
import NewsSection from "@/components/NewsSection";
import ShowroomEcho from "@/components/ShowroomEcho";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingControls />
      <Header />
      <HeroSection />
      <StatsSection />
      <HeroVideo />
      <ProductSection />
      <BusinessSolution />
      <ProjectsSection />
      <Achievements />
      <ContactSection />
      <ArchitectHub />
      <NewsSection />
      <ShowroomEcho />
      <FinalCta />
      <Footer />
    </main>
  );
}
