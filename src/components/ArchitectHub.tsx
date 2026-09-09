"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { FileText, Headphones, GraduationCap, ArrowRight, Layers } from "./icons";

interface Resource {
  id: string;
  num: string;
  name: string;
  tagline: string;
  desc: string;
  countTag: string;
  icon: LucideIcon;
  href: string;
}

const resources: Resource[] = [
  {
    id: "bim",
    num: "01",
    name: "BIM LIBRARY",
    tagline: "Thư viện Revit 3D Family",
    desc: "Tải file 3D CAD/BIM chất lượng cao chuẩn RFA/DWG tích hợp trực tiếp vào mô hình thiết kế kiến trúc.",
    countTag: "120+ FILE REVIT .RFA",
    icon: Layers,
    href: "/tai-lieu",
  },
  {
    id: "tailieu",
    num: "02",
    name: "TECHNICAL DOCUMENTS",
    tagline: "Hồ sơ kỹ thuật & Mặt cắt",
    desc: "Tra cứu thông số kỹ thuật, bản vẽ bóc tách profile, giấy chứng nhận kiểm định chất lượng ISO/EN.",
    countTag: "BẢN VẼ CAD 2026",
    icon: FileText,
    href: "/tai-lieu",
  },
  {
    id: "hotro",
    num: "03",
    name: "DESIGN SUPPORT",
    tagline: "Tư vấn kỹ sư kết cấu",
    desc: "Hỗ trợ tính toán áp lực gió bão, tải trọng kính và tư vấn giải pháp nhôm kính 1:1 cùng KTS.",
    countTag: "TƯ VẤN 1:1 KÝ SƯ",
    icon: Headphones,
    href: "/tai-lieu",
  },
  {
    id: "cpd",
    num: "04",
    name: "CPD TRAINING",
    tagline: "Đào tạo & Hội thảo KTS",
    desc: "Tham gia các khóa đào tạo chuyên đề, tọa đàm kiến trúc xanh & nhận chứng chỉ CPD uy tín.",
    countTag: "CHỨNG CHỈ CPD",
    icon: GraduationCap,
    href: "/tin-tuc",
  },
];

export default function ArchitectHub() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const engineerImage = "/images/official/architect_hub_hd.jpg";

  return (
    <section id="architect-hub" className="py-24 lg:py-32 bg-[#f4f7fc] overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest block">
              ARCHITECT & TECHNICAL HUB
            </span>
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] text-[#0a1f3c] leading-tight">
              Công cụ dành cho thế hệ kiến trúc sư mới.
            </h2>
            <p className="text-[15px] text-gray-600 font-sans leading-relaxed">
              Thư viện kiến trúc số — bộ công cụ chuyên sâu giúp tích hợp giải pháp cửa & vách kính vào từng mô hình thiết kế.
            </p>
          </div>

          <Link
            href="/tai-lieu"
            className="inline-flex items-center gap-2 bg-[#0a1f3c] hover:bg-[#005bb7] text-white font-bold text-[11.5px] uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-md group w-fit whitespace-nowrap"
          >
            Tải tất cả thư viện CAD / BIM
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main Bento Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 4 Bento Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {resources.map((res) => {
              const Icon = res.icon;
              const isHovered = hoveredId === res.id;
              return (
                <Link
                  key={res.id}
                  href={res.href}
                  onMouseEnter={() => setHoveredId(res.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#005bb7] transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[12px] font-black tracking-[0.2em] text-[#c5a968]">
                        {res.num}
                      </span>
                      <span className="text-[9.5px] font-bold uppercase tracking-widest bg-blue-50 text-[#005bb7] px-3 py-1 rounded-full border border-blue-100">
                        {res.countTag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isHovered ? "bg-[#005bb7] text-white" : "bg-blue-100 text-[#005bb7]"}`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="font-display font-bold text-[16px] text-gray-900 group-hover:text-[#005bb7] transition-colors">
                          {res.name}
                        </h3>
                      </div>
                      <p className="text-[11.5px] font-bold text-gray-500 uppercase tracking-wider font-sans">
                        {res.tagline}
                      </p>
                      <p className="text-[13px] text-gray-600 font-sans leading-relaxed pt-1">
                        {res.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11.5px] font-bold text-[#005bb7] group-hover:translate-x-1 transition-transform">
                    <span>XEM CHI TIẾT & TẢI FILE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right: Technical Support Image Showcase (5 cols) */}
          <div className="lg:col-span-5 bg-[#0a1f3c] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative flex flex-col justify-between p-8 text-white min-h-[500px] group">
            <Image
              src={engineerImage}
              alt="Architect Hub Technical Engineer"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/50 to-transparent pointer-events-none" />

            {/* Top Glass Tag */}
            <div className="relative z-10">
              <span className="bg-white/15 backdrop-blur-md text-[#c5a968] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
                KTS & KỸ SƯ GIẢI PHÁP KẾT CẤU
              </span>
            </div>

            {/* Bottom Hotline Badge */}
            <div className="relative z-10 bg-white/95 backdrop-blur-xl p-6 rounded-2xl text-gray-900 shadow-2xl space-y-2 border border-white/50">
              <span className="text-[10px] font-bold text-[#005bb7] uppercase tracking-wider block">
                HOTLINE HỖ TRỢ KỸ THUẬT KTS (24/7)
              </span>
              <p className="text-[28px] font-display font-extrabold text-[#005bb7] leading-none">
                1800 577 775
              </p>
              <p className="text-[12px] text-gray-600 font-sans">
                Giải đáp mọi thắc mắc kết cấu nhôm kính & hỗ trợ xuất file BIM theo yêu cầu.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
