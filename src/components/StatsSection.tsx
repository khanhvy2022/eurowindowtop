"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "./icons";

function useCountUp(target: number, duration = 1600, triggered = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [triggered, target, duration]);

  return value;
}

function MetricCard({
  target,
  suffix = "",
  label,
  sub,
  triggered,
  duration = 1800,
  delay = 0,
  index = 0,
}: {
  target: number;
  suffix?: string;
  label: string;
  sub?: string;
  triggered: boolean;
  duration?: number;
  delay?: number;
  index?: number;
}) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [triggered, delay]);

  const value = useCountUp(target, duration, started);
  const display = started ? value : 0;
  const formatted = display.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.1 }}
      className="relative bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm rounded-2xl p-7 group hover:border-[#c5a968]/30 hover:bg-white/[0.09] transition-all duration-500"
    >
      {/* Subtle gold glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(197,169,104,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative">
        <div className="flex items-end gap-1.5 mb-3">
          <span className="font-display font-extrabold text-[42px] sm:text-[52px] text-white leading-none tabular-nums">
            {formatted}
          </span>
          {suffix && (
            <span className="font-display font-bold text-[22px] text-[#c5a968] mb-1">
              {suffix}
            </span>
          )}
        </div>
        <div className="h-px w-8 bg-[#c5a968]/50 mb-3" />
        <p className="text-[10px] font-bold text-white/45 font-sans tracking-[0.16em] uppercase leading-snug">
          {label}
        </p>
        {sub && (
          <p className="text-[10px] text-white/30 font-sans mt-1">{sub}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const metrics = [
    { target: 20, suffix: "+", label: "Năm Kiến Tạo", sub: "Thành lập từ 2002", duration: 1400, delay: 0 },
    { target: 5000, suffix: "+", label: "Công Trình Kiến Tạo", sub: "Trên toàn quốc", duration: 2000, delay: 150 },
    { target: 14, suffix: "", label: "Năm liên tiếp Thương hiệu Quốc gia", sub: "Được công nhận", duration: 1000, delay: 300 },
    { target: 22, suffix: "+", label: "Showroom Trên Toàn Quốc", sub: "Phủ khắp 3 miền", duration: 1400, delay: 450 },
  ];

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative bg-[#0a1f3c] py-20 lg:py-32 overflow-hidden"
    >
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute -top-60 -right-60 h-[700px] w-[700px] rounded-full bg-[#005bb7]/8 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#c5a968]/6 blur-[100px]" />

      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a968]/20 to-transparent" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left — Text block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 text-[#c5a968] text-[10px] font-bold uppercase tracking-[0.22em]">
                <span className="h-px w-6 bg-[#c5a968]" />
                Eurowindow
              </span>
              <h2 className="font-display font-bold text-[30px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.12] text-white tracking-tight">
                Kiến tạo giá trị vượt thời gian.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-white/55 font-sans leading-relaxed max-w-lg">
                Hơn hai thập kỷ tiên phong kiến tạo những công trình biểu tượng — nơi thiết kế, độ chính xác và hiệu năng cùng gặp nhau trong từng hệ cửa & vách kính.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center gap-2.5 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[10px] uppercase tracking-[0.16em] px-7 py-3.5 rounded-full transition-all duration-300 group w-fit"
              >
                Về Eurowindow
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-bold text-[10px] uppercase tracking-[0.16em] px-7 py-3.5 rounded-full transition-all duration-300 group w-fit"
              >
                Xem công trình
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Hotline strip */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="h-10 w-10 rounded-full bg-[#c5a968]/15 border border-[#c5a968]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#c5a968] text-lg">☎</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Hotline 24/7</p>
                <p className="text-[18px] font-extrabold text-white tracking-wide">1800 577 775</p>
              </div>
            </div>
          </motion.div>

          {/* Right — 2×2 metric cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <MetricCard
                  key={m.label}
                  target={m.target}
                  suffix={m.suffix}
                  label={m.label}
                  sub={m.sub}
                  triggered={triggered}
                  duration={m.duration}
                  delay={m.delay}
                  index={i}
                />
              ))}
            </div>

            {/* Award badges row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="mt-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-6 py-4 flex items-center gap-6 flex-wrap"
            >
              <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest flex-shrink-0">
                Chứng nhận
              </span>
              {[
                "Thương hiệu Quốc gia",
                "Hàng VN Chất lượng cao",
                "ISO 9001:2015",
                "Huân chương Lao động",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-bold text-white/50 uppercase tracking-[0.1em]"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a968]/15 to-transparent" />
    </section>
  );
}
