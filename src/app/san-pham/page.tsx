"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import ProductSection from "@/components/ProductSection";
import BusinessSolution from "@/components/BusinessSolution";
import Link from "next/link";
import { Check, ArrowRight } from "@/components/icons";

export default function SanPhamPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest">
              EUROWINDOW PRODUCTS 2026
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight">
              Hệ Cửa & Vách Kính Tiêu Chuẩn Quốc Tế
            </h1>
            <p className="text-[16px] text-gray-300 font-sans leading-relaxed">
              Giải pháp toàn diện từ Cửa nhôm cao cấp, Cửa nhựa uPVC, Cửa gỗ tự nhiên & công nghiệp, Cửa cuốn, Cửa tự động đến Kính tiết kiệm năng lượng Low-E.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Product Showcase */}
      <ProductSection />

      {/* Technical Solutions */}
      <BusinessSolution />

      <Footer />
      <FloatingControls />
    </div>
  );
}
