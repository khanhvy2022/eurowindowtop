"use client";

import React, { useEffect, useRef, useState } from "react";
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
  icon: React.ComponentType<any>;
}

export default function ArchitectHub() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const leftRef = useReveal();
  const rightRef = useReveal();

  const resources: Resource[] = [
    {
      id: "bim",
      name: "Thư viện BIM",
      desc: "Tải file 3D CAD/BIM chất lượng cao của các sản phẩm cửa Eurowindow.",
      icon: Layers
    },
    {
      id: "tailieu",
      name: "Tài liệu kỹ thuật",
      desc: "Tra cứu thông số, bản vẽ kỹ thuật chi tiết phục vụ thiết kế kiến trúc.",
      icon: FileText
    },
    {
      id: "hotro",
      name: "Hỗ trợ thiết kế",
      desc: "Tư vấn chuyên sâu từ đội ngũ kỹ sư giải pháp kết cấu nhôm kính.",
      icon: Headphones
    },
    {
      id: "cpd",
      name: "Đào tạo CPD",
      desc: "Tham gia các khóa đào tạo, hội thảo chuyên đề kiến trúc & xây dựng.",
      icon: GraduationCap
    }
  ];

  const engineerImage = "/images/figma_1e8b_9e9b_c422d1d8418e50728bf537b2bfd9c195.png";

  return (
    <section id="architect-hub" className="py-24 lg:py-32 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Header + Cards */}
          <div ref={leftRef} className="lg:col-span-7 space-y-10 reveal-left">
            <div className="space-y-5">
              <div className="section-tag text-[#005bb7]">
                <span className="h-2 w-2 bg-[#005bb7] rounded-sm inline-block" />
                DÀNH CHO KIẾN TRÚC SƯ
              </div>
              <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-tight text-gray-900 tracking-tight">
                Đồng hành cùng kiến trúc sư kiến tạo những công trình xanh
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500 font-sans leading-relaxed max-w-2xl">
                Eurowindow cung cấp bộ công cụ và tài nguyên chuyên sâu giúp kiến trúc sư dễ dàng tích hợp các giải pháp cửa và vách kính thông minh vào mô hình thiết kế của dự án.
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
                    className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5"
                    style={{ minHeight: "200px", transitionDelay: `${idx * 60}ms` }}
                  >
                    <div className="space-y-4">
                      <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-[#005bb7] text-white" : "bg-blue-50 text-[#005bb7]"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-bold text-[16px] text-gray-900 group-hover:text-[#005bb7] transition-colors">
                        {res.name}
                      </h3>
                      <p className="text-[13px] text-gray-500 font-sans leading-relaxed">
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
