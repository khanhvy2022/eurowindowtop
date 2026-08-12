"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Easing } from "framer-motion";
import { Search, Menu, X, ArrowRight, ChevronDown } from "./icons";

const EASE: Easing = [0.21, 1.11, 0.34, 1];

interface SubMenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  id: string;
  label: string;
  href: string;
  children?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: "intro",
    label: "GIỚI THIỆU",
    href: "/gioi-thieu",
  },
  {
    id: "products",
    label: "SẢN PHẨM",
    href: "/san-pham",
    children: [
      { label: "CỬA NHÔM", href: "/san-pham" },
      { label: "CỬA uPVC", href: "/san-pham" },
      { label: "CỬA GỖ", href: "/san-pham" },
      { label: "CỬA CUỐN", href: "/san-pham" },
      { label: "CỬA TỰ ĐỘNG", href: "/san-pham" },
      { label: "SẢN PHẨM KÍNH", href: "/san-pham" },
      { label: "CỬA THÔNG MINH THẾ HỆ MỚI", href: "/san-pham" },
    ],
  },
  {
    id: "showroom",
    label: "SHOWROOM",
    href: "/showroom",
  },
  {
    id: "projects",
    label: "CÔNG TRÌNH TIÊU BIỂU",
    href: "/cong-trinh",
    children: [
      { label: "CÔNG TRÌNH CẤP QUỐC GIA", href: "/cong-trinh" },
      { label: "DỰ ÁN THƯƠNG MẠI & Y TẾ", href: "/cong-trinh" },
      { label: "KHU ĐÔ THỊ & DÂN CƯ", href: "/cong-trinh" },
      { label: "RESORT & NGHỈ DƯỠNG", href: "/cong-trinh" },
    ],
  },
  {
    id: "architect-hub",
    label: "TÀI LIỆU",
    href: "/tai-lieu",
  },
  {
    id: "news",
    label: "TIN TỨC",
    href: "/tin-tuc",
    children: [
      { label: "TIN TỨC SỰ KIỆN", href: "/tin-tuc" },
      { label: "TỌA ĐÀM & HỘI THẢO", href: "/tin-tuc" },
      { label: "TẠO DỰNG TƯƠNG LAI XANH", href: "/tin-tuc" },
    ],
  },
];

const popularSearches = [
  { title: "Cửa nhôm cao cấp Low-E", category: "Sản phẩm", link: "#products" },
  { title: "Báo giá cửa nhựa uPVC 2026", category: "Dự toán", link: "#calculator" },
  { title: "Công trình Diamond Crown Hải Phòng", category: "Dự án", link: "#projects" },
  { title: "Thư viện file BIM Revit cho KTS", category: "Kỹ thuật", link: "#architect-hub" },
  { title: "Hệ thống Showroom toàn quốc", category: "Showroom", link: "#showroom" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/75 via-black/45 to-transparent text-white backdrop-blur-[2px] transition-all duration-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
      >
        <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between gap-4 h-16 sm:h-20 border-b border-white/15">
          
          {/* Logo — Custom logo-ew */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-3" aria-label="Eurowindow trang chủ">
              <Image
                src="/images/logo-ew-transparent-hd.png"
                alt="EUROWINDOW - Tiên Phong. Kiến Tạo. Đồng Hành."
                width={800}
                height={200}
                className="h-9 sm:h-10 md:h-11 w-auto object-contain brightness-0 invert opacity-95"
                priority
                draggable={false}
              />
            </Link>
          </motion.div>

          {/* Navigation — Desktop Top Menu */}
          <nav className="hidden xl:flex items-center gap-1 font-sans">
            {menuItems.map((item, i) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isHovered = hoveredMenu === item.id;

              return (
                <div
                  key={item.id}
                  className="relative group py-6"
                  onMouseEnter={() => setHoveredMenu(item.id)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 px-3 py-1 text-[13px] font-bold tracking-wider uppercase transition-colors duration-200 text-white/90 hover:text-white"
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 text-white/80 ${
                          isHovered ? "rotate-180 text-white" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Panel matching reference design */}
                  {hasChildren && (
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 w-72 bg-white text-gray-900 shadow-2xl rounded-b-xl border border-gray-100 overflow-hidden z-50 py-1"
                        >
                          {item.children?.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              href={sub.href}
                              className="block px-6 py-3.5 text-[12.5px] font-bold tracking-wide uppercase text-gray-800 hover:text-[#005bb7] hover:bg-gray-50 border-b border-gray-100/70 last:border-none transition-colors duration-200"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Language + Search + CTA — Right side */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 text-[12px] font-bold text-white/80">
              <button
                onClick={() => setLang("vi")}
                className={`cursor-pointer px-1 transition-colors ${lang === "vi" ? "text-white underline underline-offset-4" : "hover:text-white opacity-60"}`}
              >
                VI
              </button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLang("en")}
                className={`cursor-pointer px-1 transition-colors ${lang === "en" ? "text-white underline underline-offset-4" : "hover:text-white opacity-60"}`}
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
                className="w-40 xl:w-44 pl-3.5 pr-8 py-1.5 rounded-full text-[12px] font-medium bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all cursor-pointer"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/70 pointer-events-none" />
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="hidden xl:inline-flex items-center gap-2 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[11px] uppercase tracking-[0.14em] px-6 py-2.5 rounded-full transition-all duration-300 shadow-md group whitespace-nowrap border border-white/20"
            >
              NHẬN TƯ VẤN
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="xl:hidden bg-[#0a1f3c] border-t border-white/10 text-white max-h-[85vh] overflow-y-auto"
          >
            <div className="px-6 py-4 space-y-1">
              {menuItems.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isOpen = activeMobileAccordion === item.id;

                return (
                  <div key={item.id} className="border-b border-white/10 pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => !hasChildren && setIsMobileMenuOpen(false)}
                        className="block px-2 py-3 text-[13.5px] font-bold tracking-wider uppercase text-white/90"
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <button
                          onClick={() => setActiveMobileAccordion(isOpen ? null : item.id)}
                          className="p-2 text-white/70 hover:text-white"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>

                    {hasChildren && isOpen && (
                      <div className="pl-4 pb-2 space-y-1 bg-white/5 rounded-xl my-1 p-2">
                        {item.children?.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-[12px] font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4 space-y-3">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[11px] uppercase tracking-[0.14em] px-6 py-3 rounded-xl transition-all"
                >
                  NHẬN TƯ VẤN
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    onClick={() => setSearchOpen(true)}
                    className="w-full pl-4 pr-9 py-2.5 bg-white/10 border border-white/25 rounded-xl text-[13px] text-white placeholder-white/50 focus:outline-none"
                  />
                  <Search className="absolute right-3 top-3 h-3.5 w-3.5 text-white/55 pointer-events-none" />
                </div>
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
