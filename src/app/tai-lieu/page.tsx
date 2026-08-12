"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import ArchitectHub from "@/components/ArchitectHub";

export default function TaiLieuPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest">
              ARCHITECT & TECHNICAL RESOURCES
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight">
              Thư Viện Kỹ Thuật & File CAD / BIM Revit
            </h1>
            <p className="text-[16px] text-gray-300 font-sans leading-relaxed">
              Tải xuống toàn bộ Catalog sản phẩm 2026, bản vẽ chi tiết mặt cắt profile CAD (.DWG), file dựng hình 3D Revit (.RFA) và chứng nhận kiểm định chất lượng ISO/EN.
            </p>
          </div>
        </div>
      </section>

      {/* Architect Hub Component */}
      <ArchitectHub />

      <Footer />
      <FloatingControls />
    </div>
  );
}
