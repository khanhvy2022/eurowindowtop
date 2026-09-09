"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, ChevronRight } from "./icons";

interface NewsArticle {
  id: string;
  category: "du-an" | "su-kien" | "cong-ty" | "video";
  categoryLabel: string;
  title: string;
  date: string;
  readTime: string;
  type: "video" | "text";
  desc: string;
  image: string;
}

const newsData: NewsArticle[] = [
  {
    id: "n4",
    category: "du-an",
    categoryLabel: "TIN DỰ ÁN",
    title: "Eurowindow trúng thầu thi công hệ cửa và vách nhôm kính dự án FPT Telecom Tower",
    date: "25/07/2026",
    readTime: "3 phút đọc",
    type: "text",
    desc: "Khẳng định uy tín hàng đầu, Eurowindow tiếp tục trúng thầu thi công gói thầu vách kính Unitized chống ồn tản nhiệt tại tòa nhà FPT Telecom Tower.",
    image: "/images/official/project_office_hd.jpg",
  },
  {
    id: "n1",
    category: "du-an",
    categoryLabel: "TIN DỰ ÁN",
    title: "Eurowindow cung cấp, lắp đặt cửa và vách kính tại khu đô thị Vinhomes Global Gate Cổ Loa",
    date: "08/08/2026",
    readTime: "4 phút đọc",
    type: "text",
    desc: "Eurowindow chính thức ký kết và triển khai thi công toàn bộ hệ thống cửa nhôm kính cao cấp và vách kính tấm lớn cho siêu dự án Vinhomes Global Gate.",
    image: "/images/official/project_vinhomes_hd.jpg",
  },
  {
    id: "n2",
    category: "su-kien",
    categoryLabel: "TIN SỰ KIỆN",
    title: "Eurowindow tổ chức thành công tọa đàm 'Xu hướng nguồn nhân lực & Chiến lược phát triển bối cảnh mới'",
    date: "05/08/2026",
    readTime: "5 phút xem",
    type: "video",
    desc: "Sự kiện quy tụ dàn lãnh đạo và chuyên gia đầu ngành chia sẻ về định hướng phát triển bền vững và chiến lược kiến tạo môi trường làm việc chuyên nghiệp.",
    image: "/images/official/news_toadam_hd.png",
  },
  {
    id: "n3",
    category: "cong-ty",
    categoryLabel: "TIN CÔNG TY",
    title: "Thể lệ chương trình khuyến mãi 'Siêu phẩm sang – Ưu đãi vàng' tri ân khách hàng",
    date: "30/07/2026",
    readTime: "2 phút đọc",
    type: "text",
    desc: "Chương trình ưu đãi lớn nhất năm áp dụng cho tất cả sản phẩm cửa nhôm, cửa uPVC và giải pháp vách kính tiết kiệm năng lượng Eurowindow.",
    image: "/images/official/news_chietkhau_hd.png",
  },
];

const secondaryNews = [
  {
    title: "Eurowindow khởi động chiến dịch '90 ngày tái thiết nơi làm việc tốt nhất'",
    date: "20/07/2026",
    category: "Tin Công ty",
    image: "/images/official/news_taithiet_hd.jpg",
  },
  {
    title: "Eurowindow góp phần kiến tạo không gian sống thượng lưu Sunshine Noble Palace",
    date: "15/07/2026",
    category: "Tin Dự án",
    image: "/images/official/architect_hub_hd.jpg",
  },
  {
    title: "Tổng hợp giải pháp cửa chống nóng & cách nhiệt Eurowindow mùa hè 2026",
    date: "10/07/2026",
    category: "Giải pháp Kỹ thuật",
    image: "/images/official/cuanhom_hd.jpg",
  },
];

const categories = [
  { id: "all", label: "Tin tức & Sự kiện" },
  { id: "du-an", label: "Tin dự án" },
  { id: "cong-ty", label: "Tin công ty" },
  { id: "video", label: "Video" },
];

