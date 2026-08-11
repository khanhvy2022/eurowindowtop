"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

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

/* Slide images — dùng các ảnh Figma có sẵn */
const slides = [
  {
    img: "/images/figma_b6ac_65f5_684ee023d6399b6e08ffcb4058727370.png",
    caption: "Thương hiệu Quốc gia 14 năm liên tiếp",
  },
  {
    img: "/images/figma_4140_b90c_06d671ce00de7935b522cded3c8da554.png",
    caption: "Top công trình biểu tượng Việt Nam",
  },
  {
    img: "/images/figma_625e_2a98_10ede3a9081058280de283a2c53cc8f5.png",
    caption: "Chứng nhận quốc tế về chất lượng sản phẩm",
  },
  {
    img: "/images/figma_8128_3c7c_74d6dbaa92c1c5cf911a777a203bf190.png",
    caption: "Giải thưởng kiến trúc xuất sắc 2025",
  },
  {
    img: "/images/figma_1e8b_9e9b_c422d1d8418e50728bf537b2bfd9c195.png",
    caption: "Đối tác tin cậy của hàng nghìn kiến trúc sư",
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
    { id: "vnr500", logo: "/images/figma_ecac_248d_10ad0cfba1962ae9aebc0702ab2c6d05.png", text: "Top 500 doanh nghiệp lớn nhất Việt Nam" },
    { id: "top5",   logo: "/images/figma_4f6a_75f4_796c597231519f1558467a2214dd6a9e.png", text: "Top 5 công ty vật liệu xây dựng uy tín" },
    { id: "hvnclc", logo: "/images/figma_9b8b_3ba5_f90668738bd88ca4f4881c55aaf27ad1.png", text: "Hàng Việt Nam chất lượng cao" },
  ];

  /* ── Go to slide ── */
  const goTo = useCallback((idx: number, dir: "left" | "right" = "right") => {
    if (isTransitioning) return;
    setDirection(dir);
    setPrev(current);
    setCurrent(idx);
    setIsTransitioning(true);
    setTimeout(() => {
      setPrev(null);
      setIsTransitioning(false);
    }, TRANSITION_MS);
  }, [current, isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "right");
  }, [current, goTo]);

  const prevSlide = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "left");
  }, [current, goTo]);

  /* ── Autoplay ── */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, resetTimer]);

  /* ── Slide style helpers ── */
  const enterFrom = direction === "right" ? "translateX(100%)" : "translateX(-100%)";
  const exitTo    = direction === "right" ? "translateX(-100%)" : "translateX(100%)";

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
              <div className="section-tag text-[#005bb7]">
                <span className="h-2 w-2 bg-[#005bb7] rounded-sm inline-block" />
                THÀNH TÍCH NỔI BẬT
              </div>
              <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-tight text-gray-900 tracking-tight">
                Thành tích & giải thưởng cao quý
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500 font-sans leading-relaxed max-w-2xl">
                Eurowindow tự hào nhiều năm liền được vinh danh các thành tích và giải thưởng cao quý, do tổ chức uy tín trong và ngoài nước trao tặng.
              </p>
            </div>

            {/* Award Badges */}
            <div className="grid grid-cols-3 gap-6 items-start">
              {awards.map((award, idx) => (
                <div
                  key={award.id}
                  className="flex flex-col items-center text-center space-y-4 group cursor-pointer"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="h-28 w-28 flex items-center justify-center bg-gray-50 rounded-2xl p-4 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-[#005bb7]/20 transition-all duration-300">
                    <img
                      src={award.logo}
                      alt={award.text}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[12px] font-bold text-gray-600 font-sans leading-relaxed max-w-[130px]">
                    {award.text}
                  </p>
                </div>
              ))}
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
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              style={{ aspectRatio: "3/4", maxHeight: "620px" }}
            >
              {/* Exiting slide */}
              {prev !== null && (
                <div
                  key={`exit-${prev}`}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slides[prev].img})`,
                    transform: isTransitioning ? exitTo : "translateX(0)",
                    transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                    zIndex: 1,
                  }}
                />
              )}

              {/* Entering slide */}
              <div
                key={`enter-${current}`}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slides[current].img})`,
                  transform: isTransitioning ? "translateX(0)" : enterFrom,
                  transition: isTransitioning
                    ? `transform ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`
                    : "none",
                  zIndex: 2,
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none z-10" />

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p
                  key={current}
                  className="text-[13px] font-semibold text-white/90 font-sans leading-snug animate-fade-in"
                >
                  {slides[current].caption}
                </p>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
                <div
                  key={`bar-${current}`}
                  className="h-full bg-white/60"
                  style={{
                    animation: `slideProgress ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />
              </div>
            </div>

            {/* Floating dark glass badge */}
            <div className="absolute -left-6 bottom-14 glass-dark rounded-2xl px-5 py-4 shadow-xl hidden lg:flex flex-col gap-0.5 border border-white/10 float-y">
              <p className="text-[10px] text-white/55 font-bold uppercase tracking-wider">Thương hiệu quốc gia</p>
              <p className="text-[22px] font-display font-extrabold text-white">14 năm</p>
              <p className="text-[11px] text-white/45 font-sans">Liên tiếp</p>
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
