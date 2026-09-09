"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "./icons";

interface AwardItem {
  id: string;
  category: "national" | "international";
  title: string;
  subtitle: string;
  logo: string;
  year: string;
}

const awardsList: AwardItem[] = [
  {
    id: "vnvalue",
    category: "national",
    title: "Thương hiệu Quốc gia Việt Nam",
    subtitle: "Vinh danh 14 năm liên tiếp bởi Bộ Công Thương",
    logo: "/images/official/award_vnvalue_hd.png",
    year: "14 Năm Liên Tiếp",
  },
  {
    id: "hvnclc",
    category: "national",
    title: "Hàng Việt Nam Chất Lượng Cao",
    subtitle: "Bình chọn bởi người tiêu dùng toàn quốc",
    logo: "/images/official/award_hvnclc_hd.png",
    year: "16 Năm Liên Tiếp",
  },
  {
    id: "huanchuong",
    category: "national",
    title: "Huân chương Lao động hạng Nhất",
    subtitle: "Trao tặng bởi Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam",
    logo: "/images/official/award_huanchuong_hd.png",
    year: "Huân chương Cao Quý",
  },
  {
    id: "goldstar",
    category: "national",
    title: "Giải thưởng Sao Vàng Đất Việt",
    subtitle: "Top 10 thương hiệu hàng đầu Việt Nam",
    logo: "/images/official/award_goldstar_hd.png",
    year: "Top 10 Quốc Gia",
  },
  {
    id: "ukas",
    category: "international",
    title: "Chứng nhận Chất lượng UKAS & ISO 9001",
    subtitle: "Tiêu chuẩn quản lý chất lượng vương quốc Anh",
    logo: "/images/official/award_ukas_hd.png",
    year: "ISO 9001:2015",
  },
  {
    id: "anab",
    category: "international",
    title: "Chứng nhận Hệ thống Chất lượng ANAB",
    subtitle: "ANSI National Accreditation Board Hoa Kỳ",
    logo: "/images/official/award_anab_hd.webp",
    year: "Tiêu Chuẩn Hoa Kỳ",
  },
];

const featuredProjects = [
  {
    img: "/images/official/project_vinhomes_hd.jpg",
    title: "Vinpearl Resort & biệt thự nghỉ dưỡng sang trọng",
    badge: "14 NĂM THƯƠNG HIỆU QUỐC GIA",
  },
  {
    img: "/images/official/project_phubai_hd.jpg",
    title: "Cảng hàng không Quốc tế Phú Bài — Biểu tượng kiến trúc Huế",
    badge: "CÔNG TRÌNH CẤP QUỐC GIA",
  },
  {
    img: "/images/official/project_bongoaigiao_hd.jpg",
    title: "Trụ sở Bộ Ngoại Giao Việt Nam — Hệ vách kính đặc chủng",
    badge: "TRỤ SỞ BỘ NGÀNH TRỌNG ĐIỂM",
  },
];

export default function Achievements() {
  const [filter, setFilter] = useState<"all" | "national" | "international">("all");
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const filteredAwards = awardsList.filter((a) => filter === "all" || a.category === filter);

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 select-none pointer-events-none opacity-40">
        <span className="font-display font-black text-[14vw] text-slate-200 tracking-tighter leading-none block">
          EUROWINDOW
        </span>
      </div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-16">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest block">
              RECOGNITION & STANDARDS
            </span>
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] text-[#0a1f3c] leading-tight">
              Được ghi nhận bởi những tiêu chuẩn cao nhất.
            </h2>
            <p className="text-[15px] text-gray-600 font-sans leading-relaxed">
              Nhiều năm liền được vinh danh bởi các tổ chức uy tín trong và ngoài nước — bằng chứng cho cam kết chất lượng không ngừng.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm text-[12px] font-bold">
            {[
              { id: "all", label: "Tất cả giải thưởng" },
              { id: "national", label: "Giải thưởng Quốc gia" },
              { id: "international", label: "Chứng nhận Quốc tế" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#005bb7] text-white shadow-md"
                    : "text-gray-600 hover:text-[#005bb7] hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Bento Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Award Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredAwards.map((award) => (
                <motion.div
                  key={award.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#005bb7] transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-[#005bb7] px-3 py-1 rounded-full border border-blue-100">
                      {award.year}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#c5a968]" />
                  </div>

                  <div className="flex items-center gap-4 py-2">
                    <div className="w-20 h-20 relative flex-shrink-0 bg-slate-50 rounded-2xl p-2 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Image
                        src={award.logo}
                        alt={award.title}
                        width={80}
                        height={80}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-[16px] text-gray-900 group-hover:text-[#005bb7] transition-colors leading-snug">
                        {award.title}
                      </h3>
                      <p className="text-[12px] text-gray-500 font-sans leading-relaxed">
                        {award.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right: Iconic Project Highlight Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0a1f3c] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative flex flex-col justify-between min-h-[480px] p-8 text-white group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featuredProjects[activeProjectIdx].img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/60 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-white/15 backdrop-blur-md text-[#c5a968] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
                {featuredProjects[activeProjectIdx].badge}
              </span>
              <div className="flex gap-1.5">
                {featuredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProjectIdx(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${activeProjectIdx === i ? "w-6 bg-[#c5a968]" : "w-2 bg-white/40"}`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Project Caption */}
            <div className="relative z-10 space-y-4 pt-20">
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block">
                CÔNG TRÌNH BIỂU TƯỢNG HOÀN THÀNH
              </span>
              <h3 className="font-display font-bold text-[22px] text-white leading-snug drop-shadow-md">
                {featuredProjects[activeProjectIdx].title}
              </h3>
              
              <div className="flex items-center justify-between pt-2 border-t border-white/20">
                <span className="text-[12px] font-bold text-[#c5a968]">EUROWINDOW QUALITY ASSURED</span>
                <button
                  onClick={() => setActiveProjectIdx((prev) => (prev + 1) % featuredProjects.length)}
                  className="text-[11px] font-bold uppercase tracking-wider text-white hover:underline cursor-pointer flex items-center gap-1"
                >
                  Dự án tiếp theo →
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
