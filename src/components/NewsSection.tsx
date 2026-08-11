"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Play, ArrowRight } from "./icons";

interface NewsArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  type: "video" | "text";
  desc: string;
  image: string;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const AUTOPLAY_MS = 4500;
const TRANSITION_MS = 650;

const allArticles: NewsArticle[] = [
  {
    id: "n1",
    category: "du-an",
    title: 'Eurowindow 14 năm liên tiếp được vinh danh "Thương hiệu Quốc gia"',
    date: "08/08/2026",
    type: "video",
    desc: "Eurowindow không ngừng khẳng định vị thế thương hiệu bằng những giải thưởng uy tín, ghi dấu chất lượng vượt trội, đổi mới sáng tạo và phát triển bền vững.",
    image: "/images/figma_1be4_7228_235f85af7217f6d388a0231a83ec7e09.png",
  },
  {
    id: "n2",
    category: "su-kien",
    title: "Hội thảo quốc tế giải pháp mặt dựng kính tiết kiệm năng lượng",
    date: "05/08/2026",
    type: "text",
    desc: "Hội thảo quy tụ các chuyên gia hàng đầu thảo luận về công nghệ mặt dựng nhôm kính mới giúp giảm thiểu tiêu thụ năng lượng của tòa nhà cao tầng.",
    image: "/images/figma_b18c_11f0_2ef047e598522176df10594d5037095a.png",
  },
  {
    id: "n3",
    category: "cong-ty",
    title: "Eurowindow trao tặng giải thưởng cống hiến cho cán bộ nhân viên xuất sắc",
    date: "30/07/2026",
    type: "text",
    desc: "Lễ vinh danh ghi nhận những đóng góp to lớn của các cá nhân và tập thể tiêu biểu đồng hành cùng sự phát triển bền vững của tập đoàn.",
    image: "/images/figma_02eb_ff31_11e50ba11f994ad1cc4af857168b9879.png",
  },
  {
    id: "n4",
    category: "video",
    title: "Hành trình kiến tạo tương lai xanh - Phóng sự Eurowindow 2026",
    date: "25/07/2026",
    type: "video",
    desc: "Xem video toàn cảnh về quy mô sản xuất hiện đại và quy trình kiểm duyệt chất lượng khắt khe tại nhà máy Eurowindow.",
    image: "/images/figma_97cc_2fb9_127c87d3ad918d7645c788e55e8ebbc6.png",
  },
];

const secondaryArticles = [
  { title: "Eurowindow khởi công cung cấp vách kính dự án Lotte Mall Tây Hồ", date: "20/07/2026", image: "/images/figma_b18c_11f0_2ef047e598522176df10594d5037095a.png" },
  { title: "Bộ sưu tập cửa thông minh thế hệ mới tích hợp khóa nhận diện khuôn mặt", date: "15/07/2026", image: "/images/figma_02eb_ff31_11e50ba11f994ad1cc4af857168b9879.png" },
  { title: "Thị trường vật liệu xây dựng xanh: Cơ hội bứt phá của Eurowindow", date: "10/07/2026", image: "/images/figma_97cc_2fb9_127c87d3ad918d7645c788e55e8ebbc6.png" },
];

const categories = [
  { id: "su-kien", label: "Tin tức & Sự kiện" },
  { id: "du-an",   label: "Tin dự án" },
  { id: "cong-ty", label: "Tin công ty" },
  { id: "video",   label: "Video" },
];

