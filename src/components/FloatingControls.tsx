"use client";

import React, { useEffect, useState } from "react";

export default function FloatingControls() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showGridOverlay, setShowGridOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Top Scroll Progress Bar ── */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#0a1f3c] via-[#005bb7] to-[#c5a968] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── Architectural 12-Column Grid Overlay (Interactive KTS Toggle) ── */}
      {showGridOverlay && (
        <div className="fixed inset-0 z-[90] pointer-events-none max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex justify-between opacity-35 transition-opacity duration-300">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full w-px bg-gradient-to-b from-[#c5a968]/40 via-[#005bb7]/20 to-[#c5a968]/40 border-r border-dashed border-[#c5a968]/30"
            />
          ))}
        </div>
      )}

      {/* ── Floating Controls Group (Bottom Right) ── */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Architect Grid View Toggle Button */}
        <button
          onClick={() => setShowGridOverlay(!showGridOverlay)}
          aria-label="Bật/Tắt Lưới Kiến Trúc"
          title="Bật/Tắt Lưới Kiến Trúc (Architect Grid)"
          className={`h-11 px-4 rounded-full font-sans text-[10.5px] font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-lg border flex items-center gap-2 cursor-pointer ${
            showGridOverlay
              ? "bg-[#0a1f3c] text-[#c5a968] border-[#c5a968]"
              : "bg-white/90 backdrop-blur-md text-gray-700 hover:text-[#005bb7] border-gray-200 hover:border-[#005bb7]/40"
          }`}
        >
          <span className="text-[13px]">📐</span>
          <span className="hidden sm:inline">GRID VIEW</span>
        </button>

        {/* Smooth Back-to-Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Cuộn về đầu trang"
          title="Về đầu trang"
          className={`h-11 w-11 rounded-full bg-[#005bb7] text-white hover:bg-[#00468c] shadow-[0_10px_25px_rgba(0,91,183,0.35)] hover:shadow-[0_15px_35px_rgba(0,91,183,0.5)] border border-white/20 flex items-center justify-center transition-all duration-400 ease-out transform hover:-translate-y-1 cursor-pointer ${
            showBackToTop
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-6 pointer-events-none"
          }`}
        >
          <svg className="h-5 w-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}
