"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "./icons";

interface ProductCategory {
  id: string;
  name: string;
  nameFull: string;
  desc: string;
  image: string;
  tag: string;
  specs: string[];
  features: string[];
}

const categories: ProductCategory[] = [
  {
    id: "nhom",
    name: "Cửa Nhôm",
    nameFull: "CỬA NHÔM CAO CẤP",
    desc: "Hệ cửa nhôm sản xuất từ hợp kim cao cấp, sơn phủ PVDF chịu ăn mòn — lý tưởng cho công trình ven biển và cao tầng.",
    image: "/images/official/cuanhom_hd.jpg",
    tag: "Bestseller",
    specs: [
      "Thanh profile nhôm sơn phủ PVDF chịu ăn mòn mặn bãi biển",
      "Kính hộp Low-E dán an toàn 2 lớp chống va đập",
      "Cách âm đạt chuẩn ISO 140-3 (giảm 42–45 dB)",
    ],
    features: [
      "Chịu áp lực gió bão lên đến cấp 15",
      "Hệ gioăng EPDM kép ngăn rò rỉ nước 100%",
      "Phụ kiện kim khí Roto / Cấp Đức đồng bộ",
    ],
  },
  {
    id: "upvc",
    name: "Cửa uPVC",
    nameFull: "CỬA UPVC THÔNG MINH",
    desc: "Cửa nhựa uPVC cách âm, cách nhiệt vượt trội — bảo vệ tổ ấm bền bỉ, tiết kiệm điện năng 30%.",
    image: "/images/official/cuaupvc_hd.jpg",
    tag: "Tiết kiệm năng lượng",
    specs: [
      "Thanh profile uPVC định hình lõi thép gia cường",
      "Khả năng chống lão hóa tia cực tím 20 năm",
      "Tiết kiệm 30% chi phí tiêu thụ điện máy lạnh",
    ],
    features: [
      "Cách nhiệt tuyệt đối với môi trường bên ngoài",
      "Khóa chốt đa điểm chống trộm an toàn",
      "Mẫu mã đa dạng: quay, hất, trượt xếp",
    ],
  },
  {
    id: "go",
    name: "Cửa Gỗ",
    nameFull: "CỬA GỖ SANG TRỌNG",
    desc: "Gỗ tự nhiên & công nghiệp chịu nước, sơn PU cao cấp 6 lớp — sang trọng bền bỉ theo thời gian.",
    image: "/images/official/cuago_hd.jpg",
    tag: "Luxury",
    specs: [
      "Gỗ tự nhiên & gỗ công nghiệp chịu nước 100%",
      "Sơn PU cao cấp 6 lớp chống mối mọt cong vênh",
      "Thiết kế phong cách tân cổ điển & hiện đại",
    ],
    features: [
      "Vân gỗ sang trọng tinh tế",
      "Chống cháy tiêu chuẩn 60–120 phút",
      "Bản lề cối chịu lực không xệ cánh",
    ],
  },
  {
    id: "kinh",
    name: "Vách Kính",
    nameFull: "SẢN PHẨM KÍNH CAO CẤP",
    desc: "Vách kính & hệ cửa kính High-End — trong suốt, tối ưu ánh sáng tự nhiên, nâng tầm kiến trúc.",
    image: "/images/official/vachkinh_hd.jpg",
    tag: "Kiến trúc",
    specs: [
      "Kính cường lực & kính hộp Low-E cách nhiệt, chống tia UV",
      "Vách kính khung nhôm liền mạch, an toàn chịu lực",
      "Kính dán an toàn 2 lớp chống va đập, cách âm 42–45 dB",
    ],
    features: [
      "Tối ưu ánh sáng tự nhiên, tiết kiệm điện chiếu sáng",
      "Đa dạng độ dày 5mm–24mm theo công năng",
      "Chống cháy tiêu chuẩn, an toàn cho công trình",
    ],
  },
  {
    id: "cuon",
    name: "Cửa Cuốn",
    nameFull: "CỬA CUỐN HIỆN ĐẠI",
    desc: "Giải pháp cửa cuốn hiện đại, tiết kiệm tối đa không gian và tối ưu an toàn cho nhà xưởng, garage.",
    image: "/images/official/cuacuon_hd.jpg",
    tag: "Tiết kiệm không gian",
    specs: [
      "Nan nhôm hợp kim sơn tĩnh điện ngoài trời",
      "Tích hợp cảm biến tự dừng khi gặp vật cản",
      "Bộ điều khiển mã nhảy chống dò sóng",
    ],
    features: [
      "Động cơ nhập khẩu vận hành êm ái",
      "Tích hợp bình lưu điện khi mất điện",
      "Lấy sáng & thông thoáng tự nhiên",
    ],
  },
  {
    id: "tudong",
    name: "Cửa Tự Động",
    nameFull: "CỬA TỰ ĐỘNG THÔNG MINH",
    desc: "Cửa tự động cao cấp cho không gian thương mại, khách sạn 5 sao và tòa nhà văn phòng hạng A.",
    image: "/images/official/cuatudong_hd.jpg",
    tag: "Smart System",
    specs: [
      "Mắt thần cảm ứng hồng ngoại vi sóng kép",
      "Cánh kính cường lực 10–12mm siêu trong",
      "Ray trượt hợp kim nhôm chống mòn",
    ],
    features: [
      "Tần suất mở cửa đến 100.000 lượt/ngày",
      "Tự động khóa ban đêm an toàn",
      "Kết nối hệ thống PCCC tòa nhà",
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.07 },
  }),
};

