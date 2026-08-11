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

interface SolutionItem {
  id: string;
  title: string;
  desc: string;
}

export default function BusinessSolution() {
  const [activeId, setActiveId] = useState("cua-chinh");
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const topRef = useReveal();
  const bottomRef = useReveal();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sectionRef.current) setSectionTop(sectionRef.current.offsetTop);
  }, []);

  const relScroll = Math.max(0, scrollY - sectionTop + 400);
  const bgShift = relScroll * 0.08;

  const solutions: SolutionItem[] = [
    { id: "residential", title: "RESIDENTIAL", desc: "Cửa & vách kính cho nhà ở, biệt thự — kiến tạo tổ ấm bền bỉ." },
    { id: "commercial", title: "COMMERCIAL", desc: "Giải pháp mặt dựng cho trung tâm thương mại, bán lẻ." },
    { id: "hospitality", title: "HOSPITALITY", desc: "Khách sạn, nghỉ dưỡng — trải nghiệm đẳng cấp từng chi tiết." },
    { id: "office", title: "OFFICE", desc: "Mặt dựng văn phòng, tiết kiệm năng lượng & thẩm mỹ." },
    { id: "public", title: "PUBLIC", desc: "Công trình công cộng, hạ tầng quốc gia quy mô lớn." },
  ];

  const villaBackground = "/images/figma_7b8b_7492_9f80bd72474c265be9813af7bc879a99.png";
  const activeItem = solutions.find((s) => s.id === activeId);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex flex-col justify-between text-white shimmer-line"
      style={{ minHeight: "88vh" }}
    >
      {/* Background — ken-burns + parallax scroll */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-[-8%] bg-cover bg-center ken-burns"
          style={{
            backgroundImage: `url(${villaBackground})`,
            transform: `translateY(${bgShift}px) scale(1.08)`,
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75 pointer-events-none gradient-breathe" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />

      {/* Top content */}
      <div ref={topRef} className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 pt-24 lg:pt-32 reveal">
        <div className="space-y-5 max-w-3xl">
          <div className="eyebrow text-[#c5a968]">
            Architectural Solutions
          </div>
          <h2 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[62px] leading-[1.08] text-white tracking-tight drop-shadow-md">
            Giải pháp cho từng loại công trình.
          </h2>
          {/* Active description — animate on change */}
          <p
            key={activeId}
            className="text-[15px] text-white/55 font-sans max-w-md animate-fade-in"
          >
            {activeItem?.desc}
          </p>
        </div>
      </div>

      {/* Bottom solution grid */}
      <div ref={bottomRef} className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 pb-14 lg:pb-20 mt-16 reveal delay-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative pl-5 pr-4 py-8 cursor-pointer group transition-all duration-400 border-t ${
                  isActive
                    ? "border-[#c5a968] bg-white/8 backdrop-blur-xs"
                    : "border-white/15 hover:border-white/40 hover:bg-white/5"
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <h3 className={`font-display font-bold text-[12px] tracking-widest uppercase mb-2.5 transition-colors duration-300 ${
                  isActive ? "text-white" : "text-white/60 group-hover:text-white/85"
                }`}>
                  {item.title}
                </h3>
                <p className={`text-[12px] text-white/45 font-sans leading-relaxed transition-all duration-300 ${
                  isActive ? "opacity-100 max-h-20" : "opacity-0 max-h-0 group-hover:opacity-50 group-hover:max-h-20"
                } overflow-hidden`}>
                  {item.desc}
                </p>
                {isActive && (
                  <div className="mt-4">
                    <Link href="#" className="inline-flex items-center gap-1.5 text-[10px] font-bold text-white/70 uppercase tracking-widest hover:text-white group/link transition-colors">
                      Xem thêm
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