export default function NewsSection() {
  const [activeCat, setActiveCat] = useState<string>("du-an");
  const [activeArticleIdx, setActiveArticleIdx] = useState<number>(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const filteredPool = newsData.filter(
    (item) => activeCat === "all" || item.category === activeCat
  );
  const currentArticle = filteredPool[activeArticleIdx % filteredPool.length] || newsData[0];

  return (
    <section id="news" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest block">
              EUROWINDOW JOURNAL & NEWS
            </span>
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] text-[#0a1f3c] leading-tight">
              Tin Tức & Sự Kiện Nổi Bật.
            </h2>
            <p className="text-[15px] text-gray-600 font-sans leading-relaxed">
              Cập nhật những thông tin mới nhất về các dự án trúng thầu, hoạt động doanh nghiệp & giải thưởng uy tín.
            </p>
          </div>

          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-widest text-[#005bb7] hover:text-[#00468c] border-b border-[#005bb7]/30 pb-1.5 hover:border-[#005bb7] transition-all whitespace-nowrap w-fit"
          >
            — XEM TẤT CẢ TIN TỨC
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Interactive News Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Category Navigation Sidebar (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2 bg-white p-3 rounded-3xl border border-slate-200/80 shadow-sm h-fit">
            {categories.map((cat) => {
              const isActive = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCat(cat.id);
                    setActiveArticleIdx(0);
                  }}
                  className={`px-5 py-3.5 rounded-2xl text-left text-[13px] font-bold transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isActive
                      ? "bg-[#005bb7] text-white shadow-md shadow-[#005bb7]/20"
                      : "text-gray-600 hover:bg-slate-100 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c5a968]" />}
                    <span>{cat.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-white translate-x-1" : "text-gray-400 group-hover:translate-x-1"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Main Spotlight Card Grid (9 cols) */}
          <div className="lg:col-span-9 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 group">
            
            {/* Spotlight Image Box (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto min-h-[380px] overflow-hidden bg-gray-100">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentArticle.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentArticle.image})` }}
                />
              </AnimatePresence>
              
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#0a1f3c]/90 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                  {currentArticle.categoryLabel}
                </span>
              </div>

              {currentArticle.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="w-16 h-16 rounded-full bg-white/90 text-[#005bb7] hover:bg-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer"
                  >
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </button>
                </div>
              )}
            </div>

            {/* Spotlight Content Box (5 cols) */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[11.5px] font-semibold text-gray-500 font-sans">
                  <span>{currentArticle.date}</span>
                  <span>•</span>
                  <span className="text-[#005bb7] font-bold">{currentArticle.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-[22px] sm:text-[26px] text-gray-900 leading-snug group-hover:text-[#005bb7] transition-colors">
                  {currentArticle.title}
                </h3>

                <p className="text-[13.5px] text-gray-600 font-sans leading-relaxed">
                  {currentArticle.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/tin-tuc"
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#005bb7] hover:text-[#00468c] transition-colors"
                >
                  XEM CHI TIẾT
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {filteredPool.length > 1 && (
                  <div className="flex gap-1.5">
                    {filteredPool.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveArticleIdx(i)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${i === activeArticleIdx % filteredPool.length ? "w-6 bg-[#005bb7]" : "w-2 bg-slate-200"}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Secondary Articles Bento Grid (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {secondaryNews.map((news, idx) => (
            <Link
              key={idx}
              href="/tin-tuc"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#005bb7] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 text-[9.5px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[11px] font-semibold text-gray-400 font-sans">{news.date}</span>
                  <h4 className="font-display font-bold text-[16px] text-gray-900 group-hover:text-[#005bb7] transition-colors leading-snug line-clamp-2">
                    {news.title}
                  </h4>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-[11.5px] font-bold text-[#005bb7] group-hover:translate-x-1 transition-transform">
                <span>ĐỌC BÀI VIẾT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {isPlayingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsPlayingVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl cursor-pointer transition-colors"
            >
              ✕
            </button>
            <div className="relative aspect-video">
              <video className="w-full h-full object-contain" controls autoPlay playsInline>
                <source src="/videos/news-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