export default function NewsSection() {
  const [activeCat, setActiveCat]       = useState("du-an");
  const [currentIdx, setCurrentIdx]     = useState(0);
  const [prevIdx, setPrevIdx]           = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [textVisible, setTextVisible]   = useState(true);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const headerRef = useReveal();
  const mainRef   = useReveal();
  const gridRef   = useReveal();

  /* Filter articles by category — fall back to first article */
  const filtered = allArticles.filter(a => a.category === activeCat);
  const pool     = filtered.length ? filtered : allArticles;
  const article  = pool[currentIdx % pool.length];

  /* ── Go to index with slide transition ── */
  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTextVisible(false);
    setPrevIdx(currentIdx % pool.length);
    setTimeout(() => {
      setCurrentIdx(idx % pool.length);
      setTransitioning(false);
      setTimeout(() => setTextVisible(true), 80);
      setPrevIdx(null);
    }, TRANSITION_MS);
  }, [transitioning, currentIdx, pool.length]);

  const nextSlide = useCallback(() => {
    goTo((currentIdx + 1) % pool.length);
  }, [currentIdx, pool.length, goTo]);

  /* ── Autoplay ── */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(nextSlide, AUTOPLAY_MS);
  }, [nextSlide]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [currentIdx, activeCat, resetTimer]);

  /* ── Reset index when category changes ── */
  const handleCatChange = (cat: string) => {
    setActiveCat(cat);
    setCurrentIdx(0);
    setPrevIdx(null);
    setTransitioning(false);
    setTextVisible(true);
  };

  return (
    <section id="news" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* ── Header ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 reveal">
          <div className="space-y-4">
            <div className="eyebrow text-[#005bb7]">
              Journal
            </div>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-tight text-[#0a1f3c] tracking-tight">
              Tin tức &amp; Sự kiện
            </h2>
          </div>
          <a href="#" className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#005bb7] border-b border-[#005bb7]/25 pb-1 hover:border-[#005bb7] transition-all whitespace-nowrap self-end">
            — XEM TẤT CẢ TIN TỨC
          </a>
        </div>

        {/* ── Main 3-column layout ── */}
        <div ref={mainRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16 reveal delay-100">

          {/* 1. Left sidebar — categories */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-0 border-l-2 border-gray-100 pl-5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCatChange(cat.id)}
                  className={`text-left text-[13px] font-bold py-3 transition-all duration-200 cursor-pointer relative ${
                    activeCat === cat.id ? "text-[#005bb7]" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {activeCat === cat.id && (
                    <span className="absolute -left-5 top-0 bottom-0 w-0.5 bg-[#005bb7]" />
                  )}
                  {activeCat === cat.id && (
                    <span className="inline-block mr-2 text-[#005bb7]">—</span>
                  )}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Center — auto-sliding featured image */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              style={{ aspectRatio: "4/3" }}
              onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); nextSlide(); }}
            >
              {/* Exiting slide */}
              {prevIdx !== null && (
                <div
                  key={`exit-${prevIdx}`}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${pool[prevIdx].image})`,
                    opacity: transitioning ? 0 : 1,
                    transition: `opacity ${TRANSITION_MS}ms ease-in-out`,
                    zIndex: 1,
                  }}
                />
              )}

              {/* Active slide — ken-burns while shown */}
              <div
                key={`enter-${currentIdx}-${activeCat}`}
                className="absolute inset-0 bg-cover bg-center ken-burns"
                style={{
                  backgroundImage: `url(${article.image})`,
                  opacity: transitioning ? 0 : 1,
                  transition: `opacity ${TRANSITION_MS}ms ease-in-out`,
                  zIndex: 2,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/8 group-hover:bg-black/18 transition-colors duration-500 z-10" />

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/15 z-20">
                <div
                  key={`prog-${currentIdx}-${activeCat}`}
                  className="h-full bg-white/60 rounded-full"
                  style={{ animation: `slideProgress ${AUTOPLAY_MS}ms linear forwards` }}
                />
              </div>

              {/* Play button for video */}
              {article.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button
                    onClick={(e) => { e.stopPropagation(); setIsPlayingVideo(true); }}
                    className="h-16 w-16 bg-white/85 hover:bg-white text-[#005bb7] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="h-6 w-6 ml-1" style={{ fill: "currentColor" }} />
                  </button>
                </div>
              )}

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                  article.type === "video" ? "bg-[#005bb7] text-white" : "bg-white/90 text-gray-700"
                }`}>
                  {article.type === "video" ? "▶ Video" : "Tin tức"}
                </span>
              </div>
            </div>

            {/* Dot nav below image */}
            {pool.length > 1 && (
              <div className="flex items-center gap-1.5 mt-4">
                {pool.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { goTo(i); resetTimer(); }}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentIdx % pool.length
                        ? "w-6 h-1.5 bg-[#005bb7]"
                        : "w-1.5 h-1.5 bg-gray-200 hover:bg-gray-400"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 3. Right — article text, fades on slide change */}
          <div
            className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:min-h-full lg:pl-2"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.45s ease, transform 0.45s ease`,
            }}
          >
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-gray-400 font-sans tracking-widest uppercase">
                {article.date}{article.type === "video" ? " · Video" : ""}
              </span>
              <h3
                onClick={() => article.type === "video" && setIsPlayingVideo(true)}
                className={`font-display font-bold text-[20px] sm:text-[24px] leading-snug text-gray-900 hover:text-[#005bb7] transition-colors ${
                  article.type === "video" ? "cursor-pointer" : ""
                }`}
              >
                {article.title}
              </h3>
            </div>
            <p className="text-[14px] text-gray-500 font-sans leading-relaxed">
              {article.desc}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#005bb7] group border-b border-[#005bb7]/20 pb-1.5 w-fit hover:border-[#005bb7] transition-all"
            >
              Xem chi tiết
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* ── Secondary articles grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-14 reveal delay-200">
          {secondaryArticles.map((art, idx) => (
            <div key={idx} className="space-y-4 cursor-pointer group">
              <div className="rounded-xl overflow-hidden relative" style={{ aspectRatio: "16/10" }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${art.image})` }}
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-gray-400 font-sans">{art.date}</span>
                <h4 className="font-display font-bold text-[14px] sm:text-[15px] text-gray-900 group-hover:text-[#005bb7] transition-colors line-clamp-2 leading-snug">
                  {art.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Video modal ── */}
      {isPlayingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsPlayingVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl cursor-pointer transition-colors"
            >
              ✕
            </button>
            <div className="relative" style={{ aspectRatio: "16/9" }}>
              <video
                className="absolute inset-0 w-full h-full object-contain bg-black"
                controls
                autoPlay
                playsInline
              >
                <source src="/videos/news-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Progress bar animation */}
      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
