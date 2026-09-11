import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dự Án & Công Trình Tiêu Biểu Dấu Ấn Kiến Trúc",
  description:
    "Hơn 5.000+ dự án công trình biểu tượng sử dụng giải pháp cửa và vách kính Eurowindow: Nhà Quốc Hội, Trụ sở Bộ Ngoại Giao, Cảng hàng không Phú Bài, Vinhomes Riverside.",
  keywords: [
    "công trình Eurowindow",
    "dự án Eurowindow",
    "vách kính Nhà Quốc Hội",
    "cửa nhôm biệt thự Vinhomes",
    "dự án trọng điểm quốc gia",
  ],
  alternates: {
    canonical: "/cong-trinh",
  },
  openGraph: {
    title: "Dự Án & Công Trình Tiêu Biểu | Eurowindow",
    description:
      "Khám phá các công trình quy mô quốc gia và khu đô thị cao cấp lắp đặt hệ thống cửa, vách kính Eurowindow.",
    url: "/cong-trinh",
    images: [
      {
        url: "/images/official/project_nhaquochoi_hd.jpg",
        width: 1200,
        height: 630,
        alt: "Dự án công trình tiêu biểu Eurowindow",
      },
    ],
  },
};

export default function CongTrinhLayout({
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
        name: "Công trình",
        item: `${siteUrl}/cong-trinh`,
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
