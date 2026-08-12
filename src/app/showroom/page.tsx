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
  features: string[];
}

/* 100% Verified Official Showroom Data from eurowindow.biz */
const showroomData: ShowroomItem[] = [
  /* MIỀN BẮC */
  {
    id: "hn-1",
    name: "Showroom Eurowindow Multi Complex (Hà Nội)",
    region: "north",
    regionName: "Miền Bắc",
    address: "Tầng 1 & 4, Tòa nhà Eurowindow Multi Complex, Số 27 Trần Duy Hưng, P. Trung Hòa, Q. Cầu Giấy, Hà Nội",
    city: "Hà Nội",
    phone: "024.3747.4700",
    hotline: "1800 577 775",
    hours: "08:00 - 18:30 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/showroom_banner_hd.png",
    mapUrl: "https://maps.google.com/?q=Tòa+nhà+Eurowindow+Multi+Complex+27+Trần+Duy+Hưng+Cầu+Giấy+Hà+Nội",
    features: ["Flagship lớn nhất Miền Bắc", "Trưng bày đầy đủ hệ cửa nhôm, uPVC, cửa gỗ & vách kính", "Khu tư vấn KTS & mô hình thử sức ép bão"],
  },
  {
    id: "hn-2",
    name: "Showroom Eurowindow Tôn Thất Tùng",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 2 Tôn Thất Tùng, P. Trung Tự, Q. Đống Đa, TP. Hà Nội",
    city: "Hà Nội",
    phone: "024.3747.4700",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_office_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Số+2+Tôn+Thất+Tùng+Đống+Đa+Hà+Nội",
    features: ["Mẫu cửa thông minh thế hệ mới Gen 5.0", "Hệ thống kính hộp Low-E cản 99% UV"],
  },
  {
    id: "hp-1",
    name: "Showroom Eurowindow Hải Phòng",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 463 đường Võ Nguyên Giáp, P. Lê Chân, TP. Hải Phòng",
    city: "Hải Phòng",
    phone: "0225.372.6888",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_phubai_hd.jpg",
    mapUrl: "https://maps.google.com/?q=463+Võ+Nguyên+Giáp+Lê+Chân+Hải+Phòng",
    features: ["Sơn phủ PVDF chống ăn mòn mặn bãi biển", "Vách kính mặt dựng Unitized 3D"],
  },
  {
    id: "qn-1",
    name: "Showroom Eurowindow Quảng Ninh",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 40 đường Vĩnh Huy, P. Hạ Long, TP. Hạ Long, Tỉnh Quảng Ninh",
    city: "Quảng Ninh",
    phone: "0203.383.6999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/flc_resort_sam_son_1786528439555.jpg",
    mapUrl: "https://maps.google.com/?q=40+Vĩnh+Huy+Hạ+Long+Quảng+Ninh",
    features: ["Giải pháp cho biệt thự nghỉ dưỡng ven biển", "Kính dán an toàn 2 lớp chịu bão"],
  },
  {
    id: "th-1",
    name: "Showroom Eurowindow Thanh Hóa",
    region: "north",
    regionName: "Miền Bắc",
    address: "Căn SH 17, đường Hoa Châu, KĐT Eurowindow Garden City, P. Hạc Thành, TP. Thanh Hóa",
    city: "Thanh Hóa",
    phone: "0237.385.9999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_vinhomes_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Eurowindow+Garden+City+Thanh+Hóa",
    features: ["Showroom chuẩn KĐT Garden City", "Cửa nhựa uPVC Kommerling lõi thép"],
  },
  {
    id: "na-1",
    name: "Showroom Eurowindow Vinh (Nghệ An)",
    region: "north",
    regionName: "Miền Bắc",
    address: "Căn 15NB Khu nhà phố Vicentra, đường Thái Phiên, P. Thành Vinh, TP. Vinh, Tỉnh Nghệ An",
    city: "Nghệ An",
    phone: "0238.383.8888",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuanhom_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Vicentra+Thái+Phiên+Vinh+Nghệ+An",
    features: ["Hệ cửa gỗ tự nhiên & gỗ công nghiệp PCCC", "Cửa cuốn nhôm hợp kim"],
  },

  /* MIỀN TRUNG & TÂY NGUYÊN */
  {
    id: "dn-1",
    name: "Showroom Eurowindow Đà Nẵng",
    region: "central",
    regionName: "Miền Trung",
    address: "Số 152 Phan Đăng Lưu, P. Hòa Cường Bắc, Q. Hải Châu, TP. Đà Nẵng",
    city: "Đà Nẵng",
    phone: "0236.374.7777",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/vachkinh_hd.jpg",
    mapUrl: "https://maps.google.com/?q=152+Phan+Đăng+Lưu+Hải+Châu+Đà+Nẵng",
    features: ["Flagship trung tâm Miền Trung", "Nhôm cầu cách nhiệt & cửa trượt tự động"],
  },
  {
    id: "bmt-1",
    name: "Showroom Eurowindow Buôn Ma Thuột (Đắk Lắk)",
    region: "central",
    regionName: "Miền Trung",
    address: "Số 42 Phan Chu Trinh, TP. Buôn Ma Thuột, Tỉnh Đắk Lắk",
    city: "Đắk Lắk",
    phone: "0262.385.9999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuago_hd.jpg",
    mapUrl: "https://maps.google.com/?q=42+Phan+Chu+Trinh+Buôn+Ma+Thuột+Đắk+Lắk",
    features: ["Chuyên dòng cửa gỗ cao cấp Tây Nguyên", "Cửa nhôm tiêu chuẩn Châu Âu"],
  },
  {
    id: "nt-1",
    name: "Showroom Eurowindow Nha Trang (Khánh Hòa)",
    region: "central",
    regionName: "Miền Trung",
    address: "Số 344 Lê Hồng Phong, TP. Nha Trang, Tỉnh Khánh Hòa",
    city: "Khánh Hòa",
    phone: "0258.382.4999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_flc_hd.jpg",
    mapUrl: "https://maps.google.com/?q=344+Lê+Hồng+Phong+Nha+Trang+Khánh+Hòa",
    features: ["Giải pháp vách kính cho Resort ven biển", "Cửa lùa Panorama siêu nhẹ"],
  },
  {
    id: "qn-2",
    name: "Showroom Eurowindow Quy Nhơn (Bình Định)",
    region: "central",
    regionName: "Miền Trung",
    address: "Lô số 5 Shophouse, Khu dân cư Đại Phú Gia, TP. Quy Nhơn, Tỉnh Bình Định",
    city: "Bình Định",
    phone: "0256.389.9999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_ungbuou_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Khu+dân+cư+Đại+Phú+Gia+Quy+Nhơn+Bình+Định",
    features: ["Mẫu vách kính & nhôm chống nắng nóng", "Phụ kiện Roto tiêu chuẩn Đức"],
  },

  /* MIỀN NAM & ĐBSCL */
  {
    id: "sg-1",
    name: "Showroom Eurowindow Mạc Đĩnh Chi (TP.HCM)",
    region: "south",
    regionName: "Miền Nam",
    address: "Số 39 Bis Mạc Đĩnh Chi, P. Tân Định, Quận 1, TP. Hồ Chí Minh",
    city: "TP. Hồ Chí Minh",
    phone: "028.3930.8888",
    hotline: "1800 577 775",
    hours: "08:00 - 18:30 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/project_vietphap_hd.jpg",
    mapUrl: "https://maps.google.com/?q=39+Bis+Mạc+Đĩnh+Chi+Quận+1+TP+Hồ+Chí+Minh",
    features: ["Showroom Flagship Quận 1 TP.HCM", "Phòng test độ cách âm cách nhiệt trực tiếp", "Khu trải nghiệm Smart Home 3D"],
  },
  {
    id: "sg-2",
    name: "Showroom Eurowindow Phạm Văn Đồng (TP.HCM)",
    region: "south",
    regionName: "Miền Nam",
    address: "Số 1218 Phạm Văn Đồng, P. Linh Tây, TP. Thủ Đức, TP. Hồ Chí Minh",
    city: "TP. Hồ Chí Minh",
    phone: "028.3730.5888",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/cuatudong_hd.jpg",
    mapUrl: "https://maps.google.com/?q=1218+Phạm+Văn+Đồng+Linh+Tây+Thủ+Đức+TP+Hồ+Chí+Minh",
    features: ["Cửa trượt tự động cảm biến vi sóng", "Vách kính Unitized tòa nhà"],
  },
  {
    id: "sg-3",
    name: "Showroom Eurowindow Cộng Hòa (TP.HCM)",
    region: "south",
    regionName: "Miền Nam",
    address: "Số 331 Cộng Hòa, P. 13, Q. Tân Bình, TP. Hồ Chí Minh",
    city: "TP. Hồ Chí Minh",
    phone: "028.3869.1999",
    hotline: "1800 577 775",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuaupvc_hd.jpg",
    mapUrl: "https://maps.google.com/?q=331+Cộng+Hòa+Tân+Bình+TP+Hồ+Chí+Minh",
    features: ["Cửa nhựa uPVC đa khoang lõi thép", "Cửa gỗ tự nhiên & gỗ công nghiệp"],
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
              HỆ THỐNG SHOWROOM TOÀN QUỐC EUROWINDOW.BIZ
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] tracking-tight">
              Trải Nghiệm Thực Tế Chất Lượng Eurowindow
            </h1>
            <p className="text-[16px] sm:text-[18px] text-gray-300 font-sans leading-relaxed">
              Hệ thống Showroom chính hãng được xác thực 100% từ eurowindow.biz — Nơi quý khách hàng trực tiếp chạm vào, trải nghiệm và cảm nhận độ tinh xảo của các hệ cửa cao cấp.
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
                DANH SÁCH CHI NHÁNH CHÍNH CHỦ EUROWINDOW.BIZ
              </span>
              <h2 className="font-display font-bold text-[32px] text-[#0a1f3c]">
                Địa Chỉ Showroom Chính Thức ({filteredShowrooms.length})
              </h2>
            </div>

            {/* Search + Region Pills */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập tỉnh/thành, đường, quận/huyện..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-72 pl-10 pr-4 py-2.5 rounded-full border border-gray-300 text-[13px] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#005bb7]"
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
                    
                    <div className="space-y-2.5 text-[13px] text-gray-600 font-sans">
                      <p className="flex items-start gap-2">
                        <span className="font-bold text-[#005bb7] flex-shrink-0">📍 Địa chỉ chuẩn:</span>
                        <span className="font-medium text-gray-900">{showroom.address}</span>
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
