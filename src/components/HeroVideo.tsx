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
      style={{ height: "80svh", minHeight: "600px" }}
    >
      {/* ── Video / image background ── */}
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

      {/* Clean cinematic overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,20,42,0.25)_0%,_rgba(6,20,42,0.75)_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#07121f] to-transparent pointer-events-none" />

      {/* ── Content — bottom-anchored ── */}
      <div
        className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1536px] mx-auto w-full"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.6s 0.2s ease",
        }}
      >
        <div className="space-y-4 max-w-2xl">

          <div
            className="eyebrow text-[#c5a968] text-[11px]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s 0.3s ease, transform 0.8s 0.3s ease",
            }}
          >
            Design · Precision · Performance
          </div>

          <h2
            className="font-display font-bold text-[32px] sm:text-[40px] md:text-[48px] xl:text-[54px] leading-[1.1] text-white tracking-tight"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(28px)",
              transition:
                "opacity 0.9s 0.35s ease, transform 0.9s 0.35s ease",
            }}
          >
            Nơi kiến trúc gặp công nghệ.
          </h2>

          <p
            className="text-[14px] md:text-[15px] text-white/60 font-sans leading-relaxed max-w-lg"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s 0.5s ease, transform 0.9s 0.5s ease",
            }}
          >
            Từ những công trình biểu tượng đến từng chi tiết hệ cửa — khám phá hành trình kiến tạo của Eurowindow.
          </p>

          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.9s 0.6s ease",
            }}
          >
            <div className="h-px w-24 bg-[#c5a968]/50 mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
