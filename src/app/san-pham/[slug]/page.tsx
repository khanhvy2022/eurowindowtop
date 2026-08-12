"use client";

import React, { use } from "react";
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
}

const productDatabase: Record<string, ProductDetailData> = {
  "cua-nhom": {
    title: "Cửa Nhôm & Vách Nhôm Kính Cao Cấp Eurowindow",
    subtitle: "Giải pháp nhôm hợp kim sơn phủ PVDF chống ăn mòn mặn bãi biển & cách âm 45dB",
    bannerImage: "/images/official/cuanhom_hd.jpg",
    badge: "EUROWINDOW ALUMINUM SYSTEM",
    description: "Sản phẩm cửa nhôm và vách kính nhôm Eurowindow được sản xuất từ thanh profile nhôm cao cấp, bề mặt sơn phủ sơn tĩnh điện / PVDF chịu thời tiết khắc nghiệt. Tích hợp kính hộp Low-E cản tia UV 99% và hệ gioăng EPDM kép ngăn nước tuyệt đối.",
    highlights: ["Cách âm tiêu chuẩn ISO (giảm 42-45 dB)", "Chịu áp lực gió bão lên đến cấp 15", "Kính hộp Low-E dán an toàn 2 lớp", "Phụ kiện kim khí Roto nhập khẩu Đức"],
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
      "/images/official/cuatuong_hd.jpg",
    ],
  },
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug || "cua-nhom";
  const data = productDatabase[slug] || productDatabase["cua-nhom"];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#005bb7] selection:text-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0a1f3c] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-sm"
          style={{ backgroundImage: `url(${data.bannerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3c] via-[#0a1f3c]/80 to-transparent" />

        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-[12px] font-bold text-[#c5a968] uppercase tracking-wider mb-4">
            <Link href="/" className="hover:underline">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/san-pham" className="hover:underline">Sản phẩm</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{data.badge}</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#005bb7] text-white text-[11px] font-bold uppercase tracking-widest shadow-lg">
              {data.badge}
            </span>
            <h1 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight">
              {data.title}
            </h1>
            <p className="text-[16px] sm:text-[18px] text-gray-300 font-sans leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Product Image Showcase (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
                <Image
                  src={data.bannerImage}
                  alt={data.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Gallery thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {data.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Specs & Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest block">
                  THÔNG SỐ KỸ THUẬT TIÊU CHUẨN
                </span>
                <p className="text-[14px] text-gray-600 font-sans leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
                {data.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13px] font-bold text-[#0a1f3c]">
                    <Check className="h-4 w-4 text-[#005bb7] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Specification Table */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-[#0a1f3c] text-white px-6 py-3.5 text-[12px] font-bold uppercase tracking-wider">
                  Bảng bóc tách thông số kỹ thuật chi tiết
                </div>
                <div className="divide-y divide-gray-100 font-sans">
                  {data.specs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between p-4 text-[13px]">
                      <span className="font-semibold text-gray-500 w-44 flex-shrink-0">{spec.label}</span>
                      <span className="font-bold text-gray-900 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="flex-1 text-center py-4 bg-[#005bb7] hover:bg-[#00468c] text-white font-bold text-[12px] uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#005bb7]/25"
                >
                  Nhận Báo Giá & Tư Vấn Kỹ Thuật
                </a>
                <Link
                  href="/tai-lieu"
                  className="px-6 py-4 border border-gray-300 text-gray-800 font-bold text-[12px] uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all text-center"
                >
                  Tải Catalog PDF
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Details Section */}
      <section className="py-20 bg-[#f4f7fc] border-t border-gray-200">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold text-[#005bb7] uppercase tracking-widest">
              TÍNH NĂNG NỔI BẬT
            </span>
            <h2 className="font-display font-bold text-[32px] text-[#0a1f3c]">
              Ưu điểm vượt trội của sản phẩm
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.features.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#005bb7] flex items-center justify-center font-bold text-lg">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-[18px] text-gray-900">
                  {feat.title}
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed font-sans">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingControls />
    </div>
  );
}
