import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Danh Mục Sản Phẩm Cửa & Vách Kính Cao Cấp",
  description:
    "Khám phá các dòng sản phẩm cửa Eurowindow chính hãng: Cửa nhôm cao cấp, Cửa nhựa uPVC, Cửa gỗ, Cửa cuốn thông minh, Cửa tự động và Vách kính mặt dựng.",
  keywords: [
    "sản phẩm Eurowindow",
    "cửa nhôm kính",
    "cửa nhựa lõi thép uPVC",
    "cửa gỗ công nghiệp",
    "cửa cuốn khe thoáng",
    "vách kính mặt dựng",
    "cửa thông minh",
  ],
  alternates: {
    canonical: "/san-pham",
  },
  openGraph: {
    title: "Danh Mục Sản Phẩm Cửa & Vách Kính Cao Cấp | Eurowindow",
    description:
      "Khám phá các dòng sản phẩm cửa Eurowindow: Cửa nhôm, cửa uPVC, cửa gỗ, cửa cuốn, cửa tự động và vách kính mặt dựng tiêu chuẩn Châu Âu.",
    url: "/san-pham",
    images: [
      {
        url: "/images/official/cuanhom_hd.jpg",
        width: 1200,
        height: 630,
        alt: "Sản phẩm cửa & vách kính Eurowindow",
      },
    ],
  },
};

export default function SanPhamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
