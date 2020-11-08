import { v4 as uuid } from "uuid";
const places = [
  {
    id: uuid.v4(),
    name: "Chùa Một Cột",
    place: "Hà Nội",
    image: {
      uri:
        "https://s1.img.yan.vn/YanNews/2167221/201606/20160630-042507-one-pillar-pagoda-in-hanoi1_600x400.jpg",
    },
    intro: `Nằm giữa trung tâm thủ đô Hà Nội, chùa Một Cột được xây dựng từ năm 1049 với mục đích tái hiện lại một giấc mơ của vua Lý Thái Tông. 
    Khi đó nhà vua đã nằm mơ thấy một ngôi đền bay lơ lửng trên một ao sen. Ngôi chùa được xây dựng bằng gỗ và nằm trên một cây cột duy nhất. Ngôi chùa được thiết kế giống như một bông hoa sen với những đường trạm trổ tinhvi đẹp mắt. 
    Ngôi chùa mà chúng ta thấy ngày nay là ngôi chùa được phục dựng lại nguyên bản ban đầu sau khi đã bị phá hủy trong chiến tranh.`,
  },
  {
    id: uuid.v4(),
    name: "Nhà Thờ Đổ",
    place: "Hải Hậu-Nam Định",
    image: {
      uri: "https://tintucnamdinh.vn/wp-content/uploads/2017/05/2-4.jpg",
    },
    intro: `Nhà thờ đổ Hải Lý còn có tên gọi chính là nhà thờ họ Trái tim Chúa được xây dựng từ năm 1877, xưa kia thuộc làng chài Xương Điền. 
    Vùng đất này là kết quả của công cuộc quai đê lấn biển mà nhân dân Hải Hậu tiến hành từ những năm đầu thế kỷ XVIII.
    Ban đầu, nhà thờ được xây dựng rất đơn sơ, có diện tích 252m2,dài 14m, rộng 7m và được lợp bằng cỏ bổi. Từ thập kỷ thứ hai của thế kỷ XX, nơi đây bị biển xâm thực nhanh chóng. Nhà thờ Trái tim Chúa được di chuyển vào sâu phía trong, cách khoảng 3 km so với vị trí cũ.`,
  },
  {
    id: uuid.v4(),
    name: "Cố Đô Huế",
    place: "Thừa Thiên Huế",
    image: {
      uri:
        "https://s1.img.yan.vn/YanNews/2167221/201606/20160630-042337-co-do-hue-1_600x410.jpg",
    },
    intro: `Từng là trung tâm của triều đại nhà Nguyễn, cố đô Huế là tập hợp của một loạt các ngôi chùa, các cổng chào, những dòng suối,những đường hào, những phòng ốc, những khu vườn và cả những ngôi chùa cổ kính. 
    Tất cả cộng hưởng lại tạo thành một thắng cảnh tuyệt đẹp.`,
  },

  {
    id: uuid.v4(),
    name: "Phong Nha Kẻ Bàng",
    place: "Quảng Bình",
    image: {
      uri:
        "https://s1.img.yan.vn/YanNews/2167221/201606/20160630-042814-phong-nha-quang-binh_480x320.jpg",
    },
    intro: `Đây là nơi có hang Sơn Động – hang đá lớn nhất thế giới và khoảng 300 hang động khác. 
    Bên trong hang Sơn Động có hồ nước ngầm nằm sâu 13m so với mặt đất cũng vô số những thạch nhũ và măng đá. 
    Ngoài ra còn phải kể đến hang Tiên Sơn, hang Thiên Đường. Khu vực này là một khu vực đá vôi rộng tới 2000 km2 với thảm thực vật nhiệt đới và nhiều cây cổ thụ tới 500 tuổi.`,
  },
  {
    id: uuid.v4(),
    name: "Vịnh Hạ Long",
    place: "Quảng Ninh",
    image: {
      uri:
        "https://s1.img.yan.vn/YanNews/2167221/201606/20160630-043454-5023740ha_long_quang_ninh1_600x321.jpg",
    },
    intro: `Nổi lên trên mặt nước biển trong xanh tĩnh lặng là khoảng 2000 đảo và mỏm đá vôi với đủ hình thù và kích cỡ lớn bé khác nhau. 
    Không khí xung quanh thường được bao phủ trong màn sương, điều này góp phần làm cho bầu không khí nơiđây lúc nào cũng thêm phần kỳbí. Các du khách có thể đi vòng quanh ngắm nhìn cảnh đẹp bằng thuyền gỗ truyền thống, bằng cano hoặc thậm chí là bơi.`,
  },
  {
    id: uuid.v4(),
    name: "Bán đảo Sơn Trà",
    place: "Đà Nẵng",
    image: {
      uri:
        "https://s1.img.yan.vn/YanNews/2167221/201606/20160630-043755-kham-pha-ban-dao-son-tra_600x353.jpg",
    },
    intro: `Nằm gần thành phố Đà Nẵng, bán đảo Sơn Trà có đường bờ biển dài đầy cát trắng, nước biển trong xanh như ngọc, những dãy san hô đầy màu sắc lấp ló bên dưới mặt nước và cả những cánh rừng rậm rạp trải trên những ngọn núi hùng vĩ. 
    Bán đảo Sơn Trà có khá nhiều bãi tắm, trong đó có bãi Bắc, bãi Nam và bãi Phật. Cũng được biết đến với cái tên Đảo Khỉ, nơi đây gây ấn tượng mạnh với du khách khi đứng trên đỉnh núi cao ngắm nhìn xuống thành phố Đà Nẵng, cạnh đó là làn nước xanh thẳm với bãi cát trắng rộng mênh mông.`,
  },
  {
    id: uuid.v4(),
    name: "Đảo Phú Quốc",
    place: "Phú Quốc",
    image: {
      uri:
        "https://s1.img.yan.vn/YanNews/2167221/201606/20160630-043917-ao-phu-quoc-1_600x450.jpg",
    },
    intro: `Đảo Phú Quốc với những bãi biển tuyệt đẹp xứng đáng có một vị trí trong danh sách này. Một vài năm trước, nhiều du khách hiển nhiên sẽ lựa chọn đến tham quan Nha Trang nhưng nay nhiều người lại muốn đến với đảo Phú Quốc – hòn đảo còn giữ được nhiều vẻ đẹp nguyên sơ. 
    Ngoài những cánh rừng nguyên sinh rậm rạp sâu trong đất liền, các bãi biển của Phú Quốc đều là những bãi cát dài với làn nước trong vắt. 
    Dưới mặt nước biển là bãi san hô với thảm thực vật phong phú.`,
  },
  {
    id: uuid.v4(),
    name: "Ghềnh Đá Dĩa",
    place: "Phú Yên",
    image: {
      uri:
        "https://www.vietnamimmigration.com/wp-content/uploads/2019/05/sunset-in-Ghenh-Da-Dia-phu-yen-province.jpg",
    },
    intro: `Đây là một thắng cảnh thiên nhiên được hình thành từ đá bazan núi lửa, tạo thành những cột với độ cao khác nhau. 
    Mọi thứ dường như đã được một nghệ nhân nào đó tạc nên từ hàng triệu năm trước. Ghềnh đá được hình thành khi nham thạch từ núi lửa phun trào gặp nước biển và cứng lại thành những hình rất độc đáo. 
    Thắng cảnh này hiện vẫn chưa được nhiều du khách biết đến do nằm ở vị trí ngoại ô xã An Ninh Đông, tỉnh Phú Yên.`,
  },
  {
    id: uuid.v4(),
    name: "Đèo Trạm Tôn",
    place: "Sa Pa",
    image: {
      uri:
        "https://s1.img.yan.vn/YanNews/2167221/201606/20160630-044151-8_600x373.jpg",
    },
    intro: `Sa Pa là một tỉnh miền núi vùng Tây bắc Việt Nam. Nơi đây nổi tiếng với phong cảnh đẹp như tranh vẽ với núi non trùng điệp, những thung lũng xanh, những ngôi làng truyền thống của những nhóm dân tộc ít người, những cánh rừng tre và những đồng ruộng  bậc thang.
    Du khách chỉ có thể cảm nhận được hết vẻ đẹp của vùng núi rừng này khi đứng trên Đèo Trạm Tôn hay Cổng Trời – con đèo trên núi cao nhất Việt Nam. 
    Thác Bạc cũng là một địa điểm thú vị của Sa Pa. Nếu du khách đủ sức khỏe, hãy tham gia hành trình leo lên đỉnh Phan-xi- păng để có có hội tận hưởng những khung cảnh hùng vĩ và không phải nơi đâu cũng có.`,
  },
  {
    id: uuid.v4(),
    name: "Lăng mộ nhà Nguyễn ",
    place: "Thừa Thiên Huế",
    image: {
      uri:
        "https://s1.img.yan.vn/YanNews/2167221/201606/20160630-044241-tuong-da-lang-khai-dinh_6674_415x297.jpg",
    },
    intro: `Đây là một trong số những địa điểm được ưa chuộng nhất tại Việt Nam. Tôi nhận thấy rằng, những lăng mộ đẹp nhất trong khuôn viên này là lăng của các vua Minh Mạng, Khải Định, Tự Đức, Thiệu Trị và Đồng Khánh. 
    Các lăng mộ này được xây dựng với phong cách tôn giáo địa phương với những góc đối xứng nhau và nhiều họa tiết tỉ mỉ. Mỗi lăng mộ đều có những nét khác nhau từ cách bố trí vườn cây, cầu và lối đi. 
    Lăng vua Khải Định có những phiến gốm hay thủy tinh rất đẹp,công phu và có lẽ là lăng mộ đẹp nhất ở đây.`,
  },
  {
    id: uuid.v4(),
    name: "Nhà thờ Đức Bà",
    place: "Hồ Chí Minh",
    image: {
      uri:
        "https://vntrip.cdn.vccloud.vn/cam-nang/wp-content/uploads/2017/08/1-10.jpg",
    },
    intro: `Nhà thờ Đức Bà tọa lạc ngay trung tâm thành phố, là một trong những công trình tôn giáo, di tích lịch sử - văn hóa nổi tiếng ở Tp. Hồ Chí Minh. 
    Nhà thờ không chỉ là nơi tụ họp yêu thích của giới trẻ thành phố mà còn là điểm tham quan hấp dẫn của du khách Việt Nam và du khách nước ngoài. Nhà thờ mở cửa cho du khách tham quan từ thứ Hai đến thứ Bảy.`,
  },
  {
    id: uuid.v4(),
    name: "Địa đạo Củ Chi",
    place: "Hồ Chí Minh",
    image: {
      uri:
        "https://www.gonomad.com/wp-content/uploads/2013/05/Cu-Chi-Tunnels.jpg",
    },
    intro: `Tại địa đạo Củ Chi, du khách sẽ được tham quan thực tế đường hầm dài trên 200km với các công trình sâu dưới lòng đất như hầm ở, hầm hội họp, phòng giải phẩu, hầm chiến đấu, giếng nước, bếp Hoàng Cầm… 
    Đến với địa đạo Củ Chi, du khách có cơ hội trải nghiệm nhiều trò chơi thú vị như bắn súng sơn, bắn súng thể thao quốc phòng, đạp thuyền thiên nga, chèo thuyền kayak, đi xe đạp ngắm cảnh trong khuôn viên địa đạo v.v..`,
  },
  {
    id: uuid.v4(),
    name: "Rừng tràm Trà Sư",
    place: "An Giang",
    image: {
      uri:
        "https://wiki-travel.com.vn/Uploads/picture/Thaophuongnguyen-163228043212-tra-su-1.jpg",
    },
    intro: `Rừng tràm Trà Sư là một trong những địa điểm du lịch nổi tiếng ở An Giang. Du lịch An Giang nếu chưa ghé thăm rừng tràm Trà Sư có thể xem là một thiếu sót. 
    Đường vào rừng tràm rất thuận lợi và dễ đi.Từ Tp. Hồ Chí Minh, Long An, Cà Mau, Cần Thơ… đều có xe khách tới đây.Đến với rừng tràm du khách có thể thoải mái tham quan, ngắm cảnh và chụp ảnh. 
    Ở cuối hành trình, du khách có thể dừng chân nghỉ ngơi, ăn uống… 
    Rừng tràm Trà Sư không có dịch vụ lưu trú, vì thế muốn ngủ đêm ở đây du khách có thể di chuyển ra tỉnh lộ 948,  ngược về hướng Nhà Bàng để lưu trú.`,
  },
  {
    id: uuid.v4(),
    name: "Chợ nổi Cái Răng",
    place: "Miền Tây",
    image: {
      uri:
        "https://vietintravel.com/wp-content/uploads/2020/06/2.-cho-noi-cai-rang-can-tho-vietintravel.png",
    },
    intro: `Chợ nổi Cái Răng nằm trên nhánh sông Hậu, thuộc quận Cái Răng, cách trung tâm thành phố Cần Thơ khoảng 6km. 
    Nếu đi thuyền từ Bến Ninh Kiều có thể mất khoảng 30 phút. Cũng như bao chợ nổi khác ởmiền Tây, chợ nổi Cái Răng nhóm họp từ lúc mờ sáng và đến khoảng 8, 9 giờ thì vãn.
    Người ta tụ tập trên sông bằng các phương tiện như ghe, xuồng, tắc ráng… Thường mỗi ghe sẽ có 1 cây bẹo (cây sào bằng tre), trên đó sẽ treo những mặt hàng mà ghe có. Du khách chỉ cần nhìn vào cây bẹo là có thể đoán được ghe đó có gì để mua.`,
  },
  {
    id: uuid.v4(),
    name: "Đồi cát Mũi Né",
    place: "Bình Thuận",
    image: {
      uri:
        "http://rongphuongnamtravelcom735.chiliweb.org/wp-content/uploads/2016/11/Picture191.jpg",
    },
    intro: `Đồi cát Mũi Né nằm ở khu phố 5, phường Mũi Né, thành phố Phan Thiết, tỉnh Bình Thuận. Đồi cát được hình thành từ lâu đời, trải dài trên nhiều ki lô mét. 
    Dưới sự tác động của địa chất và các yếu tố thời tiết như gió,mưa… đã làm cho hình dáng và màu sắc của đồi cát biến đổi liên tục. 
    Do vậy, đồi cát mới có tên gọi khác là Đồi cát bay.Cát ở đây có nhiều màu, chủ yếu vẫn là các màu vàng, trắng ngà, đỏ sậm, đỏ nhạt… Đồi cát Mũi Né đã trở thành nguồn cảm hứng của nhiều nghệ sĩ, nhiếp ảnh gia và các nghệ nhân vẽ tranh cát. Đây cũng là điểm du lịch nổi bật của thành phố Phan Thiết.`,
  },
  {
    id: uuid.v4(),
    name: "Vinpearl Land",
    place: "Khánh Hòa",
    image: {
      uri:
        "https://makinglifeatrip.com/wp-content/uploads/2019/04/20181109_102025-1024x768.jpg",
    },
    intro: `Vinpearl Land là khu vui chơi giải trí kết hợp tham quan nghỉ dưỡng nổi tiếng ở Nha Trang. 
    Dường như ai cũng muốn có cơ hội được đặt chân đến đây dù chỉ một lần. Vinpearl Land tọa lạc trên đảo Hòn Tre, khá biệt lập với đất liền. 
    Do vậy, du khách chỉ có thể đến đây bằng đường biển như tàu, thuyền, ca nô hoặc đi cáp treo vượt biển.
    Bên cạnh các khu nghỉ dưỡng sang trọng, Vinpearl Land còn có nhiều khu phức hợp cho du khách thỏa sức vui chơi như công viên nước, thủy cung, khu trò chơi trong nhà, khu trò chơi ngoài trời, phố mua sắm, làng ẩm thực, sân khấu nhạc nước… Vinpearl Land Nha Trang chắc chắn sẽ cho du khách những giờ phút vui chơi thoải mái và sảng khoái cùng gia đình, bạn bè.`,
  },
  {
    id: uuid.v4(),
    name: "Văn Miếu – Quốc Tử Giám",
    place: "Hà Nội",
    image: {
      uri:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/van-mieu-quoc-tu-giam-khue-van-cac.jpg",
    },
    intro: `Văn Miếu – Quốc Tử Giám là nơi thờ Khổng Tử cũng là Trường đại học đầu tiên của Việt Nam. 
    Nơi đây thu hút đông đảo du khách đến tham quan mỗi năm. Khu Văn Miếu – Quốc Tử Giám bao gồm nhiều công trình kiến trúc nhỏ khác nhau. Trong đó, nổi bật nhất là Khuê Văn Các, đã được chọn làm biểu tượng của thủ đô Hà Nội`,
  },
  {
    id: uuid.v4(),
    name: "Núi Fansipan Sapa",
    place: "vùng Tây bắc Việt Nam",
    image: {
      uri:
        "https://nemtv.vn/wp-content/uploads/2019/02/fan-si-pan-sa-pa-nemtv.jpg",
    },
    intro: `Fansipan được biết đến là ngọn núi cao nhất Việt Nam cũng là cao nhất ba nước Đông Dương,  nên được mệnh danh là “Nóc nhà Đông Dương” (3.143m). Với những ưa mạo hiểm và thích khám phá thì Fansipan là một điểm du lịch lý tưởng. 
    Quý khách có thể chinh phục đỉnh Fansipan bằng đường rừng hoặc đi bằng cáp treo. Hầu như du khách đều chọn đi cáp treo vì tiện lợi và nhanh chóng.
    Ngồi trên cabin của cáp treo, du khách thỏa sức chụp ảnh, ngắm nhìn cảnh quan hùng vĩ của dãy Hoàng Liên Sơn, của núi Hàm Rồng, ngắm thung lũng Mường Hoa xinh đẹp với những thửa ruộng bậc thang xanh ngút ngàn, xa xa là bản Cát Cát, bản Tả Van mờ ảo... Từ ga cáp treo, du khách phải leo bộ hơn 600 bậc thang đá mới lên được đỉnh Fansipan.`,
  },
  {
    id: uuid.v4(),
    name: "Quần thể danh thắng Tràng An",
    place: "Ninh Bình",
    image: {
      uri:
        "https://dulich.ninhbinh.vn/wp-content/uploads/2019/05/Quan-the-trang-an.jpg.jpg",
    },
    intro: `Nằm ở đồng bằng sông Hồng của Việt Nam, quần thể danh thắng Tràng An được UNESCO công nhận là di sản thế giới vào năm 2014. Đây cũng là một trong các danh lam thắng cảnh ở Việt Nam sở hữu các đỉnh núi đá vôi, tương tự như những gì bạn thường thấy ở Hạ Long.
    Có diện tích gần 12,000 ha, quần thể danh thắng Tràng An bao gồm ba khu vực: khu hang động Tràng An, khu Cố đô Hoa Lư và khu chùa Bái Đính. 
    Ba khu vực được điểm xuyến bằng những đỉnh núi đá vôi, hang động thạch nhũ ấn tượng. Bao bọc xung quanh là những dòng sông tuyệt đẹp cùng những vách đá dốc đứng.`,
  },
  {
    id: uuid.v4(),
    name: "Thánh địa Mỹ Sơn",
    place: "Quảng Nam",
    image: {
      uri:
        "https://travelgear.vn/blog/wp-content/uploads/2019/11/thanh-dia-my-son.jpg",
    },
    intro: `Thánh địa Mỹ Sơn là một danh lam thắng cảnh Việt Nam nổi tiếng được UNESCO công nhận. Có thể bạn chưa biết nhưng đây là một trong những kiến trúc còn sót lại của nền văn minh Champa cổ đại cách đây hơn 1,600 năm.
    Nép mình dưới bóng của núi Răng Mèo, bao quanh là một thung lũng xanh, một vài trong số những ngôi đền này vẫn đứng vững. 
    Thánh địa Mỹ Sơn sở hữu nhiều tác phẩm điêu khắc bằng đá, đền thờ và tháp đẹp. Khi đến thăm Mỹ Sơn, bạn sẽ có cảm giác giống như được quay ngược thời gian để khám phá nét văn hóa đặc biệt này.`,
  },
  {
    id: uuid.v4(),
    name: "Thác Bản Giốc ",
    place: "Cao Bằng",
    image: {
      uri:
        "https://travelgear.vn/blog/wp-content/uploads/2019/11/thac-ban-gioc-cao-bang.jpg",
    },
    intro: `Thác Bản Giốc là thác nước nổi tiếng nhất Cao Bằng và là một trong những danh lam thắng cảnh Việt Nam ấn tượng nhất. 
    Nằm ở phía đông bắc Việt Nam, trên biên giới Việt Nam – Trung Quốc.Thác Bản Giốc tự hào với cảnh quan thiên nhiên ấn tượng với nhiều tầng nước và màu xanh ngọc bích chảy xuống hồ nước khổng lồ bên dưới. Thác nước này là nơi hoàn hảo cho những ai thích gần gũi với thiên nhiên, muốn tránh xa sự tấp nập của những thành phố lớn.`,
  },
  {
    id: uuid.v4(),
    name: "Hồ Hoàn Kiếm",
    place: "Hà Nội",
    image: {
      uri: "https://travelgear.vn/blog/wp-content/uploads/2019/11/ho-guom.jpg",
    },
    intro: `Không chỉ là một điểm đến quen thuộc của người dân địa phương mà bất kì du khách nào khi tới thủ đô cũng muốn một lần đặt chân đến Hồ Gươm.Cái tên Hoàn Kiếm này bắt nguồn từ một truyền thuyết khi vua Lê Lợi được ban cho một thanh kiếm thần dùng để xua đuổi quân Trung Quốc xâm lược. 
    Sau chiến tranh, Thần rùa đã đến lấy lại thanh kiếm và biến mất tại hồ này nên được đặt là hồ Hoàn Kiếm.Mặc dù không phải là hồ lớn nhất Việt Nam thế nhưng nơi đây lại có ý nghĩa vô cùng quan trọng. 
    Ngoài ra, gần hồ còn có ngôi đền Ngọc Sơn với chiếc cầu Thê Húc màu đỏ son rất đẹp nữa đó!`,
  },
  {
    id: uuid.v4(),
    name: "Khu di tích Tân Trào",
    place: "Tuyên Quang",
    image: {
      uri:
        "https://travelgear.vn/blog/wp-content/uploads/2019/11/tan-trao-danh-lam-thang-canh.jpg",
    },
    intro: `Khu di tích Tân Trào là một địa danh nổi tiếng ở Việt Nam dànhcho những ai yêu thích khám phá cácdi tích cũng như tìm hiểu thêm về lịch sử đất nước. Cách thị trấn Tuyên Quang 40 km và cách Hà Nội 200km, Tân Trào từng là căn cứ chủ chốt của bộ đội ta trong cuộc kháng chiến Cách mạng Tháng Tám năm 1945.
    Là một di tích lịch sử Việt Nam nổi tiếng, đến với Tân Trào bạn nên ghé thăm Lán Nà Lừa nơi Bác Hồ trình bày lời cam kết giành độc lập dân tộc trước đại hội toàn quốc. Ngôi nhà lán nhỏ này trên sườn núi Nà Lừa, cách làng Tân Lập khoảng 1km về phía Đông.`,
  },
  {
    id: uuid.v4(),
    name: "Ngũ Hành Sơn",
    place: "Đà Nẵng",
    image: {
      uri:
        "https://travelgear.vn/blog/wp-content/uploads/2019/11/ngu-hanh-son.jpg",
    },
    intro: `Khi nhắc đến tên các ngọn núi ở Việt Nam, không thể không đề cập đến dãy núi Ngũ Hành Sơn nằm ở phía nam Đà Nẵng.     Tuy không quá hùng vĩ thế nhưng chúng lại có ý nghĩa quan trọng.Năm đỉnh núi này được đặt tên theo năm yếu tố ngũ hành: Kim, Mộc, Hỏa, Thủy và Thổ.
    Ngũ Hành Sơn sở hữu nét đẹp như tranh vẽ và cũng là nơi có vô số hang động, một số hang động chứa các ngôi chùa Phật giáo và những hang động khác được sử dụng làm nơi tôn nghiêm và bệnh viện trong Chiến tranh Việt Nam.`,
  },
  {
    id: uuid.v4(),
    name: "Phố cổ Hội An",
    place: "Quảng Nam",
    image: {
      uri: "https://travelgear.vn/blog/wp-content/uploads/2019/11/hoi-an.gif",
    },
    intro: `Hội An là một trong các địa danh nổi tiếng ở Việt Nam nằm gần dòng sông Thu Bồn, trên vùng đồng bằng ven biển của tỉnh Quảng Nam,cách thành phố Đà Nẵng khoảng 30 km về phía nam.
    Được công nhận là một trong những di sản thế giới của UNESCO, phố cổ Hội An sở hữu những con đường cũ được bao quanh bởi những ngôi làng yên bình có các nghề thủ công như mộc, làm đồ đồng, gốm sứ, v.v. mang đậm nét văn hóa Việt Nam, Trung Quốc và Nhật Bản.`,
  },
  {
    id: uuid.v4(),
    name: "Cù Lao Chàm",
    place: "Quảng Nam",
    image: {
      uri:
        "https://travelgear.vn/blog/wp-content/uploads/2019/11/cu-lao-cham-1.jpg",
    },
    intro: `Cù Lao Chàm bao gồm 8 hòn đảo nhỏ cách bãi biển Cửa Đại – Hội An148 km, một trong số đó đã được UNESCO công nhận là khu dự trữ sinh quyển thế giới. Trên các đảo của Cù Lao Chàm, có rất nhiều cổ vật chứng minh sự tồn tại của nền văn minh Chăm và người Việt trong quá khứ.
    Bên cạnh đó, Cù Lao Chàm còn là một trong các danh lam thắng cảnh nổi tiếng ở Việt Nam dành cho những ai muốn trải nghiệm một ngày lặn biển tuyệt vời nhất. Bên cạnh đó, bạn cũng có thể đi dạo khám phá những làng chài và bãi biển hoang sơ để tắm nắng và tham gia những hoạt động thể thao dưới nước.`,
  },
  {
    id: uuid.v4(),
    name: "Tháp Chàm Po Nagar",
    place: "Nha Trang",
    image: {
      uri:
        "https://travelgear.vn/blog/wp-content/uploads/2019/11/danh-lam-thang-canh-nha-trang_1.jpg",
    },
    intro: `Với những bãi biển cát mịn và đẹp,thác nước xanh mát, dãy núi hoang sơ, và một nền văn hóa độc đáo, Nha Trang là một địa điểm du lịch tuyệt vời. 
    Và một trong các danh lam thắng cảnh Nha Trang không thể bỏ lỡ chính là Tháp Chàm Po Nagar.Đây là một kiến trúc gạch đỏ vuông có mái hình thon và được xây dựng từ thế kỷ thứ 8 đến thế kỷ thứ 11 bởi người Chăm để tôn vinh nữ thần Po Nagar – dịch ra tiếng Việt nghĩa là “Người mẹ của đất nước ”– được cho là người đã dạy các kỹ năng dệt và nông nghiệp cho người Chăm.`,
  },
  {
    id: uuid.v4(),
    name: "Đà Lạt",
    place: "Lâm Đồng",
    image: {
      uri:
        "https://travelgear.vn/blog/wp-content/uploads/2019/11/da-lat-danh-lam-thang-canh.jpg",
    },
    intro: `Thành phố Đà Lạt là mộttrong những địa điểm du lịch sở hữu nhiều phong cảnh thiên nhiên đẹp nhất Việt Nam. Không những thế, thành phố này vẫn còn giữ lại nhiều kiến trúc thuộc địa của Pháp mang lại cảm giác khác biệt với nhiều thành phố khác ở Việt Nam.
    Được bao quanh bởi các đồn điền cà phê, hoa và vườn cây ăn trái thay vì những cánh đồng lúa truyền thống làm tăng thêm nét quyến rũ của Đà Lạt. Du lịch Đà Lạt nhiều năm trở lại đây đang rất phát triển. Do đó, nếu như bạn muốn khám phá cảnh đẹp đất nước Việt Nam thì hãy ghé tới đây nhé!`,
  },
  {
    id: uuid.v4(),
    name: "Côn Đảo",
    place: "Bà Rịa Vũng Tàu",
    image: {
      uri: "https://travelgear.vn/blog/wp-content/uploads/2019/11/con-dao.jpg",
    },
    intro: `Côn Đảo là một trong những quần đảo sở hữu phong cảnh đẹp ở Việt Nam, gồm 16 đảo nhỏ hầu hết không có người ở ngay ngoài bờ biển phía Nam của Việt Nam, mỗi nơi đều có những bãi biển mở rộng rợp bóng cây xanh.
    Hầu hết du khách đến Côn Đảo với mục đích tận hưởng những bãi biển tuyệt đẹp và vẻ đẹp phong phú dưới lòng đại dương xanh. Tuy nhiên, nếu bạn là người yêu thích lịch sử, bạn vẫn có thể khám phá và tìm hiểu về danh thắng Việt Nam tại một số tòa nhà tù Côn Đảo còn sót lại.`,
  },
  {
    id: uuid.v4(),
    name: "Đảo Phú Quốc",
    place: "Kiên Giang",
    image: {
      uri: "https://travelgear.vn/blog/wp-content/uploads/2019/11/phu-quoc.jpg",
    },
    intro: `Trong bài viết “Đảo lớn nhất Việt Nam là đảo nào?” trước đây mìnhđã từng chia sẻ, đảo Phú Quốc chính là hòn đảo lớn nhất 
    Việt Nam và là một địa điểm không thể bỏ lỡ khi giới thiệu về danh lam thắng cảnh Việt Nam nổi tiếng thế giới.Hòn đảo này sở hữu những khu rừng nhiệt đới nguyên sơ, những rạn san hô còn nguyên vẹn và những bãi biển cát trắng tuyệt vời. 
    Một trong những bãi biển nổi tiếng nhất chính là Bãi Dài – nơi được tạp chí ABC News bình chọn là một trong năm bãi biển đẹp và sạch nhất Đông Nam Á.`,
  },
  {
    id: uuid.v4(),
    name: "Bãi Biển Cửa Lò",
    place: "Nghệ An",
    image: {
      uri:
        "https://dulichcualonghean.com/wp-content/uploads/2014/05/cua-lo1.jpg",
    },
    intro: `Từ Vinh đi 18 km đến bãi biển Cửa Lò. Bãi biển dài gần 10 km, cát trắng phau, mịn màng. Rừng phi lao xanh tốt. Nước biển trong xanh,độ mặn từ 3,4 đến 3,5%. Với chiều dài 8,2 km được chia làm 3 bãi nhỏ: bãi tẵm Lan Châu, bãi tắm Xuân Hương,bãi tắm Song Ngư. 
    Trên bãi biển du khách có thể dạo chơi, nghỉ ngơi, thư giãn. Với phong cảnh đẹp, trời và nước xanh trong, bãi biển cát vàng trắng xoá, sóng bạc đầu rì rào ngày đêm, làn gió thoảng từ biển thực sự đem lại cho bạn cảm giác khoan khoái của sự nghỉ ngơi.`,
  },
  {
    id: uuid.v4(),
    name: "Bãi Biển Sầm Sơn",
    place: "Thanh Hóa",
    image: {
      uri:
        "https://dulichchaovietnam.com/public/fileupload/source/sanpham/thanh-hoa/sam-son-5.jpg",
    },
    intro: `Biển Sầm Sơn thuộc thành phố Sầm Sơn, tỉnh Thanh Hóa trải dài gần 6 km từ cửa Lạch Hới đến chân núiTrường Lệ,với bờ cát vàng trải dài, thoai thoải, nước trong xanh từ lâu đã trở thành điểm đến hấp dẫn khách du lịch trong và ngoài nước. 
    Bờ biển ở đây bằng phẳng với các bãi cát rộng đặc biệt là sóng đánh mạnh và cao vừa đủ, nước trong và nồng độ muối vừa phải.
    Đến Sầm Sơn không chỉ tắm biển du khách còn được khám phá nhiều cảnh đẹp như ở hòn Trống Mái, đền Độc Cước, đền Cô Tiên, chùa Khải Nam.`,
  },
  {
    id: uuid.v4(),
    name: "Hồ Ba Bể ",
    place: "Bắc Kạn",
    image: {
      uri: "https://nemtv.vn/wp-content/uploads/2019/02/ho-ba-be-nemtv.jpg",
    },
    intro: `Nằm trong danh sách danh lam thắng cảnh Việt Nam ở miền Bắc chắc chắn không thể không kể đến Hồ Ba Bể ở Bắc Kạn. 
    Đây là một trong những hồ nước ngọt lớn nhất trên thế giới và được công nhận là khu du lịch quốc gia của Việt Nam. 
    Theo như tìm hiểu, hồ Ba Bể đã được hình thành cách đây hơn 200 triệu năm cho đến ngày này thì nơi này vẫn giữ nguyên được vẻ hoang sơ vốn có. 
    Du lịch hồ Ba Bể ngày càng phát triển và thu hút đông đảo du khách trong và ngoài nước ghé tới.`,
  },
  {
    id: uuid.v4(),
    name: "Thác Bản Giốc",
    place: "Cao Bằng ",
    image: {
      uri:
        "https://vietnamembassy-arabsaudi.org/wp-content/uploads/2019/11/danh-lam-thang-canh-mien-bac-11.jpg",
    },
    intro: `Không ngoa khi nói rằng thác Bản Giốc ở Cao Bằng là một trong các danh lam thắng cảnh nổi tiếng ở Việt Nam. Nơi đây được thiên nhiên ưu ái khi ban tặng cho những dòng thác hùng vĩ bao quanh là núi rừng bạt ngàn tạo thành một khung cảnh đẹp mê hoặc bất kì ai khi đặt chân tới đây.
    Nếu được một lần ghé tới thác Bản Giốc chắc hẳn bạn sẽ được trải qua từ bất ngờ này đến bất ngờ khác. 
    Sau khi choáng ngợp trước dòng thác chảy xiết tung bọt trắng xóa bạn sẽ được chìm đắm trong một không khí trong lành, yên bình của những thửa ruộng bậc thang chín vàng và hưởng trọn cảnh đẹp quê hương Việt Nam trong lòng Cao Bằng.`,
  },
  {
    id: uuid.v4(),
    name: "Tà Xùa",
    place: " Yên Bái ",
    image: {
      uri:
        "https://vietnamembassy-arabsaudi.org/wp-content/uploads/2019/11/Ta-xua-may3.jpg",
    },
    intro: `Nếu để kể tên các ngọn núi ở Việt Nam đẹp nhất chắc chắn không thể thiếu núi Tà Xùa với độ cao 2865m.Chinh phục Tà Xùa là một trải nghiệm đáng nhớ mà bạn không nên bỏ lỡ. 
    Không chỉ sở hữu khung cảnh núi rừng hùng vĩ mà trên đường đi bạn còn có thể chiêm ngưỡng những cánh đồng hoa phủ đầy trên những bản làng, vách đá như càng khiến cho vể đẹp của núi rừng trở nên thơ mộng hơn bao giờ hết.
    Không những vậy, người ta còn đến Tà Xùa để săn mây. Đây chắc chắn là một trải nghiệm thú vị mà bạn không nên bỏ lỡ. Những đám mây bồng bềnh lênh đênh trôi ở ngay trước mắt, cảm giác giống như bạn đang ở chốn thiên đường vậy đó!`,
  },
  {
    id: uuid.v4(),
    name: "Bảy Núi",
    place: "An Giang ",
    image: {
      uri:
        "https://vietnamembassy-arabsaudi.org/wp-content/uploads/2019/11/bay-nui-an-giang.jpg",
    },
    intro: `Bảy Núi ở An Giang được biết đến là một trong những cảnh đẹp ở Việt Nam khiến nhiều người mê khám phá thiên nhiên mong muốn được một lần đặt chân tới. 
    Nơi dây có tới 7 ngọn núi trải dài trên khắp đồng bằng miền Tây Nam Bộ. Không chỉ sở hữu cho mình không gian thoáng đãng, trong lành, Bảy Núi ở An Giang còn là một địa điểm du lịch lý tưởng,nhất là đối với những ai yêu thích chinh phục những ngọn núi đó!`,
  },
  {
    id: uuid.v4(),
    name: "Nhà thờ Lớn Hà Nội",
    place: "Hà Nội",
    image: {
      uri:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/Nha-tho-Lon-Ha-Noi-e1503660310532.png",
    },
    intro: `Cũng nằm trong khu vực Phố cổ thuộc quận Hoàn Kiếm, Nhà thờ Lớn Hà Nội (hay được gọi là Nhà thờ Chính toà Hà Nội) là một nhà thờ cổ với kiến trúc Gothic Châu Âu tiêu biểu. 
    Không chỉ là một nơi sinh hoạt tín ngưỡng, nhà thờ Lớn với kiến trúc đặc sắc còn thu hút nhiều du khách đến thăm quan và chiêm ngưỡng. Đến đây, bạn sẽ có cảm giác như đang đứng trong một lâu đài cổ kính rộng lớn được chạm trổ những hoa văn gỗ sơn son thiếp vàng cùng hệ thống tranh trên kính màu rực rỡ.Ngoài ra, nhiều bạn trẻ Hà Nội cũng tìm đến khu vực này để tụ họp bạn bè vàocuối tuần và cùng nhau ngồi tán gẫu vui vẻ bên những ly “trà chanh Nhà thờ”.`,
  },
  {
    id: uuid.v4(),
    name: "Hoàng thành Thăng Long – Cột cờ Hà Nội",
    place: "Hà Nội",
    image: {
      uri:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/Hoang-thanh-Thang-long-e1503660468946.png",
    },
    intro: `Nằm trên con đường Hoàng Diệu, Hoàng thành Thăng Long là một di sản văn hoá thế giới gắn liền với lịch sử của kinh thành Thăng Long – Hà Nội dưới thời các triều đại Lý, Trần, Lê và triều Nguyễn. Đây là một công trình kiến trúc đồ sộ và mang nhiều giá trị lịch sử và khảo cổ học quan trọng. 
    Trong những công trình cổ bên trong Hoàng Thành, nổi bật nhất là di tích Cột cờ Hà Nội (hay còn được gọi là Kỳ Đài Hà Nội) gắn liền với nhiều sự kiện lịch sử của dân tộc. Khi Cách mạng tháng Tám thành công, lần đầu tiên lá cờ đỏ sao vàng trên Cột cờ Hà Nội tung bay phấp phới giữa bầu trời thủ đô.
    Với không gian rộng rãi và khung cảnh xanh mát rộng mênh mông, Hoàng thành Thăng Long cũng là một địa điểm lý tưởng được nhiều bạn đến chụp ảnh kỉ yếu cũng như ghi lại những khoảnh khắc đẹp.`,
  },
  {
    id: uuid.v4(),
    name: "Lăng Chủ tịch Hồ Chí Minh",
    place: "Hà Nội",
    image: {
      uri:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/Lang-Chu-tich-HCM-e1503660581332.png",
    },
    intro: `Lăng Bác nằm ngay bên Quảng trường Ba Đình lịch sử, nơi Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn độc lập ra đời nước Cộng hoà xã hội chủ nghĩa Việt Nam. 
    Nơi an nghỉ vĩnh hằng của vị lãnh tụ vĩ đại của dân tộc được bao phủ trong không gian cây vườn bốn mùa xanh tươi toả bóng mát.`,
  },
  {
    id: uuid.v4(),
    name: "Thành Cổ Loa",
    place: "Hà Nội",
    image: {
      uri:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/le-hoi-thanh-co-loa.jpg",
    },
    intro: `Khu di tích Cổ Loa nằm trên địa phận xã Cổ Loa, huyện Đông Anh. Được xây dựng từ thế kỉ thứ 3 TCN, thành Cổ Loa là tòa thành cổ có quy mô và cấu trúc lớn nhất của nước ta. Đây là nơi gắn liền với sự tích nỏ thần của An Dương Vương cùng chuyện tình buồn của công chúa Mị Nương – Trọng Thủy.
    Mùng 6 tháng giêng hàng năm là thời điểm người dân Cổ Loa tổ chức lễ hội để tưởng nhớ tới vua An Dương Vương đã có công dựng nước. Bởi vậy nếu muốn khám phá hết nét đẹp văn hóa, con người ở đây thì bạn nên đến Cổ Loa vào dịp này nhé.`,
  },
  {
    id: uuid.v4(),
    name: "Bãi biển Cà Ná",
    place: "Ninh Thuận",
    image: {
      uri:
        "https://cdn3.ivivu.com/2014/03/top-10-bai-bien-dep-nhat-viet-nam-ivivu2.jpg",
    },
    intro: `Bãi biển Cà Ná là một bãi biển nằm ở tỉnh Ninh Thuận, Nam Trung Bộ Việt Nam. Đây là một trong các bãi biển đẹp của Việt Nam,là khu vực du lịch biển của tỉnh Ninh Thuận. 
    Nước biển ở khu vực này trong xanh,bãi cát trắng nằm cạnh các khu vực núi đá vươn ra biển. Gần bờ biển này có hòn Lao, là nơi sinh sống của nhiều loài chim biển. Dịch vụ du lịch ở đây gồm các khách sạn,nhà hàng với các món hải sản.`,
  },
  {
    id: uuid.v4(),
    name: "Chùa Hương",
    place: "Hà Nội",
    image: {
      uri:
        "https://dulichso.vn/wp-content/uploads/2019/11/nhung-ngoi-chua-ong-khach-nhat-dip-au-xuan-268.jpg",
    },
    intro: `Chùa Hương (hay gọi là chùa Trong) nằm ở vị trí trung tâm của một quần thể văn hóa – tôn giáo gồm nhiều ngôi đền. Chùa thuộc xã Hương Sơn, huyện Mỹ Đức, Hà Nội. Do nằm trong hang động Hương Tích,chùa Hương không sở hữu kiến trúc cầu kỳ mà chủ yếu là các công trình làm từ đá. 
    Lễ hội chùa Hương diễn ra từ mùng 6tháng Giêng đến khoảng cuối tháng 3 âm lịch. Đây cũng là thời điểm chùa đón số lượng khách hành hương đông nhất trong năm.Chùa Hương là một danh lam thắng cảnh nổi tiếng rất linh thiêng của thủ đô. 
    Đến với chùa Hương, du khách vừa có thể được du ngoạn ngắm cảnh vừa tìm lại sự bình yên trong tâm hồn.`,
  },
  {
    id: uuid.v4(),
    name: "Bãi Biển Nha Trang",
    place: "Khánh Hòa",
    image: {
      uri:
        "https://idulich.vn/wp-content/uploads/2020/05/du-l%E1%BB%8Bch-mi%E1%BB%81n-trung-6.jpg",
    },
    intro: `Khánh Hòa là địa danh nằm cuối cùng của Duyên hảimiền Trung, nơi đây sở hữu Nha Trang là địa danh du lịch có tiếng trên toàn toàn cầu. Được vinh danh là một trong những vịnh biển đẹp nhất thế giới, Nha Trang có bãi biển chạy dài ôm thu thập hợp lý thành phố.
    Không chỉ đẹp bởi cảnh sắc thiên nhiên, Nha Trang còn có tiếng là thành phố quanh năm ấm áp, tràn ngập ánh mặt trời.Khi đến với Nha Trang bạn chắc chắn phải ghé thăm các địa điểm như Hòn Tre, hòn Mun, đảo khỉ, suối Hoa Lan, Đảo Yến, Đầm Nha Phu, biển Đạo Lãnh, bãi dài Cam Ranh,…`,
  },
  {
    id: uuid.v4(),
    name: "Chùa Bái Đính",
    place: "Ninh Bình",
    image: {
      uri:
        "https://insidevietnam.travel/wp-content/uploads/2019/05/NC031_02_vietnam-temple-bai-ding-pagoda-ninh-binh.jpg",
    },
    intro: `Bao bọc quanh các ngọn núi ở Ninh Bình và đón các làn gió từ lòng sông thổi vào chính là những yếu tố đặc biệt tuyệt vời của ngôi chùa rộng lớn này.Bái Đính là một quần thể chùa gồm hơn 500 bức tượng Phật, vẫn được người dân địa phương tôn thờ và đến cúng bái thường xuyên. 
    Tuy nhiên, nơi đây cũng đã được du lịch hoá trở thành một điểm đến thu hút nhiều du khách.Vậy nên, vào các tháng đầu năm (mùa Xuân), nơi đây luôn rất đông đúc bởi lượng du khách đổ về đây khá lớn!`,
  },
  {
    id: uuid.v4(),
    name: "Chùa Thiên Mụ",
    place: "Thừa Thiên Huế",
    image: {
      uri:
        "https://insidevietnam.travel/wp-content/uploads/2019/05/NC031_03_vietnam-temple-thien-mu-hue.jpg",
    },
    intro: `Nằm về phía Tây, cách trung tâm thành phố Huế 4km,Chùa Thiên Mụ toạ lạc trên một đỉnh đồi nhìn ra dòng sông Hương thơ mộng và có thể phóng tầm mắt bao quát toàn cảnh thành phố Huế. Đây là một trong những ngôi chùa cổ nhất trong vùng,được xây dựng vào năm 1061 và nổi tiếng với tiếng chuông ngân vang. 
    Tiếng chuông được cho là vang khắpthành phố Huế – nghĩa là mỗi khi chuông được gióng lên thì ở đâu trong thành phố cũng có thể nghe được tiếng chuông chùa! Như những ngôi chùa khác,Chùa Thiên Mụ cũng có tháp Phước Duyên cao tận 21m, và bạn có thể trèo lên đỉnh tháp theo lối cầu thang hình xoắn ốc.`,
  },
];
export default places;
