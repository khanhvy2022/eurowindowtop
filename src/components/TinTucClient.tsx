"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { BlogPost, getAllLabels, formatDateVi, labelToSlug } from "@/lib/blog";
import { Search, Calendar, Tag, ArrowRight, ChevronLeft, ChevronRight, Phone, Sparkles } from "@/components/icons";

interface Props {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 12;

export default function TinTucClient({ posts }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const labelParam = searchParams.get("label") || "";
  const [selectedLabelSlug, setSelectedLabelSlug] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sync label param from URL
  useEffect(() => {
    if (labelParam) {
      setSelectedLabelSlug(labelToSlug(labelParam));
      setCurrentPage(1);
    } else {
      setSelectedLabelSlug("");
    }
  }, [labelParam]);

  const labels = useMemo(() => getAllLabels(), []);

  // Filter posts based on label and search query
  const filteredPosts = useMemo(() => {
    let result = posts;

    if (selectedLabelSlug) {
      result = result.filter((p) =>
        p.labels.some((l) => labelToSlug(l) === selectedLabelSlug)
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [posts, selectedLabelSlug, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Paginated slice
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSelectLabel = (slug: string) => {
    setSelectedLabelSlug(slug);
    setCurrentPage(1);
    if (slug) {
      router.replace(`/tin-tuc?label=${slug}`, { scroll: false });
    } else {
      router.replace("/tin-tuc", { scroll: false });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      const el = document.getElementById("posts-container");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Controls: Search and Filter Pills */}
        <div className="mb-10 space-y-6">
          {/* Search bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết, công trình, bảng báo giá..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#005bb7] focus:border-transparent text-gray-800 placeholder-gray-400 text-sm transition-all"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-1 rounded-full cursor-pointer"
                >
                  Xóa
                </button>
              )}
            </div>
          </div>

          {/* Label Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => handleSelectLabel("")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedLabelSlug === ""
                  ? "bg-[#005bb7] text-white shadow-md shadow-[#005bb7]/20 scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#005bb7] hover:text-[#005bb7]"
              }`}
            >
              Tất cả ({posts.length})
            </button>
            {labels.slice(0, 12).map((cat) => {
              const active = selectedLabelSlug === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleSelectLabel(cat.slug)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? "bg-[#005bb7] text-white shadow-md shadow-[#005bb7]/20 scale-105"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#005bb7] hover:text-[#005bb7]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Status header */}
        <div id="posts-container" className="flex items-center justify-between pb-4 border-b border-gray-200 mb-8 scroll-mt-28">
          <div className="text-sm text-gray-600">
            {selectedLabelSlug ? (
              <span>
                Đang lọc theo chủ đề:{" "}
                <strong className="text-[#005bb7]">
                  {labels.find((l) => l.slug === selectedLabelSlug)?.label || selectedLabelSlug}
                </strong>
                {" ("}
                {filteredPosts.length} bài viết)
              </span>
            ) : searchQuery ? (
              <span>
                Kết quả tìm kiếm cho: &ldquo;<strong>{searchQuery}</strong>&rdquo; ({filteredPosts.length} bài)
              </span>
            ) : (
              <span>
                Hiển thị <strong>{filteredPosts.length}</strong> bài viết chính thức
              </span>
            )}
          </div>
          {(selectedLabelSlug || searchQuery) && (
            <button
              onClick={() => {
                setSelectedLabelSlug("");
                setSearchQuery("");
                router.replace("/tin-tuc", { scroll: false });
              }}
              className="text-xs font-semibold text-rose-600 hover:underline cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>

        {/* Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => {
              const mainLabel = post.labels[0] || "Tin tức";
              return (
                <article
                  key={post.path}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail */}
                  <Link
                    href={post.path}
                    className="relative block aspect-[16/10] bg-gray-100 overflow-hidden"
                  >
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        unoptimized={post.image.startsWith("http")}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a1f3c] to-[#005bb7] text-white/40">
                        <Sparkles className="w-12 h-12" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#005bb7]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                        {mainLabel}
                      </span>
                    </div>
                  </Link>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-sans">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <time dateTime={post.published}>{formatDateVi(post.published)}</time>
                      </div>

                      <h2 className="font-display font-bold text-lg text-gray-900 group-hover:text-[#005bb7] transition-colors line-clamp-2 leading-snug">
                        <Link href={post.path}>{post.title}</Link>
                      </h2>

                      {post.description && (
                        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                          {post.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={post.path}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#005bb7] group-hover:text-[#c5a968] transition-colors"
                      >
                        Đọc bài viết
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {post.labels.length > 1 && (
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          +{post.labels.length - 1}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-2xl border border-gray-200">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Không tìm thấy bài viết nào
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
              Không có bài viết nào khớp với từ khóa tìm kiếm hoặc bộ lọc được chọn. Vui lòng thử từ khóa khác.
            </p>
            <button
              onClick={() => {
                setSelectedLabelSlug("");
                setSearchQuery("");
                router.replace("/tin-tuc", { scroll: false });
              }}
              className="px-5 py-2.5 rounded-full bg-[#005bb7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#004a94] transition-colors cursor-pointer"
            >
              Xem tất cả bài viết
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Phân trang bài viết"
            className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-2 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Trước</span>
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const isCurrent = p === currentPage;
              // Show first, last, and within 2 pages around current
              if (
                p === 1 ||
                p === totalPages ||
                (p >= currentPage - 2 && p <= currentPage + 2)
              ) {
                return (
                  <button
                    key={p}
                    onClick={() => handlePageChange(p)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-[#005bb7] text-white shadow-md shadow-[#005bb7]/20"
                        : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                );
              }
              if (p === currentPage - 3 || p === currentPage + 3) {
                return (
                  <span key={p} className="px-2 text-gray-400 font-bold select-none">
                    ...
                  </span>
                );
              }
              return null;
            })}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-2 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-all"
            >
              <span>Sau</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}

        {/* CTA Contact Footer */}
        <div className="mt-16 bg-gradient-to-r from-[#0a1f3c] via-[#0d274d] to-[#005bb7] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#c5a968] text-[11px] font-bold tracking-widest uppercase">
              TƯ VẤN & BÁO GIÁ TRỰC TIẾP
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              Cần Báo Giá Thi Công Cửa & Vách Kính Eurowindow?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Đội ngũ kỹ sư Eurowindow sẵn sàng khảo sát thực tế công trình, lên bản vẽ thiết kế 3D và báo giá chi tiết trong vòng 24 giờ.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="tel:0907428399"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c5a968] text-[#0a1f3c] font-bold text-sm uppercase tracking-wider hover:bg-[#d4bc7d] transition-all shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Hotline: 0907.428.399
              </a>
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Xem Sản Phẩm Eurowindow
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
