"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { FileText, Download, BookOpen, ArrowRight, Palette } from "./icons";

interface Resource {
  id: string;
  num: string;
  name: string;
  tagline: string;
  desc: string;
  countTag: string;
  icon: LucideIcon;
  href: string;
  downloadUrl: string;
}

const resources: Resource[] = [
  {
    id: "catalogue",
    num: "01",
    name: "CATALOGUE EUROWINDOW",
    tagline: "Ấn phẩm tổng hợp sản phẩm",
    desc: "Catalogue đầy đủ toàn bộ hệ sản phẩm cửa nhôm, cửa uPVC, vách kính, cửa gỗ & phụ kiện Eurowindow 2025.",
    countTag: "BẢN TIẾNG VIỆT 2025",
    icon: BookOpen,
    href: "/tai-lieu",
    downloadUrl: "https://sudospaces.com/eurowindow/2025/12/catalogue-eurowindow-2025.pdf",
  },
  {
    id: "smart-door",
    num: "02",
    name: "CỬA THÔNG MINH",
    tagline: "Catalogue sản phẩm mới 2025",
    desc: "Tổng hợp giải pháp cửa thông minh thế hệ mới — tích hợp khóa điện tử, cảm biến & điều khiển từ xa.",
    countTag: "SẢN PHẨM MỚI 2025",
    icon: FileText,
    href: "/tai-lieu",
    downloadUrl: "https://sudospaces.com/eurowindow/2025/12/catalogue-san-pham-moi-2025.pdf",
  },
  {
    id: "nhom-cau",
    num: "03",
    name: "NHÔM CẦU CÁCH NHIỆT",
    tagline: "Tờ rơi kỹ thuật chuyên sâu",
    desc: "Thông số kỹ thuật, thiết kế mặt cắt & ưu điểm hệ nhôm có cầu cách nhiệt cao cấp Eurowindow.",
    countTag: "TỜ RƠI KỸ THUẬT",
    icon: Download,
    href: "/tai-lieu",
    downloadUrl: "https://sudospaces.com/eurowindow/2021/11/to-roi-nhom-co-cau-thiet-ke.pdf",
  },
  {
    id: "mau-nhom",
    num: "04",
    name: "BẢNG MÀU NHÔM",
    tagline: "Tờ rơi bảng màu sơn nhôm",
    desc: "Tổng hợp bảng màu sơn tĩnh điện, anod & vân gỗ cho hệ cửa nhôm — hỗ trợ KTS lựa chọn phối màu.",
    countTag: "80+ MÃ MÀU",
    icon: Palette,
    href: "/tai-lieu",
    downloadUrl: "https://sudospaces.com/eurowindow/2021/11/to-roi-mau-mau-son.pdf",
  },
];

export default function ArchitectHub() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const engineerImage = "/images/eurowindow-logo-blue.jpg";

  return (
    <section id="architect-hub" className="py-24 lg:py-32 bg-[#0a1f3c] overflow-hidden relative">
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
      <div className="absolute left-0 top-2 select-none pointer-events-none">
        <span className="font-display font-black text-[8vw] lg:text-[6.5rem] text-[#c5a968]/[0.09] tracking-tighter leading-none block whitespace-nowrap">
          TECHNICAL HUB
        </span>
      </div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 relative">
          <div className="absolute bottom-0 left-0 h-px w-32 bg-[#c5a968]" />
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#c5a968] uppercase tracking-[0.22em]">
              <span className="h-px w-6 bg-[#c5a968]" />
              ARCHITECT & TECHNICAL HUB
            </span>
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] text-white leading-tight tracking-[-0.01em] text-pretty">
              Tài liệu Eurowindow.
            </h2>
            <p className="text-[15px] text-white/60 font-sans leading-relaxed">
              Thư viện kiến trúc số — bộ công cụ chuyên sâu giúp tích hợp giải pháp cửa & vách kính vào từng mô hình thiết kế.
            </p>
          </div>

          <Link
            href="/tai-lieu"
            className="inline-flex items-center gap-2 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[11.5px] uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-xl shadow-[#c5a968]/20 group w-fit whitespace-nowrap"
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
                <a
                  key={res.id}
                  href={res.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredId(res.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="bg-[#0d2548] p-7 rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-[#c5a968]/10 hover:border-[#c5a968]/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#c5a968] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[12px] font-black tracking-[0.2em] text-[#c5a968]">
                        {res.num}
                      </span>
                      <span className="text-[9.5px] font-bold uppercase tracking-widest bg-[#c5a968] text-[#0a1f3c] px-3 py-1 rounded-full shadow-sm">
                        {res.countTag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isHovered ? "bg-[#c5a968] text-[#0a1f3c]" : "bg-white/[0.06] text-white"}`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="font-display font-bold text-[16px] text-white group-hover:text-[#c5a968] transition-colors">
                          {res.name}
                        </h3>
                      </div>
                      <p className="text-[11.5px] font-bold text-white/50 uppercase tracking-wider font-sans">
                        {res.tagline}
                      </p>
                      <p className="text-[13px] text-white/60 font-sans leading-relaxed pt-1">
                        {res.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11.5px] font-bold text-[#c5a968] group-hover:translate-x-1 transition-transform">
                    <span>TẢI TÀI LIỆU PDF</span>
                    <Download className="w-3.5 h-3.5" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right: Technical Support Image Showcase (5 cols) */}
          <div className="lg:col-span-5 bg-[#06142a] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative flex flex-col justify-between p-0 text-white min-h-[500px] group">
            <Image
              src={engineerImage}
              alt="Architect Hub Technical Engineer"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06142a] via-[#06142a]/50 to-transparent pointer-events-none" />

            {/* Top Glass Tag */}
            <div className="relative z-10 p-8">
              <span className="bg-white/15 backdrop-blur-md text-[#c5a968] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
                Eurowindow Giải Pháp Tổng Thể Về Cửa
              </span>
            </div>

            {/* Bottom Hotline Badge — flush to bottom */}
            <div className="relative z-10 mt-auto">
              <div className="bg-[#0a1f3c]/95 backdrop-blur-xl p-6 rounded-t-2xl border-t border-white/10 space-y-2">
                <span className="text-[10px] font-bold text-[#c5a968] uppercase tracking-wider block">
                  HỖ TRỢ TƯ VẤN
                </span>
                <p className="text-[28px] font-display font-extrabold text-white leading-none">
                  0966 994 338
                </p>
                <p className="text-[12px] text-white/60 font-sans">
                  Giải đáp mọi thắc mắc kết cấu nhôm kính & hỗ trợ xuất file BIM theo yêu cầu.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}