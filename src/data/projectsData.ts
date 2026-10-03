export interface ProjectItem {
  id: string;
  category: "all" | "national" | "commercial" | "residential" | "hospitality";
  title: string;
  type: string;
  investor: string;
  address: string;
  location: string;
  volume: string;
  year: string;
  image: string;
  gallery?: string[];
  description: string;
  scale?: string;
  solution: string;
  specs: string[];
  eurowindowBizUrl?: string;
  eurowindowBizVerified?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "p-1",
    category: "national",
    title: "CẢNG HÀNG KHÔNG PHÚ BÀI HUẾ",
    type: "Hạ tầng hàng không Quốc gia",
    investor: "Tổng công ty Cảng hàng không Việt Nam (ACV)",
    address: "Phường Phú Bài, Thị xã Hương Thủy, Tỉnh Thừa Thiên Huế",
    location: "Thừa Thiên Huế",
    volume: "18.500 m²",
    year: "2023 - 2025",
    image: "/images/official/project_phubai_hd.jpg",
    gallery: [
      "/images/official/project_phubai_hd.jpg",
      "https://storage.sudospaces.com/eurowindow/2025/02/viber-image-2025-02-05-13-33-24-065-large.png"
    ],
    description: "Nhà ga T2 Cảng hàng không Quốc tế Phú Bài là dự án giao thông hàng không trọng điểm cấp quốc gia với tổng mức đầu tư 2.250 tỷ đồng. Thiết kế kiến trúc lấy cảm hứng nghệ thuật từ Điện Hòn Chén cung đình Huế, tạo hình khối mái đa tầng xếp lớp hiện đại kết hợp đường nét truyền thống.",
    scale: "Quy mô 22.380 m² sàn, công suất thiết kế 5 triệu hành khách/năm, tiếp nhận các dòng tàu bay thân rộng hiện đại Code C, Code E.",
    solution: "Eurowindow thi công lắp đặt hoàn thiện hơn 18.500 m² hệ vách nhôm kính lớn Unitized chịu áp lực gió bão biển cấp 15, kính hộp 3 lớp Low-E 24mm cản nhiệt nạp khí trơ Argon, cùng hệ thống cửa tự động mắt thần công nghệ Thụy Sĩ và lam chắn nắng điều khiển thông minh.",
    specs: [
      "Mặt dựng nhôm kính tiết kiệm năng lượng Low-E 24mm cản nhiệt",
      "Khung nhôm cầu cách nhiệt chịu áp lực gió bão duyên hải cấp 15",
      "Hệ thống lam chắn nắng và cửa tự động mắt thần Thụy Sĩ",
      "Kính an toàn dán nhiều lớp đạt tiêu chuẩn an toàn hàng không quốc tế"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/cang-hang-khong-phu-bai-hue.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-2",
    category: "national",
    title: "TRỤ SỞ BỘ NGOẠI GIAO",
    type: "Trụ sở Cơ quan Trung ương",
    investor: "Bộ Ngoại Giao Việt Nam",
    address: "Số 02 Lê Quang Đạo, Phường Mễ Trì, Quận Nam Từ Liêm, Hà Nội",
    location: "Hà Nội",
    volume: "45.000 m² sàn (8.000 m² nhôm kính)",
    year: "2024",
    image: "/images/official/project_bongoaigiao_hd.jpg",
    gallery: [
      "/images/official/project_bongoaigiao_hd.jpg",
      "https://storage.sudospaces.com/eurowindow/2022/07/20191030-tru-so-bo-ngoai-giao-0719-large.jpg.webp"
    ],
    description: "Trụ sở Bộ Ngoại giao mới là 1 trong 6 công trình kiến trúc Pháp tiêu biểu trong lòng thủ đô Hà Nội, là biểu tượng ngoại giao cấp quốc gia phục vụ các nghi lễ bang giao quốc tế của Đảng và Nhà nước, tiếp đón các nguyên thủ quốc gia.",
    scale: "Tổ hợp kiến trúc gồm 01 khối đế và 03 khối nhà cao 13-14 tầng với tổng vốn đầu tư 3.500 tỷ đồng, tích hợp hội trường quốc tế, trung tâm báo chí và khu làm việc đa chức năng.",
    solution: "Eurowindow thi công lắp đặt hoàn thiện hơn 8.000 m² cửa nhôm và vách nhôm kính lớn cách âm lên đến 45dB, cửa chống cháy chuyên dụng, kính an toàn dán 2 lớp cản 99% tia UV và phụ kiện kim khí đồng bộ nhập khẩu CHLB Đức.",
    specs: [
      "Cửa nhôm & vách kính Eurowindow cao cấp cách âm tối đa 45dB",
      "Kính an toàn dán nhiều lớp chống tia cực tím 99% và chịu lực cao",
      "Phụ kiện kim khí đồng bộ tiêu chuẩn CHLB Đức",
      "Hệ cửa chống cháy và cửa an ninh đạt quy chuẩn an ninh đối ngoại"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/tru-so-bo-ngoai-giao.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-3",
    category: "national",
    title: "NHÀ QUỐC HỘI VIỆT NAM",
    type: "Công trình Biểu tượng Quốc gia",
    investor: "Ban Quản lý Dự án Đầu tư Xây dựng Nhà Quốc hội & Hội trường Ba Đình",
    address: "Đường Độc Lập, Phường Quán Thánh, Quận Ba Đình, Hà Nội (Quảng trường Ba Đình)",
    location: "Hà Nội",
    volume: "38.000 m² sàn",
    year: "2024",
    image: "/images/official/project_nhaquochoi_hd.jpg",
    gallery: [
      "/images/official/project_nhaquochoi_hd.jpg",
      "https://storage.sudospaces.com/eurowindow/2022/07/mg-1220-large.jpg",
      "https://storage.sudospaces.com/eurowindow/2022/07/w900/img-3596.jpg.webp"
    ],
    description: "Công trình Nhà Quốc hội mang tính biểu tượng chính trị đặc biệt quan trọng của đất nước, nơi diễn ra các kỳ họp Quốc hội, đón tiếp nguyên thủ quốc gia và tổ chức các sự kiện quốc tế lớn. Thiết kế đạt giải của liên danh tư vấn GMP (CHLB Đức) lấy ý tưởng biểu tượng Bánh chưng - Bánh giầy truyền thống Việt Nam.",
    scale: "Quy mô 2 tầng hầm và 5 tầng nổi hình vuông bao bọc phòng họp Diên Hồng hình tròn ở trung tâm, chiều cao 31,7m, được đánh giá là công trình có kỹ thuật thi công phức tạp bậc nhất.",
    solution: "Eurowindow thi công hơn 7.800 m² vách nhôm kính lớn hệ Stick, profile hãng Schueco, vách kính chống cháy và 2.700 m² cửa gỗ chống cháy, rèm ngăn lửa, ngăn khói, cửa tự động, mái kính Skylight lấy sáng giếng trời, hệ thống khóa điện tử cảm biến an ninh cấp quốc gia.",
    specs: [
      "Vách nhôm kính Stick đặc chủng profile Schueco chịu lực siêu cao",
      "Hơn 2.700 m² cửa gỗ chống cháy và rèm ngăn lửa khói tự động",
      "Mái kính giếng trời Skylight và lan can kính cường lực an toàn",
      "Sơn phủ PVDF chống ăn mòn thời tiết bền đẹp trên 30 năm"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/nha-quoc-hoi.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-4",
    category: "commercial",
    title: "BỆNH VIỆN UNG BƯỚU ĐÀ NẴNG",
    type: "Bệnh viện Chuyên khoa Quốc tế",
    investor: "Sở Y Tế TP. Đà Nẵng",
    address: "Đường Hoàng Thị Loan, Phường Hòa Minh, Quận Liên Chiểu, TP. Đà Nẵng",
    location: "Đà Nẵng",
    volume: "32.000 m² sàn",
    year: "2023",
    image: "/images/official/project_ungbuou_hd.jpg",
    gallery: [
      "/images/official/project_ungbuou_hd.jpg",
      "https://storage.sudospaces.com/eurowindow/2022/07/benh-vien-ung-buou-da-nang-17-large.jpg.webp"
    ],
    description: "Bệnh viện chuyên khoa Ung bướu hiện đại hàng đầu miền Trung, được xây dựng theo mô hình bệnh viện nhân đạo kết hợp công nghệ điều trị tiên tiến với không gian cảnh quan thân thiện môi trường, xanh mát và thoáng khí.",
    scale: "Quy mô 500 giường bệnh nội trú, hệ thống phòng mổ vô trùng áp lực dương và khối nhà khám bệnh đa chức năng khang trang.",
    solution: "Eurowindow cung cấp toàn bộ hệ thống vách vòm nhôm kính lớn đón sáng tự nhiên, kính hộp cản nhiệt cách âm khử tiếng ồn đô thị, cửa trượt tự động cảm biến mắt thần và sơn nhôm PVDF kháng kiềm chống muối mặn ven biển Đà Nẵng.",
    specs: [
      "Vách vòm nhôm kính uốn cong đón sáng tự nhiên, cản nhiệt",
      "Cửa tự động cảm biến mắt thần đóng mở không chạm bảo đảm vô trùng",
      "Hệ thống nhôm sơn phủ PVDF chống ăn mòn muối biển Miền Trung",
      "Kính hộp an toàn cách âm giảm ồn tối đa cho người bệnh nghỉ dưỡng"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/benh-vien-ung-buou-da-nang.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-5",
    category: "commercial",
    title: "BỆNH VIỆN VIỆT PHÁP HÀ NỘI",
    type: "Bệnh viện Đa khoa Quốc tế",
    investor: "Công ty TNHH Bệnh viện Việt Pháp (L'Hôpital Français de Hanoï)",
    address: "Số 01 Phương Mai, Phường Phương Mai, Quận Đống Đa, Hà Nội",
    location: "Hà Nội",
    volume: "22.000 m² sàn",
    year: "2023",
    image: "/images/official/project_vietphap_hd.jpg",
    gallery: [
      "/images/official/project_vietphap_hd.jpg",
      "https://storage.sudospaces.com/eurowindow/2022/07/img-7105-large.jpg"
    ],
    description: "Bệnh viện quốc tế tư nhân đầu tiên tại Hà Nội đạt tiêu chuẩn chăm sóc y tế Châu Âu, là dự án mở rộng nâng cấp cơ sở vật chất kỹ thuật cao nhằm phục vụ hàng trăm ngàn lượt bệnh nhân quốc tế và trong nước.",
    scale: "Quy mô tòa nhà 7 tầng với 170 giường bệnh, khu phẫu thuật cấp cứu hiện đại và trung tâm chẩn đoán hình ảnh cao cấp.",
    solution: "Eurowindow cung cấp hệ cửa nhựa uPVC cách âm nhiệt cao cấp, vách kính hộp an toàn cản tia UV, hệ cửa trượt kín khí tự động phòng áp lực âm ngăn ngừa lây nhiễm chéo và đảm bảo môi trường vô trùng y tế quốc tế.",
    specs: [
      "Cửa nhựa uPVC & nhôm kính cách âm, cách nhiệt cao cấp",
      "Hệ cửa tự động đóng mở đảm bảo vô trùng y tế quốc tế",
      "Kính an toàn dán nhiều lớp chống tia UV 99%",
      "Khóa và phụ kiện kháng khuẩn chuyên dụng cho môi trường y tế"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/benh-vien-viet-phap.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-6",
    category: "residential",
    title: "VINHOMES GLOBAL GATE CỔ LOA",
    type: "Đại Đô Thị Sinh Thái",
    investor: "Tập đoàn Vingroup",
    address: "Đường Trường Sa, Xã Đông Hội & Xuân Canh, Huyện Đông Anh, Hà Nội",
    location: "Hà Nội",
    volume: "35.000 m² cửa & vách kính",
    year: "2026",
    image: "/images/official/project_vinhomes_hd.jpg",
    gallery: [
      "/images/official/project_vinhomes_hd.jpg"
    ],
    description: "Đại đô thị văn hóa thương mại thế hệ mới tầm vóc quốc tế nằm ngay cửa ngõ Đông Bắc Hà Nội, liền kề Trung tâm Hội chợ Triển lãm Quốc gia lớn nhất Đông Nam Á, mang đến chuẩn mực sống phồn vinh vượt bậc.",
    scale: "Tổng diện tích 385 ha, bao gồm hàng ngàn căn shophouse, biệt thự ven hồ và tổ hợp căn hộ chung cư cao cấp.",
    solution: "Eurowindow cung cấp hệ cửa nhôm kính cao cấp Panorama tràn viền, kính Low-E cản nhiệt thế hệ mới giúp giảm nhiệt độ phòng mùa hè và giữ ấm mùa đông, phụ kiện đồng bộ Châu Âu vận hành êm ái.",
    specs: [
      "Hệ cửa nhôm kính panorama toàn cảnh đón ánh sáng và gió tự nhiên",
      "Kính Low-E chống nhiệt cao cấp, tiết kiệm điện điều hòa tới 30%",
      "Phụ kiện cao cấp nhập khẩu tiêu chuẩn Châu Âu",
      "Sơn tĩnh điện thế hệ mới bảo hành màu sắc trên 20 năm"
    ],
    eurowindowBizUrl: "https://eurowindow.biz",
    eurowindowBizVerified: true
  },
  {
    id: "p-7",
    category: "hospitality",
    title: "FLC LUXURY RESORT SẦM SƠN",
    type: "Quần Thể Nghỉ Dưỡng 5 Sao",
    investor: "Tập đoàn FLC (FLC Group)",
    address: "Đường Hồ Xuân Hương, Phường Quảng Cư, TP. Sầm Sơn, Tỉnh Thanh Hóa",
    location: "Thanh Hóa",
    volume: "28.500 m²",
    year: "2024",
    image: "/images/official/project_flc_hd.jpg",
    gallery: [
      "/images/official/project_flc_hd.jpg"
    ],
    description: "Quần thể du lịch nghỉ dưỡng sinh thái 5 sao đẳng cấp quốc tế đầu tiên tại miền Bắc và Bắc Trung Bộ, trải dài theo bờ biển Sầm Sơn nguyên sơ với hệ sinh thái sân golf và resort biển cao cấp.",
    scale: "Quy mô 200 ha bao gồm khách sạn FLC Grand Hotel, FLC Luxury Hotel, hàng trăm căn villa biển và sân golf 18 hố dạng links.",
    solution: "Eurowindow thi công toàn bộ hệ thống cửa trượt nâng nhôm kính Panorama view biển không giới hạn, vách kính cường lực chịu sức gió bão ven biển cấp 12, bề mặt sơn tĩnh điện & Anodizing chống chịu ăn mòn muối biển vượt trội.",
    specs: [
      "Cửa trượt nhôm kính panorama view biển tràn viền không giới hạn",
      "Vách kính cường lực chịu mặn bãi biển và chống bão duyên hải",
      "Sơn phủ công nghệ anodized chống ăn mòn hóa chất mặn và gió biển",
      "Kính hộp cản nhiệt giảm bức xạ mặt trời trực tiếp từ hướng biển"
    ],
    eurowindowBizUrl: "https://eurowindow.biz",
    eurowindowBizVerified: true
  },
  {
    id: "p-8",
    category: "commercial",
    title: "FPT TELECOM TOWER",
    type: "Tòa Nhà Văn Phòng & Data Center",
    investor: "Công ty Cổ phần Viễn thông FPT (FPT Telecom)",
    address: "Lô B2-9-1, Khu Công nghệ cao TP.HCM (SHTP), Phường Tăng Nhơn Phú B, TP. Thủ Đức, TP. Hồ Chí Minh",
    location: "TP. Hồ Chí Minh",
    volume: "33.000 hạng mục cửa & cấu kiện",
    year: "2026",
    image: "/images/official/project_fpt_hd.jpg",
    gallery: [
      "/images/official/project_fpt_hd.jpg"
    ],
    description: "Trung tâm điều hành viễn thông và dữ liệu Data Center Tier III hiện đại bậc nhất khu vực phía Nam của FPT Telecom, kiến trúc xanh bền vững chuẩn LEED.",
    scale: "Tổng diện tích sàn hơn 30.000 m², cao 15 tầng văn phòng và khu kỹ thuật dữ liệu đạt chứng chỉ an ninh quốc tế.",
    solution: "Eurowindow thi công trọn gói hệ mặt dựng nhôm kính Unitized kết hợp Stick chuẩn văn phòng hạng A, cửa tự động mắt thần bảo mật hai lớp, mái sảnh kính Spider và lan can kính cường lực an toàn.",
    specs: [
      "Hệ mặt dựng nhôm kính và cửa tự động chuẩn văn phòng hạng A",
      "Mái kính kết hợp lan can kính cường lực an toàn",
      "Cấu kiện kim loại phụ trợ gia công độ chính xác cao bằng CNC",
      "Cửa tự động cảm biến tích hợp hệ thống kiểm soát an ninh thẻ từ"
    ],
    eurowindowBizUrl: "https://eurowindow.biz",
    eurowindowBizVerified: true
  },
  {
    id: "p-9",
    category: "residential",
    title: "SUNSHINE CRYSTAL RIVER",
    type: "Biệt Thự Trên Không Siêu Sang",
    investor: "Tập đoàn Sunshine Group",
    address: "Khu đô thị Nam Thăng Long (Ciputra), Phường Phú Thượng, Quận Tây Hồ, Hà Nội",
    location: "Hà Nội",
    volume: "30.000 m²",
    year: "2025",
    image: "/images/official/project_sunshine_hd.jpg",
    gallery: [
      "/images/official/project_sunshine_hd.jpg"
    ],
    description: "Dự án biệt thự trên không (Sky Villas) siêu sang bên bờ sông Hồng, thuộc quần thể KĐT Ciputra đẳng cấp dành cho giới thượng lưu thủ đô.",
    scale: "Tổ hợp 5 tòa tháp cao 40 tầng với các căn duplex, penthouse tràn ngập ánh sáng tự nhiên và bể bơi vô cực riêng từng căn hộ.",
    solution: "Eurowindow hoàn thiện toàn bộ vách mặt dựng nhôm kính giấu đố sang trọng tối giản, kính Low-E an toàn 2-3 lớp ngăn bức xạ nhiệt và cản 99% tia cực tím, lan can kính ban công âm sàn và mái kính sảnh đón.",
    specs: [
      "Vách mặt dựng nhôm kính giấu đố sang trọng, tối giản thẩm mỹ",
      "Kính dán an toàn tăng chịu lực, cách âm, cản tia UV 99%",
      "Lan can kính louver và mái kính hoàn thiện trọn gói",
      "Phụ kiện cao cấp nhập khẩu đạt tiêu chuẩn công trình hạng sang"
    ],
    eurowindowBizUrl: "https://eurowindow.biz",
    eurowindowBizVerified: true
  },
  {
    id: "p-10",
    category: "national",
    title: "TÒA NHÀ VĂN PHÒNG CHÍNH PHỦ",
    type: "Trụ sở Cơ quan Trung ương",
    investor: "Văn phòng Chính phủ Việt Nam",
    address: "Số 01 Hoàng Hoa Thám, Phường Ngọc Hà, Quận Ba Đình, Hà Nội",
    location: "Hà Nội",
    volume: "9 tầng nổi, 3 tầng hầm",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/20190612-hanoi-cityscape-7928-large.jpg.webp",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/20190612-hanoi-cityscape-7928-large.jpg.webp"
    ],
    description: "Công trình có quy mô 9 tầng nổi và 3 tầng hầm, được thiết kế theo phong cách bán cổ điển trang trọng, đề cao tính an toàn, bảo mật thông tin và tiện nghi công sở cấp cao.",
    scale: "Tổng mức đầu tư trên 1.500 tỷ đồng, thiết kế đồng bộ với quần thể trụ sở cơ quan hành chính trung ương tại Ba Đình.",
    solution: "Eurowindow thi công lắp đặt hoàn thiện toàn bộ hệ cửa nhôm cách âm cao cấp, vách kính cản nhiệt Low-E, cửa gỗ chống cháy và hệ thống cửa tự động đáp ứng tiêu chuẩn an ninh cơ mật quốc gia.",
    specs: [
      "Vách nhôm kính cách âm, cách nhiệt cao cấp chống ồn đô thị",
      "Hệ thống cửa gỗ chống cháy chuyên dụng đạt kiểm định PCCC",
      "Cửa tự động an ninh tích hợp kiểm soát thông minh",
      "Kính dán an toàn chống đập vỡ tiêu chuẩn công trình trọng điểm"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/toa-nha-van-phong-chinh-phu.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-11",
    category: "national",
    title: "TRỤ SỞ BỘ CÔNG AN",
    type: "Trụ sở An ninh Quốc gia",
    investor: "Bộ Công An Việt Nam",
    address: "Số 47 Phạm Văn Đồng, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội",
    location: "Hà Nội",
    volume: "182.000 m² sàn",
    year: "2023",
    image: "/images/official/project_office_hd.jpg",
    gallery: [
      "/images/official/project_office_hd.jpg"
    ],
    description: "Công trình trụ sở Bộ Công an được xây dựng trên diện tích đất 5,3 ha, có kiến trúc kiên cố hiện đại, quy mô tầm cỡ quốc tế, có khả năng chống chịu động đất cấp 7 - cấp 8.",
    scale: "Tổng diện tích 182.000 m² sàn gồm diện tích làm việc, hội trường lớn, phòng họp trung tâm, nhà khách và khu liên hợp kỹ thuật nghiệp vụ.",
    solution: "Eurowindow phụ trách thi công lắp đặt mặt dựng hệ nhôm kính và ốp nhôm mặt đứng của 6 hạng mục trong dự án gồm các khối nhà C, D, E, B1, B3 và B5, đảm bảo an toàn tuyệt đối và tiết kiệm năng lượng tòa nhà.",
    specs: [
      "Hệ nhôm kính mặt dựng và ốp nhôm mặt đứng 6 khối nhà trọng yếu",
      "Kết cấu kiên cố chịu áp lực gió bão và chống chấn động đất cấp 8",
      "Hệ thống điều khiển tòa nhà thông minh và tiết kiệm điện năng",
      "Cửa an ninh chống đột nhập và kính an toàn đa lớp chuyên dụng"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/tru-so-bo-cong-an.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-12",
    category: "national",
    title: "CẢNG HÀNG KHÔNG QUỐC TẾ VÂN ĐỒN",
    type: "Hạ tầng hàng không Quốc gia",
    investor: "Tập đoàn Sun Group",
    address: "Xã Đoàn Kết, Huyện Vân Đồn, Tỉnh Quảng Ninh",
    location: "Quảng Ninh",
    volume: "25.000 m² sàn",
    year: "2023",
    image: "/images/official/project_resort_hd.jpg",
    gallery: [
      "/images/official/project_resort_hd.jpg"
    ],
    description: "Cảng hàng không quốc tế Vân Đồn là sân bay tư nhân đầu tiên tại Việt Nam với tổng mức đầu tư gần 7.500 tỷ đồng, từng đạt giải thưởng Sân bay mới hàng đầu thế giới (World Travel Awards).",
    scale: "Công suất thiết kế giai đoạn 1 đạt 2,5 triệu hành khách/năm, định hướng mở rộng lên 5 triệu hành khách/năm.",
    solution: "Eurowindow thi công lắp đặt cửa và vách kính mặt dựng khẩu độ lớn, lan can kính cường lực an toàn, cửa kính tự động thông minh và cửa thủy lực cho Nhà ga hành khách cùng Khu nhà điều hành trung tâm.",
    specs: [
      "Vách mặt dựng nhôm kính khổ lớn tối ưu ánh sáng tự nhiên",
      "Kính hộp Low-E cản nhiệt, chịu áp lực bão biển cực lớn",
      "Hệ thống cửa tự động cảm biến và lan can kính cường lực an toàn",
      "Sơn phủ công nghệ cao chống ăn mòn môi trường sương muối biển"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/cang-hang-khong-quoc-te-van-don.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-13",
    category: "commercial",
    title: "BỆNH VIỆN TRUNG ƯƠNG QUÂN ĐỘI 108",
    type: "Bệnh viện Đa khoa Quốc gia",
    investor: "Bệnh viện Trung ương Quân đội 108 - Bộ Quốc Phòng",
    address: "Số 01 Trần Hưng Đạo, Phường Bạch Đằng, Quận Hai Bà Trưng, Hà Nội",
    location: "Hà Nội",
    volume: "30.000 m² cửa & vách nhôm kính",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/mg-1220-large.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/mg-1220-large.jpg"
    ],
    description: "Cụm tòa nhà trung tâm Bệnh viện TW Quân đội 108 là cơ sở y tế thông minh hiện đại bậc nhất Việt Nam và khu vực Đông Nam Á, phục vụ công tác khám chữa bệnh cho cán bộ cấp cao và người dân.",
    scale: "Quy mô 3 tòa nhà cao tầng (2 tòa 22 tầng và 1 tòa 10 tầng), tổng diện tích sàn 138.984 m² với 2.000 giường bệnh.",
    solution: "Eurowindow thi công khoảng 30.000 m² cửa nhôm và vách nhôm kính lớn, hệ profile nhôm có cầu cách nhiệt thiết kế chuyên biệt, kính hộp và kính dán nhiều lớp sản xuất từ Mỹ và Nhật Bản.",
    specs: [
      "Hệ nhôm có cầu cách nhiệt thiết kế riêng biệt chuẩn y khoa",
      "Kính hộp và kính dán nhiều lớp nhập khẩu Mỹ và Nhật Bản",
      "Hệ thống cửa tự động vô trùng phòng mổ và khu can thiệp",
      "Khả năng cách âm vượt trội bảo đảm không gian yên tĩnh tuyệt đối"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/benh-vien-108.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-14",
    category: "residential",
    title: "KHU ĐÔ THỊ SALA THỦ THIÊM",
    type: "Đại Đô Thị Sinh Thái Cao Cấp",
    investor: "Công ty Cổ phần Đầu tư Địa ốc Đại Quang Minh",
    address: "Số 10 Mai Chí Thọ, Khu đô thị mới Thủ Thiêm, TP. Thủ Đức, TP. Hồ Chí Minh",
    location: "TP. Hồ Chí Minh",
    volume: "257 ha (quy mô toàn khu)",
    year: "2024",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/dji-0155-large.jpg.webp",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/dji-0155-large.jpg.webp"
    ],
    description: "Khu đô thị sinh thái kiểu mẫu đẳng cấp bậc nhất tọa lạc tại trái tim bán đảo Thủ Thiêm, sở hữu môi trường sinh thái trong lành với công viên quy mô lớn và vị trí kết nối giao thông hoàn hảo.",
    scale: "Quy mô 257 ha gồm tổ hợp chung cư cao cấp Sarimi, Sarina, biệt thự sinh thái Saroma Villa và phố thương mại Shophouse Nguyễn Cơ Thạch.",
    solution: "Eurowindow cung cấp và lắp đặt toàn diện hệ thống cửa nhôm kính cao cấp, vách kính mặt dựng hiện đại, cửa sổ trượt và cửa đi mở quay cách âm nhiệt đồng bộ, tạo không gian sống tiện nghi tĩnh lặng giữa lòng đô thị.",
    specs: [
      "Hệ thống cửa nhôm kính cao cấp đồng bộ toàn khu căn hộ và biệt thự",
      "Vách kính lấy sáng tự nhiên cách nhiệt và chống ồn đô thị",
      "Phụ kiện kim khí tiêu chuẩn Châu Âu bền đẹp vận hành êm",
      "Sơn tĩnh điện chống ăn mòn thích ứng khí hậu nhiệt đới phía Nam"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/khu-do-thi-sala.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-15",
    category: "commercial",
    title: "DIAMOND CROWN HẢI PHÒNG",
    type: "Tổ Hợp Tháp Đôi Biểu Tượng Diagrid",
    investor: "Tập đoàn Vàng bạc Đá quý DOJI (DOJI Group)",
    address: "Ngã tư Lê Hồng Phong & Nguyễn Bỉnh Khiêm, Phường Đằng Giang, Quận Ngô Quyền, TP. Hải Phòng",
    location: "Hải Phòng",
    volume: "Tháp đôi 45 tầng & 39 tầng",
    year: "2024",
    image: "https://storage.sudospaces.com/eurowindow/2025/02/viber-image-2025-02-05-13-31-03-196-large.png.webp",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2025/02/viber-image-2025-02-05-13-31-03-196-large.png.webp"
    ],
    description: "Tòa tháp đôi biểu tượng kiến trúc đỉnh cao của thành phố Cảng, công trình sử dụng kết cấu Diagrid bê tông cốt thép mắt võng độc nhất vô nhị tại Việt Nam và Châu Á, đoạt giải thưởng Dot Property Vietnam Awards danh giá.",
    scale: "Gồm tháp khách sạn Signature 45 tầng cao 186m và tháp căn hộ hạng sang 39 tầng với hơn 1.000 căn hộ cao cấp.",
    solution: "Eurowindow cung cấp giải pháp vách kính hộp Low-E uốn lượn ôm khít theo kết cấu Diagrid phức tạp, chịu áp lực gió bão biển cấp 14+, khả năng cách âm 40dB và cản nhiệt chống bức xạ mặt trời tối ưu.",
    specs: [
      "Hệ vách kính hộp cản nhiệt Low-E uốn cong theo kết cấu Diagrid",
      "Chịu áp lực gió bão vùng biển duyên hải Hải Phòng cấp 14+",
      "Cách âm 40dB chống ồn tuyệt đối từ ngã tư giao lộ sầm uất",
      "Sơn bề mặt khung nhôm chống ăn mòn muối biển cao cấp"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/diamond-crown-hai-phong.html",
    eurowindowBizVerified: true
  }
];

export const projectCategories = [
  { id: "all", label: "Tất cả công trình" },
  { id: "national", label: "Cấp Quốc gia" },
  { id: "commercial", label: "Thương mại & Y tế" },
  { id: "residential", label: "Khu đô thị & Dân dụng" },
  { id: "hospitality", label: "Nghỉ dưỡng & Resort" },
];
