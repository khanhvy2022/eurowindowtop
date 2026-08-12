"use client";

import React, { useState, use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ChevronRight } from "@/components/icons";

interface ProductDetailData {
  title: string;
  subtitle: string;
  bannerImage: string;
  description: string;
  badge: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  features: { title: string; desc: string }[];
  gallery: string[];
  basePricePerM2: number;
}

const productDatabase: Record<string, ProductDetailData> = {
  "cua-nhom": {
    title: "Cửa Nhôm & Vách Nhôm Kính Cao Cấp Eurowindow",
    subtitle: "Giải pháp nhôm hợp kim sơn phủ PVDF chống ăn mòn mặn bãi biển & cách âm 45dB",
    bannerImage: "/images/official/cuanhom_hd.jpg",
    badge: "EUROWINDOW ALUMINUM SYSTEM",
    description: "Sản phẩm cửa nhôm và vách kính nhôm Eurowindow được sản xuất từ thanh profile nhôm cao cấp, bề mặt sơn phủ sơn tĩnh điện / PVDF chịu thời tiết khắc nghiệt. Tích hợp kính hộp Low-E cản tia UV 99% và hệ gioăng EPDM kép ngăn nước tuyệt đối.",
    highlights: ["Cách âm tiêu chuẩn ISO (giảm 42-45 dB)", "Chịu áp lực gió bão lên đến cấp 15", "Kính hộp Low-E dán an toàn 2 lớp", "Phụ kiện kim khí Roto nhập khẩu Đức"],
    basePricePerM2: 3200000,
    specs: [
      { label: "Vật liệu profile", value: "Nhôm hợp kim 6063-T6 định hình cao cấp" },
      { label: "Xử lý bề mặt", value: "Sơn tĩnh điện / Phủ PVDF 3-4 lớp chống mặn" },
      { label: "Hệ gioăng", value: "EPDM kép chèn khung cánh kín khít 100%" },
      { label: "Kính tích hợp", value: "Kính dán an toàn 8.38mm - Kính hộp Low-E 24mm" },
      { label: "Bảo hành chính hãng", value: "20 năm cho thanh profile & bề mặt sơn" },
    ],
    features: [
      { title: "Cách âm & Cách nhiệt tuyệt hảo", desc: "Giúp không gian sống yên tĩnh, giảm tiêu thụ điện năng máy lạnh đến 30%." },
      { title: "Độ bền cơ học vượt trội", desc: "Khung nhôm lõi gia cường không cong vênh, chịu lực nén va đập cực lớn." },
      { title: "Mẫu mã thiết kế đa dạng", desc: "Cửa mở quay, hất, trượt xếp lùa panorama toàn cảnh sang trọng." },
    ],
    gallery: [
      "/images/official/cuanhom_hd.jpg",
      "/images/official/project_phubai_hd.jpg",
      "/images/official/vachkinh_hd.jpg",
    ],
  },

  "cua-nhua-upvc": {
    title: "Cửa Nhựa uPVC Cách Âm Cách Nhiệt Vượt Trội",
    subtitle: "Thanh profile uPVC định hình lõi thép gia cường chống ốc lão hóa tia UV 20 năm",
    bannerImage: "/images/official/cuaupvc_hd.jpg",
    badge: "EUROWINDOW uPVC SYSTEM",
    description: "Cửa nhựa uPVC Eurowindow có khả năng cách âm, cách nhiệt cao gấp nhiều lần cửa thông thường. Thanh profile uPVC đa khoang kết hợp thép gia cường mạ kẽm chịu lực, khóa đa điểm an toàn tuyệt đối.",
    highlights: ["Tiết kiệm 30% chi phí tiêu thụ điện", "Khóa chốt đa điểm chống trộm an toàn", "Chống lão hóa biến màu UV 20 năm", "Không dẫn điện, chống cháy lan"],
    basePricePerM2: 2400000,
    specs: [
      { label: "Thanh Profile", value: "uPVC Kommerling / uFlex đa khoang trống" },
      { label: "Lõi gia cường", value: "Thép mạ kẽm chống gỉ dày 1.5 - 2.0mm" },
      { label: "Hệ gioăng", value: "Gioăng EPDM dán chèn góc tự động" },
      { label: "Khóa kim khí", value: "Hệ chốt đa điểm Roto / GU tiêu chuẩn Châu Âu" },
      { label: "Độ bền màu", value: "Cam kết không ố vàng trong 20 năm" },
    ],
    features: [
      { title: "Chống ồn đô thị tối ưu", desc: "Triệt tiêu tiếng ồn xe cộ từ 40dB xuống mức thư giãn yên tĩnh." },
      { title: "An toàn chống trộm", desc: "Hệ chốt khóa đa điểm dọc thanh cánh ngăn chặn hành vi cạy phá." },
      { title: "Chống thấm nước mưa", desc: "Hệ rãnh thoát nước thông minh chống tràn ngược vào nhà." },
    ],
    gallery: [
      "/images/official/cuaupvc_hd.jpg",
      "/images/official/project_vietphap_hd.jpg",
      "/images/official/cuanhom_hd.jpg",
    ],
  },

  "cua-go": {
    title: "Cửa Gỗ Tự Nhiên & Gỗ Công Nghiệp Cao Cấp",
    subtitle: "Độ cứng và độ bền cao, hạn chế tối đa biến đổi theo thời tiết, chống cháy tiêu chuẩn",
    bannerImage: "/images/official/cuago_hd.jpg",
    badge: "EUROWINDOW WOODEN SYSTEM",
    description: "Cửa gỗ Eurowindow kết hợp giữa vẻ đẹp sang trọng của vân gỗ tự nhiên với công nghệ xử lý tẩm sấy Châu Âu chống mối mọt, cong vênh. Phủ sơn PU 6 lớp bền đẹp tinh tế.",
    highlights: ["Gỗ tự nhiên tẩm sấy tiêu chuẩn", "Chống cháy tiêu chuẩn 60 - 120 phút", "Sơn PU cao cấp 6 lớp mịn bóng", "Bản lề cối chịu lực chống xệ cánh"],
    basePricePerM2: 3800000,
    specs: [
      { label: "Chất liệu gỗ", value: "Gỗ Lim, Trắc, Gõ Đỏ tự nhiên / Gỗ HDF chịu nước" },
      { label: "Công nghệ sấy", value: "Sấy chân không đạt độ ẩm tiêu chuẩn 8 - 12%" },
      { label: "Lớp phủ bề mặt", value: "Sơn PU 6 lớp chống xước & giữ màu vân" },
      { label: "Khả năng chống cháy", value: "Đạt chứng nhận PCCC 60 min - 120 min" },
      { label: "Bản lề & Phụ kiện", value: "Hệ bản lề âm 3D inox 304 nhập khẩu" },
    ],
    features: [
      { title: "Vân gỗ tự nhiên sang trọng", desc: "Tăng giá trị thẩm mỹ tân cổ điển và hiện đại cho ngôi nhà." },
      { title: "Không lo mối mọt cong vênh", desc: "Quy trình tẩm sấy loại bỏ hoàn toàn nguy cơ cong vênh do thời tiết." },
      { title: "Cách âm phòng ngủ tối đa", desc: "Cấu tạo lõi gỗ đặc cách âm giúp không gian riêng tư yên tĩnh." },
    ],
    gallery: [
      "/images/official/cuago_hd.jpg",
      "/images/official/project_bongoaigiao_hd.jpg",
      "/images/official/project_nhaquochoi_hd.jpg",
    ],
  },

  "cua-cuon": {
    title: "Cửa Cuốn Nhôm Hợp Kim Thông Minh Eurowindow",
    subtitle: "Giải pháp cửa cuốn hiện đại, tiết kiệm không gian và an toàn tối ưu cho gara nhà phố",
    bannerImage: "/images/official/cuacuon_hd.jpg",
    badge: "EUROWINDOW ROLLER SHUTTER",
    description: "Cửa cuốn Eurowindow sản xuất từ nan nhôm hợp kim sơn tĩnh điện ngoài trời cao cấp. Tích hợp cảm biến tự dừng khi gặp vật cản và bộ điều khiển mã nhảy chống sao chép sóng.",
    highlights: ["Tự dừng khi gặp vật cản", "Mã nhảy chống sao chép điều khiển", "Động cơ nhập khẩu vận hành êm", "Bình lưu điện dự phòng cúp điện"],
    basePricePerM2: 2100000,
    specs: [
      { label: "Vật liệu nan cửa", value: "Nhôm hợp kim 6063 sơn tĩnh điện ngoài trời" },
      { label: "Công nghệ nan", value: "Nan đôi khoang rỗng có lỗ khe thoáng lấy sáng" },
      { label: "Bộ điều khiển", value: "Mã nhảy Rolling Code chống trùng sóng" },
      { label: "Hệ thống an toàn", value: "Cảm biến hồng ngoại ngắt tự động khi chạm" },
      { label: "Bộ lưu điện UPS", value: "Tích hợp pin dự phòng hoạt động 48 giờ" },
    ],
    features: [
      { title: "Vận hành siêu êm ái", desc: "Hệ gioăng giảm chấn giữa các nan triệt tiêu 99% tiếng ồn." },
      { title: "An toàn tuyệt đối cho trẻ em", desc: "Cảm biến thông minh lập tức dừng và đảo chiều khi gặp chướng ngại vật." },
      { title: "Thông thoáng lấy sáng", desc: "Điều chỉnh khe thoáng linh hoạt lấy gió và ánh sáng tự nhiên." },
    ],
    gallery: [
      "/images/official/cuacuon_hd.jpg",
      "/images/official/project_vinhomes_hd.jpg",
      "/images/official/cuanhom_hd.jpg",
    ],
  },

  "cua-tu-dong": {
    title: "Cửa Tự Động Cảm Biến Mắt Thần Cao Cấp",
    subtitle: "Giải pháp cửa trượt tự động cho tòa nhà văn phòng, thương mại, bệnh viện & khách sạn",
    bannerImage: "/images/official/cuatudong_hd.jpg",
    badge: "EUROWINDOW AUTOMATIC SYSTEM",
    description: "Cửa tự động Eurowindow sử dụng mắt thần cảm ứng hồng ngoại vi sóng kép nhập khẩu Nhật Bản / Đức. Tần suất mở đến 100.000 lượt/ngày, kết nối trực tiếp hệ thống PCCC tòa nhà.",
    highlights: ["Mắt thần cảm biến hồng ngoại", "Kính cường lực 10 - 12mm siêu trong", "Tần suất 100.000 lượt/ngày", "Tự động khóa ban đêm an toàn"],
    basePricePerM2: 4500000,
    specs: [
      { label: "Động cơ truyền động", value: "Motor DC không than chổi than vận hành liên tục" },
      { label: "Mắt thần cảm ứng", value: "Sensor vi sóng kép phạm vi quét 3 - 5m" },
      { label: "Kính sử dụng", value: "Kính cường lực / dán an toàn 10mm - 12mm" },
      { label: "Ray trượt", value: "Hợp kim nhôm đúc nguyên khối chống mài mòn" },
      { label: "Kết nối hệ thống", value: "Tích hợp báo cháy PCCC & thẻ từ kiểm soát" },
    ],
    features: [
      { title: "Đáp ứng lưu lượng di chuyển lớn", desc: "Hoạt động bền bỉ 24/7 tại sảnh trung tâm thương mại và bệnh viện." },
      { title: "Vô trùng & Giữ nhiệt điều hòa", desc: "Đóng mở nhanh chóng ngăn bụi bẩn và thất thoát hơi lạnh." },
      { title: "Kiểm soát an ninh thông minh", desc: "Kết nối với vân tay, khuôn mặt và chìa khóa điện tử ban đêm." },
    ],
    gallery: [
      "/images/official/cuatudong_hd.jpg",
      "/images/official/project_phubai_hd.jpg",
      "/images/official/project_vietphap_hd.jpg",
    ],
  },

  "san-pham-kinh": {
    title: "Vách Kính Mặt Dựng & Kính Hộp Low-E Tiết Kiệm Năng Lượng",
    subtitle: "Công nghệ kính cường lực, kính dán an toàn và vách kính mặt dựng Unitized 3D",
    bannerImage: "/images/official/vachkinh_hd.jpg",
    badge: "EUROWINDOW GLASS & CURTAIN WALL",
    description: "Sản phẩm kính và vách kính mặt dựng Eurowindow tối ưu ánh sáng tự nhiên, ngăn đến 99% tia UV độc hại và cách nhiệt chống bức xạ mặt trời, đem lại vẻ đẹp hiện đại tráng lệ cho tòa nhà.",
    highlights: ["Kính hộp Low-E cản nhiệt", "Ngăn 99% tia cực tím UV", "Chịu lực nén bão cấp 15", "Vách kính Unitized 3D liền mạch"],
    basePricePerM2: 2800000,
    specs: [
      { label: "Chủng loại kính", value: "Kính cường lực, Kính dán an toàn, Kính hộp Low-E" },
      { label: "Độ dày kính", value: "5mm - 24mm tùy theo yêu cầu kết cấu" },
      { label: "Hệ vách mặt dựng", value: "Stick System, Semi-Unitized & Unitized 3D" },
      { label: "Khả năng cách âm", value: "Đạt chuẩn ISO 140-3 (42 - 45 dB)" },
      { label: "Hệ số hấp thụ nhiệt", value: "SHGC < 0.35 giảm 85% bức xạ mặt trời" },
    ],
    features: [
      { title: "Tiết kiệm 30% điện năng", desc: "Kính Low-E phản xạ sức nóng mặt trời, giữ không gian mát mẻ." },
      { title: "Tối đa tầm nhìn Panorama", desc: "Vách kính mặt dựng liền mạch tạo tầm nhìn không giới hạn." },
      { title: "An toàn chịu lực cao", desc: "Kính dán an toàn 2 lớp khi vỡ không tạo mảnh sắc nhọn nguy hiểm." },
    ],
    gallery: [
      "/images/official/vachkinh_hd.jpg",
      "/images/official/project_phubai_hd.jpg",
      "/images/official/project_ungbuou_hd.jpg",
    ],
  },

  "cua-thong-minh": {
    title: "Cửa Thông Minh Thế Hệ Mới Gen 5.0 IoT",
    subtitle: "Tích hợp cảm biến thời tiết tự đóng, nhận diện khuôn mặt AI và hệ thống Smarthome",
    bannerImage: "/images/official/cuanhom_hd.jpg",
    badge: "EUROWINDOW SMART IOT GEN 5.0",
    description: "Dòng cửa thông minh thế hệ mới đột phá tích hợp công nghệ AI, cảm biến mưa gió tự động đóng cánh, khóa sinh trắc học vân tay tĩnh mạch và điều khiển quản lý từ xa qua Smartphone.",
    highlights: ["Cảm biến mưa gió tự đóng", "Nhận diện khuôn mặt 3D AI", "Quản lý từ xa qua App Mobile", "Kết nối hệ thống Smarthome"],
    basePricePerM2: 5200000,
    specs: [
      { label: "Hệ điều khiển AI", value: "Chip vi xử lý IoT 32-bit kết nối Wi-Fi/Zigbee" },
      { label: "Cảm biến thời tiết", value: "Tự động phát hiện mưa bão ngắt đóng cửa" },
      { label: "Công nghệ sinh trắc", value: "FaceID 3D AI + Vân tay tĩnh mạch chống giả" },
      { label: "Tương thích hệ thống", value: "Apple HomeKit, Google Home, Tuya Smart" },
      { label: "Nguồn dự phòng", value: "Pin sạc lithium hoạt động 6 tháng liên tục" },
    ],
    features: [
      { title: "Cảnh báo chống trộm thông minh", desc: "Phát còi báo động và gửi thông báo tức thì về điện thoại khi có va chạm." },
      { title: "Tự động vệ sinh không khí", desc: "Cảm biến chất lượng không khí AQI tự động mở khe thoáng đón gió sạch." },
      { title: "Điều khiển rảnh tay sinh trắc", desc: "Mở cửa tự động khi gia chủ tiến lại gần không cần chìa khóa." },
    ],
    gallery: [
      "/images/official/cuanhom_hd.jpg",
      "/images/official/project_vinhomes_hd.jpg",
      "/images/official/cuacuon_hd.jpg",
    ],
  },
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug || "cua-nhom";
  const data = productDatabase[slug] || productDatabase["cua-nhom"];

  const [activeTab, setActiveTab] = useState<"specs" | "features" | "calculator" | "cad">("specs");
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(data.bannerImage);
  
  /* Price Estimator State */
  const [widthM, setWidthM] = useState<number>(1.8);
  const [heightM, setHeightM] = useState<number>(2.4);
  const areaM2 = (widthM * heightM).toFixed(2);
  const estimatedCost = Math.round(widthM * heightM * data.basePricePerM2);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Hero Banner Section with Glassmorphism */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#0a1f3c] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-[2px] transition-all duration-700"
          style={{ backgroundImage: `url(${selectedGalleryImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/85 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#c5a968_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-[11px] font-bold text-[#c5a968] uppercase tracking-widest mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit border border-white/15">
            <Link href="/" className="hover:underline">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/san-pham" className="hover:underline">Sản phẩm</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{data.badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[10.5px] font-bold uppercase tracking-widest shadow-lg border border-white/20">
                {data.badge}
              </span>
              <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] tracking-tight">
                {data.title}
              </h1>
              <p className="text-[16px] sm:text-[18px] text-gray-300 font-sans leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>
            </div>

            {/* Price Badge Preview */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/20 space-y-4 shadow-2xl">
              <span className="text-[10px] font-bold text-[#c5a968] uppercase tracking-widest block">
                ĐƠN GIÁ THAM KHẢO TIÊU CHUẨN 2026
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-[32px] sm:text-[40px] font-display font-bold text-white">
                  {data.basePricePerM2.toLocaleString("vi-VN")}
                </span>
                <span className="text-sm text-gray-300 font-semibold">VNĐ / m²</span>
              </div>
              <p className="text-[12px] text-gray-300 font-sans leading-relaxed">
                Đã bao gồm kính hộp Low-E / Kính an toàn, thanh nhôm cao cấp & phụ kiện kim khí đồng bộ.
              </p>
              <a
                href="#calculator-tab"
                onClick={() => setActiveTab("calculator")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all shadow-md"
              >
                Dự toán ngân sách tự động ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Workspace & Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Image Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-gray-100">
                <Image
                  src={selectedGalleryImg}
                  alt={data.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#005bb7] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                    Eurowindow Certified
                  </span>
                </div>
              </div>

              {/* Gallery Selector Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {data.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedGalleryImg(img)}
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                      selectedGalleryImg === img
                        ? "border-[#005bb7] ring-4 ring-[#005bb7]/20 scale-[1.02] shadow-md"
                        : "border-transparent opacity-75 hover:opacity-100 hover:border-gray-300"
                    }`}
                  >
                    <Image src={img} alt={`Gallery thumbnail ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#f4f7fc] p-6 rounded-2xl border border-gray-200">
                {data.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[12.5px] font-bold text-[#0a1f3c]">
                    <Check className="h-4 w-4 text-[#005bb7] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Tabbed Specs, CAD & Estimator (6 cols) */}
            <div className="lg:col-span-6 space-y-8" id="calculator-tab">
              
              {/* Tab Navigation Switcher */}
              <div className="flex items-center p-1.5 bg-[#eef3f9] rounded-2xl border border-gray-200 gap-1 overflow-x-auto scrollbar-none">
                {[
                  { id: "specs", label: "Thông số Kỹ thuật" },
                  { id: "features", label: "Tính năng Công nghệ" },
                  { id: "calculator", label: "Dự toán Ngân sách" },
                  { id: "cad", label: "Tải Bản Vẽ CAD/BIM" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 text-[11.5px] font-bold rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#005bb7] text-white shadow-md shadow-[#005bb7]/25"
                        : "text-gray-600 hover:text-[#005bb7] hover:bg-white/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* TAB 1: Specs Table */}
              {activeTab === "specs" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-[22px] text-[#0a1f3c]">
                      Bảng Bóc Tách Thông Số Tiêu Chuẩn
                    </h3>
                    <p className="text-[13.5px] text-gray-600 font-sans leading-relaxed">
                      {data.description}
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-[#0a1f3c] text-white px-6 py-3.5 text-[12px] font-bold uppercase tracking-wider">
                      HỆ KẾT CẤU & BẢO HÀNH CHÍNH HÃNG
                    </div>
                    <div className="divide-y divide-gray-100 font-sans">
                      {data.specs.map((spec, i) => (
                        <div key={i} className="flex items-center justify-between p-4 text-[13px] hover:bg-gray-50/80 transition-colors">
                          <span className="font-semibold text-gray-500 w-44 flex-shrink-0">{spec.label}</span>
                          <span className="font-bold text-gray-900 text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Technology Features */}
              {activeTab === "features" && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-display font-bold text-[22px] text-[#0a1f3c]">
                    Ưu Điểm Đột Phá Công Nghệ
                  </h3>
                  <div className="space-y-4">
                    {data.features.map((feat, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2 hover:border-[#005bb7] transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-blue-100 text-[#005bb7] flex items-center justify-center font-bold text-xs">
                            0{idx + 1}
                          </span>
                          <h4 className="font-display font-bold text-[16px] text-gray-900">
                            {feat.title}
                          </h4>
                        </div>
                        <p className="text-[13px] text-gray-600 leading-relaxed font-sans pl-11">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Price Estimator Calculator */}
              {activeTab === "calculator" && (
                <div className="space-y-6 animate-fade-in bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
                  <div>
                    <span className="text-[10.5px] font-bold text-[#005bb7] uppercase tracking-widest block mb-1">
                      TÍNH TOÁN NGÂN SÁCH NHANH
                    </span>
                    <h3 className="font-display font-bold text-[22px] text-gray-900">
                      Công Cụ Dự Toán Tự Động
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-gray-700 uppercase">Chiều rộng (m)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0.5"
                        max="10"
                        value={widthM}
                        onChange={(e) => setWidthM(parseFloat(e.target.value) || 1)}
                        className="w-full p-3.5 rounded-xl border border-gray-300 font-bold text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#005bb7]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-gray-700 uppercase">Chiều cao (m)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0.5"
                        max="10"
                        value={heightM}
                        onChange={(e) => setHeightM(parseFloat(e.target.value) || 1)}
                        className="w-full p-3.5 rounded-xl border border-gray-300 font-bold text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#005bb7]"
                      />
                    </div>
                  </div>

                  <div className="bg-[#0a1f3c] text-white p-6 rounded-2xl space-y-3">
                    <div className="flex justify-between items-center text-[13px] text-gray-300">
                      <span>Diện tích công trình:</span>
                      <span className="font-bold text-white text-base">{areaM2} m²</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-white/10 pt-3">
                      <span className="text-[13px] font-bold text-[#c5a968] uppercase">Ước tính ngân sách:</span>
                      <span className="text-[26px] font-display font-bold text-white">
                        {estimatedCost.toLocaleString("vi-VN")} <span className="text-sm font-sans font-normal text-gray-300">VNĐ</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400 font-sans italic">
                    * Đơn giá ước tính đã bao gồm trọn gói tư vấn, lắp đặt & bảo hành chính hãng Eurowindow.
                  </p>
                </div>
              )}

              {/* TAB 4: CAD / BIM Download */}
              {activeTab === "cad" && (
                <div className="space-y-6 animate-fade-in bg-gray-50 p-8 rounded-3xl border border-gray-200">
                  <div>
                    <span className="text-[10.5px] font-bold text-[#005bb7] uppercase tracking-widest block mb-1">
                      THƯ VIỆN KTS & KỸ THUẬT
                    </span>
                    <h3 className="font-display font-bold text-[22px] text-gray-900">
                      Tải File Bản Vẽ & Profile
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "File CAD Profile Mặt Cắt (.DWG)", size: "4.2 MB", type: "DWG" },
                      { name: "File Dựng Hình Revit Family 3D (.RFA)", size: "12.8 MB", type: "RFA" },
                      { name: "Catalog Thông Số Kỹ Thuật PDF 2026", size: "8.5 MB", type: "PDF" },
                      { name: "Chứng Nhận Kiểm Định Chất Lượng ISO", size: "2.1 MB", type: "PDF" },
                    ].map((file, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 hover:border-[#005bb7] transition-all">
                        <div className="space-y-0.5">
                          <p className="text-[13px] font-bold text-gray-800">{file.name}</p>
                          <span className="text-[11px] text-gray-400 font-mono">{file.size} • Format {file.type}</span>
                        </div>
                        <a
                          href="/tai-lieu"
                          className="px-4 py-2 bg-[#005bb7] hover:bg-[#00468c] text-white text-[11px] font-bold uppercase rounded-lg transition-colors"
                        >
                          Tải về ↓
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#contact"
                  className="flex-1 text-center py-4 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[12px] uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-[#005bb7]/25"
                >
                  Yêu Cầu Báo Giá & Khảo Sát Tận Nơi
                </a>
                <Link
                  href="/tai-lieu"
                  className="px-6 py-4 border border-gray-300 text-gray-800 font-bold text-[12px] uppercase tracking-widest rounded-2xl hover:bg-gray-100 transition-all text-center"
                >
                  Tải Thư Viện KTS
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingControls />
    </div>
  );
}
