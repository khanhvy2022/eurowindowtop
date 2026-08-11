"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#07121f]"
      style={{ height: "100svh", minHeight: "640px" }}
    >
      {/* ── Video background (poster fallback image beneath) ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{
            backgroundImage:
              "url('/images/figma_7b8b_7492_9f80bd72474c265be9813af7bc879a99.png')",
          }}
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/figma_7b8b_7492_9f80bd72474c265be9813af7bc879a99.png"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic scan line */}
      <div className="scan-line" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 hero-gradient gradient-breathe pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

      {/* ── Content — bottom-anchored ── */}
      <div
        className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1536px] mx-auto w-full"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.6s 0.2s ease",
        }}
      >
        <div className="space-y-5 max-w-2xl">

          {/* Tag */}
          <div
            className="flex items-center gap-2.5 text-[10px] font-bold text-white/55 uppercase tracking-[0.18em]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s 0.3s ease, transform 0.8s 0.3s ease",
            }}
          >
            <span className="h-1.5 w-1.5 border border-white/50 rounded-sm inline-block" />
            Giải pháp toàn diện cho không gian sống hiện đại
          </div>

          {/* Headline */}
          <h2
            className="font-display font-bold text-[34px] sm:text-[42px] md:text-[52px] xl:text-[60px] leading-[1.08] text-white tracking-tight"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(28px)",
              transition:
                "opacity 0.9s 0.35s ease, transform 0.9s 0.35s ease",
            }}
          >
            Kiến tạo không gian sống đẳng cấp.
          </h2>

          {/* Sub text */}
      <p
            className="text-[14px] md:text-[15px] text-white/60 font-sans leading-relaxed max-w-lg"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s 0.5s ease, transform 0.9s 0.5s ease",
            }}
          >
            Khám phá hành trình đổi mới sáng tạo của Eurowindow qua những dự án
            biểu tượng và công nghệ tiên phong.
          </p>
        </div>
      </div>
    </section>
  );
}
