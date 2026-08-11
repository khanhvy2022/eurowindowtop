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
  description: "Trải nghiệm không gian sống hiện đại với giải pháp cửa xanh hàng đầu Việt Nam.",
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
