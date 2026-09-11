import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tin Tức, Sự Kiện & Tọa Đàm Kiến Trúc Xanh",
  description:
    "Cập nhật các tin tức mới nhất về ngành xây dựng kiến trúc, giải thưởng thương hiệu quốc gia, sự kiện ra mắt sản phẩm và công nghệ cửa xanh tiết kiệm năng lượng Eurowindow.",
  keywords: [
    "tin tức Eurowindow",
    "sự kiện Eurowindow",
    "kiến trúc xanh",
    "thương hiệu quốc gia Eurowindow",
    "xu hướng cửa nhôm kính",
  ],
  alternates: {
    canonical: "/tin-tuc",
  },
  openGraph: {
    title: "Tin Tức, Sự Kiện & Tọa Đàm Kiến Trúc Xanh | Eurowindow",
    description:
      "Cập nhật hoạt động doanh nghiệp, thông cáo báo chí và các tọa đàm chuyên đề kiến trúc cùng Eurowindow.",
    url: "/tin-tuc",
    images: [
      {
        url: "/images/official/news1_hd.jpg",
        width: 1200,
        height: 630,
        alt: "Tin tức sự kiện Eurowindow",
      },
    ],
  },
};

export default function TinTucLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eurowindow.biz";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tin tức",
        item: `${siteUrl}/tin-tuc`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
