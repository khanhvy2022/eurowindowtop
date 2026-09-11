import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hệ Thống Showroom & Chi Nhánh Eurowindow Toàn Quốc",
  description:
    "Tra cứu địa chỉ showroom, trung tâm trải nghiệm sản phẩm và văn phòng giao dịch Eurowindow tại Hà Nội, Đà Nẵng, TP. Hồ Chí Minh và các tỉnh thành.",
  keywords: [
    "showroom Eurowindow",
    "địa chỉ Eurowindow",
    "showroom Eurowindow Hà Nội",
    "showroom Eurowindow TPHCM",
    "showroom Eurowindow Đà Nẵng",
    "hotline Eurowindow",
  ],
  alternates: {
    canonical: "/showroom",
  },
  openGraph: {
    title: "Hệ Thống Showroom & Chi Nhánh Toàn Quốc | Eurowindow",
    description:
      "Tìm kiếm showroom gần nhất để trực tiếp trải nghiệm các mẫu cửa nhôm, cửa nhựa uPVC, cửa gỗ và cửa thông minh Eurowindow.",
    url: "/showroom",
    images: [
      {
        url: "/images/official/showroom_echo_hd.jpg",
        width: 1200,
        height: 630,
        alt: "Showroom trải nghiệm sản phẩm Eurowindow",
      },
    ],
  },
};

export default function ShowroomLayout({
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
        name: "Hệ thống Showroom",
        item: `${siteUrl}/showroom`,
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
