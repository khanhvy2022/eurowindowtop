"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "./icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    projectType: "biet-thu",
    agree: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Bạn phải đồng ý với Chính sách bảo mật.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        projectType: "biet-thu",
        agree: true,
      });
    }, 4000);
  };

  const facadeImage = "/images/nhom-cau-ew.jpg";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a1f3c] overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-48 right-0 h-[34rem] w-[34rem] rounded-full bg-[#005bb7]/25 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#c5a968]/10 blur-[130px]" />
      {/* Subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #c5a968 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Gold hairline divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5a968]/30 to-transparent" />

      {/* Gold ghost wordmark */}
      <div className="absolute right-0 top-2 select-none pointer-events-none">
        <span className="font-display font-black text-[12vw] lg:text-[8rem] text-[#c5a968]/[0.09] tracking-tighter leading-none block whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d2548]">

          {/* Left Column: Photo Banner with Glass Badge (6 cols) */}
          <div className="lg:col-span-6 relative hidden lg:block overflow-hidden min-h-[640px]">
            <Image
              src={facadeImage}
              alt="Eurowindow Architectural Interior"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1f3c]/70 via-transparent to-transparent" />

            {/* Floating Trust Glass Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/85 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-xl space-y-2">
              <span className="text-[10px] font-bold text-[#0a1f3c] uppercase tracking-widest block">
                TƯ VẤN CHUYÊN TẬN TÂM — KHẢO SÁT TẬN NƠI
              </span>
              <p className="text-[15px] font-bold text-gray-900 leading-snug">
                Đội ngũ kỹ sư Eurowindow trực tiếp đo đạc, bóc tách khối lượng & tư vấn giải pháp nhôm kính tối ưu.
              </p>
              <div className="flex items-center gap-4 pt-2 text-[12px] font-semibold text-gray-600">
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c5a968]" /> Miễn phí 100%</span>
                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c5a968]" /> Hỗ trợ toàn quốc</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Form Card (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0d2548] via-[#0a1f3c] to-[#081c38] border-t lg:border-t-0 lg:border-l border-white/10 text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative">
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center space-y-5 py-12 animate-fade-in">
                <div className="h-20 w-20 bg-white text-[#c5a968] rounded-full flex items-center justify-center shadow-2xl">
                  <Check className="h-10 w-10 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-[28px] text-white">
                  Đăng Ký Thành Công!
                </h3>
                <p className="text-[14.5px] text-white/60 max-w-sm font-sans leading-relaxed">
                  Cảm ơn quý khách đã gửi thông tin. Chuyên viên tư vấn Eurowindow sẽ liên hệ trong vòng 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#c5a968] text-[10px] font-bold uppercase tracking-widest border border-white/15">
                    EUROWINDOW CONSULTATION FORM
                  </span>
                  <h3 className="font-display font-bold text-[28px] sm:text-[36px] leading-snug">
                    Bắt đầu công trình của bạn.
                  </h3>
                  <p className="text-[14px] text-white/60 font-sans leading-relaxed">
                    Chia sẻ nhu cầu công trình. Đội ngũ chuyên gia Eurowindow sẽ đề xuất giải pháp & báo giá chi tiết.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-1.5">
                      Họ và tên quý khách *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập họ và tên đầy đủ..."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-[14px] font-medium text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[#c5a968]/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-1.5">
                        Số điện thoại liên hệ *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="090x xxx xxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-[14px] font-medium text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[#c5a968]/60 focus:bg-white/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-1.5">
                        Địa chỉ Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-[14px] font-medium text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[#c5a968]/60 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-1.5">
                      Địa chỉ công trình *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tỉnh/Thành phố, Quận/Huyện..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-[14px] font-medium text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-[#c5a968]/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-1.5">
                      Loại hình công trình *
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#081c38] border border-white/15 rounded-xl px-4 py-3.5 text-[14px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#c5a968]/60 cursor-pointer"
                    >
                      <option value="biet-thu">Biệt thự - Nhà phố cao cấp</option>
                      <option value="chung-cu">Căn hộ chung cư cao cấp</option>
                      <option value="van-phong">Tòa nhà văn phòng & Showroom</option>
                      <option value="resort">Khu nghỉ dưỡng & Khách sạn 5 sao</option>
                      <option value="khac">Hạng mục công trình khác</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer select-none pt-1">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="h-4 w-4 bg-white/10 border border-white/30 text-[#c5a968] rounded focus:ring-0 cursor-pointer"
                  />
                  <span className="text-[12px] text-white/60">
                    Tôi đồng ý với <span className="underline font-semibold text-[#c5a968]">Chính sách bảo mật thông tin</span> của Eurowindow.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-[12px] uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-[#c5a968]/20 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  NHẬN TƯ VẤN & BÁO GIÁ CHI TIẾT
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}