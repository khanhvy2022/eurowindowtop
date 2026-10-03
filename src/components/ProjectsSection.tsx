"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  MapPin, 
  Building2, 
  Calendar, 
  Layers,
  X
} from "./icons";
import { projectsData, projectCategories, ProjectItem } from "@/data/projectsData";

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

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<ProjectItem | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const headerRef = useReveal();

  useEffect(() => {
    if (!lightbox) return;
    setActiveImage(lightbox.image);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const filtered =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

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
              Công Trình Tiêu Biểu & Dấu Ấn Kiến Trúc
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
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
              className="text-white/60 text-sm sm:text-base leading-relaxed"
            >
              Hơn hai thập kỷ đồng hành cùng các công trình biểu tượng quốc gia, trụ sở cơ quan bộ ngành, bệnh viện, khu nghỉ dưỡng và đại đô thị cao cấp khắp Việt Nam.
            </motion.p>
          </div>

          {/* Filter */}
          <div className="flex items-center p-1.5 bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/15 gap-1 flex-wrap">
            {projectCategories.map((cat) => (
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
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.04 }}
                onClick={() => setLightbox(project)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-[#c5a968]/60 bg-[#0d2548] shadow-2xl shadow-black/30 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Image container */}
                <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/40 to-black/20" />

                  {/* Type badge */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                      {project.type}
                    </span>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#c5a968] text-[#0a1f3c] text-[10px] font-extrabold tracking-widest px-3 py-1.5 rounded-full shadow-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom content overlay on card */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="h-px w-5 bg-[#c5a968]" />
                      <span className="text-[10px] font-bold text-[#c5a968] uppercase tracking-wider">
                        {project.volume}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-[19px] sm:text-[21px] text-white leading-snug drop-shadow-md">
                      {project.title}
                    </h3>

                    {/* Address snippet */}
                    <div className="flex items-center gap-1.5 text-white/80 text-[12px] font-sans">
                      <MapPin className="h-3.5 w-3.5 text-[#c5a968] flex-shrink-0" />
                      <span className="truncate">{project.address}</span>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#c5a968] group-hover:text-white uppercase tracking-wider transition-colors duration-300">
                        Chi tiết dự án
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-[10px] text-white/50 bg-white/10 px-2.5 py-0.5 rounded-full">
                        {project.location}
                      </span>
                    </div>
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
          className="mt-12 flex items-center justify-center text-center"
        >
          <a
            href="/cong-trinh"
            className="inline-flex items-center gap-2.5 text-[12px] font-bold text-white hover:text-[#c5a968] bg-white/10 hover:bg-white/15 px-6 py-3 rounded-full border border-white/20 transition-all duration-300 group shadow-lg"
          >
            <span>Xem toàn bộ hồ sơ công trình tiêu biểu ({projectsData.length}+ dự án)</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* ── Comprehensive Project Detail Modal ── */}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-[#0d2548] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                aria-label="Đóng"
                className="absolute top-4 right-4 z-30 h-10 w-10 rounded-full bg-black/60 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer backdrop-blur-md border border-white/20 shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto max-h-[92vh] divide-y divide-white/10">
                {/* ── Top Hero Image & Key Badges ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 relative bg-[#0a1f3c]">
                  {/* Main Large Image */}
                  <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] bg-slate-900 overflow-hidden flex flex-col justify-between">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                      style={{ backgroundImage: `url(${activeImage || lightbox.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2548] via-transparent to-black/40" />

                    {/* Top Badges */}
                    <div className="relative z-10 p-5 flex items-center justify-between">
                      <span className="bg-[#c5a968] text-[#0a1f3c] text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                        {lightbox.year}
                      </span>
                      <span className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                        {lightbox.location}
                      </span>
                    </div>

                    {/* Gallery Thumbnails if available */}
                    {lightbox.gallery && lightbox.gallery.length > 1 && (
                      <div className="relative z-10 p-4 flex gap-2 overflow-x-auto bg-black/30 backdrop-blur-sm border-t border-white/10">
                        {lightbox.gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`h-14 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                              (activeImage || lightbox.image) === img
                                ? "border-[#c5a968] scale-105 shadow-md"
                                : "border-white/30 opacity-70 hover:opacity-100"
                            }`}
                          >
                            <img src={img} alt={`${lightbox.title} ảnh ${idx + 1}`} className="h-full w-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quick Overview Sidebar */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c5a968]" />
                        <span className="text-[10px] font-extrabold text-[#c5a968] uppercase tracking-[0.2em]">
                          {lightbox.type}
                        </span>
                      </div>

                      <h2 className="font-display font-bold text-[22px] sm:text-[26px] text-white leading-tight">
                        {lightbox.title}
                      </h2>

                      {/* Prominent Address Box */}
                      <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-[#c5a968]/40 space-y-1.5">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#c5a968]">
                          <MapPin className="h-4 w-4 text-[#c5a968] flex-shrink-0" />
                          <span>Địa Chỉ Dự Án:</span>
                        </div>
                        <p className="text-white text-sm font-medium leading-relaxed pl-6">
                          {lightbox.address}
                        </p>
                      </div>

                      {/* Key Attributes list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-2">
                        <div className="flex items-start gap-2.5 text-xs text-white/80">
                          <Building2 className="h-4 w-4 text-[#c5a968] flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white/40 block text-[10px] uppercase font-bold">Chủ Đầu Tư</span>
                            <span className="text-white font-medium">{lightbox.investor}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-xs text-white/80">
                          <Layers className="h-4 w-4 text-[#c5a968] flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white/40 block text-[10px] uppercase font-bold">Quy Mô / Khối Lượng</span>
                            <span className="text-white font-medium">{lightbox.volume}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-xs text-white/80">
                          <Calendar className="h-4 w-4 text-[#c5a968] flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white/40 block text-[10px] uppercase font-bold">Năm Triển Khai</span>
                            <span className="text-white font-medium">{lightbox.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Deep Information & Technical Solutions ── */}
                <div className="p-6 sm:p-8 space-y-8 bg-[#0d2548]">
                  {/* Section 1: Detailed Project Information */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#c5a968] text-xs font-bold uppercase tracking-widest">
                      <span className="h-2 w-2 rounded-full bg-[#c5a968]" />
                      Thông Tin Chi Tiết Dự Án
                    </div>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans text-justify">
                      {lightbox.description}
                    </p>
                    {lightbox.scale && (
                      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white/90">
                        <strong className="text-[#c5a968]">Quy mô & Thông số kiến trúc: </strong>
                        {lightbox.scale}
                      </div>
                    )}
                  </div>

                  {/* Section 2: Eurowindow Solution */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#c5a968] text-xs font-bold uppercase tracking-widest">
                      <span className="h-2 w-2 rounded-full bg-[#c5a968]" />
                      Giải Pháp & Hạng Mục Eurowindow Thi Công
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed font-sans text-justify">
                      {lightbox.solution}
                    </p>

                    {/* Specs Bullet Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {lightbox.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#c5a968]/40 transition-colors"
                        >
                          <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-[#c5a968]/20 border border-[#c5a968]/40 flex items-center justify-center">
                            <Check className="h-3 w-3 text-[#c5a968]" />
                          </div>
                          <span className="text-xs text-white/90 leading-snug font-medium">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                    <div className="text-xs text-white/50 flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[#c5a968]" />
                      <span>{lightbox.address}</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href="#contact"
                        onClick={() => setLightbox(null)}
                        className="flex-1 sm:flex-none text-center px-6 py-3 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
                      >
                        Tư vấn giải pháp dự án
                      </a>
                      <button
                        onClick={() => setLightbox(null)}
                        className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                      >
                        Đóng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