export default function ProductSection() {
  const [activeId, setActiveId] = useState("nhom");
  const [modal, setModal] = useState<ProductCategory | null>(null);

  const featured = categories.find((c) => c.id === activeId) ?? categories[0];
  const others = categories.filter((c) => c.id !== activeId);

  return (
    <section
      id="products"
      className="relative py-20 lg:py-32 bg-[#0a1f3c] overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#005bb7]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#c5a968]/8 blur-[100px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-[#c5a968] text-[10px] font-bold uppercase tracking-[0.22em]">
              <span className="h-px w-6 bg-[#c5a968]" />
              Hệ Sản Phẩm
            </span>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[46px] lg:text-[54px] leading-[1.1] text-white tracking-tight">
              Những hệ cửa tạo nên kiến trúc.
            </h2>
          </div>
          <p className="text-[13px] text-white/50 font-sans max-w-xs lg:text-right">
            Từ nhôm cao cấp đến giải pháp kính thông minh — kỹ thuật tỉ mỉ
            trong từng chi tiết.
          </p>
        </motion.div>

        {/* Category pill filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => {
            const active = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                  active
                    ? "bg-[#c5a968] text-[#0a1f3c] shadow-lg shadow-[#c5a968]/25"
                    : "bg-white/8 border border-white/15 text-white/60 hover:text-white hover:bg-white/15"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="lg:col-span-7 relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{ minHeight: "520px" }}
              onClick={() => setModal(featured)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c]/95 via-[#0a1f3c]/30 to-transparent" />

              {/* Tag pill */}
              <div className="absolute top-6 left-6">
                <span className="bg-[#c5a968] text-[#0a1f3c] text-[9px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
                  {featured.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <span className="text-[10px] font-bold text-[#c5a968] uppercase tracking-[0.18em] block mb-2">
                  Eurowindow — {featured.nameFull}
                </span>
                <h3 className="font-display font-bold text-[28px] sm:text-[34px] text-white leading-tight mb-3">
                  {featured.name}
                </h3>
                <p className="text-[13px] text-white/65 font-sans leading-relaxed max-w-md mb-6">
                  {featured.desc}
                </p>
                <button className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c5a968] border border-[#c5a968]/40 px-6 py-2.5 rounded-full hover:bg-[#c5a968] hover:text-[#0a1f3c] transition-all duration-300 group/btn cursor-pointer">
                  Xem chi tiết
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side grid — 5 other cards in 2-col */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-4">
            {others.slice(0, 4).map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ minHeight: "230px" }}
                onClick={() => {
                  setActiveId(cat.id);
                  setModal(cat);
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c]/90 via-[#0a1f3c]/20 to-transparent group-hover:from-[#0a1f3c]/95 transition-all duration-500" />

                {/* Gold border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[#c5a968]/40 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display font-bold text-[13px] text-white leading-tight">
                    {cat.name}
                  </p>
                  <span className="text-[9px] font-bold text-[#c5a968] uppercase tracking-widest mt-0.5 block">
                    {cat.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10"
        >
          <p className="text-[13px] text-white/50 font-sans">
            Chưa tìm thấy sản phẩm phù hợp?{" "}
            <span className="text-[#c5a968]">Chuyên gia sẵn sàng tư vấn.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 hover:border-[#c5a968]/60 hover:bg-[#c5a968]/10 text-white font-bold text-[10px] uppercase tracking-[0.16em] px-7 py-3.5 rounded-full transition-all duration-300 group"
          >
            Xem tất cả sản phẩm
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* ── Premium Dark Modal ── */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={modal.nameFull}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative w-full max-w-4xl bg-[#0d2548] border border-white/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setModal(null)}
                aria-label="Đóng"
                className="absolute top-5 right-5 z-20 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer text-lg font-bold"
              >
                ✕
              </button>

              {/* Image */}
              <div className="md:col-span-6 relative min-h-[280px] md:min-h-[440px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${modal.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d2548]/30" />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#c5a968] text-[#0a1f3c] text-[9px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
                    {modal.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] font-bold text-[#c5a968] uppercase tracking-[0.2em] block mb-1">
                      {modal.nameFull}
                    </span>
                    <h3 className="font-display font-bold text-[26px] text-white leading-snug">
                      {modal.name}
                    </h3>
                    <p className="text-[13px] text-white/55 mt-2 font-sans leading-relaxed">
                      {modal.desc}
                    </p>
                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-5">
                    <h4 className="text-[10px] font-bold uppercase text-white/40 tracking-widest">
                      Thông số & Tính năng
                    </h4>
                    <ul className="space-y-2.5">
                      {modal.specs.concat(modal.features).map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-[12px] text-white/70 font-sans"
                        >
                          <Check className="h-4 w-4 text-[#c5a968] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex gap-3">
                  <a
                    href="#contact"
                    onClick={() => setModal(null)}
                    className="flex-1 text-center py-3.5 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[10px] uppercase tracking-[0.18em] rounded-xl transition-all"
                  >
                    Nhận tư vấn ngay
                  </a>
                  <button
                    onClick={() => setModal(null)}
                    className="py-3.5 px-5 border border-white/15 text-white/60 hover:text-white font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
