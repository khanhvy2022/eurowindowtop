"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "./icons";

interface SolutionCategory {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  badge: string;
  specs: string[];
}

const solutions: SolutionCategory[] = [
  {
    id: "residential",
    title: "RESIDENTIAL",
    subtitle: "Biệt Thự & Nhà Phố Cao Cấp",
    desc: "Hệ cửa nhôm cầu cách nhiệt, cửa nhựa uPVC lõi thép & cửa gỗ cao cấp đem lại không gian sống yên tĩnh, sang trọng và tiết kiệm 30% điện năng điều hòa.",
    image: "/images/official/project_vinhomes_hd.jpg",
    badge: "BIỆT THỰ & NHÀ Ở KÍN ĐÔ THỊ",
    specs: ["Cách âm 45 dB tiêu chuẩn Châu Âu", "Khóa sinh trắc học FaceID 3D AI", "Kính hộp Low-E dán an toàn 2 lớp"],
  },
  {
    id: "commercial",
    title: "COMMERCIAL",
    subtitle: "Trung Tâm Thương Mại & Showroom",
    desc: "Vách kính mặt dựng Stick & Unitized 3D liền mạch, cửa trượt tự động mắt thần vi sóng kép đáp ứng lưu lượng di chuyển 100.000 lượt/ngày.",
    image: "/images/official/vachkinh_hd.jpg",
    badge: "MẶT DỰNG THƯƠNG MẠI & BÁN LẺ",
    specs: ["Kính cường lực 12mm - 24mm siêu trong", "Cửa trượt tự động mở 24/7", "Chịu lực gió bão cấp 15"],
  },
  {
    id: "hospitality",
    title: "HOSPITALITY",
    subtitle: "Khách Sạn & Resort Nghỉ Dưỡng",
    desc: "Hệ cửa lùa Panorama toàn cảnh khung ẩn, kính chống bức xạ mặt trời SHGC < 0.35, sơn phủ PVDF chống ăn mòn mặn bãi biển 20 năm.",
    image: "/images/official/flc_resort_sam_son_1786528439555.jpg",
    badge: "RESORT & KHÁCH SẠN 5 SAO",
    specs: ["Sơn phủ PVDF chống mặn bãi biển", "Tầm nhìn Panorama không giới hạn", "Cách âm phòng ngủ tối đa"],
  },
  {
    id: "office",
    title: "OFFICE",
    subtitle: "Tòa Nhà Văn Phòng & Trụ Sở",
    desc: "Giải pháp vách kính mặt dựng cản nhiệt Low-E tối ưu ánh sáng tự nhiên, đạt chứng nhận công trình xanh LEED & EDGE.",
    image: "/images/official/project_office_hd.jpg",
    badge: "TÒA NHÀ VĂN PHÒNG HẠNG A",
    specs: ["Tiết kiệm năng lượng chuẩn LEED", "Kết nối hệ thống báo cháy PCCC", "Hệ mặt dựng Unitized thi công nhanh"],
  },
  {
    id: "public",
    title: "PUBLIC",
    subtitle: "Hạ Tầng & Công Trình Quốc Gia",
    desc: "Hệ cửa & vách kính đặc chủng chống bão, chống cháy PCCC 120 phút phục vụ các dự án trọng điểm cấp Quốc gia, Cảng hàng không & Bệnh viện.",
    image: "/images/official/project_phubai_hd.jpg",
    badge: "CÔNG TRÌNH QUỐC GIA TRỌNG ĐIỂM",
    specs: ["Hệ cửa đặc chủng chống cháy 120 phút", "Kiểm định ISO/EN tiêu chuẩn quốc tế", "Đáp ứng tiêu chí đầu tư công"],
  },
];

export default function BusinessSolution() {
  const [activeId, setActiveId] = useState("residential");
  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0];

  return (
    <section id="solutions" className="relative overflow-hidden bg-[#0a1f3c] text-white py-24 lg:py-32">
      {/* Background Image with Smooth Cross-fade */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeSolution.image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#c5a968_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-16">
        
        {/* Section Header & Title */}
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#c5a968] text-[11px] font-bold uppercase tracking-widest border border-white/15 shadow-sm">
            ARCHITECTURAL SOLUTIONS 2026
          </span>
          <h2 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.08] tracking-tight">
            Giải Pháp Cho Từng Loại Công Trình.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-300 font-sans leading-relaxed">
            Hệ thống sản phẩm cửa & vách kính được tùy biến kỹ thuật tối ưu theo quy mô và công năng sử dụng của từng dự án.
          </p>
        </div>

        {/* Dynamic Category Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Glassmorphism Category Navigation List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {solutions.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-white/15 backdrop-blur-xl border-[#c5a968] text-white shadow-xl scale-[1.02]"
                      : "bg-white/5 backdrop-blur-md border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] font-bold tracking-widest uppercase block ${isActive ? "text-[#c5a968]" : "text-gray-400"}`}>
                      {item.badge}
                    </span>
                    <h3 className="font-display font-bold text-[18px] tracking-wide">
                      {item.title} — {item.subtitle}
                    </h3>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "text-[#c5a968] translate-x-1" : "text-gray-500 group-hover:translate-x-1"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Category Bento Highlight Card (7 cols) */}
          <div className="lg:col-span-7 bg-white/10 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-[11px] font-bold text-[#c5a968] uppercase tracking-widest">
                  {activeSolution.badge}
                </span>
                <span className="text-[12px] font-bold text-white/70 font-mono">
                  SOLUTION 0{solutions.findIndex((s) => s.id === activeId) + 1} / 05
                </span>
              </div>

              <h3 className="font-display font-bold text-[28px] sm:text-[34px] leading-snug">
                {activeSolution.title}: {activeSolution.subtitle}
              </h3>

              <p className="text-[15px] text-gray-200 font-sans leading-relaxed">
                {activeSolution.desc}
              </p>

              {/* Specs Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  ĐIỂM NHẤN KỸ THUẬT NỔI BẬT:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSolution.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[13px] font-semibold text-white bg-white/10 p-3 rounded-xl border border-white/10">
                      <Check className="w-4 h-4 text-[#c5a968] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/san-pham"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[12px] uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#005bb7]/30 group"
              >
                KHÁM PHÁ HỆ SẢN PHẨM PHÙ HỢP
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tai-lieu"
                className="text-[12px] font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors"
              >
                Tải bản vẽ CAD / BIM →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
