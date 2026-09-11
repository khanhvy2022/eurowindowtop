"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    <section className="py-24 lg:py-32 bg-[#0a1f3c] relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-48 right-0 h-[34rem] w-[34rem] rounded-full bg-[#005bb7]/25 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#c5a968]/10 blur-[130px]" />
      {/* Subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #c5a968 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Gold hairline divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5a968]/30 to-transparent" />

      {/* Gold ghost wordmark */}
      <div className="absolute right-0 top-0 select-none pointer-events-none">
        <span className="font-display font-black text-[14vw] text-[#c5a968]/[0.09] tracking-tighter leading-none block">
          EUROWINDOW
        </span>
      </div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-16">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 relative">
          <div className="absolute bottom-0 left-0 h-px w-32 bg-[#c5a968]" />
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#c5a968] uppercase tracking-[0.22em]">
              <span className="h-px w-6 bg-[#c5a968]" />
              RECOGNITION & STANDARDS
            </span>
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] text-white leading-tight tracking-[-0.01em] text-pretty">
              Được ghi nhận bởi những tiêu chuẩn cao nhất.
            </h2>
            <p className="text-[15px] text-white/60 font-sans leading-relaxed">
              Nhiều năm liền được vinh danh bởi các tổ chức uy tín trong và ngoài nước — bằng chứng cho cam kết chất lượng không ngừng.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 bg-white/[0.06] p-1.5 rounded-2xl border border-white/15 backdrop-blur-md text-[12px] font-bold">
            {[
              { id: "all", label: "Tất cả giải thưởng" },
              { id: "national", label: "Giải thưởng Quốc gia" },
              { id: "international", label: "Chứng nhận Quốc tế" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as "all" | "national" | "international")}
                className={`px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#c5a968] text-[#0a1f3c] shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Image — full width showcase */}
        <div className="bg-[#06142a] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative flex flex-col justify-between min-h-[480px] lg:min-h-[600px] p-8 sm:p-12 text-white group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${featuredProjects[activeProjectIdx].img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/45 to-transparent pointer-events-none" />

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
          <div className="relative z-10 space-y-4 pt-24">
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest block">
              CÔNG TRÌNH BIỂU TƯỢNG HOÀN THÀNH
            </span>
            <h3 className="font-display font-bold text-[24px] sm:text-[34px] text-white leading-snug drop-shadow-md">
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

        {/* Awards Marquee — gently slides under the project image */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-[#c5a968] uppercase tracking-[0.22em] flex items-center gap-2">
              GIẢI THƯỞNG & CHỨNG NHẬN
            </span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest">
              Hover để tạm dừng
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border-y border-white/10 py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div
              className="awards-marquee flex w-max select-none"
              style={{ "--marquee-duration": "46s" } as React.CSSProperties}
            >
              <div className="flex gap-5 pr-5">
                {filteredAwards.map((award, i) => (
                  <div
                    key={`set1-${award.id}-${i}`}
                    title={award.subtitle}
                    className="group/chip flex items-center gap-4 bg-[#0d2548] border border-white/10 hover:border-[#c5a968]/70 rounded-2xl px-5 py-3.5 shadow-lg hover:shadow-[#c5a968]/10 transition-all duration-300 flex-shrink-0 cursor-default"
                  >
                    <div className="w-14 h-14 relative flex-shrink-0 bg-white/[0.06] rounded-xl p-1.5 border border-white/10 flex items-center justify-center group-hover/chip:scale-105 transition-transform">
                      <Image
                        src={award.logo}
                        alt={award.title}
                        width={56}
                        height={56}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <div className="space-y-1.5 min-w-[210px]">
                      <span className="inline-block text-[9px] font-bold uppercase tracking-widest bg-[#c5a968] text-[#0a1f3c] px-2.5 py-0.5 rounded-full w-fit">
                        {award.year}
                      </span>
                      <p className="font-display font-bold text-[13.5px] text-white leading-snug">
                        {award.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-5 pr-5" aria-hidden="true">
                {filteredAwards.map((award, i) => (
                  <div
                    key={`set2-${award.id}-${i}`}
                    title={award.subtitle}
                    className="group/chip flex items-center gap-4 bg-[#0d2548] border border-white/10 hover:border-[#c5a968]/70 rounded-2xl px-5 py-3.5 shadow-lg hover:shadow-[#c5a968]/10 transition-all duration-300 flex-shrink-0 cursor-default"
                  >
                    <div className="w-14 h-14 relative flex-shrink-0 bg-white/[0.06] rounded-xl p-1.5 border border-white/10 flex items-center justify-center group-hover/chip:scale-105 transition-transform">
                      <Image
                        src={award.logo}
                        alt=""
                        width={56}
                        height={56}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <div className="space-y-1.5 min-w-[210px]">
                      <span className="inline-block text-[9px] font-bold uppercase tracking-widest bg-[#c5a968] text-[#0a1f3c] px-2.5 py-0.5 rounded-full w-fit">
                        {award.year}
                      </span>
                      <p className="font-display font-bold text-[13.5px] text-white leading-snug">
                        {award.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}