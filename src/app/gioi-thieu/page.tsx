"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import Achievements from "@/components/Achievements";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "@/components/icons";

export default function GioiThieuPage() {
  const milestones = [
    { year: "2002", title: "Thành lập Eurowindow", desc: "Tiên phong đưa sản phẩm cửa nhựa uPVC uFlex & Kommerling vào thị trường Việt Nam." },
    { year: "2008", title: "Mở rộng 5 Nhà máy toàn quốc", desc: "Đầu tư dây chuyền sản xuất kính rỗng, kính dán an toàn và hệ cửa nhôm cao cấp." },
    { year: "2015", title: "Dấu ấn Công trình Quốc gia", desc: "Thi công hệ vách kính & cửa đặc chủng cho Nhà Quốc Hội Việt Nam và Trụ sở Bộ Ngoại Giao." },
    { year: "2020", title: "Chuyển đổi Xanh & Số hóa", desc: "Ứng dụng vật liệu nhôm cầu cách nhiệt tiết kiệm điện năng tiêu chuẩn Châu Âu." },
    { year: "2026", title: "Thế hệ Cửa Thông minh Gen 5.0", desc: "Tích hợp IoT, cảm biến thời tiết, khóa sinh trắc học và hệ thống nhà thông minh tự động." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c5a968_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest">
              VỀ EUROWINDOW
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] tracking-tight">
              22+ Năm Tiên Phong Kiến Tạo Công Trình Xanh.
            </h1>
            <p className="text-[16px] sm:text-[18px] text-gray-300 font-sans leading-relaxed">
              Eurowindow là nhà cung cấp giải pháp tổng thể về vật liệu xây dựng xanh hàng đầu Việt Nam, khẳng định vị thế uy tín qua hàng chục nghìn công trình trọng điểm trong và ngoài nước.
            </p>
          </div>
        </div>
      </section>

      {/* Core Stats */}
      <section className="py-16 bg-[#f4f7fc] border-y border-gray-200">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5", label: "Nhà máy sản xuất (60ha)" },
              { number: "34+", label: "Showroom toàn quốc" },
              { number: "50.000+", label: "Công trình hoàn thành" },
              { number: "4.000+", label: "Cán bộ công nhân viên" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-[36px] sm:text-[48px] font-display font-bold text-[#005bb7]">
                  {stat.number}
                </div>
                <div className="text-[13px] font-bold text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest">
              HÀNH TRÌNH PHÁT TRIỂN
            </span>
            <h2 className="font-display font-bold text-[32px] sm:text-[42px] text-[#0a1f3c]">
              Cột mốc lịch sử phát triển
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4 hover:border-[#005bb7] hover:shadow-lg transition-all">
                <span className="text-[28px] font-display font-bold text-[#005bb7] block">
                  {item.year}
                </span>
                <h3 className="text-[16px] font-bold text-[#0a1f3c]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <Achievements />

      <Footer />
      <FloatingControls />
    </div>
  );
}
