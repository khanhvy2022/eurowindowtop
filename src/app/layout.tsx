import type { Metadata, Viewport } from "next";
import { Wix_Madefor_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-wix",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eurowindow.biz";

export const viewport: Viewport = {
  themeColor: "#0a1f3c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành. | Giải Pháp Cửa & Vách Kính",
    template: "%s | Eurowindow",
  },
  description:
    "Eurowindow - Nhà cung cấp giải pháp tổng thể về cửa và vách nhôm kính hàng đầu Việt Nam: cửa nhôm cao cấp, cửa nhựa uPVC, cửa gỗ, cửa cuốn, cửa thông minh và phụ kiện chính hãng.",
  applicationName: "Eurowindow",
  authors: [{ name: "Eurowindow", url: siteUrl }],
  creator: "Eurowindow",
  publisher: "Công ty Cổ phần Eurowindow",
  category: "Kiến trúc & Xây dựng",
  keywords: [
    "Eurowindow",
    "cửa Eurowindow",
    "cửa nhôm Eurowindow",
    "cửa uPVC Eurowindow",
    "cửa gỗ Eurowindow",
    "cửa cuốn Eurowindow",
    "cửa thông minh Eurowindow",
    "vách nhôm kính",
    "kính hộp Low-E",
    "nhôm có cầu cách nhiệt",
    "báo giá cửa Eurowindow",
    "giải pháp cửa",
    "kiến trúc xanh",
  ],
  openGraph: {
    title: "Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành. | Giải Pháp Cửa & Vách Kính",
    description:
      "Nhà cung cấp giải pháp tổng thể về cửa và vách nhôm kính hàng đầu Việt Nam. Hơn 20 năm kinh nghiệm và 5.000+ công trình biểu tượng.",
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "Eurowindow",
    images: [
      {
        url: "/images/eurowindow-hero.png",
        width: 1200,
        height: 630,
        alt: "Eurowindow - Giải pháp tổng thể về cửa và vách kính hàng đầu Việt Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành.",
    description:
      "Nhà cung cấp giải pháp tổng thể về cửa và vách nhôm kính hàng đầu Việt Nam.",
    images: ["/images/eurowindow-hero.png"],
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
  alternates: {
    canonical: siteUrl,
    languages: {
      "vi-VN": siteUrl,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Công ty Cổ phần Eurowindow",
  alternateName: "Eurowindow",
  url: siteUrl,
  logo: `${siteUrl}/images/eurowindow-logo-blue.jpg`,
  description:
    "Nhà cung cấp giải pháp tổng thể về cửa hàng đầu Việt Nam: Cửa nhôm, cửa uPVC, cửa gỗ, cửa cuốn, cửa tự động, vách kính mặt dựng và nội thất.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+84-966-994-338",
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: ["Vietnamese", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "1800-577-775",
      contactType: "technical support",
      areaServed: "VN",
      availableLanguage: "Vietnamese",
    },
  ],
  sameAs: [
    "https://www.facebook.com/eurowindow.biz",
    "https://www.youtube.com/@EurowindowOfficial",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Eurowindow",
  url: siteUrl,
  inLanguage: "vi-VN",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/san-pham?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${wixDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
