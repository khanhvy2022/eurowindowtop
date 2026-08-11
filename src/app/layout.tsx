import type { Metadata } from "next";
import { Wix_Madefor_Display, Inter } from "next/font/google";
import "./globals.css";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-wix",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành.",
  description:
    "Eurowindow - Giải pháp cửa & vách kính kiến tạo những công trình khác biệt. Cửa nhôm, uPVC, cửa gỗ, cửa thông minh cho kiến trúc Việt.",
  keywords: [
    "Eurowindow",
    "cửa nhôm",
    "cửa uPVC",
    "cửa gỗ",
    "cửa thông minh",
    "vách kính",
    "giải pháp cửa",
    "kiến trúc",
  ],
  openGraph: {
    title: "Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành.",
    description:
      "Giải pháp cửa & vách kính kiến tạo những công trình khác biệt.",
    type: "website",
    locale: "vi_VN",
  },
  alternates: {
    canonical: "/",
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
