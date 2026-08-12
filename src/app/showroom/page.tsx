"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import ShowroomEcho from "@/components/ShowroomEcho";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, Check } from "@/components/icons";

interface ShowroomItem {
  id: string;
  name: string;
  region: "north" | "central" | "south";
  regionName: string;
  address: string;
  city: string;
  phone: string;
  hotline: string;
  hours: string;
  image: string;
  mapUrl: string;
  tour360Url?: string;
  features: string[];
}

const showroomData: ShowroomItem[] = [
  {
    id: "hn-1",
    name: "Showroom Tòa nhà Eurowindow Đống Đa (Trụ sở chính)",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 2 Tôn Thất Tùng, P. Trung Tự, Q. Đống Đa, Hà Nội",
    city: "Hà Nội",
    phone: "024.3747.4700",
    hotline: "1800 577 775",
    hours: "08:00 - 18:30 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/showroom_banner_hd.png",
    mapUrl: "https://maps.google.com/?q=Số+2+Tôn+Thất+Tùng+Đống+Đa+Hà+Nội",
    features: ["Trưng bày đủ hệ cửa nhôm, uPVC & gỗ", "Mô hình trải nghiệm thử sức ép gió bão", "Khu tư vấn KTS chuyên sâu"],
  },
  {
    id: "hn-2",
    name: "Showroom Eurowindow Cầu Giấy",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 60 Duy Tân, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội",
    city: "Hà Nội",
    phone: "024.3795.6688",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_office_hd.jpg",
    mapUrl: "https://maps.google.com/?q=60+Duy+Tân+Cầu+Giấy+Hà+Nội",
    features: ["Hệ cửa thông minh AI Gen 5.0", "Kính hộp Low-E tiết kiệm điện năng"],
  },
  {
    id: "hn-3",
    name: "Showroom Eurowindow Long Biên",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 542 Nguyễn Văn Cừ, P. Gia Thụy, Q. Long Biên, Hà Nội",
    city: "Hà Nội",
    phone: "024.3872.9696",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/cuanhom_hd.jpg",
    mapUrl: "https://maps.google.com/?q=542+Nguyễn+Văn+Cừ+Long+Biên+Hà+Nội",
    features: ["Cửa cuốn nhôm hợp kim", "Cửa gỗ tự nhiên & HDF chống cháy"],
  },
  {
    id: "hp-1",
    name: "Showroom Eurowindow Hải Phòng",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 386 Nguyễn Bỉnh Khiêm, Q. Ngô Quyền, TP. Hải Phòng",
    city: "Hải Phòng",
    phone: "0225.372.6888",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_phubai_hd.jpg",
    mapUrl: "https://maps.google.com/?q=386+Nguyễn+Bỉnh+Khiêm+Ngô+Quyền+Hải+Phòng",
    features: ["Hệ nhôm sơn PVDF chống mặn bãi biển", "Vách kính mặt dựng Unitized"],
  },
  {
    id: "qn-1",
    name: "Showroom Eurowindow Quảng Ninh",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 12 Nguyễn Văn Cừ, P. Hồng Hải, TP. Hạ Long, Quảng Ninh",
    city: "Quảng Ninh",
    phone: "0203.383.6999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/flc_resort_sam_son_1786528439555.jpg",
    mapUrl: "https://maps.google.com/?q=12+Nguyễn+Văn+Cừ+Hạ+Long+Quảng+Ninh",
    features: ["Giải pháp cho biệt thự nghỉ dưỡng biển", "Kính hộp 3 lớp cách âm cao cấp"],
  },
  {
    id: "dn-1",
    name: "Showroom Eurowindow Đà Nẵng (Flagship Miền Trung)",
    region: "central",
    regionName: "Miền Trung",
    address: "Số 63 Nguyễn Tri Phương, Q. Thanh Khê, TP. Đà Nẵng",
    city: "Đà Nẵng",
    phone: "0236.374.7777",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/vachkinh_hd.jpg",
    mapUrl: "https://maps.google.com/?q=63+Nguyễn+Tri+Phương+Thanh+Khê+Đà+Nẵng",
    features: ["Trực quan mẫu nhôm cầu cách nhiệt", "Cửa trượt tự động mắt thần sensor"],
  },
  {
    id: "kh-1",
    name: "Showroom Eurowindow Nha Trang",
    region: "central",
    regionName: "Miền Trung",
    address: "Số 238 Thống Nhất, P. Phương Sài, TP. Nha Trang, Khánh Hòa",
    city: "Khánh Hòa",
    phone: "0258.382.4999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_flc_hd.jpg",
    mapUrl: "https://maps.google.com/?q=238+Thống+Nhất+Nha+Trang+Khánh+Hòa",
    features: ["Giải pháp nhôm kính chống chịu gió bão", "Hệ cửa lùa Panorama biệt thự"],
  },
  {
    id: "sg-1",
    name: "Showroom Tòa nhà Eurowindow Quận 3 (Trụ sở Miền Nam)",
    region: "south",
    regionName: "Miền Nam",
    address: "Số 39 Bis Trương Định, Phường 6, Quận 3, TP. Hồ Chí Minh",
    city: "TP. Hồ Chí Minh",
    phone: "028.3930.8888",
    hotline: "1800 577 775",
    hours: "08:00 - 18:30 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/project_vinhomes_hd.jpg",
    mapUrl: "https://maps.google.com/?q=39+Bis+Trương+Định+Quận+3+TP+Hồ+Chí+Minh",
    features: ["Flagship lớn nhất Miền Nam", "Phòng lab kiểm tra cách âm thực tế", "Khu trải nghiệm Smart Home 3D"],
  },
  {
    id: "sg-2",
    name: "Showroom Eurowindow Tân Bình",
    region: "south",
    regionName: "Miền Nam",
    address: "Số 126 Lý Thường Kiệt, Phường 7, Q. Tân Bình, TP. Hồ Chí Minh",
    city: "TP. Hồ Chí Minh",
    phone: "028.3869.1999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuaupvc_hd.jpg",
    mapUrl: "https://maps.google.com/?q=126+Lý+Thường+Kiệt+Tân+Bình+TP+Hồ+Chí+Minh",
    features: ["Cửa nhựa uPVC Kommerling", "Cửa gỗ công nghiệp MDF/HDF chống cháy"],
  },
  {
    id: "sg-3",
    name: "Showroom Eurowindow TP. Thủ Đức",
    region: "south",
    regionName: "Miền Nam",
    address: "Số 680 Xa Lộ Hà Nội, P. Hiệp Phú, TP. Thủ Đức, TP. Hồ Chí Minh",
    city: "TP. Hồ Chí Minh",
    phone: "028.3730.5888",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/cuatudong_hd.jpg",
    mapUrl: "https://maps.google.com/?q=680+Xa+Lộ+Hà+Nội+Thủ+Đức+TP+Hồ+Chí+Minh",
    features: ["Mô hình vách kính mặt dựng Unitized", "Cửa tự động cảm biến văn phòng"],
  },
  {
    id: "bd-1",
    name: "Showroom Eurowindow Bình Dương",
    region: "south",
    regionName: "Miền Nam",
    address: "Số 285 Đại lộ Bình Dương, TP. Thủ Dầu Một, Bình Dương",
    city: "Bình Dương",
    phone: "0274.381.8999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuago_hd.jpg",
    mapUrl: "https://maps.google.com/?q=285+Đại+lộ+Bình+Dương+Thủ+Dầu+Một",
    features: ["Cửa nhôm cho khu công nghiệp & dự án", "Khóa sinh trắc vân tay AI"],
  },
  {
    id: "ct-1",
    name: "Showroom Eurowindow Cần Thơ (Đồng Bằng Sông Cửu Long)",
    region: "south",
    regionName: "Miền Nam",
    address: "Số 99 Võ Nguyên Giáp, P. Phú Thứ, Q. Cái Răng, TP. Cần Thơ",
    city: "Cần Thơ",
    phone: "0292.383.9999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/cuacuon_hd.jpg",
    mapUrl: "https://maps.google.com/?q=99+Võ+Nguyên+Giáp+Cái+Răng+Cần+Thơ",
    features: ["Showroom quy mô lớn nhất Miền Tây", "Đầy đủ sản phẩm nhôm, nhựa & gỗ"],
  },
];

