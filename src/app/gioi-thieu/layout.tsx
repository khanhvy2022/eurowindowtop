import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Giới Thiệu Lịch Sử Phát Triển & Năng Lực Doanh Nghiệp",
  description:
    "Hơn 20 năm khẳng định vị thế dẫn đầu trong ngành sản xuất cửa và vách kính tại Việt Nam. Tìm hiểu quy mô 5 nhà máy, công nghệ hiện đại và sứ mệnh tiên phong kiến tạo.",
  keywords: [
    "giới thiệu Eurowindow",
    "lịch sử Eurowindow",
    "nhà máy Eurowindow",
    "năng lực sản xuất Eurowindow",
    "thương hiệu Eurowindow",
  ],
  alternates: {
    canonical: "/gioi-thieu",
  },
  openGraph: {
    title: "Giới Thiệu Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành.",
    description:
      "Hành trình hơn 2 thập kỷ kiến tạo không gian sống hiện đại và đồng hành cùng các công trình biểu tượng quốc gia.",
    url: "/gioi-thieu",
    images: [
      {
        url: "/images/official/eurowindow_factory.jpg",
        width: 1200,
        height: 630,
        alt: "Quy mô nhà máy và trụ sở Eurowindow",
      },
    ],
  },
};

export default function GioiThieuLayout({
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
        name: "Giới thiệu",
        item: `${siteUrl}/gioi-thieu`,
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
