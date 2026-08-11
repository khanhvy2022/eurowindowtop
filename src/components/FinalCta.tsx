"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function FinalCta() {
  const ref = useReveal();

  return (
    <section className="relative bg-[#0a1f3c] overflow-hidden">
      {/* Cinematic background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('/images/figma_7b8b_7492_9f80bd72474c265be9813af7bc879a99.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f3c]/70 via-[#0a1f3c]/40 to-[#0a1f3c]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 py-32 lg:py-44 text-center reveal"
      >
        <div className="eyebrow text-[#c5a968] justify-center mb-8">
          Your Space, Your Way
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-tighter leading-[1.08]">
          <span className="block">Kiến tạo</span>
          <span className="block">không gian</span>
          <span className="block text-[#c5a968]">theo cách của bạn.</span>
        </h2>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-xs uppercase tracking-[0.16em] px-10 py-5 rounded-full transition-all duration-300 group"
          >
            BẮT ĐẦU
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#showroom"
            className="inline-flex items-center gap-3 border border-white/30 hover:border-white text-white font-bold text-xs uppercase tracking-[0.16em] px-10 py-5 rounded-full transition-all duration-300 group"
          >
            TÌM SHOWROOM
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
