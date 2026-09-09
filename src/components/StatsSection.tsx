"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [triggered, target, duration]);

  return value;
}

function useRevealState(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          e.target.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

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

function Metric({
  target,
  suffix = "",
  label,
  triggered,
  duration = 1800,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  label: string;
  triggered: boolean;
  duration?: number;
  delay?: number;
}) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [triggered, delay]);

  const value = useCountUp(target, duration, started);
  const display = started ? value : target;
  const formatted = display.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div
      className="space-y-2"
      style={{
        opacity: triggered ? 1 : 0,
        transform: triggered ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease`,
      }}
    >
      <div className="flex items-end gap-1">
        <span className="font-display font-extrabold text-[44px] sm:text-[56px] lg:text-[64px] text-[#005bb7] leading-none tabular-nums">
          {formatted}
        </span>
        <span className="font-display font-bold text-[22px] text-[#c5a968] mb-1">{suffix}</span>
      </div>
      <div className="h-px w-10 bg-[#c5a968]/50 mt-3" />
      <p className="text-[10.5px] font-bold text-ink-muted font-sans tracking-[0.14em] uppercase leading-snug max-w-[170px]">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const leftRef  = useReveal();
  const { ref: rightRef, visible } = useRevealState(0.18);

  return (
    <section id="intro" className="relative bg-[#faf8f4] py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#005bb7]/20 to-transparent" />
      {/* Subtle background ornament */}
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-[#005bb7]/[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          <div ref={leftRef} className="lg:col-span-6 space-y-9 reveal-left">
            <div className="space-y-6">
              <div className="eyebrow text-[#005bb7]">
                Eurowindow
              </div>
              <h2 className="font-display font-bold text-[30px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.12] text-[#0a1f3c] tracking-tight">
                Kiến tạo giá trị vượt thời gian.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-ink-muted font-sans leading-relaxed max-w-lg">
                Hơn hai thập kỷ tiên phong kiến tạo những công trình biểu tượng — nơi thiết kế, độ chính xác và hiệu năng cùng gặp nhau trong từng hệ cửa &amp; vách kính.
              </p>
            </div>
            <Link
              href="/gioi-thieu"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#005bb7] border-b border-[#005bb7]/30 pb-1 hover:border-[#005bb7] transition-all"
            >
              — Về Eurowindow
            </Link>
          </div>

          <div ref={rightRef} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-x-10 gap-y-12 relative">
              <div className="absolute left-1/2 top-2 bottom-2 w-px bg-[#0a1f3c]/[0.06] hidden sm:block" />

              <div className="pr-4">
                <Metric target={20} suffix="+" label="NĂM KIẾN TẠO" triggered={visible} delay={0} duration={1400} />
              </div>
              <div className="pl-4">
                <Metric target={5000} suffix="+" label="CÔNG TRÌNH KIẾN TẠO" triggered={visible} delay={150} duration={2000} />
              </div>

              <div className="col-span-2 border-t border-[#0a1f3c]/[0.06]" />

              <div className="pr-4 pt-2">
                <Metric target={14} suffix="" label="NĂM LIÊN TIẾP THƯƠNG HIỆU QUỐC GIA" triggered={visible} delay={300} duration={1000} />
              </div>
              <div className="pl-4 pt-2">
                <Metric target={20} suffix="+" label="SHOWROOM TRÊN TOÀN QUỐC" triggered={visible} delay={450} duration={1400} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
