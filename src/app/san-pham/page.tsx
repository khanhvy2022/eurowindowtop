"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import ProductSection from "@/components/ProductSection";
import BusinessSolution from "@/components/BusinessSolution";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "@/components/icons";

export default function SanPhamPage() {
  const categoryCards = [
    {
      title: "Cửa Nhôm & Vách Nhôm Kính",
      desc: "Sơn phủ PVDF chống mặn bãi biển, kính hộp Low-E cản 99% UV, cách âm 45dB.",
      image: "/images/official/cuanhom_hd.jpg",
      href: "/san-pham/cua-nhom",
      badge: "ALUMINUM SYSTEM",
      specs: ["Profile 6063-T6", "Cách âm 45dB", "Bảo hành 20 năm"],
    },
    {
      title: "Cửa Nhựa uPVC Đa Khoang",
      desc: "Định hình lõi thép gia cường, chống ốc lão hóa UV 20 năm, tiết kiệm 30% điện.",
      image: "/images/official/cuaupvc_hd.jpg",
      href: "/san-pham/cua-nhua-upvc",
      badge: "uPVC SYSTEM",
      specs: ["Kommerling / uFlex", "Lõi thép 2.0mm", "Khóa đa điểm Roto"],
    },
    {
      title: "Cửa Gỗ Tự Nhiên & Công Nghiệp",
      desc: "Sấy chân không Châu Âu chống cong vênh mối mọt, sơn PU 6 lớp, chống cháy PCCC.",
      image: "/images/official/cuago_hd.jpg",
      href: "/san-pham/cua-go",
      badge: "WOODEN SYSTEM",
      specs: ["Gỗ Lim / Trắc / HDF", "Sơn PU 6 lớp", "Chống cháy 120 phút"],
    },
    {
      title: "Cửa Cuốn Nhôm Hợp Kim",
      desc: "Tự dừng khi gặp vật cản, mã nhảy chống sao chép sóng, bình lưu điện UPS 48h.",
      image: "/images/official/cuacuon_hd.jpg",
      href: "/san-pham/cua-cuon",
      badge: "ROLLER SHUTTER",
      specs: ["Nan nhôm 6063", "Mã nhảy Rolling Code", "Cảm biến an toàn"],
    },
    {
      title: "Cửa Tự Động Mắt Thần Sensor",
      desc: "Mắt thần hồng ngoại vi sóng kép, tần suất 100.000 lượt/ngày, kết nối PCCC.",
      image: "/images/official/cuatudong_hd.jpg",
      href: "/san-pham/cua-tu-dong",
      badge: "AUTOMATIC DOOR",
      specs: ["Motor DC không chổi than", "Mắt thần vi sóng", "Kính cường lực 12mm"],
    },
    {
      title: "Vách Kính Mặt Dựng Low-E",
      desc: "Hệ Stick, Semi-Unitized & Unitized 3D, tối ưu ánh sáng tự nhiên & cản bức xạ.",
      image: "/images/official/vachkinh_hd.jpg",
      href: "/san-pham/san-pham-kinh",
      badge: "GLASS & CURTAIN WALL",
      specs: ["Kính Low-E cản nhiệt", "Mặt dựng Unitized 3D", "Chịu bão cấp 15"],
    },
    {
      title: "Cửa Thông Minh Gen 5.0 IoT",
      desc: "Cảm biến mưa bão tự động đóng cánh, FaceID 3D AI, quản lý qua Smartphone.",
      image: "/images/official/cuanhom_hd.jpg",
      href: "/san-pham/cua-thong-minh",
      badge: "SMART IOT GEN 5.0",
      specs: ["Cảm biến thời tiết", "FaceID 3D AI", "Kết nối Smarthome"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c5a968_1px,transparent_1px)] [background-size:28px_28px]" />
        
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest shadow-lg border border-white/20">
              EUROWINDOW PRODUCTS 2026
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight">
              Hệ Cửa & Vách Kính Tiêu Chuẩn Quốc Tế
            </h1>
            <p className="text-[16px] text-gray-300 font-sans leading-relaxed">
              Giải pháp toàn diện từ Cửa nhôm cao cấp, Cửa nhựa uPVC, Cửa gỗ tự nhiên & công nghiệp, Cửa cuốn, Cửa tự động đến Kính tiết kiệm năng lượng Low-E.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid Hub */}
      <section className="py-20 bg-[#f4f7fc] border-b border-gray-200">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest block">
              DANH MỤC CHỦ ĐẠO
            </span>
            <h2 className="font-display font-bold text-[32px] text-[#0a1f3c]">
              Khám Phá Các Chủng Loại Sản Phẩm
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCards.map((card, idx) => (
              <Link
                key={idx}
                href={card.href}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#005bb7] transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0a1f3c]/90 text-white text-[9.5px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                      {card.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-[20px] text-gray-900 group-hover:text-[#005bb7] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-gray-600 font-sans leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {card.specs.map((spec, i) => (
                        <span key={i} className="text-[10.5px] font-bold bg-blue-50 text-[#005bb7] px-2.5 py-1 rounded-md">
                          ✓ {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[12px] font-bold text-[#005bb7] group-hover:translate-x-1 transition-transform">
                      <span>Xem thông số chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Product Showcase */}
      <ProductSection />

      {/* Technical Solutions */}
      <BusinessSolution />

      <Footer />
      <FloatingControls />
    </div>
  );
}
