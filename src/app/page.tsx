import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành. | Giải Pháp Cửa & Vách Kính",
  description:
    "Nhà cung cấp giải pháp tổng thể về cửa và vách nhôm kính hàng đầu Việt Nam: Cửa nhôm cao cấp, Cửa nhựa uPVC, Cửa gỗ, Cửa cuốn, Cửa thông minh và Kính hộp Low-E.",
  alternates: {
    canonical: "/",
  },
};

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
      <ArchitectHub />
      <NewsSection />
      <FinalCta />
      <ContactSection />
      <Footer />
    </main>
  );
}
