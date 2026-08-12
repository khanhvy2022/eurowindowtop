"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "./icons";

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
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const headerRef = useReveal();
  const contentRef = useReveal();

  const categories = [
    { id: "all", label: "Tất cả" },
    { id: "national", label: "Cấp quốc gia" },
    { id: "commercial", label: "Thương mại & Y tế" },
    { id: "residential", label: "Khu đô thị" },
    { id: "hospitality", label: "Nghỉ dưỡng & Resort" },
  ];

  const projects: ProjectItem[] = [
    {
      id: "p-1",
      category: "national",
      title: "CẢNG HÀNG KHÔNG PHÚ BÀI HUẾ",
      type: "National Infrastructure",
      investor: "Tổng công ty Cảng hàng không Việt Nam (ACV)",
      volume: "18.500 m²",
      year: "2025",
      image: "/images/official/project_phubai_hd.jpg",
      specs: [
        "Mặt dựng nhôm kính tiết kiệm năng lượng Low-E 24mm",
        "Khung nhôm cầu cách nhiệt chịu áp lực gió cấp 15",
        "Hệ thống lam chắn nắng điều khiển tự động"
      ]
    },
    {
      id: "p-2",
      category: "national",
      title: "TRỤ SỞ BỘ NGOẠI GIAO",
      type: "National Headquarters",
      investor: "Bộ Ngoại Giao Việt Nam",
      volume: "45.000 m²",
      year: "2024",
      image: "/images/official/project_bongoaigiao_hd.jpg",
      specs: [
        "Cửa nhôm & vách kính Eurowindow cao cấp cách âm 45dB",
        "Kính an toàn dán 2 lớp chống tia UV 99%",
        "Phụ kiện kim khí đồng bộ tiêu chuẩn Đức"
      ]
    },
    {
      id: "p-3",
      category: "national",
      title: "NHÀ QUỐC HỘI VIỆT NAM",
      type: "National Landmark",
      investor: "Ban Quản lý Dự án Đầu tư Xây dựng Nhà Quốc hội",
      volume: "38.000 m²",
      year: "2024",
      image: "/images/official/project_nhaquochoi_hd.jpg",
      specs: [
        "Vách nhôm kính đặc chủng chịu lực & cách âm tối ưu",
        "Kính an toàn chống va đập tiêu chuẩn cấp Quốc gia",
        "Sơn phủ PVDF chống ăn mòn thời tiết bền đẹp lâu năm"
      ]
    },
    {
      id: "p-4",
      category: "commercial",
      title: "BỆNH VIỆN UNG BƯỚU ĐÀ NẴNG",
      type: "Commercial Healthcare",
      investor: "Sở Y Tế Đà Nẵng",
      volume: "32.000 m²",
      year: "2023",
      image: "/images/official/project_ungbuou_hd.jpg",
      specs: [
        "Vách vòm nhôm kính lấy sáng tự nhiên cách nhiệt",
        "Cửa tự động cảm biến mắt thần nhập khẩu Nhật Bản",
        "Hệ thống nhôm sơn phủ PVDF chịu ăn mòn biển"
      ]
    },
    {
      id: "p-5",
      category: "commercial",
      title: "BỆNH VIỆN VIỆT PHÁP HÀ NỘI",
      type: "Commercial Healthcare",
      investor: "Công ty TNHH Bệnh viện Việt Pháp",
      volume: "22.000 m²",
      year: "2023",
      image: "/images/official/project_vietphap_hd.jpg",
      specs: [
        "Cửa nhựa uPVC & nhôm kính cách âm, cách nhiệt cao cấp",
        "Hệ cửa tự động đóng mở đảm bảo vô trùng y tế",
        "Kính an toàn dán nhiều lớp chống tia UV"
      ]
    },
    {
      id: "p-6",
      category: "residential",
      title: "VINHOMES GLOBAL GATE CỔ LOA",
      type: "Urban Residential",
      investor: "Tập đoàn Vingroup",
      volume: "35.000 m²",
      year: "2026",
      image: "/images/official/project_vinhomes_hd.jpg",
      specs: [
        "Hệ cửa nhôm kính panorama toàn cảnh đón ánh sáng",
        "Kính Low-E chống nhiệt, tiết kiệm điện điều hòa",
        "Phụ kiện cao cấp nhập khẩu tiêu chuẩn Châu Âu"
      ]
    },
    {
      id: "p-7",
      category: "hospitality",
      title: "FLC LUXURY RESORT SẦM SƠN",
      type: "Hospitality & Resort",
      investor: "Tập đoàn FLC",
      volume: "28.500 m²",
      year: "2024",
      image: "/images/official/project_flc_hd.jpg",
      specs: [
        "Cửa trượt nhôm kính panorama view biển tràn viền",
        "Vách kính cường lực chịu mặn bãi biển",
        "Sơn phủ công nghệ anodized chống ăn mòn hóa chất mặn"
      ]
    }
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const totalFiltered = filteredProjects.length;
  const safeIndex = activeProjectIndex % totalFiltered;
  const activeProject = filteredProjects[safeIndex] || projects[0];

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setActiveProjectIndex(0);
  };

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % totalFiltered);
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + totalFiltered) % totalFiltered);
  };

  return (
    <section id="projects" className="bg-[#f4f7fc] py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header + Category Filter */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 reveal">
          {/* Left: Tag + Headline */}
          <div className="space-y-3 max-w-2xl">
            <div className="eyebrow text-[#005bb7]">
              Featured Projects
            </div>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1.14] text-[#0a1f3c] tracking-tight">
              Công trình kiến tạo dấu ấn.
            </h2>
          </div>

          {/* Right: Category Segmented Bar + Carousel Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start lg:self-end">
            {/* Category Segmented Control */}
            <div className="flex items-center overflow-x-auto max-w-full p-1.5 bg-[#eef3f9] rounded-2xl border border-gray-200/80 shadow-xs gap-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2 text-[11.5px] font-bold transition-all duration-300 rounded-xl cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#005bb7] text-white shadow-md shadow-[#005bb7]/25"
                        : "text-gray-600 hover:text-[#005bb7] hover:bg-white/70"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Next / Prev Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0 bg-white p-1 rounded-2xl border border-gray-200/80 shadow-xs">
              <button
                onClick={prevProject}
                aria-label="Dự án trước"
                title="Dự án trước"
                className="h-9 w-9 text-gray-600 hover:text-[#005bb7] hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[12px] font-bold text-[#005bb7] font-mono px-1">
                {String(safeIndex + 1).padStart(2, "0")}/{String(totalFiltered).padStart(2, "0")}
              </span>
              <button
                onClick={nextProject}
                aria-label="Dự án tiếp theo"
                title="Dự án tiếp theo"
                className="h-9 w-9 text-gray-600 hover:text-[#005bb7] hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Showcase Container */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-line reveal delay-200 shadow-lg">
          
          {/* Left: Interactive Project Image (6 cols) */}
          <div
            onClick={() => setLightboxProject(activeProject)}
            className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-[580px] overflow-hidden group cursor-pointer"
          >
            <div
              key={activeProject.id}
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.04]"
              style={{
                backgroundImage: `url(${activeProject.image})`,
                animation: "scaleIn 0.5s ease-out",
              }}
            />
            {/* Gradient on bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/75 transition-all duration-500" />
            
            {/* Project category badge */}
            <div className="absolute top-6 left-6">
              <span className="glass text-white text-[10.5px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                {activeProject.type}
              </span>
            </div>
          </div>

          {/* Right: Project Specs (6 cols) */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative">
            <div className="space-y-6">
              {/* Project Title + Category Tag */}
              <div>
                <span className="text-[10.5px] font-bold text-[#005bb7] uppercase tracking-widest block mb-2 font-sans">
                  EUROWINDOW CERTIFIED PROJECT — {safeIndex + 1}/{totalFiltered}
                </span>
                <h3 className="font-display font-bold text-[24px] sm:text-[30px] lg:text-[36px] text-[#0a1f3c] leading-tight tracking-tight">
                  {activeProject.title}
                </h3>
              </div>

              {/* Meta Rows */}
              <div className="space-y-0 font-sans border-t border-gray-100 pt-2">
                {[
                  { label: "Loại công trình", value: activeProject.type },
                  { label: "Chủ đầu tư", value: activeProject.investor },
                  { label: "Khối lượng thi công", value: activeProject.volume },
                  { label: "Năm hoàn thành", value: activeProject.year },
                ].map((row, i) => (
                  <div key={i} className="flex items-start justify-between py-3.5 border-b border-gray-100 last:border-0">
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex-shrink-0 w-36">
                      {row.label}
                    </span>
                    <span className="text-sm font-bold text-gray-800 text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions + Prev/Next Controls inside card */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => setLightboxProject(activeProject)}
                className="inline-flex items-center gap-2 text-[11px] font-bold text-[#005bb7] uppercase tracking-wider group hover:gap-3 transition-all cursor-pointer"
              >
                Chi tiết dự án
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Prev / Next buttons inside card */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevProject}
                  aria-label="Dự án trước"
                  title="Dự án trước"
                  className="px-3 py-2 bg-gray-100 hover:bg-[#005bb7] hover:text-white text-gray-700 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Trước
                </button>
                <button
                  onClick={nextProject}
                  aria-label="Dự án sau"
                  title="Dự án sau"
                  className="px-3 py-2 bg-[#0a1f3c] hover:bg-[#005bb7] text-white rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1"
                >
                  Sau <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
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
