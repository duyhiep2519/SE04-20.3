import { v4 as uuid } from "uuid";
const places = [
  {
    id: uuid(),
    name: "Hồ Gươm",
    place: "Hà Nội",
    image: {
      uri:
        "https://www.touropia.com/gfx/d/best-places-to-visit-in-vietnam/hanoi.jpg?v=3b1e99cd978fe176f157f69e7c177308",
    },
    intro:
      "Hồ nước sở hữu vị trí đắc địa nhất Thủ đô khi nằm ngay ở trung tâm quận Hoàn Kiếm. Hồ là một phân lưu của sông Hồng, kết nối giữa ba khu phố lớn là Lý Thái Tổ, Đinh Tiên Hoàng và Hàng Khay. Từ vị trí này, du khách có thể dễ dàng di chuyển sang các con khố khác như: Hàng Đào, Hàng Ngang, Lương Văn Can, Cầu Gỗ, Lò Sũ,… Xa hơn một chút, bạn còn đến được với Tràng Tiền, Tràng Thi, Hàng Bài, Nhà Thờ,…",
  },
  {
    id: uuid(),
    name: "Nhà thờ đổ",
    place: "Hải Hậu-Nam Định",
    image: {
      uri: "https://tintucnamdinh.vn/wp-content/uploads/2017/05/2-4.jpg",
    },
    intro: `Nhà thờ đổ Hải Lý còn có tên gọi chính là nhà thờ họ Trái tim Chúa được xây dựng từ năm 1877, xưa kia thuộc làng chài Xương Điền. Vùng đất này là kết quả của công cuộc quai đê lấn biển mà nhân dân Hải Hậu tiến hành từ những năm đầu thế kỷ XVIII.
    Ban đầu, nhà thờ được xây dựng rất đơn sơ, có diện tích 252m2, dài 14m, rộng 7m và được lợp bằng cỏ bổi. Từ thập kỷ thứ hai của thế kỷ XX, nơi đây bị biển xâm thực nhanh chóng. Nhà thờ Trái tim Chúa được di chuyển vào sâu phía trong, cách khoảng 3 km so với vị trí cũ.`,
  },
  {
    id: uuid(),
    name: "Chợ Bến Thành",
    place: "Thành phố Hồ Chí Minh",
    image: {
      uri:
        "https://www.planetware.com/wpimages/2020/04/vietnam-best-places-to-visit-ho-chi-minh-city.jpg",
    },
    intro: `Chợ Bến Thành là ngôi chợ có lịch sử lâu đời nhất trong các khu chợ ở Việt Nam. Chợ được xây dựng vào năm 1870, có tên gọi ban đầu là Les Halles Centrales và đổi thành Bến Thành vào năm 1912. 
    Trải qua nhiều năm, chợ Bến Thành vẫn lưu giữ lối kiến trúc cổ xưa và là một trong những ngôi chợ có lịch sử lâu đời nhất Hồ Chí Minh. Năm 2013, chợ Bến Thành được xếp vào danh sách 5 chợ tốt nhất thế giới do báo USA Today bình trọn`,
  },
  {
    id: uuid(),
    name: "Vịnh Hạ Long",
    place: "Quảng Ninh",
    image: {
      uri: "https://www.planetware.com/photos-large/VIE/vietnam-halong-bay.jpg",
    },
    intro: `Vịnh Hạ Long – được Unesco nhiều lần công nhận là di sản thiên nhiên của thế giới với hàng nghìn hòn đảo được làm nên bởi tạo hoá kỳ vĩ và sống động. Vịnh Hạ Long có phong cảnh tuyệt đẹp nên nơi đây là một điểm du lịch rất hấp dẫn với du khách trong nước và quốc tế.
    Vịnh Hạ Long là một di sản độc đáo bởi địa danh này chứa đựng những dấu tích quan trọng trong quá trình hình thành và phát triển lịch sử trái đất, là cái nôi cư trú của người Việt cổ, đồng thời là tác phẩm nghệ thuật tạo hình vĩ đại của thiên nhiên với sự hiện diện của hàng nghìn đảo đá muôn hình vạn trạng, với nhiều hang động kỳ thú quần tụ thành một thế giới vừa sinh động vừa huyền bí. Bên cạnh đó, vịnh Hạ Long còn là nơi tập trung đa dạng sinh học cao với những hệ sinh thái điển hình cùng với hàng nghìn loài động thực vật vô cùng phong phú, đa dạng. Nơi đây còn gắn liền với những giá trị văn hóa – lịch sử hào hùng của dân tộc.`,
  },
  {
    id: uuid(),
    name: "Cố đô",
    place: "Huế",
    image: {
      uri:
        "https://www.planetware.com/photos-large/VIE/vietnam-hue-imperial-palace-gate.jpg",
    },
    intro: `Quần thể di tích Cố đô Huế nằm dọc hai bên bờ sông Hương thuộc thành phố Huế và một vài vùng phụ cận thuộc tỉnh Thừa Thiên Huế.
     Đây là trung tâm văn hoá, chính trị, kinh tế của tỉnh, là cố đô của Việt Nam dưới triều nhà Nguyễn, từ 1802 đến 1945. Với những giá trị mang tính toàn cầu của mình, quần thể di tích Cố đô Huế trở thành di sản văn hoá đầu tiên của Việt Nam được UNESCO ghi tên vào danh mục Di sản thế giới năm 1993. `,
  },
  {
    id: uuid(),
    name: "Phong nha kẻ bàng",
    place: "Quảng Bình",
    image: {
      uri:
        "https://www.planetware.com/photos-large/VIE/vietnam-phong-nha-ke-bang-national-park-cave.jpg",
    },
    intro: `Vườn quốc gia Phong Nha Kẻ Bàng nằm ở phía Bắc dãy núi Trường Sơn (tọa độ từ 17°21′ tới 17°39′ vĩ bắc và từ 105°57′ tới 106°24′ kinh đông), thuộc địa phận các xã Tân Trạch, Thượng Trạch, Phúc Trạch, Xuân Trạch và Sơn Trạch thuộc huyện Bố Trạch, tỉnh Quảng Bình được UNESCO công nhận là Di sản thiên nhiên thế giới theo tiêu chí địa chất, địa mạo năm 2003, và được UNESCO công nhận lần 2 là Di sản thiên nhiên thế giới với tiêu chí đa dạng sinh học, sinh thái vào ngày 3 tháng 7 năm 2015, là một điểm đến phong phú trong các chương trình tour du lịch Quảng Bình.`,
  },
  {
    id: uuid(),
    name: "Thánh địa Mỹ Sơn",
    place: "Mỹ Sơn",
    image: {
      uri:
        "https://www.planetware.com/wpimages/2020/04/vietnam-best-places-to-visit-my-son.jpg",
    },
    intro: `Thánh địa Mỹ Sơn thuộc xã Duy Phú, huyện Duy Xuyên, tỉnh Quảng Nam, cách thành phố Đà Nẵng khoảng 69 km và gần thành cổ Trà Kiệu, bao gồm nhiều đền đài Chăm Pa, trong một thung lũng đường kính khoảng 2 km, bao quanh bởi đồi núi. Đây từng là nơi tổ chức cúng tế của vương triều Chăm Pa cũng như là lăng mộ của các vị vua Chăm Pa hay hoàng thân, quốc thích. Thánh địa Mỹ Sơn được coi là một trong những trung tâm đền đài chính của Ấn Độ giáo ở khu vực Đông Nam Á và là di sản duy nhất của thể loại này tại Việt Nam.`,
  },
  {
    id: uuid(),
    name: "Phú Quốc",
    place: "Phú Quốc",
    image: {
      uri:
        "https://www.touropia.com/gfx/d/tourist-attractions-in-vietnam/phu_quoc.jpg?v=1",
    },
    intro: `Phú Quốc còn được mệnh danh là Đảo Ngọc, là hòn đảo lớn nhất của Việt Nam, cũng là đảo lớn nhất trong quần thể 22 đảo tại đây, nằm trong vịnh Thái Lan. Đảo Phú Quốc cùng với các đảo khác tạo thành huyện đảo Phú Quốc trực thuộc tỉnh Kiên Giang. Toàn bộ huyện đảo có tổng diện tích 589,23 km² (theo thống kê số liệu đất năm 2005), xấp xỉ diện tích đảo quốc Singapore thập niên 1960 khi chưa san lấp lấn biển.
     Thị trấn Dương Đông, tọa lạc ở phía tây, là huyện lỵ của huyện đảo. Phú Quốc nằm cách thành phố Rạch Giá 120 km và cách thành phố Hà Tiên 45 km. Năm 2006, Khu dự trữ sinh quyển ven biển và biển đảo Kiên Giang bao gồm cả huyện này được UNESCO công nhận là khu dự trữ sinh quyển thế giới.`,
  },
  {
    id: uuid(),
    name: "Sông MeKong",
    place: "Nam Bộ",
    image: {
      uri:
        "https://www.touropia.com/gfx/d/important-wetlands-in-the-world/mekong_delta.jpg?v=2bce614b34b8845d30c33cdcf6e4a4f1",
    },
    intro:
      "Sông Mê Kông là một trong những con sông lớn nhất trên thế giới, bắt nguồn từ cao nguyên Thanh Tạng nơi sông bắt nguồn thuộc tỉnh Thanh Hải, chảy qua Trung Quốc, Lào, Myanma, Thái Lan, Campuchia và đổ ra Biển Đông ở Việt Nam.",
  },
  {
    id: uuid(),
    name: "Sapa",
    place: "Lào Cai",
    image: {
      uri:
        "https://www.touropia.com/gfx/d/best-places-to-visit-in-vietnam/sapa.jpg?v=1",
    },
    intro: `Sa Pa là một điểm du lịch cách trung tâm thành phố Lào Cai khoảng hơn 30 km. Nằm ở độ cao trung bình 1500 – 1800 m so với mặt nước biển, Thị Trấn Sapa luôn chìm trong làn mây bồng bềnh, tạo nên một bức tranh huyền ảo đẹp đến kỳ lạ.
     Nơi đây, có thứ tài nguyên vô giá đó là khí hậu quanh năm trong lành mát mẻ, với nhiệt độ trung bình 15-18°C.Khách du lịch đến đây không chỉ để tận hưởng không khí trong lành, sự yên bình giản dị của một vùng đất phía Tây Bắc, mà Sapa còn là điểm đến để bạn chiêm ngưỡng những vẻ đẹp hoang sơ của những ruộng bậc thang, thác nước, những ngọn vúi hùng vĩ, khám phá những phong tục tập quán, nét đẹp văn hóa của các dân tộc trên núi như : H’Mong đen, Dzao đỏ, Tày, Dzáy…`,
  },
  {
    id: uuid(),
    name: "Hội An",
    place: "Quảng Nam",
    image: {
      uri:
        "https://www.touropia.com/gfx/d/world-famous-canals/hoi_an.jpg?v=49fbfa8e288e26dfc3bdfccb51479c7f",
    },
    intro: `Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam. Nhờ những yếu tố địa lý và khí hậu thuận lợi, Hội An từng là một thương cảng quốc tế sầm uất, nơi gặp gỡ của những thuyền buôn Nhật Bản, Trung Quốc và phương Tây trong suốt thế kỷ XVII và XVIII. Trước thời kỳ này, nơi đây cũng từng có những dấu tích của thương cảng Chăm Pa hay được nhắc đến cùng con đường tơ lụa trên biển.
     Thế kỷ XIX, do giao thông đường thủy ở đây không còn thuận tiện, cảng thị Hội An dần suy thoái, nhường chỗ cho Đà Nẵng khi đó đang được người Pháp xây dựng. Hội An may mắn không bị tàn phá trong hai cuộc chiến tranh và tránh được quá trình đô thị hóa ồ ạt cuối thế kỷ 20. Bắt đầu từ thập niên 1980, những giá trị kiến trúc và văn hóa của phố cổ Hội An dần được giới học giả và cả du khách chú ý, khiến nơi đây trở thành một trong những điểm du lịch hấp dẫn của Việt Nam.`,
  },
];
export default places;
