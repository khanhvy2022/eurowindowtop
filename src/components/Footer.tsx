"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Youtube,
  Instagram,
  ZaloIcon,
  TikTokIcon,
  ArrowRight,
} from "./icons";

export default function Footer() {
  const quickLinks = [
    { label: "Về Eurowindow", href: "#intro" },
    { label: "Công trình tiêu biểu", href: "#projects" },
    { label: "Tin tức", href: "#news" },
    { label: "Hệ thống Showroom", href: "/showroom" },
    { label: "Liên hệ tư vấn", href: "#contact" },
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

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/eurowindow.biz",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/eurowindow.biz/",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCpMyOKyn5p1TX3urz_dHo7A",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      label: "Zalo",
      href: "https://zalo.me/3969929733792079943",
      icon: <ZaloIcon className="h-5 w-5" />,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@eurowindow.official",
      icon: <TikTokIcon className="h-5 w-5" />,
    },
  ];

  return (
    <footer id="footer" className="bg-[#0a1f3c] text-white relative overflow-hidden">
      {/* Wordmark watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none z-0"
      >
        <span className="block text-center font-display font-black text-[13vw] lg:text-[11rem] leading-[0.75] text-white/[0.025] tracking-tighter whitespace-nowrap pb-24">
          EUROWINDOW
        </span>
      </div>

      {/* ── Top CTA Banner ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-8 relative z-10">
        <div className="relative bg-white/[0.07] backdrop-blur-md rounded-3xl border border-white/[0.12] overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 lg:p-14 gap-8">
          {/* Shimmer overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(197,169,104,0.06) 50%, transparent 60%)",
            }}
          />
          {/* Ambient orb */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#c5a968]/10 blur-[80px]" />

          <div className="relative max-w-2xl text-center md:text-left space-y-4">
            <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
              Bắt đầu công trình của bạn.
            </h3>
            <p className="text-blue-100/70 text-sm font-sans">
              Đội ngũ chuyên gia Eurowindow sẵn sàng đồng hành cùng bạn 24/7.
            </p>
            {/* Hotline */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="h-8 w-8 rounded-full bg-[#c5a968]/20 border border-[#c5a968]/40 flex items-center justify-center flex-shrink-0">
                <span className="text-[#c5a968] text-sm">☎</span>
              </div>
              <div>
                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                  Hotline miễn phí 24/7
                </p>
                <p className="text-[20px] font-extrabold text-[#c5a968] tracking-wide leading-tight">
                  1800 577 775
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex-shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl shadow-[#c5a968]/20 transition-all group cursor-pointer"
            >
              NHẬN TƯ VẤN
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/showroom"
              className="inline-flex items-center gap-3 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all group cursor-pointer"
            >
              TÌM SHOWROOM
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c5a968]/50 to-transparent" />
      </div>

      {/* ── Main Footer Content ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">

        {/* Info Column */}
        <div className="space-y-6">
          <div>
            <Image
              src="/images/logo-ew-transparent-hd.png"
              alt="EUROWINDOW - Tiên Phong. Kiến Tạo. Đồng Hành."
              width={800}
              height={200}
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <div className="space-y-2 text-sm text-blue-100/70 font-sans leading-relaxed">
            <p className="font-bold text-white text-[13px]">CÔNG TY CỔ PHẦN EUROWINDOW</p>
            <p>
              Tòa nhà Văn phòng Eurowindow Office Building,
              <br />Số 02 Tôn Thất Tùng, Kim Liên, Hà Nội
            </p>
            <p>SĐT: (84 - 24) 3 7 47 47 00</p>
            <p>Email: infoew@eurowindow.biz</p>
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-2">
            <span className="text-[9px] uppercase tracking-widest font-bold text-white/30 block">
              Mạng xã hội
            </span>
            <div className="flex gap-2.5 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-11 w-11 rounded-full bg-white/[0.07] hover:bg-white/[0.15] border border-white/10 hover:border-[#c5a968]/40 flex items-center justify-center transition-all duration-300 text-white/70 hover:text-white ring-0 hover:ring-1 hover:ring-[#c5a968]/20"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-display font-bold text-[13px] mb-6 border-l-2 border-[#c5a968] pl-3 uppercase tracking-widest text-white">
            Liên kết nhanh
          </h4>
          <ul className="space-y-3 text-[13px] text-blue-100/60 font-sans">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 hover:text-[#c5a968] hover:translate-x-1 transition-all duration-200 group"
                >
                  <span className="h-px w-0 bg-[#c5a968] group-hover:w-3 transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h4 className="font-display font-bold text-[13px] mb-6 border-l-2 border-[#c5a968] pl-3 uppercase tracking-widest text-white">
            Sản phẩm
          </h4>
          <ul className="space-y-3 text-[13px] text-blue-100/60 font-sans">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 hover:text-[#c5a968] hover:translate-x-1 transition-all duration-200 group"
                >
                  <span className="h-px w-0 bg-[#c5a968] group-hover:w-3 transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care Column */}
        <div>
          <h4 className="font-display font-bold text-[13px] mb-6 border-l-2 border-[#c5a968] pl-3 uppercase tracking-widest text-white">
            Chăm sóc khách hàng
          </h4>
          <div className="space-y-5 text-[13px] text-blue-100/60 leading-relaxed font-sans">
            {[
              { region: "Miền Bắc", phone: "0909 888 000" },
              { region: "Miền Trung", phone: "0906 000 111" },
              { region: "Miền Nam", phone: "0903 11 8888" },
            ].map((item) => (
              <div key={item.region} className="space-y-0.5">
                <p className="text-[10px] font-bold text-white/35 uppercase tracking-widest">
                  {item.region}
                </p>
                <p className="text-[18px] font-extrabold text-white tracking-wide">
                  {item.phone}
                </p>
              </div>
            ))}
            <div className="pt-3 border-t border-white/[0.08]">
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">
                Email hỗ trợ
              </p>
              <p className="font-semibold text-white/70 hover:text-[#c5a968] transition-colors">
                cskhhn@eurowindow.biz
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Copyright Bar ── */}
      <div className="bg-[#06142a] border-t border-white/[0.07] py-5 text-[11px] text-blue-100/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            © 2026 Eurowindow. Mọi quyền được bảo lưu.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              Điều khoản & Điều kiện
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/60 transition-colors">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
