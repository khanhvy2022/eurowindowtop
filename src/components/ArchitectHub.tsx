"use client";

import React, { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { FileText, Headphones, GraduationCap, ArrowRight, Layers } from "./icons";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

interface Resource {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
}

export default function ArchitectHub() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const leftRef = useReveal();
  const rightRef = useReveal();

  const resources: Resource[] = [
    {
      id: "bim",
      name: "BIM Library",
      desc: "Tải file 3D CAD/BIM chất lượng cao của các hệ cửa Eurowindow.",
      icon: Layers
    },
    {
      id: "tailieu",
      name: "Technical Documents",
      desc: "Tra cứu thông số, bản vẽ kỹ thuật chi tiết phục vụ thiết kế kiến trúc.",
      icon: FileText
    },
    {
      id: "hotro",
      name: "Design Support",
      desc: "Tư vấn chuyên sâu từ đội ngũ kỹ sư giải pháp kết cấu nhôm kính.",
      icon: Headphones
    },
    {
      id: "cpd",
      name: "CPD Training",
      desc: "Tham gia các khóa đào tạo, hội thảo chuyên đề kiến trúc & xây dựng.",
      icon: GraduationCap
    }
  ];

  const engineerImage = "/images/official/architect_hub_hd.jpg";

  return (
    <section id="architect-hub" className="py-24 lg:py-32 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Header + Cards */}
          <div ref={leftRef} className="lg:col-span-7 space-y-10 reveal-left">
            <div className="space-y-5">
              <div className="eyebrow text-[#005bb7]">
                Architect Hub
              </div>
              <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-tight text-[#0a1f3c] tracking-tight">
                Công cụ dành cho thế hệ kiến trúc sư mới.
              </h2>
              <p className="text-[14px] sm:text-[15px] text-ink-muted font-sans leading-relaxed max-w-2xl">
                Thư viện kiến trúc số — bộ công cụ chuyên sâu giúp tích hợp giải pháp cửa &amp; vách kính vào từng mô hình thiết kế.
              </p>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {resources.map((res, idx) => {
                const Icon = res.icon;
                const isHovered = hoveredCard === res.id;
                return (
                  <div
                    key={res.id}
                    onMouseEnter={() => setHoveredCard(res.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white p-7 rounded-2xl border border-line hover:border-[#005bb7]/30 transition-all duration-400 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
                    style={{ minHeight: "200px", transitionDelay: `${idx * 60}ms` }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-[11px] font-extrabold tracking-[0.2em] text-[#c5a968]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-[#005bb7] text-white" : "bg-[#e8f0fb] text-[#005bb7]"}`}>
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-[16px] text-[#0a1f3c] group-hover:text-[#005bb7] transition-colors uppercase tracking-wide">
                        {res.name}
                      </h3>
                      <p className="text-[13px] text-ink-muted font-sans leading-relaxed">
                        {res.desc}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-[#005bb7] inline-flex items-center gap-1.5 mt-4 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                      XEM CHI TIẾT
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Engineer Image */}
          <div ref={rightRef} className="lg:col-span-5 relative reveal-right delay-300">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
              style={{ aspectRatio: "3/4", maxHeight: "640px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url(${engineerImage})`,
                  backgroundPosition: "center 20%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Floating Hotline Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/30">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-sans mb-1">
                  Hotline hỗ trợ kỹ thuật
                </p>
                <p className="text-[24px] font-display font-extrabold text-[#005bb7]">
                  1800 577 775
                </p>
                <p className="text-[11px] text-gray-400 font-sans mt-0.5">
                  Miễn phí · 24/7
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
