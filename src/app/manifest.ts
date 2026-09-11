import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành.",
    short_name: "Eurowindow",
    description:
      "Nhà cung cấp giải pháp tổng thể về cửa và vách nhôm kính hàng đầu Việt Nam.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1f3c",
    theme_color: "#005bb7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
