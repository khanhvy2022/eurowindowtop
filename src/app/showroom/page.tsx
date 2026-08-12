"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import ShowroomEcho from "@/components/ShowroomEcho";
import Link from "next/link";

export default function ShowroomPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest">
              EUROWINDOW SHOWROOM NETWORK
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight">
              Hệ Thống Showroom & Trải Nghiệm 360°
            </h1>
            <p className="text-[16px] text-gray-300 font-sans leading-relaxed">
              Trải nghiệm thực tế các hệ cửa nhôm, uPVC, cửa gỗ và công nghệ cảm biến tự động tại hơn 34 Showroom chính hãng toàn quốc.
            </p>
          </div>
        </div>
      </section>

      {/* Main Showroom Section */}
      <ShowroomEcho />

      <Footer />
      <FloatingControls />
    </div>
  );
}
