"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Easing } from "framer-motion";
import { Search, Menu, X, ArrowRight, EurowindowBrandLogo } from "./icons";

const EASE: Easing = [0.21, 1.11, 0.34, 1];

const menuItems = [
  { label: "Sản phẩm", href: "#products", id: "products" },
  { label: "Công trình", href: "#projects", id: "projects" },
  { label: "Về Eurowindow", href: "#intro", id: "intro" },
  { label: "Architect Hub", href: "#architect-hub", id: "architect-hub" },
  { label: "Showroom", href: "#showroom", id: "showroom" },
];

const secondaryItems = [
  { label: "Tin tức", href: "#news", id: "news" },
  { label: "Liên hệ", href: "#footer", id: "footer" },
  { label: "Tư vấn & Hỗ trợ", href: "#contact", id: "contact" },
];

const observedIds = [...menuItems, ...secondaryItems].map((m) => m.id);

const popularSearches = [
  { title: "Cửa nhôm cao cấp Low-E", category: "Sản phẩm", link: "#products" },
  { title: "Báo giá cửa nhựa uPVC 2026", category: "Dự toán", link: "#calculator" },
  { title: "Công trình Diamond Crown Hải Phòng", category: "Dự án", link: "#projects" },
  { title: "Thư viện file BIM Revit cho KTS", category: "Kỹ thuật", link: "#architect-hub" },
  { title: "Hệ thống Showroom toàn quốc", category: "Showroom", link: "#showroom" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const [activeItem, setActiveItem] = useState("Về Eurowindow");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /* IntersectionObserver — active nav highlight */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const matched = menuItems.find((m) => m.id === entry.target.id);
          if (entry.isIntersecting && matched) setActiveItem(matched.label);
        });
      },
      { threshold: 0.3 }
    );
    observedIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent text-white transition-all duration-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
      >
        <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between gap-3 h-16 sm:h-20 border-b border-white/10">
          
          {/* Logo — Original Image Asset + Vietnamese Slogan */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex flex-col justify-center" aria-label="Eurowindow trang chủ">
              <Image
                src="/images/eurowindow-logo-banner.png"
                alt="EUROWINDOW - Tiên Phong. Kiến Tạo. Đồng Hành."
                width={4428}
                height={827}
                className="h-8 sm:h-9 md:h-10 w-auto object-contain opacity-95"
                priority
                draggable={false}
              />
            </Link>
          </motion.div>

          {/* Navigation — center */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {menuItems.map((item, i) => {
              const isActive = activeItem === item.label;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE, delay: 0.25 + i * 0.03 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.label)}
                    className={`group relative px-3 py-2 text-[12.5px] font-bold whitespace-nowrap transition-colors duration-200 rounded-md text-white/85 hover:text-white ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full transition-transform origin-left duration-300 bg-white ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Language + Search + CTA — right */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-[12px] font-bold text-white/70">
              <button
                onClick={() => setLang("vi")}
                className={`cursor-pointer px-1 transition-colors ${lang === "vi" ? "text-white" : "hover:text-white"}`}
              >
                VI
              </button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLang("en")}
                className={`cursor-pointer px-1 transition-colors ${lang === "en" ? "text-white" : "hover:text-white"}`}
              >
                EN
              </button>
            </div>

            {/* Interactive Search Box */}
            <div className="relative hidden 2xl:block">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                onClick={() => setSearchOpen(true)}
                onFocus={() => setSearchOpen(true)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 xl:w-48 pl-3.5 pr-8 py-1.5 rounded-lg text-[12px] font-medium bg-white/10 border border-white/25 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all cursor-pointer"
              />
              <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/60 pointer-events-none" />
            </div>

            <Link
              href="#contact"
              className="hidden xl:inline-flex items-center gap-2.5 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[11px] uppercase tracking-[0.14em] px-6 py-3 rounded-full transition-all duration-300 group whitespace-nowrap"
            >
              NHẬN TƯ VẤN
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex xl:hidden items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1 text-[11px] font-bold text-white/80">
              <button onClick={() => setLang("vi")} className={lang === "vi" ? "text-white" : ""}>VI</button>
              <span className="opacity-30">|</span>
              <button onClick={() => setLang("en")} className={lang === "en" ? "text-white" : ""}>EN</button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="xl:hidden bg-black/85 backdrop-blur-xl border-t border-white/10 text-white"
          >
            <div className="px-6 py-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-[13.5px] font-semibold text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pl-4 pt-1 pb-1">
                {secondaryItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[12.5px] font-medium text-white/55 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 flex items-center justify-center gap-2.5 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[11px] uppercase tracking-[0.14em] px-6 py-3.5 rounded-full transition-all duration-300"
              >
                NHẬN TƯ VẤN
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <div className="pt-2 relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  onClick={() => setSearchOpen(true)}
                  className="w-full pl-4 pr-9 py-2.5 bg-white/10 border border-white/25 rounded-xl text-[13px] text-white placeholder-white/50 focus:outline-none"
                />
                <Search className="absolute right-3 top-[22px] h-3.5 w-3.5 text-white/55 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* ── Search Modal Overlay ── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4 animate-fade-in"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="h-5 w-5 text-[#005bb7]" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Nhập từ khóa tìm kiếm (VD: cửa nhôm, uPVC, báo giá...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-[15px] font-medium text-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-lg font-bold p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Popular Suggestions */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                Tìm kiếm phổ biến
              </span>
              <div className="space-y-2">
                {popularSearches
                  .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/80 group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold bg-blue-100 text-[#005bb7] px-2.5 py-1 rounded-full uppercase">
                          {item.category}
                        </span>
                        <span className="text-[13.5px] font-semibold text-gray-800 group-hover:text-[#005bb7]">
                          {item.title}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#005bb7] transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
