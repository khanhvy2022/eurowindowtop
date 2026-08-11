"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "./icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    agree: false
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
        projectType: "",
        agree: false
      });
    }, 3000);
  };

  const facadeImage = "/images/figma_6ec2_706d_ea930f037278fa58840f9e6b134f00d9.png";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 min-h-[580px]">
          
          {/* Left: Facade Grid Image (span 7 columns) */}
          <div className="lg:col-span-7 relative hidden lg:block overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${facadeImage})` }}
            />
            <div className="absolute inset-0 bg-brand-blue/15" />
          </div>

          {/* Right: Registration Form Overlay (span 5 columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-blue/95 via-brand-blue to-[#004a96] text-white p-8 sm:p-12 flex flex-col justify-center relative">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 transition-opacity duration-300 opacity-100">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-lg">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-2xl">
                  Gửi thành công!
                </h3>
                <p className="text-sm text-blue-100 max-w-xs">
                  Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ tư vấn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl leading-snug">
                    Bắt đầu công trình của bạn.
                  </h3>
                  <p className="text-xs text-blue-200">
                    Chia sẻ nhu cầu. Đội ngũ chuyên gia Eurowindow sẽ đề xuất giải pháp phù hợp.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name */}
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white/10 border border-white/25 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all placeholder-blue-200"
                  />

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại liên hệ"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/25 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all placeholder-blue-200"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/25 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all placeholder-blue-200"
                    />
                  </div>

                  {/* Project Address */}
                  <input
                    type="text"
                    required
                    placeholder="Địa chỉ công trình"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white/10 border border-white/25 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all placeholder-blue-200"
                  />

                  {/* Project Type */}
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white/10 border border-white/25 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all text-white placeholder-blue-200 cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-900">Loại công trình</option>
                    <option value="biet-thu" className="text-gray-900">Biệt thự - Nhà phố</option>
                    <option value="chung-cu" className="text-gray-900">Căn hộ chung cư</option>
                    <option value="van-phong" className="text-gray-900">Tòa nhà văn phòng</option>
                    <option value="khac" className="text-gray-900">Khác</option>
                  </select>
                </div>

                {/* Privacy Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="mt-1 h-4 w-4 bg-white/10 border border-white/30 text-brand-blue rounded-md focus:ring-0 cursor-pointer"
                  />
                  <span className="text-xs text-blue-100 leading-relaxed">
                    Đồng ý với{" "}
                    <a href="#" className="underline hover:text-white transition-colors">
                      Chính sách bảo mật
                    </a>
                  </span>
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-brand-blue hover:bg-gray-100 font-bold text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  NHẬN TƯ VẤN
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
