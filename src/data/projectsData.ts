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
  // ==========================================
  // 1. CẤP QUỐC GIA (NATIONAL PROJECTS)
  // ==========================================
  {
    id: "p-long-thanh",
    category: "national",
    title: "CẢNG HÀNG KHÔNG QUỐC TẾ LONG THÀNH",
    type: "Đại Công Trình Hàng Không Thế Kỷ",
    investor: "Tổng công ty Cảng hàng không Việt Nam (ACV)",
    address: "Xã Bình Sơn, Huyện Long Thành, Tỉnh Đồng Nai",
    location: "Đồng Nai",
    volume: "Hơn 50.000 m² mặt dựng & vách kính",
    year: "2025 - 2026",
    image: "https://storage.sudospaces.com/eurowindow/2025/04/viber-image-2025-04-28-16-08-31-035.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2025/04/viber-image-2025-04-28-16-08-31-035.jpg"
    ],
    description: "Dự án trọng điểm quốc gia quy mô cấp 4F - cấp cao nhất theo tiêu chuẩn ICAO, được thiết kế lấy cảm hứng từ hình ảnh hoa sen cách điệu thanh thoát, biểu tượng cho khát vọng cất cánh vươn tầm thế giới của đất nước.",
    scale: "Công suất thiết kế phục vụ 100 triệu hành khách/năm và 5 triệu tấn hàng hóa/năm, tổng mức đầu tư toàn dự án hơn 336.000 tỷ đồng (khoảng 16 tỷ USD).",
    solution: "Eurowindow cung cấp và thi công các hệ mặt dựng nhôm kính lớn chịu áp lực gió bão cực hạn, hệ kính hộp cản nhiệt Low-E 3 lớp nạp khí Argon cách âm đạt chuẩn hàng không, cùng hệ thống cửa tự động an ninh thông minh kết nối hệ thống điều hành bay.",
    specs: [
      "Mặt dựng nhôm kính tiết kiệm năng lượng Low-E 3 lớp kiểm soát nhiệt",
      "Khung nhôm cầu cách nhiệt chịu áp lực gió bão duyên hải cực đại",
      "Hệ thống cửa tự động mắt thần công nghệ Thụy Sĩ tích hợp an ninh",
      "Kính an toàn dán nhiều lớp đạt tiêu chuẩn an toàn hàng không quốc tế"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/tin-tuc/tin-du-an/cang-hang-khong-quoc-te-long-thanh-cong-trinh-kien-truc-mang-tinh-bieu-tuong-va-dau-an-kien-tao-tu-eurowindow.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-phu-bai",
    category: "national",
    title: "CẢNG HÀNG KHÔNG PHÚ BÀI HUẾ",
    type: "Hạ Tầng Hàng Không Quốc Gia",
    investor: "Tổng công ty Cảng hàng không Việt Nam (ACV)",
    address: "Phường Phú Bài, Thị xã Hương Thủy, Tỉnh Thừa Thiên Huế",
    location: "Thừa Thiên Huế",
    volume: "18.500 m² nhôm kính",
    year: "2023 - 2025",
    image: "https://storage.sudospaces.com/eurowindow/2025/02/viber-image-2025-02-05-13-33-24-065.png",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2025/02/viber-image-2025-02-05-13-33-24-065.png",
      "/images/official/project_phubai_hd.jpg"
    ],
    description: "Nhà ga T2 Cảng hàng không Quốc tế Phú Bài là dự án giao thông hàng không trọng điểm với tổng mức đầu tư 2.250 tỷ đồng. Thiết kế kiến trúc lấy cảm hứng nghệ thuật từ Điện Hòn Chén cung đình Huế, tạo hình khối mái đa tầng xếp lớp hiện đại kết hợp đường nét truyền thống.",
    scale: "Quy mô 22.380 m² sàn, công suất thiết kế 5 triệu hành khách/năm, tiếp nhận các dòng tàu bay thân rộng hiện đại Code C, Code E.",
    solution: "Eurowindow thi công lắp đặt hoàn thiện hơn 18.500 m² hệ vách nhôm kính lớn Unitized chịu áp lực gió bão biển cấp 15, kính hộp 3 lớp Low-E 24mm cản nhiệt nạp khí trơ Argon, cùng hệ thống cửa tự động mắt thần công nghệ Thụy Sĩ.",
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
    id: "p-nha-quoc-hoi",
    category: "national",
    title: "NHÀ QUỐC HỘI VIỆT NAM",
    type: "Công Trình Biểu Tượng Quốc Gia",
    investor: "Ban Quản lý Dự án Đầu tư Xây dựng Nhà Quốc hội & Hội trường Ba Đình",
    address: "Đường Độc Lập, Phường Quán Thánh, Quận Ba Đình, Hà Nội (Quảng trường Ba Đình)",
    location: "Hà Nội",
    volume: "38.000 m² sàn (hơn 10.500 m² cửa & vách kính)",
    year: "2024",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/mg-1220.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/mg-1220.jpg",
      "/images/official/project_nhaquochoi_hd.jpg"
    ],
    description: "Công trình Nhà Quốc hội mang tính biểu tượng chính trị đặc biệt quan trọng của đất nước, nơi diễn ra các kỳ họp Quốc hội, đón tiếp nguyên thủ quốc gia và tổ chức các sự kiện bang giao quốc tế lớn. Thiết kế đạt giải của liên danh GMP (CHLB Đức) lấy ý tưởng biểu tượng Bánh chưng - Bánh giầy truyền thống Việt Nam.",
    scale: "Quy mô 2 tầng hầm và 5 tầng nổi hình vuông bao bọc phòng họp Diên Hồng hình tròn ở trung tâm, chiều cao 31,7m, được đánh giá là công trình có kỹ thuật thi công phức tạp bậc nhất cả nước.",
    solution: "Eurowindow thi công hơn 7.800 m² vách nhôm kính lớn hệ Stick, profile Schueco chịu lực đặc chủng, vách kính chống cháy và 2.700 m² cửa gỗ chống cháy, rèm ngăn lửa khói tự động, mái kính Skylight lấy sáng và hệ thống khóa điện tử cảm biến an ninh cơ mật.",
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
    id: "p-bo-ngoai-giao",
    category: "national",
    title: "TRỤ SỞ BỘ NGOẠI GIAO",
    type: "Trụ Sở Cơ Quan Trung Ương",
    investor: "Bộ Ngoại Giao Việt Nam",
    address: "Số 02 Lê Quang Đạo, Phường Mễ Trì, Quận Nam Từ Liêm, Hà Nội",
    location: "Hà Nội",
    volume: "45.000 m² sàn (8.000 m² nhôm kính)",
    year: "2024",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/20191030-tru-so-bo-ngoai-giao-0719.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/20191030-tru-so-bo-ngoai-giao-0719.jpg",
      "/images/official/project_bongoaigiao_hd.jpg"
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
    id: "p-bo-cong-an",
    category: "national",
    title: "TRỤ SỞ BỘ CÔNG AN",
    type: "Trụ Sở An Ninh Quốc Gia",
    investor: "Bộ Công An Việt Nam",
    address: "Số 47 Phạm Văn Đồng, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội",
    location: "Hà Nội",
    volume: "182.000 m² sàn",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2021/12/toa-nha-bo-cong-an.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2021/12/toa-nha-bo-cong-an.jpg"
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
    id: "p-van-don",
    category: "national",
    title: "CẢNG HÀNG KHÔNG QUỐC TẾ VÂN ĐỒN",
    type: "Hạ Tầng Hàng Không Quốc Gia",
    investor: "Tập đoàn Sun Group",
    address: "Xã Đoàn Kết, Huyện Vân Đồn, Tỉnh Quảng Ninh",
    location: "Quảng Ninh",
    volume: "25.000 m² sàn nhà ga",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2021/12/san-bay-van-don.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2021/12/san-bay-van-don.jpg"
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

  // ==========================================
  // 2. THƯƠNG MẠI & Y TẾ (COMMERCIAL & HEALTHCARE)
  // ==========================================
  {
    id: "p-bv-108",
    category: "commercial",
    title: "BỆNH VIỆN TRUNG ƯƠNG QUÂN ĐỘI 108",
    type: "Bệnh Viện Đa Khoa Hạng Đặc Biệt",
    investor: "Bệnh viện Trung ương Quân đội 108 - Bộ Quốc Phòng",
    address: "Số 01 Trần Hưng Đạo, Phường Bạch Đằng, Quận Hai Bà Trưng, Hà Nội",
    location: "Hà Nội",
    volume: "30.000 m² cửa & vách nhôm kính",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2021/12/benh-vien-108.png",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2021/12/benh-vien-108.png"
    ],
    description: "Cụm tòa nhà trung tâm Bệnh viện TW Quân đội 108 là cơ sở y tế thông minh hiện đại bậc nhất Việt Nam và khu vực Đông Nam Á, phục vụ công tác khám chữa bệnh cho cán bộ cấp cao và nhân dân cả nước.",
    scale: "Quy mô 3 tòa nhà cao tầng (2 tòa 22 tầng và 1 tòa 10 tầng), tổng diện tích sàn 138.984 m² với 2.000 giường bệnh.",
    solution: "Eurowindow thi công khoảng 30.000 m² cửa nhôm và vách nhôm kính lớn, hệ profile nhôm có cầu cách nhiệt thiết kế chuyên biệt, kính hộp và kính dán nhiều lớp sản xuất từ Mỹ và Nhật Bản, kết hợp cửa tự động phòng phẫu thuật vô trùng tuyệt đối.",
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
    id: "p-techno-park",
    category: "commercial",
    title: "TÒA NHÀ TECHNO PARK TOWER",
    type: "Tháp Văn Phòng Thông Minh Top 10 Thế Giới",
    investor: "Tập đoàn Vingroup",
    address: "KĐT Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội",
    location: "Hà Nội",
    volume: "45 tầng nổi, 3 tầng hầm",
    year: "2023 - 2024",
    image: "https://storage.sudospaces.com/eurowindow/2022/06/technopark-tower-eurowindow-1-copy.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/06/technopark-tower-eurowindow-1-copy.jpg"
    ],
    description: "Biểu tượng tháp văn phòng thông minh đẳng cấp quốc tế đạt chứng chỉ LEED Platinum cao nhất của Hội đồng Công trình Xanh Hoa Kỳ, được trang bị hệ thống quản hành tự động thông minh bằng AI hàng đầu thế giới.",
    scale: "Chiều cao 186m với 45 tầng nổi, tổng diện tích sàn xây dựng gần 117.000 m².",
    solution: "Eurowindow cung cấp toàn bộ hệ thống vách mặt dựng Unitized kính hộp Low-E cản nhiệt tấm lớn, tiết kiệm hơn 30% năng lượng tiêu thụ điều hòa và tối ưu hóa 100% tầm nhìn view đại đô thị biển hồ Ocean Park.",
    specs: [
      "Hệ mặt dựng Unitized cao cấp đạt chuẩn công trình xanh LEED Platinum",
      "Kính hộp Low-E 3 lớp cản nhiệt tối ưu, chống chói và chống tia UV",
      "Hệ cửa kiểm soát tự động tích hợp cảm biến tòa nhà thông minh",
      "Chịu được sức gió bão trên cấp 14 tại độ cao gần 200m"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/toa-nha-techno-park-tower.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-diamond-crown",
    category: "commercial",
    title: "DIAMOND CROWN HẢI PHÒNG",
    type: "Tổ Hợp Tháp Đôi Biểu Tượng Diagrid",
    investor: "Tập đoàn Vàng bạc Đá quý DOJI (DOJI Group)",
    address: "Ngã tư Lê Hồng Phong & Nguyễn Bỉnh Khiêm, Phường Đằng Giang, Quận Ngô Quyền, TP. Hải Phòng",
    location: "Hải Phòng",
    volume: "Tháp đôi 45 tầng & 39 tầng",
    year: "2024",
    image: "https://storage.sudospaces.com/eurowindow/2025/02/viber-image-2025-02-05-13-31-03-196.png",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2025/02/viber-image-2025-02-05-13-31-03-196.png"
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
  },
  {
    id: "p-fpt-tower",
    category: "commercial",
    title: "FPT TELECOM TOWER",
    type: "Tòa Nhà Văn Phòng & Data Center",
    investor: "Công ty Cổ phần Viễn thông FPT (FPT Telecom)",
    address: "Lô B2-9-1, Khu Công nghệ cao TP.HCM (SHTP), Phường Tăng Nhơn Phú B, TP. Thủ Đức, TP. Hồ Chí Minh",
    location: "TP. Hồ Chí Minh",
    volume: "33.000 hạng mục cửa & cấu kiện",
    year: "2026",
    image: "https://storage.sudospaces.com/eurowindow/2026/03/z7653606237319-b225700b968578333eda5fd2d45b447f.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2026/03/z7653606237319-b225700b968578333eda5fd2d45b447f.jpg"
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
    eurowindowBizUrl: "https://eurowindow.biz/tin-tuc/tin-du-an/eurowindow-trung-thau-thi-cong-he-cua-va-vach-nhom-kinh-du-an-fpt-telecom-tower.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-vietcombank",
    category: "commercial",
    title: "TÒA NHÀ VIETCOMBANK TOWER TP.HCM",
    type: "Tháp Tài Chính & Ngân Hàng Hạng A+",
    investor: "Công ty Liên doanh TNHH Vietcombank - Bonday - Benthanh",
    address: "Số 05 Công Trường Mê Linh, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    location: "TP. Hồ Chí Minh",
    volume: "35 tầng nổi, 4 tầng hầm (cao 206m)",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/dji-0689.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/dji-0689.jpg"
    ],
    description: "Tòa tháp tài chính biểu tượng nhìn ra sông Sài Gòn tại trung tâm Quận 1 do kiến trúc sư hàng đầu thế giới Pelli Clarke Pelli thiết kế, đạt giải thưởng công trình cao tầng đẹp nhất Việt Nam.",
    scale: "35 tầng nổi, chiều cao 206m, diện tích sàn hơn 55.000 m² văn phòng hạng A+.",
    solution: "Eurowindow cung cấp và thi công vách nhôm kính lớn mặt dựng Unitized chất lượng cao, kính an toàn cản nhiệt Low-E cách âm cách nhiệt hoàn hảo, chịu động đất và áp lực gió xoáy ven sông Sài Gòn.",
    specs: [
      "Hệ mặt dựng Unitized khổ lớn thiết kế hiện đại chuẩn quốc tế",
      "Kính hộp Low-E cản nhiệt, tiết kiệm năng lượng tòa nhà",
      "Hệ thống phụ kiện đồng bộ cao cấp Châu Âu",
      "Cửa tự động điều khiển thông minh khu sảnh lễ tân trung tâm"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/toa-nha-vietcombank-tower.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-ung-buou",
    category: "commercial",
    title: "BỆNH VIỆN UNG BƯỚU ĐÀ NẴNG",
    type: "Bệnh Viện Chuyên Khoa Quốc Tế",
    investor: "Sở Y Tế TP. Đà Nẵng",
    address: "Đường Hoàng Thị Loan, Phường Hòa Minh, Quận Liên Chiểu, TP. Đà Nẵng",
    location: "Đà Nẵng",
    volume: "32.000 m² sàn",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/benh-vien-ung-buou-da-nang-17.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/benh-vien-ung-buou-da-nang-17.jpg",
      "/images/official/project_ungbuou_hd.jpg"
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
    id: "p-viet-phap",
    category: "commercial",
    title: "BỆNH VIỆN VIỆT PHÁP HÀ NỘI",
    type: "Bệnh Viện Đa Khoa Quốc Tế",
    investor: "Công ty TNHH Bệnh viện Việt Pháp (L'Hôpital Français de Hanoï)",
    address: "Số 01 Phương Mai, Phường Phương Mai, Quận Đống Đa, Hà Nội",
    location: "Hà Nội",
    volume: "22.000 m² sàn",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/img-7105.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/img-7105.jpg",
      "/images/official/project_vietphap_hd.jpg"
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

  // ==========================================
  // 3. KHU ĐÔ THỊ & DÂN DỤNG (RESIDENTIAL & URBAN)
  // ==========================================
  {
    id: "p-vinhomes-coloa",
    category: "residential",
    title: "VINHOMES GLOBAL GATE CỔ LOA",
    type: "Đại Đô Thị Sinh Thái Thế Hệ Mới",
    investor: "Tập đoàn Vingroup",
    address: "Đường Trường Sa, Xã Đông Hội & Xuân Canh, Huyện Đông Anh, Hà Nội",
    location: "Hà Nội",
    volume: "35.000 m² cửa & vách kính",
    year: "2026",
    image: "https://storage.sudospaces.com/eurowindow/2026/07/img-0344.jpeg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2026/07/img-0344.jpeg"
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
    eurowindowBizUrl: "https://eurowindow.biz/tin-tuc/tin-du-an/eurowindow-cung-cap-lap-dat-cua-va-vach-kinh-tai-khu-do-thi-vinhomes-global-gate-co-loa.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-sunshine-crystal",
    category: "residential",
    title: "SUNSHINE CRYSTAL RIVER",
    type: "Biệt Thự Trên Không Siêu Sang",
    investor: "Tập đoàn Sunshine Group",
    address: "Khu đô thị Nam Thăng Long (Ciputra), Phường Phú Thượng, Quận Tây Hồ, Hà Nội",
    location: "Hà Nội",
    volume: "30.000 m² cửa & vách kính mặt dựng",
    year: "2025",
    image: "https://storage.sudospaces.com/eurowindow/2025/06/anh-1-2.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2025/06/anh-1-2.jpg"
    ],
    description: "Dự án biệt thự trên không (Sky Villas) siêu sang bên bờ sông Hồng, thuộc quần thể KĐT Ciputra đẳng cấp dành cho giới thượng lưu thủ đô.",
    scale: "Tổ hợp 5 tòa tháp cao 40 tầng với các căn duplex, penthouse tràn ngập ánh sáng tự nhiên và bể bơi vô cực riêng từng căn hộ.",
    solution: "Eurowindow cung cấp và thi công gần 30.000 m² cửa và vách mặt dựng nhôm kính giấu đố sang trọng tối giản, kính Low-E an toàn 2-3 lớp ngăn bức xạ nhiệt và cản 99% tia cực tím, lan can kính ban công âm sàn và mái kính sảnh đón.",
    specs: [
      "Vách mặt dựng nhôm kính giấu đố sang trọng, tối giản thẩm mỹ",
      "Kính dán an toàn tăng chịu lực, cách âm, cản tia UV 99%",
      "Lan can kính louver và mái kính hoàn thiện trọn gói",
      "Phụ kiện cao cấp nhập khẩu đạt tiêu chuẩn công trình hạng sang"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/tin-tuc/tin-du-an/eurowindow-cung-cap-va-thi-cong-gan-30000m2-cua-vach-kinh-tai-du-an-sunshine-crystal-river.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-sala",
    category: "residential",
    title: "KHU ĐÔ THỊ SALA THỦ THIÊM",
    type: "Đại Đô Thị Sinh Thái Kiểu Mẫu",
    investor: "Công ty Cổ phần Đầu tư Địa ốc Đại Quang Minh",
    address: "Số 10 Mai Chí Thọ, Khu đô thị mới Thủ Thiêm, TP. Thủ Đức, TP. Hồ Chí Minh",
    location: "TP. Hồ Chí Minh",
    volume: "257 ha (quy mô toàn khu đô thị)",
    year: "2024",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/dji-0155.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/dji-0155.jpg"
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
    id: "p-river-park",
    category: "residential",
    title: "CHUNG CƯ EUROWINDOW RIVER PARK",
    type: "Khu Đô Thị Xanh Ven Sông",
    investor: "Tập đoàn Eurowindow Holding",
    address: "Đường Trường Sa, Xã Đông Hội, Huyện Đông Anh, Hà Nội (Chân cầu Đông Trù)",
    location: "Hà Nội",
    volume: "Hơn 2.000 căn hộ cao cấp",
    year: "2024",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/dji-0510-hdr.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/dji-0510-hdr.jpg"
    ],
    description: "Khu đô thị sinh thái xanh ven sông Đuống thơ mộng, không gian sống trong lành tách biệt khỏi khói bụi đô thị nhưng chỉ mất 15 phút vào trung tâm phố cổ Hà Nội.",
    scale: "Tổ hợp gồm 5 tòa tháp chung cư cao 33-39 tầng, khu biệt thự liền kề và shophouse khối đế sầm uất.",
    solution: "Toàn bộ dự án sử dụng hệ thống cửa nhựa uPVC và cửa nhôm cách âm cách nhiệt tiêu chuẩn Châu Âu Eurowindow, kính an toàn dán 2 lớp cản ồn gió sông vượt trội.",
    specs: [
      "Hệ cửa nhựa uPVC và cửa nhôm Eurowindow đồng bộ",
      "Khả năng cách âm tối ưu chống gió lộng tầng cao ven sông",
      "Kính an toàn dán nhiều lớp chịu lực cao",
      "Hệ phụ kiện chính hãng đóng mở êm ái bền bỉ trên 20 năm"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/chung-cu-eurowindow-river-park.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-multi-complex",
    category: "residential",
    title: "TÒA NHÀ EUROWINDOW MULTI COMPLEX",
    type: "Tổ Hợp Trung Tâm Thương Mại & Căn Hộ",
    investor: "Công ty Cổ phần Đầu tư Xây dựng & Phát triển Công nghệ Cao (Decotech)",
    address: "Số 27 Trần Duy Hưng, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội",
    location: "Hà Nội",
    volume: "27 tầng nổi, 3 tầng hầm",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/ewm-001.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/ewm-001.jpg"
    ],
    description: "Tòa tháp hỗn hợp biểu tượng nằm tại giao lộ đắc địa Trần Duy Hưng - Hoàng Đạo Thúy, một trong những công trình đầu tiên tại Việt Nam ứng dụng toàn bộ kính hộp phản quang cản nhiệt đa sắc.",
    scale: "Quy mô 27 tầng nổi với khối đế trung tâm thương mại, khu văn phòng hạng A và các tầng căn hộ cao cấp.",
    solution: "Eurowindow thi công toàn bộ hệ mặt dựng nhôm kính Unitized đa sắc màu kết hợp kính phản quang cản bức xạ mặt trời, cửa sổ mở hất âm tường và hệ thống cửa tự động.",
    specs: [
      "Mặt dựng Unitized đa sắc màu thẩm mỹ hiện đại",
      "Kính hộp phản quang cản nhiệt và tia cực tím",
      "Cửa nhôm kính cao cấp cách âm tuyệt đối khỏi tiếng ồn đường phố",
      "Sơn tĩnh điện chống ăn mòn thời tiết bền màu trên 25 năm"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/toa-nha-eurowindow-multi-complex.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-the-opusk",
    category: "residential",
    title: "THE OPUSK RESIDENCE (METROPOLE THỦ THIÊM)",
    type: "Bất Động Sản Siêu Thượng Lưu",
    investor: "Tập đoàn SonKim Land & Quốc Lộc Phát",
    address: "Khu chức năng số 1, Khu đô thị mới Thủ Thiêm, TP. Thủ Đức, TP. Hồ Chí Minh",
    location: "TP. Hồ Chí Minh",
    volume: "Giai đoạn cuối đẹp nhất The Metropole",
    year: "2025 - 2026",
    image: "https://storage.sudospaces.com/eurowindow/2025/11/viber-image-2025-10-31-19-34-18-446.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2025/11/viber-image-2025-10-31-19-34-18-446.jpg"
    ],
    description: "Phân khu căn hộ và văn phòng cao cấp bậc nhất The Metropole Thủ Thiêm nằm ngay sát chân cầu Ba Son (Thủ Thiêm 2), sở hữu tầm nhìn trực diện về Quận 1 và sông Sài Gòn phồn hoa.",
    scale: "Tổ hợp gồm 2 tòa tháp cao 36 tầng và 4 tầng hầm, định hình chuẩn mực sống thượng lưu mới của giới tinh hoa Sài Thành.",
    solution: "Eurowindow đồng hành cung cấp và thi công hệ thống cửa và vách nhôm kính cao cấp mặt ngoài, kính hộp Low-E cách âm cách nhiệt tuyệt đối, tạo nên vẻ đẹp sang trọng đẳng cấp cho toàn bộ dự án.",
    specs: [
      "Hệ cửa nhôm kính cao cấp sang trọng chuẩn thượng lưu",
      "Kính Low-E cản nhiệt, tầm nhìn panorama trực diện sông Sài Gòn",
      "Phụ kiện cao cấp đồng bộ nhập khẩu từ Châu Âu",
      "Hệ thống cách âm tối đa, bảo đảm không gian riêng tư tuyệt đối"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/tin-tuc/tin-du-an/eurowindow-dong-hanh-cung-the-opusk-residence-khang-dinh-vi-the-bat-dong-san-thuong-luu-tai-trung-tam-thu-thiem.html",
    eurowindowBizVerified: true
  },

  // ==========================================
  // 4. NGHỈ DƯỠNG & RESORT (HOSPITALITY)
  // ==========================================
  {
    id: "p-mandarin-oriental",
    category: "hospitality",
    title: "MANDARIN ORIENTAL ĐÀ NẴNG",
    type: "Khu Nghỉ Dưỡng Thượng Lưu 5 Sao Quốc Tế",
    investor: "Tập đoàn Mandarin Oriental Hotel Group & Đinh Thuận Corp",
    address: "Bãi biển Non Nước, Phường Hòa Hải, Quận Ngũ Hành Sơn, TP. Đà Nẵng",
    location: "Đà Nẵng",
    volume: "17,2 ha trải dài bờ biển Non Nước",
    year: "2025 - 2026",
    image: "https://storage.sudospaces.com/eurowindow/2025/04/12.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2025/04/12.jpg"
    ],
    description: "Dự án nghỉ dưỡng 5 sao sang trọng bậc nhất thế giới mang thương hiệu huyền thoại Mandarin Oriental lần đầu tiên có mặt tại miền Trung Việt Nam, trải dài dọc theo bờ cát trắng biển Non Nước.",
    scale: "Quy mô 17,2 ha gồm 69 biệt thự nghỉ dưỡng biển và 18 biệt thự ba phòng ngủ độc quyền được quản lý bởi tập đoàn khách sạn siêu sang thế giới.",
    solution: "Eurowindow cung cấp và thi công toàn bộ hệ cửa lùa trượt nâng Panorama khẩu độ lớn view biển, vách kính hộp cường lực chống chịu gió bão ven biển cấp 14+, cùng công nghệ sơn Anodizing kháng muối mặn biển bền vững theo thời gian.",
    specs: [
      "Cửa trượt nâng panorama khẩu độ cực lớn view biển không giới hạn",
      "Vách kính hộp Low-E cản bức xạ nhiệt mặt trời hướng biển",
      "Khung nhôm công nghệ sơn Anodized chống ăn mòn muối biển cấp độ cao",
      "Phụ kiện kim khí đồng bộ tiêu chuẩn Châu Âu đóng mở siêu êm"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/tin-tuc/tin-du-an/eurowindow-dong-hanh-cung-mandarin-oriental-da-nang-kien-tao-khong-gian-nghi-duong-thuong-luu-5.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-four-points",
    category: "hospitality",
    title: "KHÁCH SẠN FOUR POINTS BY SHERATON ĐÀ NẴNG",
    type: "Khách Sạn 5 Sao Quốc Tế Biển Đà Nẵng",
    investor: "Tập đoàn Alphanam (Alphanam Group)",
    address: "Số 118-120 Võ Nguyên Giáp, Phường Phước Mỹ, Quận Sơn Trà, TP. Đà Nẵng",
    location: "Đà Nẵng",
    volume: "36 tầng nổi (chiều cao 130m)",
    year: "2023 - 2024",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/four-points-by-sheraton-danang-2-1290x860.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/four-points-by-sheraton-danang-2-1290x860.jpg"
    ],
    description: "Tọa lạc tại cung đường biển đẹp nhất hành tinh Võ Nguyên Giáp, khách sạn 5 sao thuộc chuỗi thương hiệu Marriott International mang phong cách nghỉ dưỡng thời thượng và tầm nhìn toàn cảnh vịnh Đà Nẵng.",
    scale: "Tòa tháp cao 36 tầng với 390 phòng khách sạn 5 sao và tổ hợp căn hộ cao cấp Luxury Apartment.",
    solution: "Eurowindow thi công hệ thống vách nhôm kính lớn mặt dựng đón trọn view biển Mỹ Khê, cửa đi mở trượt nhôm kính cao cấp chống gió bão biển và phụ kiện kim khí đồng bộ nhập khẩu Châu Âu.",
    specs: [
      "Hệ vách kính mặt dựng chịu gió bão biển miền Trung cấp 14",
      "Cửa nhôm kính cách âm cách nhiệt tối ưu cho khách sạn 5 sao",
      "Kính an toàn dán nhiều lớp cản 99% tia cực tím",
      "Sơn tĩnh điện chống ăn mòn sương muối biển bền đẹp dài lâu"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/khach-san-four-point-sheraton.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-cong-doan-thanh-hoa",
    category: "hospitality",
    title: "KHÁCH SẠN 5 SAO CÔNG ĐOÀN THANH HÓA",
    type: "Khách Sạn & Trung Tâm Hội Nghị 5 Sao",
    investor: "Liên đoàn Lao động Tỉnh Thanh Hóa",
    address: "Đường Hồ Xuân Hương, Phường Trung Sơn, TP. Sầm Sơn, Tỉnh Thanh Hóa",
    location: "Thanh Hóa",
    volume: "4.415 m² cửa nhôm & vách kính mặt ngoài",
    year: "2025",
    image: "https://storage.sudospaces.com/eurowindow/2025/01/lam-son.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2025/01/lam-son.jpg"
    ],
    description: "Công trình khách sạn 5 sao bề thế nằm ngay mặt tiền đường ven biển Hồ Xuân Hương, được thiết kế lấy cảm hứng từ những cánh buồm căng gió vươn khơi, điểm nhấn kiến trúc tại bãi biển Sầm Sơn.",
    scale: "Quy mô 20 tầng nổi và 1 tầng hầm với 250 phòng nghỉ tiêu chuẩn 5 sao, trung tâm hội nghị quốc tế và bể bơi vô cực.",
    solution: "Eurowindow thi công toàn bộ 4.415 m² hệ thống cửa nhôm và vách kính mặt ngoài, hệ lam nhôm trang trí mặt đứng, kính hộp cản nhiệt và phụ kiện chống chịu muối biển chuyên dụng.",
    specs: [
      "Thi công hơn 4.415 m² cửa nhôm và vách kính lớn mặt ngoài",
      "Hệ lam nhôm trang trí tạo hình kiến trúc cánh buồm độc đáo",
      "Kính hộp an toàn cản nhiệt bức xạ mặt trời trực tiếp từ hướng biển",
      "Phụ kiện kim khí chịu ăn mòn muối biển cao cấp"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/tin-tuc/tin-du-an/eurowindow-thi-cong-4415m2-he-thong-cua-nhom-vach-kinh-mat-ngoai-khach-san-5-sao-cong-doan-thanh-hoa.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-golden-bay",
    category: "hospitality",
    title: "KHÁCH SẠN ĐÀ NẴNG GOLDEN BAY",
    type: "Tổ Hợp Khách Sạn & Căn Hộ Dát Vàng 5 Sao",
    investor: "Tập đoàn Hòa Bình (Hoa Binh Group)",
    address: "Số 01 Lê Văn Duyệt, Phường Nại Hiên Đông, Quận Sơn Trà, TP. Đà Nẵng",
    location: "Đà Nẵng",
    volume: "29 tầng nổi, hơn 1.000 phòng khách sạn",
    year: "2023",
    image: "https://storage.sudospaces.com/eurowindow/2022/07/hoa-binh-green.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2022/07/hoa-binh-green.jpg"
    ],
    description: "Khách sạn 5 sao dát vàng độc đáo tọa lạc bên bờ vịnh Đà Nẵng, sở hữu hồ bơi vô cực dát vàng 24K cao nhất và lớn nhất thế giới được tổ chức Kỷ lục Guinness công nhận.",
    scale: "Gồm 2 tòa tháp 29 tầng với hơn 1.000 phòng nghỉ sang trọng, khu spa cao cấp và trung tâm ẩm thực quốc tế.",
    solution: "Eurowindow cung cấp và lắp đặt toàn bộ hệ thống cửa nhôm kính cách âm nhiệt, vách kính mặt dựng Panorama view toàn cảnh sông Hàn và vịnh Đà Nẵng, thích ứng điều kiện thời tiết khắc nghiệt miền Trung.",
    specs: [
      "Hệ cửa nhôm kính cao cấp cách âm, cách nhiệt hoàn hảo",
      "Vách kính Panorama ôm trọn view vịnh Đà Nẵng và cầu Thuận Phước",
      "Kính dán an toàn nhiều lớp chịu sức gió bão cực lớn",
      "Sơn tĩnh điện chống chịu ăn mòn sương muối và độ ẩm cao"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/cong-trinh-tieu-bieu/khach-san-da-nang-golden-bay.html",
    eurowindowBizVerified: true
  },
  {
    id: "p-mgallery-sapa",
    category: "hospitality",
    title: "KHÁCH SẠN HOTEL DE LA COUPOLE - MGALLERY SAPA",
    type: "Khách Sạn 5 Sao Kiệt Tác Nghệ Thuật",
    investor: "Tập đoàn Sun Group & AccorHotels",
    address: "Số 01 Hoàng Liên, Thị xã Sa Pa, Tỉnh Lào Cai",
    location: "Lào Cai",
    volume: "249 phòng nghỉ cao cấp",
    year: "2023 - 2024",
    image: "https://storage.sudospaces.com/eurowindow/2021/12/tong-the-du-an-mgallery-sapa-1472142677-1.jpg",
    gallery: [
      "https://storage.sudospaces.com/eurowindow/2021/12/tong-the-du-an-mgallery-sapa-1472142677-1.jpg"
    ],
    description: "Kiệt tác nghỉ dưỡng do kiến trúc sư huyền thoại Bill Bensley thiết kế, kết hợp lộng lẫy giữa vẻ đẹp Haute Couture Pháp thời thượng và sắc màu văn hóa dân tộc thiểu số vùng Tây Bắc.",
    scale: "Quy mô 249 phòng nghỉ sang trọng, nhà hàng ẩm thực Pháp cao cấp, là nhà ga khởi hành tuyến tàu hỏa leo núi Mường Hoa lên đỉnh Fansipan.",
    solution: "Eurowindow cung cấp toàn bộ hệ cửa gỗ cao cấp, cửa nhôm kính cách âm và vách kính hộp giữ nhiệt đặc dụng cho khí hậu lạnh quanh năm tại độ cao 1.600m của Sa Pa.",
    specs: [
      "Hệ cửa và vách kính hộp giữ nhiệt chống rét buốt vùng núi cao Sa Pa",
      "Cửa gỗ cao cấp hòa quyện với phong cách kiến trúc Pháp cổ điển",
      "Hệ thống cách âm tuyệt đối bảo đảm sự yên tĩnh thư thái",
      "Phụ kiện kim khí đồng bộ tiêu chuẩn Châu Âu bền đẹp"
    ],
    eurowindowBizUrl: "https://eurowindow.biz/tin-tuc/tin-du-an/eurowindow-cung-cap-cua-cho-khach-san-mgallery-sapa.html",
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
