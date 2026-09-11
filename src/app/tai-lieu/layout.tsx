import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tài Liệu Kỹ Thuật, Thư Viện CAD/BIM & Catalogue 2025",
  description:
    "Tải miễn phí Catalogue Eurowindow 2025, thư viện file 3D Revit (.RFA), bản vẽ mặt cắt AutoCAD (.DWG) và chứng chỉ chất lượng ISO/EN phục vụ Kiến trúc sư.",
  keywords: [
    "tài liệu Eurowindow",
    "catalogue Eurowindow",
    "thư viện Revit Eurowindow",
    "bản vẽ CAD cửa nhôm",
    "mặt cắt profile nhôm",
    "hồ sơ kỹ thuật cửa kính",
  ],
  alternates: {
    canonical: "/tai-lieu",
  },
  openGraph: {
    title: "Tài Liệu Kỹ Thuật & Thư Viện CAD/BIM | Eurowindow",
    description:
      "Thư viện kiến trúc số Eurowindow: Tải catalogue mới nhất, bản vẽ kỹ thuật CAD/BIM và hồ sơ kiểm định.",
    url: "/tai-lieu",
    images: [
      {
        url: "/images/eurowindow-logo-blue.jpg",
        width: 1200,
        height: 630,
        alt: "Tài liệu kỹ thuật và Catalogue Eurowindow",
      },
    ],
  },
};

export default function TaiLieuLayout({
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
        name: "Tài liệu",
        item: `${siteUrl}/tai-lieu`,
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
