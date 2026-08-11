"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "./icons";

const FLAG_EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const lineVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: FLAG_EASE, delay: 0.5 + i * 0.14 },
    }),
  };

  const flagVariants = {
    hidden: { scale: 0.05, opacity: 0 },
    visible: { scale: 1.35, opacity: 0.14 },
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#0f1115] flex items-center justify-center select-none">
      {/* ── Full-bleed Headquarters Building Background ── */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/eurowindow-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Readability overlays (NOT a mask/clipPath of the flag) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/25 via-transparent to-transparent" />
      </div>

      {/* ── Translucent Vietnam Flag Overlay (scale-up, no clip/mask) ── */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-[5]"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        aria-hidden="true"
      >
        <motion.div
          variants={flagVariants}
          transition={{ duration: 2.0, ease: FLAG_EASE, delay: 0.15 }}
          className="flag-silhouette w-[70%] h-[70%] max-w-[900px] max-h-[900px] shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        >
          <svg
            viewBox="0 0 1000 600"
            className="block w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect x="0" y="0" width="1000" height="600" fill="#c3081b" />
            <polygon
              points="416.5,300 497.2,360.3 594.2,360.3 510.8,400 453.1,470.5 409.6,400 326.2,360.3 417.3,360.3"
              fill="#ffd700"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── Hero Content (centered, above overlays) ── */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center pointer-events-none">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: FLAG_EASE, delay: 0.3 }}
          className="inline-flex items-center gap-3 eyebrow text-[#c5a968] text-xs mb-6 justify-center"
        >
          EUROWINDOW
        </motion.span>

        {/* H1 — three lines */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-tighter leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          {["Tiên Phong.", "Kiến Tạo.", "Đồng Hành."].map((line, i) => (
            <motion.span
              key={line}
              custom={i}
              variants={lineVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: FLAG_EASE, delay: 0.95 }}
          className="mt-6 mx-auto max-w-xl font-sans font-normal text-sm sm:text-base text-white/80 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          Giải pháp cửa &amp; vách kính kiến tạo những công trình khác biệt.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: FLAG_EASE, delay: 1.1 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2.5 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[11px] uppercase tracking-[0.16em] px-8 py-4 rounded-full transition-all duration-300 group"
          >
            KHÁM PHÁ GIẢI PHÁP
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 border border-white/35 hover:border-white text-white font-bold text-[11px] uppercase tracking-[0.16em] px-8 py-4 rounded-full transition-all duration-300 group"
          >
            XEM CÔNG TRÌNH
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Down Indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: FLAG_EASE, delay: 0.85 }}
        className="absolute left-6 lg:left-10 bottom-8 z-20 flex items-center gap-3 text-white/60"
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
}
