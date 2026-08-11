"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, EurowindowLogo, Check } from "./icons";

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  type: string;
  investor: string;
  volume: string;
  year: string;
  image: string;
  specs: string[];
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const headerRef = useReveal();
  const contentRef = useReveal();

  const categories = [
    { id: "all", label: "ALL" },
    { id: "national", label: "NATIONAL" },
    { id: "residential", label: "RESIDENTIAL" },
    { id: "commercial", label: "COMMERCIAL" },
    { id: "hospitality", label: "HOSPITALITY" },
  ];

  const projects: ProjectItem[] = [
    {
      id: "p-1",
      category: "national",
      title: "CẢNG HÀNG KHÔNG PHÚ BÀI HUẾ",
      type: "National Infrastructure",
      investor: "Tổng công ty Cảng hàng không Việt Nam",
      volume: "18.500 m²",
      year: "2025",
      image: "/images/figma_29b7_754b_dcb3258841887f70bf6e16c62af9ca41.png",
      specs: [
        "Mặt dựng nhôm kính tiết kiệm năng lượng Low-E 24mm",
        "Khung nhôm cầu cách nhiệt chịu áp lực gió cấp 15",
        "Hệ thống lam chắn nắng điều khiển tự động"
      ]
    },
    {
      id: "p-2",
      category: "commercial",
      title: "DIAMOND CROWN HẢI PHÒNG",
      type: "Commercial",
      investor: "DOJI LAND",
      volume: "28.000 m²",
      year: "2024",
      image: "/images/figma_5d36_d29a_3a53e0de2f53eadb8296fd34023141e5.png",
      specs: [
        "Vách kính cong Diagrid 3D sang trọng độc bản",
        "Kính hộp phản quang tản nhiệt giảm bức xạ 85%",
        "Cửa lùa thông minh tích hợp khóa vân tay"
      ]
    },
    {
      id: "p-3",
      category: "residential",
      title: "VINHOMES SMART CITY",
      type: "Residential",
      investor: "Vinhomes JSC",
      volume: "45.000 m²",
      year: "2024",
      image: "/images/figma_4140_b90c_06d671ce00de7935b522cded3c8da554.png",
      specs: [
        "Cửa nhựa uPVC Eurowindow cao cấp chống ồn 42dB",
        "Kính an toàn dán 2 lớp chống tia UV 99%",
        "Phụ kiện kim khí đồng bộ tiêu chuẩn Đức"
      ]
    },
    {
      id: "p-4",
      category: "commercial",
      title: "LOTTE MALL TÂY HỒ",
      type: "Commercial",
      investor: "Lotte Property & Development",
      volume: "32.000 m²",
      year: "2023",
      image: "/images/figma_8128_3c7c_74d6dbaa92c1c5cf911a777a203bf190.png",
      specs: [
        "Vách vòm nhôm kính siêu lớn lấy sáng tự nhiên",
        "Cửa tự động cảm biến mắt thần nhập khẩu Nhật Bản",
        "Hệ thống nhôm sơn phủ PVDF chịu ăn mòn biển"
      ]
    },
    {
      id: "p-5",
      category: "hospitality",
      title: "RESORT NGHỈ DƯỠNG VINPEARL",
      type: "Hospitality",
      investor: "Vinpearl JSC",
      volume: "21.000 m²",
      year: "2023",
      image: "/images/figma_8ded_3fa0_e51bcd93f06cd40fdd206fa2189f4d60.png",
      specs: [
        "Hệ cửa nhôm xếp trượt lấy sáng toàn cảnh biển",
        "Kính Low-E chống nhiệt, giảm tiêu thụ điều hòa",
        "Phụ kiện đồng bộ tiêu chuẩn khách sạn quốc tế"
      ]
    }
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  const activeProject = filteredProjects[0] || projects[0];

  return (
    <section id="projects" className="bg-[#f4f7fc] py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header + Category Filter */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 reveal">
          {/* Left: Tag + Headline */}
          <div className="lg:col-span-8 space-y-4">
            <div className="eyebrow text-[#005bb7]">
              Featured Projects
            </div>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.12] text-[#0a1f3c] tracking-tight">
              Công trình kiến tạo dấu ấn.
            </h2>
          </div>

          {/* Right: Category Filter — editorial pills */}
          <div className="lg:col-span-4 flex flex-wrap items-center lg:justify-end gap-2 font-sans pb-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-[10.5px] font-bold tracking-[0.14em] uppercase border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white bg-[#0a1f3c] border-[#0a1f3c]"
                      : "text-ink-muted border-line hover:border-[#005bb7] hover:text-[#005bb7]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Showcase Container */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-line reveal delay-200">
          
          {/* Left: Interactive Project Image (6 cols) */}
          <div
            onClick={() => setLightboxProject(activeProject)}
            className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-[560px] overflow-hidden group cursor-pointer"
          >
            <div
              key={activeProject.id}
              className="absolute inset-0 bg-cover bg-center figma-img-zoom"
              style={{
                backgroundImage: `url(${activeProject.image})`,
                animation: "scaleIn 0.5s ease-out",
              }}
            />
            {/* Gradient on bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500" />
            
            {/* Project category badge */}
            <div className="absolute top-6 left-6">
              <span className="glass text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                {activeProject.type}
              </span>
            </div>

            {/* Click to expand hover hint (Figma prototype pattern) */}
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-[11px] font-bold text-white uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
                Phóng to xem bản vẽ & thông số
              </span>
            </div>
          </div>

          {/* Right: Project Specs (6 cols) */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative">
            <div className="space-y-8">
              <h3 className="font-display font-bold text-[24px] sm:text-[30px] lg:text-[36px] text-[#0a1f3c] leading-tight tracking-tight">
                {activeProject.title}
              </h3>

              <div className="space-y-0 font-sans">
                {[
                  { label: "Loại công trình", value: activeProject.type },
                  { label: "Chủ đầu tư", value: activeProject.investor },
                  { label: "Khối lượng thi công", value: activeProject.volume },
                  { label: "Năm hoàn thành", value: activeProject.year },
                ].map((row, i) => (
                  <div key={i} className="flex items-start justify-between py-4 border-b border-gray-100 last:border-0">
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex-shrink-0 w-36">
                      {row.label}
                    </span>
                    <span className="text-sm font-bold text-gray-800 text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between">
              <button
                onClick={() => setLightboxProject(activeProject)}
                className="inline-flex items-center gap-2 text-[11px] font-bold text-[#005bb7] uppercase tracking-wider group hover:gap-3 transition-all cursor-pointer"
              >
                Chi tiết dự án
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ── Figma Lightbox Modal ── */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 grid grid-cols-1 md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-20 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg cursor-pointer transition-colors"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div className="md:col-span-7 relative min-h-[300px] md:min-h-[460px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${lightboxProject.image})` }}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#005bb7] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {lightboxProject.year}
                </span>
              </div>
            </div>

            {/* Modal Content & Technical Highlights */}
            <div className="md:col-span-5 p-8 flex flex-col justify-between bg-gray-50">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-[#005bb7] uppercase tracking-widest block mb-1">
                    {lightboxProject.type}
                  </span>
                  <h3 className="font-display font-bold text-[22px] text-gray-900 leading-snug">
                    {lightboxProject.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 mt-1">Chủ đầu tư: {lightboxProject.investor}</p>
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <h4 className="text-[11px] font-bold uppercase text-gray-700 tracking-wider">
                    Giải Pháp Kỹ Thuật Đột Phá:
                  </h4>
                  <ul className="space-y-2">
                    {lightboxProject.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[12px] text-gray-600 font-sans">
                        <Check className="h-4 w-4 text-[#005bb7] flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setLightboxProject(null)}
                className="w-full mt-6 py-3.5 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all shadow-md"
              >
                Đóng xem trước
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
