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
    title: "Eurowindow cung cấp, lắp đặt cửa và vách kính tại khu đô thị Vinhomes Global Gate Cổ Loa",
    date: "08/08/2026",
    type: "text",
    desc: "Eurowindow chính thức ký kết và triển khai thi công toàn bộ hệ thống cửa nhôm kính cao cấp và vách kính tấm lớn cho siêu dự án Vinhomes Global Gate.",
    image: "/images/official/news_taithiet_hd.jpg",
  },
  {
    id: "n2",
    category: "su-kien",
    title: "Eurowindow tổ chức thành công tọa đàm 'Xu hướng nguồn nhân lực & Chiến lược phát triển bối cảnh mới'",
    date: "05/08/2026",
    type: "video",
    desc: "Sự kiện quy tụ dàn lãnh đạo và chuyên gia đầu ngành chia sẻ về định hướng phát triển bền vững và chiến lược kiến tạo môi trường làm việc chuyên nghiệp.",
    image: "/images/official/news_toadam_hd.png",
  },
  {
    id: "n3",
    category: "cong-ty",
    title: "Thể lệ chương trình khuyến mãi 'Siêu phẩm sang – Ưu đãi vàng' tri ân khách hàng",
    date: "30/07/2026",
    type: "text",
    desc: "Chương trình ưu đãi lớn nhất năm áp dụng cho tất cả sản phẩm cửa nhôm, cửa uPVC và giải pháp vách kính tiết kiệm năng lượng Eurowindow.",
    image: "/images/official/news_chietkhau_hd.png",
  },
  {
    id: "n4",
    category: "du-an",
    title: "Eurowindow trúng thầu thi công hệ cửa và vách nhôm kính dự án FPT Telecom Tower",
    date: "25/07/2026",
    type: "text",
    desc: "Khẳng định uy tín hàng đầu, Eurowindow tiếp tục trúng thầu thi công gói thầu vách kính Unitized chống ồn tản nhiệt tại tòa nhà FPT Telecom Tower.",
    image: "/images/official/project_office_hd.jpg",
  },
];

const secondaryArticles = [
  { title: "Eurowindow khởi động chiến dịch '90 ngày tái thiết nơi làm việc tốt nhất'", date: "20/07/2026", image: "/images/official/news_taithiet_hd.jpg" },
  { title: "Eurowindow góp phần kiến tạo không gian sống thượng lưu dự án Sunshine Noble Palace Long Biên", date: "15/07/2026", image: "/images/official/architect_hub_hd.jpg" },
  { title: "Tổng hợp giải pháp cửa chống nóng & cách nhiệt Eurowindow mùa hè 2026", date: "10/07/2026", image: "/images/official/cuanhom_hd.jpg" },
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
