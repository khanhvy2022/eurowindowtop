"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import NewsSection from "@/components/NewsSection";

export default function TinTucPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest">
              EUROWINDOW NEWS & EVENTS
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight">
              Tin Tức, Sự Kiện & Tọa Đàm Kiến Trúc Xanh
            </h1>
            <p className="text-[16px] text-gray-300 font-sans leading-relaxed">
              Cập nhật thông cáo báo chí, các giải thưởng cao quý, sự kiện hội thảo chuyên đề và hành trình kiến tạo công trình xanh cùng Eurowindow.
            </p>
          </div>
        </div>
      </section>

      {/* News Showcase Section */}
      <NewsSection />

      <Footer />
      <FloatingControls />
    </div>
  );
}
