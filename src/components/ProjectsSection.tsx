"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const EASE = [0.22, 1, 0.36, 1] as const;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
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

  useEffect(() => {
    if (!lightboxProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxProject]);

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
        "Hệ thống lam chắn nắng điều khiển tự động",
      ],
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
        "Phụ kiện kim khí đồng bộ tiêu chuẩn Đức",
      ],
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
        "Sơn phủ PVDF chống ăn mòn thời tiết bền đẹp lâu năm",
      ],
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
        "Hệ thống nhôm sơn phủ PVDF chịu ăn mòn biển",
      ],
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
        "Kính an toàn dán nhiều lớp chống tia UV",
      ],
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
        "Phụ kiện cao cấp nhập khẩu tiêu chuẩn Châu Âu",
      ],
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
        "Sơn phủ công nghệ anodized chống ăn mòn hóa chất mặn",
      ],
    },
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
      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0a1f3c 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 reveal">
          <div className="space-y-3 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 text-[#005bb7] text-[10px] font-bold uppercase tracking-[0.22em]"
            >
              <span className="h-px w-6 bg-[#005bb7]" />
              Công Trình Tiêu Biểu
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1.14] text-[#0a1f3c] tracking-tight"
            >
              Công trình kiến tạo dấu ấn.
            </motion.h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start lg:self-end">
            {/* Category filter pills */}
            <div className="flex items-center overflow-x-auto max-w-full p-1.5 bg-white rounded-2xl border border-gray-200/80 shadow-sm gap-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2 text-[11px] font-bold transition-all duration-300 rounded-xl cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#0a1f3c] text-white shadow-sm"
                        : "text-gray-500 hover:text-[#0a1f3c] hover:bg-gray-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Nav */}
            <div className="flex items-center gap-2 flex-shrink-0 bg-white p-1 rounded-2xl border border-gray-200/80 shadow-sm">
              <button
                onClick={prevProject}
                aria-label="Dự án trước"
                className="h-9 w-9 text-gray-500 hover:text-[#0a1f3c] hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-bold text-[#005bb7] font-mono px-2">
                {String(safeIndex + 1).padStart(2, "0")}/{String(totalFiltered).padStart(2, "0")}
              </span>
              <button
                onClick={nextProject}
                aria-label="Dự án tiếp theo"
                className="h-9 w-9 text-gray-500 hover:text-[#0a1f3c] hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main showcase card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl shadow-[#0a1f3c]/10 border border-gray-200/50">

          {/* Image */}
          <div
            onClick={() => setLightboxProject(activeProject)}
            className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-[580px] overflow-hidden group cursor-pointer"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activeProject.image})` }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent group-hover:from-black/70 transition-all duration-500" />

            <div className="absolute top-6 left-6">
              <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                {activeProject.type}
              </span>
            </div>

            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                Click để phóng to →
              </span>
            </div>
          </div>

          {/* Info panel — dark navy */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id + "-panel"}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="lg:col-span-6 bg-[#0a1f3c] p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative"
            >
              {/* Subtle orb */}
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#005bb7]/10 blur-[60px]" />

              <div className="relative space-y-6">
                <div>
                  <span className="text-[9px] font-bold text-[#c5a968] uppercase tracking-[0.22em] block mb-2 font-sans">
                    EUROWINDOW CERTIFIED — {String(safeIndex + 1).padStart(2, "0")}/{String(totalFiltered).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-bold text-[22px] sm:text-[28px] lg:text-[34px] text-white leading-tight tracking-tight">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Spec rows */}
                <div className="space-y-0 font-sans border-t border-white/10 pt-2">
                  {[
                    { label: "Loại công trình", value: activeProject.type },
                    { label: "Chủ đầu tư", value: activeProject.investor },
                    { label: "Khối lượng thi công", value: activeProject.volume },
                    { label: "Năm hoàn thành", value: activeProject.year },
                  ].map((row, i) => (
                    <div key={i} className="flex items-start justify-between py-3.5 border-b border-white/8 last:border-0">
                      <span className="text-[10px] text-white/35 font-bold uppercase tracking-wider flex-shrink-0 w-36">
                        {row.label}
                      </span>
                      <span className="text-[13px] font-bold text-white/85 text-right">{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech specs as pills */}
                <div className="space-y-2">
                  <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Giải pháp kỹ thuật</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-white/[0.07] border border-white/10 text-white/65 text-[10px] font-medium px-3 py-1.5 rounded-full"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#c5a968] flex-shrink-0" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer actions */}
              <div className="relative pt-6 border-t border-white/10 flex items-center justify-between mt-6">
                <button
                  onClick={() => setLightboxProject(activeProject)}
                  className="inline-flex items-center gap-2 text-[10px] font-bold text-[#c5a968] uppercase tracking-wider group hover:gap-3 transition-all cursor-pointer"
                >
                  Chi tiết dự án
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevProject}
                    aria-label="Dự án trước"
                    className="h-9 w-9 rounded-full border border-white/15 hover:border-[#c5a968]/50 text-white/50 hover:text-[#c5a968] flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextProject}
                    aria-label="Dự án sau"
                    className="h-9 w-9 rounded-full bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-[#c5a968]/25"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ── Dark Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxProject.title}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
            onClick={() => setLightboxProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative w-full max-w-4xl bg-[#0d2548] border border-white/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxProject(null)}
                aria-label="Đóng"
                className="absolute top-5 right-5 z-20 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer font-bold text-lg"
              >
                ✕
              </button>

              <div className="md:col-span-7 relative min-h-[280px] md:min-h-[460px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${lightboxProject.image})` }}
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#c5a968] text-[#0a1f3c] text-[9px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
                    {lightboxProject.year}
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] font-bold text-[#c5a968] uppercase tracking-[0.2em] block mb-1">
                      {lightboxProject.type}
                    </span>
                    <h3 className="font-display font-bold text-[22px] text-white leading-snug">
                      {lightboxProject.title}
                    </h3>
                    <p className="text-[12px] text-white/40 mt-1 font-sans">
                      Chủ đầu tư: {lightboxProject.investor}
                    </p>
                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <h4 className="text-[10px] font-bold uppercase text-white/35 tracking-widest">
                      Giải Pháp Kỹ Thuật
                    </h4>
                    <ul className="space-y-2.5">
                      {lightboxProject.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[12px] text-white/65 font-sans">
                          <Check className="h-4 w-4 text-[#c5a968] flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setLightboxProject(null)}
                  className="w-full mt-6 py-3.5 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[10px] uppercase tracking-[0.18em] rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  Đóng xem trước
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
