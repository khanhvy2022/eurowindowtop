import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import TinTucClient from "@/components/TinTucClient";
import { blogPosts } from "@/lib/blog";

export default function TinTucPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Page Header Banner */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0a1f3c] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-48 right-0 h-[34rem] w-[34rem] rounded-full bg-[#005bb7]/25 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#c5a968]/10 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #c5a968 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest">
              EUROWINDOW NEWS & JOURNAL
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.12] tracking-tight">
              Tin Tức, Sự Kiện & Tọa Đàm Kiến Trúc Xanh
            </h1>
            <p className="text-[16px] text-gray-300 font-sans leading-relaxed">
              Kho lưu trữ 139+ bài viết chuyên sâu về cửa nhôm kính, cửa uPVC, cửa gỗ, báo giá và giải pháp tiết kiệm năng lượng chính hãng Eurowindow.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Blog Listing with Suspense for Search Params */}
      <Suspense
        fallback={
          <div className="py-24 text-center text-gray-400 font-sans">
            Đang tải danh sách bài viết...
          </div>
        }
      >
        <TinTucClient posts={blogPosts} />
      </Suspense>

      <Footer />
      <FloatingControls />
    </div>
  );
}
