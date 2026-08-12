"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import ShowroomEcho from "@/components/ShowroomEcho";
import Image from "next/image";
import { Search, Check } from "@/components/icons";

interface ShowroomItem {
  id: string;
  name: string;
  type: "showroom" | "pos" | "office";
  typeName: string;
  region: "north" | "central" | "south";
  regionName: string;
  address: string;
  city: string;
  phone: string;
  hotline: string;
  email?: string;
  hours: string;
  image: string;
  mapUrl: string;
  features: string[];
}

/* 100% Exact Official Copy from User Input & eurowindow.biz */
const showroomData: ShowroomItem[] = [
  /* 1. SHOWROOM TÔN THẤT TÙNG */
  {
    id: "sr-1",
    name: "SHOWROOM TÔN THẤT TÙNG",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 2 Tôn Thất Tùng - Phường Kim Liên - Thành phố Hà Nội",
    city: "Hà Nội",
    phone: "(84 - 24) 3 7 47 47 77",
    hotline: "0909 888 000",
    email: "Showroom.lnd@eurowindow.biz",
    hours: "08:00 - 18:30 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/showroom_banner_hd.png",
    mapUrl: "https://maps.google.com/?q=Số+2+Tôn+Thất+Tùng+Phường+Kim+Liên+Hà+Nội",
    features: ["Cửa nhôm cao cấp", "Cửa nhựa uPVC", "Cửa thông minh AI Gen 5.0"],
  },

  /* 2. SHOWROOM EUROWINDOW MULTI COMPLEX */
  {
    id: "sr-2",
    name: "SHOWROOM EUROWINDOW MULTI COMPLEX",
    type: "showroom",
    typeName: "Showroom Flagship",
    region: "north",
    regionName: "Miền Bắc",
    address: "Tầng 1 & 4, Tòa nhà Eurowindow Multi Complex, số 27 Trần Duy Hưng - Phường Cầu giấy - Thành phố Hà Nội",
    city: "Hà Nội",
    phone: "(84 - 24) 3577 4777",
    hotline: "0909 888 000",
    email: "Showroom.lnd@eurowindow.biz",
    hours: "08:00 - 18:30 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/project_office_hd.jpg",
    mapUrl: "https://maps.google.com/?q=27+Trần+Duy+Hưng+Cầu+Giấy+Hà+Nội",
    features: ["Showroom Flagship lớn nhất Hà Nội", "Khu thử sức ép gió bão", "Kính hộp Low-E cản 99% UV"],
  },

  /* 3. SHOWROOM HẢI PHÒNG */
  {
    id: "sr-3",
    name: "SHOWROOM HẢI PHÒNG",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "north",
    regionName: "Miền Bắc",
    address: "463 đường Võ Nguyên Giáp - Phường Lê Chân - Thành phố Hải Phòng",
    city: "Hải Phòng",
    phone: "(84-225) 3 956 111 / 3 956 222",
    hotline: "0909 888 000",
    email: "Showroom.hp@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_phubai_hd.jpg",
    mapUrl: "https://maps.google.com/?q=463+Võ+Nguyên+Giáp+Lê+Chân+Hải+Phòng",
    features: ["Sơn PVDF chống mặn biển 20 năm", "Vách kính mặt dựng Unitized"],
  },

  /* 4. SHOWROOM QUẢNG NINH */
  {
    id: "sr-4",
    name: "SHOWROOM QUẢNG NINH",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 40, Đường Vĩnh Huy, Phường Hạ Long, Tỉnh Quảng Ninh - Tỉnh Quảng Ninh",
    city: "Quảng Ninh",
    phone: "(84-203) 3 55 66 69 / 3 55 66 89",
    hotline: "0909 888 000",
    email: "Showroom.qn@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/flc_resort_sam_son_1786528439555.jpg",
    mapUrl: "https://maps.google.com/?q=40+Đường+Vĩnh+Huy+Phường+Hạ+Long+Quảng+Ninh",
    features: ["Giải pháp cho biệt thự du lịch ven biển", "Kính an toàn 2 lớp chịu bão"],
  },

  /* 5. SHOWROOM THANH HÓA */
  {
    id: "sr-5",
    name: "SHOWROOM THANH HÓA",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "north",
    regionName: "Miền Bắc",
    address: "Căn SH 17, đường Hoa Châu, KĐT Eurowindow Garden City - phường Hạc Thành - Tỉnh Thanh Hóa",
    city: "Thanh Hóa",
    phone: "(84 - 237) 3964 961",
    hotline: "0909 888 000",
    email: "Showroom.th@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_vinhomes_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Eurowindow+Garden+City+Thanh+Hóa",
    features: ["Showroom tại KĐT Garden City", "Cửa nhựa uPVC Kommerling lõi thép"],
  },

  /* 6. SHOWROOM VINH */
  {
    id: "sr-6",
    name: "SHOWROOM VINH",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "north",
    regionName: "Miền Bắc",
    address: "Căn 15NB Khu nhà Phố Vicentra, đường Thái Phiên - Phường Thành Vinh - Tỉnh Nghệ An",
    city: "Nghệ An",
    phone: "(84 - 238) 3 588 808 / 3 588 807",
    hotline: "0909 888 000",
    email: "Showroom.vinh@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuanhom_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Vicentra+Thái+Phiên+Phường+Thành+Vinh+Nghệ+An",
    features: ["Cửa gỗ tự nhiên & HDF chống cháy", "Cửa cuốn nhôm hợp kim"],
  },

  /* 7. VĂN PHÒNG QUẢNG TRỊ */
  {
    id: "off-1",
    name: "VĂN PHÒNG QUẢNG TRỊ",
    type: "office",
    typeName: "Văn Phòng Đại Diện",
    region: "central",
    regionName: "Miền Trung",
    address: "126A đường Hữu Nghị, phường Đồng Hới - Tỉnh Quảng Trị",
    city: "Quảng Trị",
    phone: "0913 543 138",
    hotline: "0913 543 138",
    email: "tuanpv6@eurowindow.biz",
    hours: "08:00 - 17:30 (Thứ 2 - Thứ 6)",
    image: "/images/official/vachkinh_hd.jpg",
    mapUrl: "https://maps.google.com/?q=126A+đường+Hữu+Nghị+Đồng+Hới+Quảng+Trị",
    features: ["Tư vấn dự án công trình", "Khảo sát mặt bằng tận nơi"],
  },

  /* 8. SHOWROOM PHAN ĐĂNG LƯU (ĐÀ NẴNG) */
  {
    id: "sr-7",
    name: "SHOWROOM PHAN ĐĂNG LƯU (ĐÀ NẴNG)",
    type: "showroom",
    typeName: "Showroom Flagship",
    region: "central",
    regionName: "Miền Trung",
    address: "152 Phan Đăng Lưu - Phường Hòa Cường - Thành phố Đà Nẵng",
    city: "Đà Nẵng",
    phone: "(84 - 236) 3 582 877 / 3 582 899",
    hotline: "0906 000 111",
    email: "cn-dn@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/vachkinh_hd.jpg",
    mapUrl: "https://maps.google.com/?q=152+Phan+Đăng+Lưu+Hòa+Cường+Đà+Nẵng",
    features: ["Showroom quy mô nhất Đà Nẵng", "Cửa trượt tự động sensor & Nhôm cầu"],
  },

  /* 9. SHOWROOM BUÔN MA THUỘT */
  {
    id: "sr-8",
    name: "SHOWROOM BUÔN MA THUỘT",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "central",
    regionName: "Miền Trung",
    address: "42 Phan Chu Trinh, Phường Buôn Ma Thuột - Tỉnh Đắk Lắk",
    city: "Đắk Lắk",
    phone: "(84 - 262) 393 61 61",
    hotline: "0903 11 8888",
    email: "Showroom.bmt@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuago_hd.jpg",
    mapUrl: "https://maps.google.com/?q=42+Phan+Chu+Trinh+Buôn+Ma+Thuột+Đắk+Lắk",
    features: ["Cửa gỗ tự nhiên Tây Nguyên", "Cửa nhôm tiêu chuẩn Châu Âu"],
  },

  /* 10. SHOWROOM NHA TRANG */
  {
    id: "sr-9",
    name: "SHOWROOM NHA TRANG",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "central",
    regionName: "Miền Trung",
    address: "344 Lê Hồng Phong, phường Nam Nha Trang - Tỉnh Khánh Hòa",
    city: "Khánh Hòa",
    phone: "(84 - 258) 6 250 289",
    hotline: "0903 11 8888",
    email: "showroom.nt@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/project_flc_hd.jpg",
    mapUrl: "https://maps.google.com/?q=344+Lê+Hồng+Phong+Nam+Nha+Trang+Khánh+Hòa",
    features: ["Sản phẩm vách kính resort biển", "Cửa lùa Panorama góc rộng"],
  },

  /* 11. SHOWROOM MẠC ĐĨNH CHI (TP.HCM) */
  {
    id: "sr-10",
    name: "SHOWROOM MẠC ĐĨNH CHI (TP.HCM)",
    type: "showroom",
    typeName: "Showroom Flagship",
    region: "south",
    regionName: "Miền Nam",
    address: "39 Bis Mạc Đĩnh Chi - Phường Tân Định - Thành phố Hồ Chí Minh",
    city: "TP. Hồ Chí Minh",
    phone: "(84 - 28) 6278 8124",
    hotline: "0903 11 8888",
    email: "Showroom.mdc@eurowindow.biz",
    hours: "08:00 - 18:30 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/project_vietphap_hd.jpg",
    mapUrl: "https://maps.google.com/?q=39+Bis+Mạc+Đĩnh+Chi+Phường+Tân+Định+TP+Hồ+Chí+Minh",
    features: ["Showroom trung tâm Quận 1", "Phòng test độ cách âm thực tế 45dB", "Trải nghiệm Smarthome 3D"],
  },

  /* 12. SHOWROOM BIÊN HÒA */
  {
    id: "sr-11",
    name: "SHOWROOM BIÊN HÒA",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "south",
    regionName: "Miền Nam",
    address: "931 Phạm Văn Thuận - Phường Tam Hiệp - Tỉnh Đồng Nai",
    city: "Đồng Nai",
    phone: "(84 - 251) 730 7368",
    hotline: "0903 11 8888",
    email: "showroom.bh@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuacuon_hd.jpg",
    mapUrl: "https://maps.google.com/?q=931+Phạm+Văn+Thuận+Tam+Hiệp+Biên+Hòa+Đồng+Nai",
    features: ["Cửa cuốn nhôm hợp kim", "Cửa nhựa uPVC cách âm"],
  },

  /* 13. SHOWROOM VŨNG TÀU */
  {
    id: "sr-12",
    name: "SHOWROOM VŨNG TÀU",
    type: "showroom",
    typeName: "Showroom Chính Hãng",
    region: "south",
    regionName: "Miền Nam",
    address: "112 Huyền Trân Công Chúa - Phường Thắng Tam - Thành phố Hồ Chí Minh",
    city: "Bà Rịa - Vũng Tàu",
    phone: "(84 - 254) 6 255 145",
    hotline: "0903 11 8888",
    email: "showroom.vt@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    image: "/images/official/cuanhom_hd.jpg",
    mapUrl: "https://maps.google.com/?q=112+Huyền+Trân+Công+Chúa+Thắng+Tam+Vũng+Tàu",
    features: ["Giải pháp cho biệt thự biển", "Kính hộp Low-E dán 2 lớp"],
  },

  /* 14. SHOWROOM CẦN THƠ */
  {
    id: "sr-13",
    name: "SHOWROOM CẦN THƠ",
    type: "showroom",
    typeName: "Showroom Flagship",
    region: "south",
    regionName: "Miền Nam",
    address: "Lô số 12- Đường Số 03, Khu Dân Cư Hồng Loan – Lô Số 5C - Phường Cái Răng - Thành phố Cần Thơ",
    city: "Cần Thơ",
    phone: "(84 - 292) 6 250 679",
    hotline: "0903 11 8888",
    email: "showroom.ct@eurowindow.biz",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    image: "/images/official/cuatudong_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Khu+Dân+Cư+Hồng+Loan+Cái+Răng+Cần+Thơ",
    features: ["Flagship lớn nhất ĐBSCL", "Đầy đủ sản phẩm nhôm, nhựa, gỗ & kính"],
  },

  /* ── POS ĐIỂM BÁN HÀNG (8 POS) ── */
  {
    id: "pos-1",
    name: "POS HẢI PHÒNG",
    type: "pos",
    typeName: "Điểm Bán POS",
    region: "north",
    regionName: "Miền Bắc",
    address: "Lô số 41.4, Đường Trường Chinh - Phường Lê Thanh Nghị - Thành phố Hải Phòng",
    city: "Hải Phòng",
    phone: "0978 039 279",
    hotline: "0978 039 279",
    hours: "08:00 - 17:30",
    image: "/images/official/project_phubai_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Đường+Trường+Chinh+Phường+Lê+Thanh+Nghị+Hải+Phòng",
    features: ["Điểm tư vấn và tiếp nhận đơn hàng POS"],
  },
  {
    id: "pos-2",
    name: "POS NINH BÌNH",
    type: "pos",
    typeName: "Điểm Bán POS",
    region: "north",
    regionName: "Miền Bắc",
    address: "Phố 11 - Phường Hoa Lư - Tỉnh Ninh Bình",
    city: "Ninh Bình",
    phone: "0984 798 518",
    hotline: "0984 798 518",
    hours: "08:00 - 17:30",
    image: "/images/official/cuanhom_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Phố+11+Phường+Hoa+Lư+Ninh+Bình",
    features: ["Điểm tư vấn kỹ thuật & báo giá"],
  },
  {
    id: "pos-3",
    name: "POS LÀO CAI",
    type: "pos",
    typeName: "Điểm Bán POS",
    region: "north",
    regionName: "Miền Bắc",
    address: "Tổ 4 - Phường Yên Bái - Tỉnh Lào Cai",
    city: "Lào Cai",
    phone: "0906 074 268",
    hotline: "0906 074 268",
    hours: "08:00 - 17:30",
    image: "/images/official/cuaupvc_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Tổ+4+Phường+Yên+Bái+Lào+Cai",
    features: ["Tư vấn cửa nhôm & nhựa khu vực miền núi"],
  },
  {
    id: "pos-4",
    name: "POS HÀ NAM / NINH BÌNH",
    type: "pos",
    typeName: "Điểm Bán POS",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 109 Đường Lê Công Thanh - Phường Hà Nam - Tỉnh Ninh Bình",
    city: "Ninh Bình / Hà Nam",
    phone: "0974 727 312 / 0984 764 568",
    hotline: "0974 727 312",
    hours: "08:00 - 17:30",
    image: "/images/official/cuago_hd.jpg",
    mapUrl: "https://maps.google.com/?q=109+Đường+Lê+Công+Thanh+Hà+Nam",
    features: ["Điểm bán chính hãng khu vực Hà Nam"],
  },
  {
    id: "pos-5",
    name: "POS CAO BẰNG",
    type: "pos",
    typeName: "Điểm Bán POS",
    region: "north",
    regionName: "Miền Bắc",
    address: "Lô 15, Khu TĐC số 01, Tổ 9 - Phường Thục Phán - Tỉnh Cao Bằng",
    city: "Cao Bằng",
    phone: "0914 246 366",
    hotline: "0914 246 366",
    hours: "08:00 - 17:30",
    image: "/images/official/cuacuon_hd.jpg",
    mapUrl: "https://maps.google.com/?q=Tổ+9+Phường+Thục+Phán+Cao+Bằng",
    features: ["Tư vấn & tiếp nhận tư vấn công trình"],
  },
  {
    id: "pos-6",
    name: "POS BẮC NINH",
    type: "pos",
    typeName: "Điểm Bán POS",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 800 Đường Lê Lợi - Phường Bắc Giang - Tỉnh Bắc Ninh",
    city: "Bắc Ninh",
    phone: "0974 636 525",
    hotline: "0974 636 525",
    hours: "08:00 - 17:30",
    image: "/images/official/project_vinhomes_hd.jpg",
    mapUrl: "https://maps.google.com/?q=800+Đường+Lê+Lợi+Bắc+Ninh",
    features: ["Phục vụ dự án khu công nghiệp Bắc Ninh"],
  },
  {
    id: "pos-7",
    name: "POS THÁI NGUYÊN",
    type: "pos",
    typeName: "Điểm Bán POS",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 393, Tổ 9A - Phường Đức Xuân - Tỉnh Thái Nguyên",
    city: "Thái Nguyên",
    phone: "0967 916 660",
    hotline: "0967 916 660",
    hours: "08:00 - 17:30",
    image: "/images/official/vachkinh_hd.jpg",
    mapUrl: "https://maps.google.com/?q=393+Tổ+9A+Đức+Xuân+Thái+Nguyên",
    features: ["Điểm tư vấn và đo đạc công trình"],
  },
  {
    id: "pos-8",
    name: "POS SƠN LA",
    type: "pos",
    typeName: "Điểm Bán POS",
    region: "north",
    regionName: "Miền Bắc",
    address: "Số 298 đường Chu Văn Thịnh - Phường Tô Hiệu - Tỉnh Sơn La",
    city: "Sơn La",
    phone: "0989 196 588",
    hotline: "0989 196 588",
    hours: "08:00 - 17:30",
    image: "/images/official/cuanhom_hd.jpg",
    mapUrl: "https://maps.google.com/?q=298+Chu+Văn+Thịnh+Tô+Hiệu+Sơn+La",
    features: ["Tư vấn hệ cửa nhôm & kính Sơn La"],
  },
];

