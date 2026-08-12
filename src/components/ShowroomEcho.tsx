"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";

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

export default function ShowroomEcho() {
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useReveal();
  const imgRef = useReveal();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sectionRef.current)
      setSectionTop(sectionRef.current.offsetTop);
  }, []);

  const relScroll = Math.max(0, scrollY - sectionTop + 300);
  const bgParallax = relScroll * 0.06;
  const cardParallax = relScroll * -0.03;

  const showroomImg = "/images/official/showroom_banner_hd.png";
  const cardImg = "/images/official/project_office_hd.jpg";

  return (
    <section
      ref={sectionRef}
      id="showroom"
      className="relative w-full overflow-hidden flex items-center shimmer-line"
      style={{ minHeight: "88vh" }}
    >
      {/* Background — ken-burns + parallax scroll */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-[-8%] bg-cover bg-center ken-burns-slow"
          style={{
            backgroundImage: `url(${showroomImg})`,
            filter: "brightness(0.26) saturate(1.5)",
            transform: `translateY(${bgParallax}px) scale(1.08)`,
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />

      {/* Content */}
      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 py-24 lg:py-32">

        {/* Left: Text */}
        <div ref={textRef} className="max-w-2xl text-white space-y-10 reveal-left">
          <div className="space-y-5">
            <div className="eyebrow text-[#c5a968]">
              Showroom Experience
            </div>
            <h2 className="font-display font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] leading-[1.08] tracking-tight">
              Chạm. Cảm nhận. Trải nghiệm.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-white/60 font-sans leading-relaxed max-w-lg">
              20+ showroom trên toàn quốc — nơi bạn trực tiếp chạm vào và cảm nhận chất lượng từng hệ cửa &amp; vách kính Eurowindow.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[11px] uppercase tracking-[0.14em] px-8 py-4 rounded-full shadow-xl transition-all duration-300 group"
            >
              TÌM SHOWROOM
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-3 border border-white/30 hover:border-white text-white font-bold text-[11px] uppercase tracking-[0.14em] px-8 py-4 rounded-full transition-all duration-300 group"
            >
              TẢI CATALOGUE
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right: Floating card with counter-parallax */}
        <div
          ref={imgRef}
          className="relative flex-shrink-0 reveal-right delay-300"
          style={{
            width: "min(390px, 90vw)",
            transform: `translateY(${cardParallax}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {/* Card */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.65)] border border-white/10 float-y"
            style={{ aspectRatio: "3/4" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center ken-burns-alt"
              style={{
                backgroundImage: `url(${cardImg})`,
                backgroundPosition: "center 30%",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating glass badge — float with slight delay */}
          <div className="absolute -bottom-6 -left-8 glass rounded-2xl px-5 py-4 shadow-2xl border border-white/15 float-y float-delay">
            <p className="text-[10px] text-white/55 font-bold uppercase tracking-wider mb-1">Showroom</p>
            <p className="text-[17px] font-display font-bold text-white">20+ Chi nhánh</p>
            <p className="text-[11px] text-white/55 font-sans">Trên toàn quốc</p>
          </div>

          {/* Second floating badge */}
          <div className="absolute -top-6 -right-4 glass-dark rounded-xl px-4 py-3 border border-white/10 float-y-sm float-delay2">
            <p className="text-[10px] text-white/55 font-bold uppercase tracking-wider">Hotline</p>
            <p className="text-[14px] font-display font-bold text-white">1800 577 775</p>
          </div>
        </div>

      </div>
    </section>
  );
}
