"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "./icons";

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
      { threshold: 0.08 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

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
  {
    id: "p-8",
    category: "commercial",
    title: "FPT TELECOM TOWER",
    type: "Commercial Office",
    investor: "Công ty Cổ phần Viễn thông FPT (FPT Telecom)",
    volume: "33.000 hạng mục",
    year: "2026",
    image: "/images/official/project_fpt_hd.jpg",
    specs: [
      "Hệ mặt dựng nhôm kính và cửa tự động chuẩn văn phòng hạng A",
      "Mái kính kết hợp lan can kính cường lực an toàn",
      "Cấu kiện kim loại phụ trợ gia công độ chính xác cao",
    ],
  },
  {
    id: "p-9",
    category: "residential",
    title: "SUNSHINE CRYSTAL RIVER",
    type: "Luxury Residential",
    investor: "Tập đoàn Sunshine Group",
    volume: "30.000 m²",
    year: "2025",
    image: "/images/official/project_sunshine_hd.jpg",
    specs: [
      "Vách mặt dựng nhôm kính giấu đố sang trọng, tối giản",
      "Kính dán an toàn tăng chịu lực, cách âm, cản tia UV",
      "Lan can kính louver và mái kính hoàn thiện trọn gói",
    ],
  },
];

const categories = [
  { id: "all", label: "Tất cả" },
  { id: "national", label: "Cấp quốc gia" },
  { id: "commercial", label: "Thương mại & Y tế" },
  { id: "residential", label: "Khu đô thị" },
  { id: "hospitality", label: "Nghỉ dưỡng & Resort" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<ProjectItem | null>(null);
  const headerRef = useReveal();

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategory = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <section id="projects" className="bg-[#0a1f3c] py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-48 right-0 h-[34rem] w-[34rem] rounded-full bg-[#005bb7]/25 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#c5a968]/10 blur-[130px]" />
      {/* Subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #c5a968 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Gold hairline divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5a968]/30 to-transparent" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 reveal">
          <div className="space-y-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 text-[#c5a968] text-[10px] font-bold uppercase tracking-[0.22em]"
            >
              <span className="h-px w-6 bg-[#c5a968]" />
              Công Trình Tiêu Biểu
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[1.1] text-white tracking-tight"
            >
              Công trình kiến tạo dấu ấn.
            </motion.h2>
          </div>

          {/* Filter */}
          <div className="flex items-center p-1.5 bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/15 gap-1 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`px-4 py-2 text-[11px] font-bold transition-all duration-300 rounded-xl cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#c5a968] text-[#0a1f3c] shadow-lg shadow-[#c5a968]/20"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Media-card grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-[#c5a968]/60 bg-[#0d2548] shadow-2xl shadow-black/30 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
              >
                {/* Invisible full-card click target (keyboard accessible) */}
                <button
                  type="button"
                  onClick={() => setLightbox(project)}
                  aria-label={`Xem chi tiết dự án ${project.title}`}
                  className="absolute inset-0 z-20 cursor-pointer focus:outline-none"
                />

                <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/25 to-black/10" />

                  {/* Type badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                      {project.type}
                    </span>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#c5a968] text-[#0a1f3c] text-[10px] font-extrabold tracking-widest px-3 py-1.5 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10 p-6 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="h-px w-5 bg-[#c5a968]" />
                      <span className="text-[9px] font-bold text-[#c5a968] uppercase tracking-widest">
                        {project.volume}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-[18px] sm:text-[20px] text-white leading-snug drop-shadow-md">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold text-white/70 uppercase tracking-widest opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Xem chi tiết
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View all projects link ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="/cong-trinh"
            className="inline-flex items-center gap-2.5 text-[11px] font-bold text-white/50 uppercase tracking-[0.15em] hover:text-[#c5a968] border-b border-white/15 hover:border-[#c5a968] pb-1 transition-all duration-300 group"
          >
            Xem toàn bộ công trình
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
            onClick={() => setLightbox(null)}
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
                onClick={() => setLightbox(null)}
                aria-label="Đóng"
                className="absolute top-5 right-5 z-20 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer font-bold text-lg"
              >
                ✕
              </button>

              <div className="md:col-span-7 relative min-h-[280px] md:min-h-[460px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${lightbox.image})` }}
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#c5a968] text-[#0a1f3c] text-[9px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
                    {lightbox.year}
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] font-bold text-[#c5a968] uppercase tracking-[0.2em] block mb-1">
                      {lightbox.type}
                    </span>
                    <h3 className="font-display font-bold text-[20px] text-white leading-snug">
                      {lightbox.title}
                    </h3>
                    <p className="text-[11px] text-white/35 mt-1.5 font-sans">
                      Chủ đầu tư: {lightbox.investor}
                    </p>
                  </div>

                  <div className="space-y-3.5 border-t border-white/10 pt-5">
                    <h4 className="text-[9px] font-bold uppercase text-white/30 tracking-widest">
                      Giải Pháp Kỹ Thuật
                    </h4>
                    <ul className="space-y-3">
                      {lightbox.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[12px] text-white/60 font-sans">
                          <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-[#c5a968]/15 border border-[#c5a968]/30 flex items-center justify-center">
                            <Check className="h-2.5 w-2.5 text-[#c5a968]" />
                          </div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setLightbox(null)}
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
