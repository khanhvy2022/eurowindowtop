import React from "react";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import {
  blogPosts,
  getPostByParts,
  getRelatedPosts,
  formatDateVi,
  labelToSlug,
} from "@/lib/blog";
import { Calendar, Tag, ArrowLeft, ArrowRight, Phone, ShieldCheck, MapPin } from "@/components/icons";

interface BlogPostPageProps {
  params: Promise<{
    year: string;
    month: string;
    slug: string;
  }>;
}

// Statically prerender all 139 blog posts at build time for instant Vercel edge delivery
export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    year: p.year,
    month: p.month,
    slug: `${p.slug}.html`,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { year, month, slug } = await params;
  const cleanSlug = slug.replace(/\.html$/, "");
  const post = getPostByParts(year, month, `${cleanSlug}.html`);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết | Eurowindow",
      robots: { index: false, follow: false },
    };
  }

  const postUrl = `${SITE_URL}${post.path}`;
  const ogImage = post.image || `${SITE_URL}/images/eurowindow-hero.png`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Eurowindow", url: SITE_URL }],
    creator: "Eurowindow",
    publisher: "Công ty Cổ phần Eurowindow",
    keywords: [...post.labels, "Eurowindow", "cửa Eurowindow", "vách kính"],
    alternates: {
      canonical: postUrl,
      languages: {
        "vi-VN": postUrl,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: "Eurowindow",
      type: "article",
      locale: "vi_VN",
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: ["Eurowindow"],
      tags: post.labels,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { year, month, slug } = await params;

  // Enforce canonical .html extension: 301 permanent redirect if accessed without .html
  if (!slug.endsWith(".html")) {
    permanentRedirect(`/${year}/${month}/${slug}.html`);
  }

  const cleanSlug = slug.replace(/\.html$/, "");
  const post = getPostByParts(year, month, `${cleanSlug}.html`);

  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_URL}${post.path}`;
  const related = getRelatedPosts(post, 3);

  // Schema.org Article / BlogPosting for Rich Results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? [post.image] : [`${SITE_URL}/images/eurowindow-hero.png`],
    datePublished: post.published,
    dateModified: post.updated || post.published,
    inLanguage: "vi-VN",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Organization",
      name: "Eurowindow",
      url: SITE_URL,
      logo: `${SITE_URL}/images/eurowindow-logo-blue.jpg`,
    },
    publisher: {
      "@type": "Organization",
      name: "Công ty Cổ phần Eurowindow",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/eurowindow-logo-blue.jpg`,
      },
    },
    articleSection: post.labels[0] || "Tin tức",
    keywords: post.labels.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tin tức",
        item: `${SITE_URL}/tin-tuc`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white flex flex-col">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <Header />
      <FloatingControls />

      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 bg-[#0a1f3c] text-white overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#005bb7]/30 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#c5a968]/15 blur-[120px]" />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60 flex-wrap">
            <Link href="/" className="hover:text-[#c5a968] transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/tin-tuc" className="hover:text-[#c5a968] transition-colors">Tin tức</Link>
            <span>/</span>
            <span className="text-white/40 truncate max-w-[280px] sm:max-w-md">{post.title}</span>
          </nav>

          {/* Labels badges */}
          {post.labels.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.labels.map((label) => (
                <Link
                  key={label}
                  href={`/tin-tuc?label=${encodeURIComponent(labelToSlug(label))}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 hover:bg-[#c5a968] hover:text-[#0a1f3c] border border-white/20 transition-all"
                >
                  <Tag className="h-3 w-3" />
                  {label}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-display font-bold text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.2] tracking-tight text-white max-w-4xl">
            {post.title}
          </h1>

          {/* Metadata bar */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#c5a968]" />
              <span>Đăng ngày: <strong className="text-white font-medium">{formatDateVi(post.published)}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c5a968]" />
              <span>Tác giả: <strong className="text-white font-medium">Eurowindow</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Chính hãng Eurowindow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Article Body */}
        <article className="lg:col-span-8 space-y-8">
          {/* Featured Image if present */}
          {post.image && (
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-slate-900 aspect-[16/9] sm:aspect-[21/10]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Intro Description Lead */}
          {post.description && (
            <div className="p-5 rounded-2xl bg-[#0a1f3c]/[0.03] border-l-4 border-[#005bb7] text-gray-700 font-medium text-base sm:text-lg leading-relaxed italic">
              {post.description}
            </div>
          )}

          {/* Rendered Blogger HTML Content */}
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-sans
              [&>p]:mb-5 [&>p]:text-[16px] [&>p]:leading-[1.8]
              [&>h2]:font-display [&>h2]:font-bold [&>h2]:text-[24px] sm:[&>h2]:text-[28px] [&>h2]:text-[#0a1f3c] [&>h2]:mt-8 [&>h2]:mb-4
              [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-[20px] sm:[&>h3]:text-[22px] [&>h3]:text-[#005bb7] [&>h3]:mt-6 [&>h3]:mb-3
              [&>h4]:font-bold [&>h4]:text-[17px] [&>h4]:text-gray-900 [&>h4]:mt-4 [&>h4]:mb-2
              [&_img]:rounded-xl [&_img]:mx-auto [&_img]:my-6 [&_img]:shadow-md [&_img]:max-w-full [&_img]:h-auto
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:mb-2
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-5 [&>ol>li]:mb-2
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#c5a968] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6
              [&>table]:w-full [&>table]:border-collapse [&>table]:my-6
              [&_td]:border [&_td]:border-gray-200 [&_td]:p-3 [&_th]:border [&_th]:border-gray-200 [&_th]:p-3 [&_th]:bg-gray-50
              [&_a]:text-[#005bb7] [&_a]:underline [&_a]:font-medium hover:[&_a]:text-[#c5a968]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer Tags */}
          {post.labels.length > 0 && (
            <div className="pt-8 border-t border-gray-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5 mr-2">
                <Tag className="h-3.5 w-3.5 text-[#005bb7]" />
                Từ khóa bài viết:
              </span>
              {post.labels.map((label) => (
                <Link
                  key={label}
                  href={`/tin-tuc?label=${encodeURIComponent(labelToSlug(label))}`}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 hover:bg-[#005bb7] hover:text-white text-gray-700 transition-colors"
                >
                  #{label}
                </Link>
              ))}
            </div>
          )}

          {/* Navigation Back */}
          <div className="pt-4 flex items-center justify-between">
            <Link
              href="/tin-tuc"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#005bb7] hover:text-[#0a1f3c] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại danh mục tin tức
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Contact Hotline CTA Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0a1f3c] to-[#0d2e5a] text-white shadow-xl space-y-4 border border-[#c5a968]/30">
            <span className="inline-block px-3 py-1 rounded-full bg-[#c5a968] text-[#0a1f3c] text-[10px] font-extrabold uppercase tracking-widest">
              TƯ VẤN TRỰC TIẾP
            </span>
            <h3 className="font-display font-bold text-xl text-white">
              Cần Tư Vấn Báo Giá Giải Pháp Cửa Eurowindow?
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Đội ngũ chuyên viên kỹ thuật Eurowindow sẵn sàng khảo sát thực tế và lên dự toán chi tiết cho công trình của bạn.
            </p>
            <div className="pt-2 space-y-2.5">
              <a
                href="tel:0966994338"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#c5a968] hover:bg-[#b5964f] text-[#0a1f3c] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <Phone className="h-4 w-4" />
                Hotline: 0966.994.338
              </a>
              <a
                href="/showroom"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors border border-white/15"
              >
                <MapPin className="h-3.5 w-3.5 text-[#c5a968]" />
                Xem hệ thống Showroom
              </a>
            </div>
          </div>

          {/* Related Articles Box */}
          {related.length > 0 && (
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 space-y-4">
              <h3 className="font-display font-bold text-base text-[#0a1f3c] flex items-center justify-between">
                <span>Bài Viết Liên Quan</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#005bb7]" />
              </h3>

              <div className="space-y-4 divide-y divide-gray-200/70">
                {related.map((rel) => (
                  <Link
                    key={rel.path}
                    href={rel.path}
                    className="pt-4 first:pt-0 group block space-y-1.5"
                  >
                    <span className="text-[11px] text-gray-500 flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-[#c5a968]" />
                      {formatDateVi(rel.published)}
                    </span>
                    <h4 className="font-display font-bold text-sm text-gray-900 group-hover:text-[#005bb7] transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </main>

      <Footer />
    </div>
  );
}
