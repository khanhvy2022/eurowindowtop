import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

const productMeta: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    category: string;
    price: number;
  }
> = {
  "cua-nhom": {
    title: "Cửa Nhôm & Vách Nhôm Kính Cao Cấp",
    description:
      "Cửa nhôm và vách nhôm kính Eurowindow cao cấp: Nhôm hợp kim 6063-T6, sơn phủ PVDF chống ăn mòn muối biển, kính hộp Low-E cản 99% UV, cách âm 45dB.",
    image: "/images/official/cuanhom_hd.jpg",
    category: "Cửa nhôm",
    price: 3200000,
  },
  "cua-nhua-upvc": {
    title: "Cửa Nhựa uPVC Cách Âm Cách Nhiệt Vượt Trội",
    description:
      "Cửa nhựa uPVC Eurowindow thanh profile Kommerling/uFlex lõi thép gia cường mạ kẽm, chống lão hóa 20 năm, tiết kiệm 30% điện năng tiêu thụ điều hòa.",
    image: "/images/official/cuaupvc_hd.jpg",
    category: "Cửa uPVC",
    price: 2400000,
  },
  "cua-go": {
    title: "Cửa Gỗ Tự Nhiên & Gỗ Công Nghiệp Chống Cháy",
    description:
      "Cửa gỗ Eurowindow tẩm sấy chân không tiêu chuẩn Châu Âu, sơn PU 6 lớp mịn bóng, chống cong vênh mối mọt, đạt chứng nhận PCCC chống cháy 60-120 phút.",
    image: "/images/official/cuago_hd.jpg",
    category: "Cửa gỗ",
    price: 3800000,
  },
  "cua-cuon": {
    title: "Cửa Cuốn Nhôm Hợp Kim Thông Minh Khe Thoáng",
    description:
      "Cửa cuốn Eurowindow nan nhôm hợp kim sơn tĩnh điện ngoài trời, tích hợp cảm biến tự dừng khi gặp vật cản, mã nhảy Rolling Code chống sao chép sóng.",
    image: "/images/official/cuacuon_hd.jpg",
    category: "Cửa cuốn",
    price: 2100000,
  },
  "cua-tu-dong": {
    title: "Cửa Tự Động Cảm Biến Mắt Thần Cao Cấp",
    description:
      "Cửa trượt tự động Eurowindow mắt thần cảm ứng hồng ngoại vi sóng kép, động cơ DC êm ái, kính cường lực an toàn cho tòa nhà văn phòng, bệnh viện, khách sạn.",
    image: "/images/official/cuatudong_hd.jpg",
    category: "Cửa tự động",
    price: 4500000,
  },
  "san-pham-kinh": {
    title: "Vách Kính Mặt Dựng & Kính Hộp Low-E Tiết Kiệm Năng Lượng",
    description:
      "Giải pháp vách kính mặt dựng Unitized 3D, kính cường lực, kính dán an toàn và kính hộp cản nhiệt Low-E cách âm cách nhiệt hoàn hảo cho các công trình cao tầng.",
    image: "/images/official/vachkinh_hd.jpg",
    category: "Vách kính",
    price: 2800000,
  },
  "cua-thong-minh": {
    title: "Cửa Thông Minh Thế Hệ Mới Gen 5.0 IoT AI",
    description:
      "Cửa thông minh Eurowindow tích hợp cảm biến mưa gió tự động đóng, mở khóa FaceID 3D AI, vân tay tĩnh mạch và kết nối hệ thống nhà thông minh Smarthome.",
    image: "/images/official/cuanhom_hd.jpg",
    category: "Cửa thông minh",
    price: 5200000,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = productMeta[slug];

  if (!data) {
    return {
      title: "Sản Phẩm Cửa & Vách Kính Eurowindow",
      description: "Chi tiết dòng sản phẩm cửa và vách kính Eurowindow chính hãng.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eurowindow.biz";
  const canonicalUrl = `/san-pham/${slug}`;

  return {
    title: `${data.title} | Eurowindow`,
    description: data.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${data.title} | Eurowindow`,
      description: data.description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: `${data.title} - Eurowindow`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Eurowindow`,
      description: data.description,
      images: [data.image],
    },
  };
}

export default async function ProductDetailLayout({
  children,
  params,
}: Props) {
  const { slug } = await params;
  const data = productMeta[slug];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eurowindow.biz";

  const productSchema = data
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: data.title,
        description: data.description,
        image: `${siteUrl}${data.image}`,
        category: data.category,
        brand: {
          "@type": "Brand",
          name: "Eurowindow",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          price: data.price,
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/san-pham/${slug}`,
          seller: {
            "@type": "Organization",
            name: "Eurowindow",
          },
        },
      }
    : null;

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
        name: "Sản phẩm",
        item: `${siteUrl}/san-pham`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data ? data.title : slug,
        item: `${siteUrl}/san-pham/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd
        data={
          productSchema
            ? [productSchema, breadcrumbSchema]
            : [breadcrumbSchema]
        }
      />
      {children}
    </>
  );
}
