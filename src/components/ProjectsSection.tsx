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
  const [activeIdx, setActiveIdx] = useState(0);
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

  const total = filtered.length;
  const safeIdx = activeIdx % total;
  const active = filtered[safeIdx] ?? projects[0];

  const handleCategory = (id: string) => {
    setActiveCategory(id);
    setActiveIdx(0);
  };

  const next = () => setActiveIdx((i) => (i + 1) % total);
  const prev = () => setActiveIdx((i) => (i - 1 + total) % total);

  return (
    <section id="projects" className="bg-[#f4f7fc] py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0a1f3c 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 reveal">
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
              className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[1.1] text-[#0a1f3c] tracking-tight"
            >
              Công trình kiến tạo dấu ấn.
            </motion.h2>
          </div>

          {/* Filter + nav */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            <div className="flex items-center p-1.5 bg-white rounded-2xl border border-gray-200/70 shadow-sm gap-1 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategory(cat.id)}
                  className={`px-4 py-2 text-[11px] font-bold transition-all duration-300 rounded-xl cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-[#0a1f3c] text-white shadow-sm"
                      : "text-gray-500 hover:text-[#0a1f3c] hover:bg-gray-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-gray-200/70 shadow-sm">
              <button onClick={prev} aria-label="Trước" className="h-9 w-9 text-gray-500 hover:text-[#0a1f3c] hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all cursor-pointer">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-bold text-[#005bb7] font-mono px-2">
                {String(safeIdx + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
              <button onClick={next} aria-label="Sau" className="h-9 w-9 text-gray-500 hover:text-[#0a1f3c] hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all cursor-pointer">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Main showcase ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl shadow-[#0a1f3c]/12"
        >
          {/* ── Left: Image ── */}
          <div
            onClick={() => setLightbox(active)}
            className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden group cursor-pointer"
            style={{ minHeight: "520px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-img"}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-700"
                style={{ backgroundImage: `url(${active.image})` }}
              />
            </AnimatePresence>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/70 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

            {/* Type badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full">
                {active.type}
              </span>
            </div>

            {/* Year badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className="bg-[#c5a968] text-[#0a1f3c] text-[10px] font-extrabold tracking-widest px-3.5 py-1.5 rounded-full">
                {active.year}
              </span>
            </div>

            {/* Click to expand hint */}
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Phóng to</span>
            </div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-5 px-6 flex gap-2.5 overflow-x-auto scrollbar-none">
              {filtered.map((p, i) => (
                <button
                  key={p.id}
                  onClick={(e) => { e.stopPropagation(); setActiveIdx(i); }}
                  className={`flex-shrink-0 h-11 w-16 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    i === safeIdx
                      ? "border-[#c5a968] opacity-100 scale-105"
                      : "border-white/20 opacity-50 hover:opacity-80"
                  }`}
                  style={{ backgroundImage: `url(${p.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  aria-label={p.title}
                />
              ))}
            </div>
          </div>

          {/* ── Right: Info Panel (dark navy) ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-panel"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="lg:col-span-6 bg-[#0a1f3c] flex flex-col relative"
            >
              {/* Ambient orb */}
              <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#005bb7]/12 blur-[80px]" />
              <div className="pointer-events-none absolute -top-20 left-10 h-48 w-48 rounded-full bg-[#c5a968]/5 blur-[60px]" />

              {/* ── Panel Top: Index + Title ── */}
              <div className="relative px-8 sm:px-12 pt-10 pb-7 border-b border-white/[0.08]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-bold text-[#c5a968] uppercase tracking-[0.25em] font-sans">
                    EUROWINDOW CERTIFIED
                  </span>
                  <span className="text-[11px] font-mono font-bold text-white/25">
                    {String(safeIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[20px] sm:text-[26px] lg:text-[30px] text-white leading-tight tracking-tight">
                  {active.title}
                </h3>
              </div>

              {/* ── Panel Middle: Meta rows ── */}
              <div className="relative px-8 sm:px-12 py-6 border-b border-white/[0.08] space-y-0">
                {[
                  { label: "Loại công trình", value: active.type },
                  { label: "Chủ đầu tư", value: active.investor },
                  { label: "Khối lượng thi công", value: active.volume },
                  { label: "Năm hoàn thành", value: active.year },
                ].map((row, i) => (
                  <div key={i} className="flex items-start justify-between py-3.5 border-b border-white/[0.06] last:border-0">
                    <span className="text-[10px] text-white/35 font-bold uppercase tracking-wider flex-shrink-0 w-32">
                      {row.label}
                    </span>
                    <span className="text-[12px] font-semibold text-white/80 text-right leading-snug max-w-[55%]">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── Panel Bottom: Tech specs + CTA ── */}
              <div className="relative px-8 sm:px-12 py-7 flex flex-col gap-6 flex-1">
                <div className="space-y-3">
                  <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">
                    Giải pháp kỹ thuật
                  </p>
                  <ul className="space-y-3">
                    {active.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-[#c5a968]/15 border border-[#c5a968]/30 flex items-center justify-center">
                          <Check className="h-2.5 w-2.5 text-[#c5a968]" />
                        </div>
                        <span className="text-[12px] text-white/65 font-sans leading-snug">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA row */}
                <div className="mt-auto pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    onClick={() => setLightbox(active)}
                    className="inline-flex items-center gap-2 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-300 group shadow-lg shadow-[#c5a968]/20 cursor-pointer"
                  >
                    Xem chi tiết
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Dự án trước"
                      className="h-10 w-10 rounded-full border border-white/15 hover:border-white/35 text-white/40 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Dự án sau"
                      className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
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
            className="inline-flex items-center gap-2.5 text-[11px] font-bold text-[#0a1f3c]/60 uppercase tracking-[0.15em] hover:text-[#005bb7] border-b border-[#0a1f3c]/15 hover:border-[#005bb7] pb-1 transition-all duration-300 group"
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
