"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import ProjectsSection from "@/components/ProjectsSection";

export default function CongTrinhPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest">
              PORTFOLIO PROJECTS
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight">
              Công Trình Tiêu Biểu Dấu Ấn Kiến Trúc
            </h1>
            <p className="text-[16px] text-gray-300 font-sans leading-relaxed">
              Tổng hợp các dự án cấp Quốc gia, Tòa nhà trụ sở bộ ngành, Bệnh viện, Đại đô thị và Khu nghỉ dưỡng cao cấp do Eurowindow cung cấp thi công.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Projects Component */}
      <ProjectsSection />

      <Footer />
      <FloatingControls />
    </div>
  );
}