export default function ShowroomPage() {
  const [activeRegion, setActiveRegion] = useState<"all" | "north" | "central" | "south">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShowrooms = showroomData.filter((item) => {
    const matchesRegion = activeRegion === "all" || item.region === activeRegion;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#c5a968_1px,transparent_1px)] [background-size:32px_32px]" />
        
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest shadow-lg border border-white/20">
              HỆ THỐNG SHOWROOM TOÀN QUỐC
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] tracking-tight">
              Trải Nghiệm Thực Tế Chất Lượng Eurowindow
            </h1>
            <p className="text-[16px] sm:text-[18px] text-gray-300 font-sans leading-relaxed">
              Hệ thống hơn 34 Showroom & Chi nhánh chính hãng trên toàn quốc — Nơi quý khách hàng trực tiếp chạm vào, trải nghiệm và cảm nhận độ tinh xảo của các hệ cửa cao cấp.
            </p>
          </div>
        </div>
      </section>

      {/* Showroom Visual Highlight Section */}
      <ShowroomEcho />

      {/* Interactive Showroom Directory */}
      <section className="py-20 bg-[#f4f7fc] border-t border-gray-200">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
          
          {/* Section Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest block">
                DANH SÁCH CHI NHÁNH CHÍNH HÃNG
              </span>
              <h2 className="font-display font-bold text-[32px] text-[#0a1f3c]">
                Tìm Showroom Gần Bạn Nhất
              </h2>
            </div>

            {/* Search + Region Pills */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập tỉnh/thành, quận/huyện..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-full border border-gray-300 text-[13px] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#005bb7]"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Region Filter Tabs */}
              <div className="flex items-center gap-1 bg-gray-200/80 p-1 rounded-full text-[12px] font-bold">
                {[
                  { id: "all", label: "Tất cả" },
                  { id: "north", label: "Miền Bắc" },
                  { id: "central", label: "Miền Trung" },
                  { id: "south", label: "Miền Nam" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveRegion(tab.id as any)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeRegion === tab.id
                        ? "bg-[#005bb7] text-white shadow-md"
                        : "text-gray-700 hover:text-[#005bb7]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Showroom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShowrooms.map((showroom) => (
              <div
                key={showroom.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#005bb7] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={showroom.image}
                      alt={showroom.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0a1f3c]/90 text-white text-[9.5px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                        {showroom.regionName}
                      </span>
                    </div>
                  </div>

                  {/* Showroom Content */}
                  <div className="p-7 space-y-4">
                    <h3 className="font-display font-bold text-[18px] text-[#0a1f3c] leading-snug">
                      {showroom.name}
                    </h3>
                    
                    <div className="space-y-2 text-[13px] text-gray-600 font-sans">
                      <p className="flex items-start gap-2">
                        <span className="font-bold text-[#005bb7] flex-shrink-0">📍 Địa chỉ:</span>
                        <span>{showroom.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-bold text-[#005bb7] flex-shrink-0">📞 Hotline:</span>
                        <a href={`tel:${showroom.hotline}`} className="font-bold text-gray-900 hover:text-[#005bb7]">
                          {showroom.hotline} / {showroom.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-2 text-[12px] text-gray-500">
                        <span className="font-bold text-gray-700 flex-shrink-0">🕒 Giờ mở cửa:</span>
                        <span>{showroom.hours}</span>
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="pt-3 border-t border-gray-100 space-y-1.5">
                      {showroom.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11.5px] font-semibold text-gray-700">
                          <Check className="w-3.5 h-3.5 text-[#005bb7] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={showroom.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[11px] uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                  >
                    Chỉ đường Google Maps ↗
                  </a>
                  <a
                    href={`tel:${showroom.hotline}`}
                    className="px-4 py-3 border border-gray-300 text-gray-800 font-bold text-[11px] uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Gọi Hotline
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredShowrooms.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 space-y-3">
              <p className="text-lg font-bold text-gray-700">Không tìm thấy showroom phù hợp với từ khóa "{searchQuery}"</p>
              <p className="text-sm text-gray-500 font-sans">Vui lòng thử tìm kiếm tên Tỉnh/Thành phố khác hoặc gọi Tổng đài 1800 577 775 để được hỗ trợ.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
      <FloatingControls />
    </div>
  );
}
