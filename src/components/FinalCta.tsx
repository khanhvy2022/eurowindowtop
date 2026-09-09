"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "./icons";

export default function FinalCta() {
  return (
    <section className="relative bg-[#0a1f3c] text-white py-24 lg:py-36 overflow-hidden">
      {/* Background Layer with Dark Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-[1px]"
          style={{
            backgroundImage:
              "url('/images/figma_7b8b_7492_9f80bd72474c265be9813af7bc879a99.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/85 to-[#0a1f3c]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(#c5a968_1px,transparent_1px)] [background-size:36px_36px] opacity-15" />
      </div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-16">
        
        {/* Main Header Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#c5a968] text-[11px] font-bold uppercase tracking-widest border border-white/15 shadow-sm">
            YOUR SPACE • YOUR WAY
          </span>

          <h2 className="font-display font-extrabold text-[38px] sm:text-[54px] md:text-[66px] tracking-tight leading-[1.08] text-white">
            Kiến Tạo Không Gian <br />
            <span className="text-[#c5a968]">Theo Cách Của Bạn.</span>
          </h2>

          <p className="text-[16px] sm:text-[18px] text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Trực tiếp trải nghiệm hệ thống cửa nhôm kính cao cấp tại hơn 34 Showroom chính hãng toàn quốc hoặc nhận tư vấn bóc tách dự toán miễn phí 24/7 từ chuyên gia Eurowindow.
          </p>
        </div>

        {/* 3 Glassmorphism Value Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "34+ Showroom Toàn Quốc",
              desc: "Trực tiếp chạm & trải nghiệm độ tinh xảo thực tế của sản phẩm.",
            },
            {
              title: "Tư Vấn 1:1 Cùng KTS",
              desc: "Khảo sát tận nơi, tư vấn kết cấu & bóc tách dự toán miễn phí 100%.",
            },
            {
              title: "Bảo Hành Chính Hãng 20 Năm",
              desc: "Cam kết độ bền bề mặt nhôm sơn PVDF chống mặn bãi biển.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/15 space-y-2 text-left hover:border-[#c5a968] transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#c5a968] flex-shrink-0" />
                <h3 className="font-display font-bold text-[16px] text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-[13px] text-gray-300 font-sans leading-relaxed pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dual High-End Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[12px] uppercase tracking-widest px-10 py-4.5 rounded-full transition-all duration-300 shadow-xl shadow-[#c5a968]/20 group cursor-pointer"
          >
            BẮT ĐẦU DỰ TOÁN NGAY
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/showroom"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-[12px] uppercase tracking-widest px-10 py-4.5 rounded-full border border-white/25 transition-all duration-300 backdrop-blur-md group cursor-pointer"
          >
            TÌM SHOWROOM GẦN BẠN
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