export default function ShowroomPage() {
  const [activeRegion, setActiveRegion] = useState<"all" | "north" | "central" | "south">("all");
  const [activeType, setActiveType] = useState<"all" | "showroom" | "pos">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShowrooms = showroomData.filter((item) => {
    const matchesRegion = activeRegion === "all" || item.region === activeRegion;
    const matchesType = activeType === "all" || (activeType === "showroom" ? item.type === "showroom" : item.type === "pos");
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesType && matchesSearch;
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
              DỮ LIỆU XÁC THỰC 100% EUROWINDOW.BIZ
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] tracking-tight">
              Hệ Thống Showroom & Điểm Bán POS
            </h1>
            <p className="text-[16px] sm:text-[18px] text-gray-300 font-sans leading-relaxed">
              Tổng hợp đầy đủ 22 Showroom chính hãng, Văn phòng đại diện & Điểm bán POS của Eurowindow trên toàn quốc với số điện thoại, địa chỉ và email chính thức.
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-gray-200 pb-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest block">
                KHỚP 100% DỮ LIỆU CHÍNH HÃNG EUROWINDOW.BIZ
              </span>
              <h2 className="font-display font-bold text-[32px] text-[#0a1f3c]">
                Danh Sách Chi Nhánh ({filteredShowrooms.length})
              </h2>
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Type Switcher */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-gray-300 text-[12px] font-bold shadow-sm">
                {[
                  { id: "all", label: "Tất cả địa điểm" },
                  { id: "showroom", label: "Showroom" },
                  { id: "pos", label: "Điểm POS" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveType(t.id as any)}
                    className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      activeType === t.id ? "bg-[#0a1f3c] text-white" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Region Filter Tabs */}
              <div className="flex items-center gap-1 bg-gray-200/80 p-1 rounded-full text-[12px] font-bold">
                {[
                  { id: "all", label: "Tất cả vùng" },
                  { id: "north", label: "Miền Bắc" },
                  { id: "central", label: "Miền Trung" },
                  { id: "south", label: "Miền Nam" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveRegion(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeRegion === tab.id
                        ? "bg-[#005bb7] text-white shadow-md"
                        : "text-gray-700 hover:text-[#005bb7]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative flex-1 min-w-[240px]">
                <input
                  type="text"
                  placeholder="Tìm theo tên, đường, tỉnh thành..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 text-[13px] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#005bb7]"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#0a1f3c]/90 text-white text-[9.5px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                        {showroom.regionName}
                      </span>
                      <span className={`text-[9.5px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md ${showroom.type === "showroom" ? "bg-[#005bb7] text-white" : "bg-amber-600 text-white"}`}>
                        {showroom.typeName}
                      </span>
                    </div>
                  </div>

                  {/* Showroom Content */}
                  <div className="p-7 space-y-4">
                    <h3 className="font-display font-bold text-[17px] text-[#0a1f3c] leading-snug">
                      {showroom.name}
                    </h3>
                    
                    <div className="space-y-2.5 text-[12.5px] text-gray-600 font-sans">
                      <p className="flex items-start gap-2">
                        <span className="font-bold text-[#005bb7] flex-shrink-0">📍 Địa chỉ chuẩn:</span>
                        <span className="font-medium text-gray-900">{showroom.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-bold text-[#005bb7] flex-shrink-0">📞 Tel:</span>
                        <a href={`tel:${showroom.hotline}`} className="font-bold text-gray-900 hover:text-[#005bb7]">
                          {showroom.phone} ({showroom.hotline})
                        </a>
                      </p>
                      {showroom.email && (
                        <p className="flex items-center gap-2">
                          <span className="font-bold text-[#005bb7] flex-shrink-0">✉️ Mail:</span>
                          <a href={`mailto:${showroom.email}`} className="font-mono text-gray-700 hover:underline">
                            {showroom.email}
                          </a>
                        </p>
                      )}
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
                    Google Maps ↗
                  </a>
                  <a
                    href={`tel:${showroom.hotline}`}
                    className="px-4 py-3 border border-gray-300 text-gray-800 font-bold text-[11px] uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Gọi Điện
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredShowrooms.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 space-y-3">
              <p className="text-lg font-bold text-gray-700">Không tìm thấy địa điểm phù hợp với từ khóa "{searchQuery}"</p>
              <p className="text-sm text-gray-500 font-sans">Vui lòng thử tìm kiếm khác hoặc gọi Hotline 0909 888 000 để được hỗ trợ.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
      <FloatingControls />
    </div>
  );
}
