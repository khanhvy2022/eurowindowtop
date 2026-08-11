"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "./icons";

interface ProductCategory {
  id: string;
  name: string;
  desc: string;
  image: string;
  specs: string[];
  features: string[];
}

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

export default function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null);
  const headerRef = useReveal();
  const sliderRef = useReveal();

  const categories: ProductCategory[] = [
    {
      id: "nhom",
      name: "CỬA NHÔM",
      desc: "Sản phẩm cửa nhôm và cửa vách nhôm sản xuất từ vật liệu nhôm cao cấp",
      image: "/images/figma_5d36_d29a_3a53e0de2f53eadb8296fd34023141e5.png",
      specs: [
        "Thanh profile nhôm sơn phủ PVDF chịu ăn mòn mặn bãi biển",
        "Kính hộp Low-E dán an toàn 2 lớp chống va đập",
        "Cách âm đạt chuẩn ISO 140-3 (giảm 42-45 dB)"
      ],
      features: [
        "Chịu áp lực gió bão lên đến cấp 15",
        "Hệ gioăng EPDM kép ngăn rò rỉ nước 100%",
        "Phụ kiện kim khí Roto / Cấp Đức đồng bộ"
      ]
    },
    {
      id: "upvc",
      name: "CỬA uPVC",
      desc: "Sản phẩm cửa nhựa uPVC cách âm, cách nhiệt vượt trội, bảo vệ tổ ấm bền bỉ",
      image: "/images/figma_6f4f_1929_f0193f9d85fef4c9e7b563dd8f35dc1d.png",
      specs: [
        "Thanh profile uPVC định hình lõi thép gia cường",
        "Khả năng chống ốc lão hóa tia cực tím 20 năm",
        "Tiết kiệm 30% chi phí tiêu thụ điện máy lạnh"
      ],
      features: [
        "Cách nhiệt tuyệt đối với môi trường bên ngoài",
        "Khóa chốt đa điểm chống trộm an toàn",
        "Mẫu mã đa dạng: quay, hất, trượt xếp"
      ]
    },
    {
      id: "go",
      name: "CỬA GỖ",
      desc: "Độ cứng và độ bền cao, hạn chế tối đa sự biến đổi theo thời tiết.",
      image: "/images/figma_29b7_754b_dcb3258841887f70bf6e16c62af9ca41.png",
      specs: [
        "Gỗ tự nhiên & gỗ công nghiệp chịu nước 100%",
        "Sơn PU cao cấp 6 lớp chống mối mọt cong vênh",
        "Thiết kế phong cách tân cổ điển & hiện đại"
      ],
      features: [
        "Vân gỗ sang trọng tinh tế",
        "Chống cháy tiêu chuẩn 60-120 phút",
        "Bản lề cối chịu lực không xệ cánh"
      ]
    },
    {
      id: "cuon",
      name: "CỬA CUỐN",
      desc: "Giải pháp cửa cuốn hiện đại, tiết kiệm không gian và an toàn tối ưu.",
      image: "/images/figma_625e_2a98_10ede3a9081058280de283a2c53cc8f5.png",
      specs: [
        "Nan nhôm hợp kim sơn tĩnh điện ngoài trời",
        "Tích hợp cảm biến tự dừng khi gặp vật cản",
        "Bộ điều khiển mã nhảy chống dò sóng"
      ],
      features: [
        "Động cơ nhập khẩu vận hành êm ái",
        "Tích hợp bình lưu điện khi mất điện",
        "Lấy sáng & thông thoáng tự nhiên"
      ]
    },
    {
      id: "tudong",
      name: "CỬA TỰ ĐỘNG",
      desc: "Cửa tự động cao cấp cho không gian thương mại, khách sạn và tòa nhà.",
      image: "/images/figma_4140_b90c_06d671ce00de7935b522cded3c8da554.png",
      specs: [
        "Mắt thần cảm ứng hồng ngoại vi sóng kép",
        "Cánh kính cường lực 10-12mm siêu trong",
        "Ray trượt hợp kim nhôm chống mòn"
      ],
      features: [
        "Tần suất mở cửa đến 100.000 lượt/ngày",
        "Tự động khóa ban đêm an toàn",
        "Kết nối hệ thống PCCC tòa nhà"
      ]
    }
  ];

  const total = categories.length;

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  // Get 3 visible items: active, next, next+1
  const visible = [
    categories[activeIndex % total],
    categories[(activeIndex + 1) % total],
    categories[(activeIndex + 2) % total],
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">

        {/* ── Section header ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div className="space-y-4 max-w-2xl">
            <div className="section-tag text-[#005bb7]">
              <span className="h-2 w-2 border border-[#005bb7] rounded-sm inline-block" />
              SẢN PHẨM
            </div>
            <h2 className="font-display font-normal text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1.2] text-[#005bb7] tracking-tight">
              Tiên phong kiến tạo các giải pháp toàn diện, góp phần nâng tầm chất lượng cuộc sống
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#005bb7] border-b border-[#005bb7]/30 pb-1 hover:border-[#005bb7] transition-all whitespace-nowrap"
            >
              — KHÁM PHÁ TẤT CẢ SẢN PHẨM
            </Link>
          </div>
        </div>

        {/* ── Slider area ── */}
        <div ref={sliderRef} className="reveal delay-100">

          {/* Column headers row */}
          <div className="grid gap-4 mb-5" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            {visible.map((cat, idx) => (
              <div key={cat.id + idx} className="space-y-1.5">
                {/* Horizontal top border */}
                <div className={`h-0.5 w-full mb-3 ${idx === 0 ? "bg-[#005bb7]" : "bg-gray-200"}`} />
                {/* Name */}
                <h3
                  className={`font-display font-bold tracking-widest uppercase transition-colors ${
                    idx === 0
                      ? "text-[#005bb7] text-[14px] sm:text-[15px]"
                      : "text-gray-700 text-[13px] sm:text-[14px] cursor-pointer hover:text-[#005bb7]"
                  }`}
                  onClick={() => idx > 0 && setActiveIndex((activeIndex + idx) % total)}
                >
                  {cat.name}
                </h3>
                {/* Description — only for active (idx 0) */}
                {idx === 0 && (
                  <p className="text-[12px] sm:text-[13px] text-gray-500 font-sans leading-relaxed max-w-[280px]">
                    {cat.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Images row */}
          <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            {visible.map((cat, idx) => (
              <div
                key={cat.id + idx + "img"}
                className={`relative overflow-hidden rounded-xl cursor-pointer group transition-all duration-500 ${
                  idx === 0 ? "" : "opacity-90 hover:opacity-100"
                }`}
                style={{ aspectRatio: "4/3.2" }}
                onClick={() => {
                  if (idx === 0) {
                    setSelectedProduct(cat);
                  } else {
                    setActiveIndex((activeIndex + idx) % total);
                  }
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />

                {/* Bottom gradient + CTA for active */}
                {idx === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/45 to-transparent flex items-end p-4 transition-opacity duration-300">
                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.14em] flex items-center gap-1.5">
                      Xem chi tiết thông số →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation arrows + progress */}
          <div className="flex items-center gap-4 mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="h-10 w-10 rounded-full border border-gray-300 hover:border-[#005bb7] hover:bg-[#005bb7] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next"
              className="h-10 w-10 rounded-full border border-gray-300 hover:border-[#005bb7] hover:bg-[#005bb7] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 ml-2">
              {categories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "w-6 h-1.5 bg-[#005bb7]"
                      : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to ${categories[i].name}`}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="ml-auto text-[12px] font-bold text-gray-400 font-sans tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

        </div>
      </div>

      {/* ── Product Quick View Modal ── */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 grid grid-cols-1 md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg cursor-pointer transition-colors"
            >
              ✕
            </button>

            {/* Image Col */}
            <div className="md:col-span-6 relative min-h-[300px] md:min-h-[440px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProduct.image})` }}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#005bb7] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                  Eurowindow Certified
                </span>
              </div>
            </div>

            {/* Content Col */}
            <div className="md:col-span-6 p-8 flex flex-col justify-between bg-gray-50">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-[#005bb7] uppercase tracking-widest block mb-1">
                    HỆ SẢN PHẨM CAO CẤP
                  </span>
                  <h3 className="font-display font-bold text-[24px] text-gray-900 leading-snug">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-[13px] text-gray-500 mt-2 font-sans leading-relaxed">
                    {selectedProduct.desc}
                  </p>
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <h4 className="text-[11px] font-bold uppercase text-gray-800 tracking-wider">
                    Thông số & Tính năng nổi bật:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.specs.concat(selectedProduct.features).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[12px] text-gray-600 font-sans">
                        <Check className="h-4 w-4 text-[#005bb7] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 flex gap-3">
                <a
                  href="#calculator"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 text-center py-3 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all shadow-md"
                >
                  Dự toán ngân sách
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="py-3 px-5 border border-gray-300 text-gray-700 font-bold text-[11px] uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
