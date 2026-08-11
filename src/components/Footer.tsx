"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EurowindowLogo, EurowindowBrandLogo, Facebook, Youtube, TikTokIcon, ArrowRight } from "./icons";

export default function Footer() {
  const quickLinks = [
    { label: "Về Eurowindow", href: "#intro" },
    { label: "Dự án", href: "#projects" },
    { label: "Tin tức", href: "#news" },
    { label: "Hệ thống Showroom", href: "#showroom" },
    { label: "Liên hệ", href: "#footer" },
  ];

  const productLinks = [
    { label: "Cửa nhôm", href: "#products" },
    { label: "Cửa uPVC", href: "#products" },
    { label: "Cửa gỗ", href: "#products" },
    { label: "Cửa cuốn", href: "#products" },
    { label: "Cửa tự động", href: "#products" },
    { label: "Sản phẩm kính", href: "#products" },
    { label: "Cửa thông minh thế hệ mới", href: "#products" },
  ];

  return (
    <footer id="footer" className="bg-[#0a1f3c] text-white relative">
      {/* Top CTA Consultation Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-8">
        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 lg:p-14 gap-8">
          <div className="max-w-2xl text-center md:text-left space-y-3">
            <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
              Bắt đầu công trình của bạn.
            </h3>
            <p className="text-blue-100 text-sm font-sans">
              Đội ngũ chuyên gia Eurowindow sẵn sàng đồng hành cùng bạn 24/7.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl transition-all group cursor-pointer"
            >
              NHẬN TƯ VẤN
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          {/* Subtle background gradient flare */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Info Column */}
        <div className="space-y-6">
          <div className="space-y-1">
            <Image
              src="/images/eurowindow-logo-banner.png"
              alt="EUROWINDOW - Tiên Phong. Kiến Tạo. Đồng Hành."
              width={4428}
              height={827}
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="text-[11px] font-sans font-bold text-white/80 tracking-wider">
              Tiên Phong. Kiến Tạo. Đồng Hành.
            </p>
          </div>
          <div className="space-y-3 text-sm text-blue-100 font-sans leading-relaxed">
            <p className="font-bold text-white text-base">CÔNG TY CỔ PHẦN EUROWINDOW</p>
            <p>
              Tòa nhà Văn phòng Eurowindow Office Building, Số 02 Tôn Thất Tùng,
              Kim Liên, Hà Nội
            </p>
            <p>SĐT: (84 - 24) 3 7 47 47 00</p>
            <p>Email: infoew@eurowindow.biz</p>
          </div>
          {/* Social Links */}
          <div className="space-y-3 pt-2">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-200 block">
              LIÊN KẾT MẠNG XÃ HỘI
            </span>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6 border-b border-white/20 pb-2.5">
            LIÊN KẾT NHANH
          </h4>
          <ul className="space-y-3.5 text-sm text-blue-100 font-sans">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6 border-b border-white/20 pb-2.5">
            SẢN PHẨM
          </h4>
          <ul className="space-y-3.5 text-sm text-blue-100 font-sans">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care Column */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6 border-b border-white/20 pb-2.5">
            CHĂM SÓC KHÁCH HÀNG
          </h4>
          <div className="space-y-4 text-sm text-blue-100 leading-relaxed font-sans">
            <div>
              <p className="font-semibold text-white">Miền Bắc</p>
              <p className="text-xl font-extrabold text-white tracking-wide">0909 888 000</p>
            </div>
            <div>
              <p className="font-semibold text-white">Miền Trung</p>
              <p className="text-xl font-extrabold text-white tracking-wide">0906 000 111</p>
            </div>
            <div>
              <p className="font-semibold text-white">Miền Nam</p>
              <p className="text-xl font-extrabold text-white tracking-wide">0903 11 8888</p>
            </div>
            <div className="pt-3 border-t border-white/10">
              <p className="text-xs text-blue-200">Email hỗ trợ:</p>
              <p className="font-semibold text-white">cskhhn@eurowindow.biz</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#06142a] border-t border-white/10 py-6 text-xs text-blue-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            Copyright © 2026 - Eurowindow. All Rights Reserved. Designed by Thuy
            Thu Agency
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản & Điều kiện
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
