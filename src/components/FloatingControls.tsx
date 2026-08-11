"use client";

import React, { useEffect, useState } from "react";

export default function FloatingControls() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

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

      {/* ── Single Smooth Back-to-Top Button ── */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          aria-label="Cuộn về đầu trang"
          title="Về đầu trang"
          className={`h-12 w-12 rounded-full bg-[#005bb7] text-white hover:bg-[#00468c] shadow-[0_10px_25px_rgba(0,91,183,0.35)] hover:shadow-[0_15px_35px_rgba(0,91,183,0.5)] border border-white/20 flex items-center justify-center transition-all duration-400 ease-out transform hover:-translate-y-1 cursor-pointer ${
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
