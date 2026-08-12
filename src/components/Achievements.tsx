"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return ref;
}

interface Award {
  id: string;
  logo: string;
  text: string;
}

/* Slide images — dùng các ảnh dự án & công trình tiêu biểu chính thức */
const slides = [
  {
    img: "/images/official/project_office_hd.jpg",
    caption: "Thương hiệu Quốc gia 14 năm liên tiếp — Tòa nhà Eurowindow Office",
  },
  {
    img: "/images/official/project_phubai_hd.jpg",
    caption: "Công trình biểu tượng quốc gia — Cảng hàng không Phú Bài Huế",
  },
  {
    img: "/images/official/project_bongoaigiao_hd.jpg",
    caption: "Công trình trụ sở trọng điểm — Trụ sở Bộ Ngoại Giao",
  },
  {
    img: "/images/official/project_ungbuou_hd.jpg",
    caption: "Công trình y tế thương mại — Bệnh viện Ung bướu Đà Nẵng",
  },
  {
    img: "/images/official/project_resort_hd.jpg",
    caption: "Khu nghỉ dưỡng sang trọng — Vinpearl Resort",
  },
];

const AUTOPLAY_MS = 3800;
const TRANSITION_MS = 700;

export default function Achievements() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leftRef = useReveal();
  const rightRef = useReveal();
  const awards: Award[] = [
    { id: "vnvalue", logo: "/images/official/award_vnvalue_hd.png", text: "Thương hiệu Quốc gia Việt Nam (VNValue)" },
    { id: "hvnclc",  logo: "/images/official/award_hvnclc_hd.png", text: "Hàng Việt Nam Chất Lượng Cao 16 năm liên tiếp" },
    { id: "huanchuong", logo: "/images/official/award_huanchuong_hd.png", text: "Huân chương Lao động hạng Nhất" },
    { id: "goldstar", logo: "/images/official/award_goldstar_hd.png", text: "Giải thưởng Sao Vàng Đất Việt" },
    { id: "ukas", logo: "/images/official/award_ukas_hd.png", text: "Chứng nhận chất lượng quốc tế UKAS & ISO 9001" },
    { id: "anab", logo: "/images/official/award_anab_hd.webp", text: "Chứng nhận hệ thống chất lượng ANAB (ANSI National Accreditation Board)" },
    { id: "iaf", logo: "/images/official/award_iaf_hd.webp", text: "Chứng nhận quốc tế IAF (International Accreditation Forum)" },
  ];
  const [awardPage, setAwardPage] = useState(0);
  const AWARDS_PER_PAGE = 3;
  const totalAwardPages = Math.ceil(awards.length / AWARDS_PER_PAGE);

  const visibleAwards = Array.from({ length: AWARDS_PER_PAGE }, (_, i) => {
    const index = (awardPage * AWARDS_PER_PAGE + i) % awards.length;
    return awards[index];
  });

  /* ── Go to slide ── */
  const goTo = useCallback((idx: number, dir: "left" | "right" = "right") => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    setDirection("right");
    setCurrent((prevIdx) => (prevIdx + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection("left");
    setCurrent((prevIdx) => (prevIdx - 1 + slides.length) % slides.length);
  }, []);

  /* ── Autoplay ── */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, resetTimer]);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute left-0 bottom-0 select-none pointer-events-none overflow-hidden">
        <span className="font-display font-extrabold text-[12vw] text-gray-50/80 tracking-tighter leading-none whitespace-nowrap block">
          Eurowindow
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text + Awards ── */}
          <div ref={leftRef} className="lg:col-span-7 space-y-12 reveal-left">
            <div className="space-y-5">
              <div className="eyebrow text-[#005bb7]">
                Recognition
              </div>
              <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-tight text-[#0a1f3c] tracking-tight">
                Được ghi nhận bởi những tiêu chuẩn cao nhất.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-ink-muted font-sans leading-relaxed max-w-2xl">
                Nhiều năm liền được vinh danh bởi các tổ chức uy tín trong và ngoài nước — bằng chứng cho cam kết chất lượng không ngừng.
              </p>
            </div>

            {/* Award Cards Slider — 3 items per slide, dark background, hover brightens & glows */}
            <div className="space-y-4 w-full">
              {/* Header + Award Slider Controls (loop: true) */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#c5a968] uppercase tracking-widest font-sans">
                  Hệ thống chứng nhận & giải thưởng
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setAwardPage((p) => (p - 1 + totalAwardPages) % totalAwardPages)}
                    aria-label="Previous awards"
                    className="h-8 w-8 rounded-lg border border-[#0a1f3c] bg-[#0a1f3c] text-white hover:bg-[#c5a968] hover:border-[#c5a968] hover:text-[#0a1f3c] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setAwardPage((p) => (p + 1) % totalAwardPages)}
                    aria-label="Next awards"
                    className="h-8 w-8 rounded-lg border border-[#0a1f3c] bg-[#0a1f3c] text-white hover:bg-[#c5a968] hover:border-[#c5a968] hover:text-[#0a1f3c] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 3 Award Cards (Dark background, bright glow on hover) */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 items-stretch w-full min-h-[195px]">
                {visibleAwards.map((award, idx) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="group relative flex flex-col items-center justify-between text-center p-4 rounded-2xl bg-[#06142a] border border-white/10 hover:bg-[#12315b] hover:border-[#c5a968] hover:shadow-[0_0_25px_rgba(197,169,104,0.35)] transition-all duration-400 cursor-pointer select-none"
                  >
                    {/* Top ambient highlight gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Logo Box container */}
                    <div className="w-full max-w-[96px] sm:max-w-[110px] aspect-square flex items-center justify-center bg-white/95 rounded-xl p-3 shadow-md border border-white/20 group-hover:bg-white group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300">
                      <img
                        src={award.logo}
                        alt={award.text}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Award Label */}
                    <p className="text-[11px] sm:text-[12px] font-bold text-white/80 group-hover:text-white font-sans leading-snug mt-3 transition-colors duration-300">
                      {award.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dot + arrows controls */}
            <div className="flex items-center gap-4">
              {/* Prev */}
              <button
                onClick={() => { prevSlide(); resetTimer(); }}
                aria-label="Previous"
                className="h-9 w-9 rounded-full border border-gray-200 hover:border-[#005bb7] hover:bg-[#005bb7] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Next */}
              <button
                onClick={() => { next(); resetTimer(); }}
                aria-label="Next"
                className="h-9 w-9 rounded-full border border-gray-200 hover:border-[#005bb7] hover:bg-[#005bb7] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="flex gap-1.5 items-center ml-1">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { goTo(i, i > current ? "right" : "left"); resetTimer(); }}
                    aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-400 cursor-pointer ${
                      i === current ? "w-7 h-2 bg-[#005bb7]" : "w-2 h-2 bg-gray-200 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Counter */}
              <span className="ml-auto text-[12px] font-bold text-gray-400 tabular-nums">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── Right: Auto-sliding image carousel ── */}
          <div ref={rightRef} className="lg:col-span-5 relative reveal-right delay-300">
            {/* Carousel frame */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#0a1f3c]"
              style={{ aspectRatio: "3/4", maxHeight: "620px" }}
            >
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction === "right" ? "100%" : "-100%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  exit={{ opacity: 0, x: direction === "right" ? "-100%" : "100%" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slides[current].img})` }}
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-10" />

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p
                  key={current}
                  className="text-[13px] font-semibold text-white/95 font-sans leading-snug drop-shadow-md"
                >
                  {slides[current].caption}
                </p>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
                <div
                  key={`bar-${current}`}
                  className="h-full bg-[#c5a968]"
                  style={{
                    animation: `slideProgress ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />
              </div>
            </div>

            {/* Floating champagne badge */}
            <div className="absolute -left-6 bottom-14 bg-[#0a1f3c] rounded-2xl px-6 py-5 shadow-2xl hidden lg:flex flex-col gap-0.5 border border-white/10 float-y z-30">
              <p className="text-[10px] text-[#c5a968] font-bold uppercase tracking-wider">Thương hiệu quốc gia</p>
              <p className="text-[30px] font-display font-extrabold text-white leading-none mt-1">14</p>
              <p className="text-[11px] text-white/50 font-sans mt-1">NĂM LIÊN TIẾP</p>
            </div>
          </div>

        </div>
      </div>

      {/* Progress bar keyframe */}
      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
