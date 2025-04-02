
import { NewsType } from '@/types/news';
import { getRandomImage } from '@/lib/utils';

export const news: NewsType[] = [
  {
    id: "news-1",
    title: "Top 10 Cuốn Sách Nên Đọc Trong Mùa Thu Này",
    excerpt: "Mùa thu là thời điểm hoàn hảo để cuộn mình trong chăn ấm với một cuốn sách hay. Hãy cùng khám phá những cuốn sách tuyệt vời nhất cho mùa thu này.",
    content: `
      <p>Mùa thu với những chiếc lá vàng rơi, không khí se lạnh là thời điểm lý tưởng để thưởng thức một cuốn sách hay. Dưới đây là danh sách 10 cuốn sách đáng đọc nhất trong mùa thu năm nay:</p>
      
      <h3>1. "Mùa Thu Của Patriarch" - Gabriel García Márquez</h3>
      <p>Tác phẩm kinh điển của nhà văn đoạt giải Nobel văn học, mang đến những suy ngẫm sâu sắc về quyền lực và sự cô đơn. Không gian truyện được bao phủ bởi không khí mùa thu ảm đạm, rất phù hợp để đọc vào thời điểm này.</p>
      
      <h3>2. "Rừng Na Uy" - Haruki Murakami</h3>
      <p>Câu chuyện tình yêu và mất mát đầy day dứt, được viết với văn phong đẹp đẽ đặc trưng của Murakami. Khung cảnh mùa thu Nhật Bản được miêu tả tinh tế trong tác phẩm này.</p>
      
      <h3>3. "Biên Niên Ký Chim Vặn Dây Cót" - Haruki Murakami</h3>
      <p>Một tác phẩm khác của Murakami, đưa người đọc vào cuộc hành trình kỳ ảo đầy mê hoặc, rất phù hợp với không khí mơ màng của mùa thu.</p>
      
      <h3>4. "Mùa Thu Ở New York" - Elizabeth Spencer</h3>
      <p>Cuốn tiểu thuyết lãng mạn về tình yêu nở rộ trong khung cảnh mùa thu tuyệt đẹp của thành phố New York.</p>
      
      <h3>5. "Khi Lá Thu Phai" - Nicholas Sparks</h3>
      <p>Câu chuyện tình cảm động về tình yêu muộn màng, được viết với giọng văn ấm áp đặc trưng của Nicholas Sparks.</p>
      
      <h3>6. "Những Ngày Thu Êm Đềm" - Tô Hoài</h3>
      <p>Tác phẩm văn học Việt Nam mô tả cuộc sống miền Bắc với khung cảnh mùa thu Hà Nội thơ mộng.</p>
      
      <h3>7. "Bước Chậm Lại Giữa Thế Gian Vội Vã" - Đại Đức Hae Min</h3>
      <p>Cuốn sách giúp bạn tìm thấy sự bình yên trong tâm hồn, rất phù hợp với không khí trầm lắng của mùa thu.</p>
      
      <h3>8. "Nghệ Thuật Sống An Lạc" - Thích Nhất Hạnh</h3>
      <p>Những triết lý sống đơn giản mà sâu sắc, giúp bạn tận hưởng trọn vẹn khoảnh khắc hiện tại.</p>
      
      <h3>9. "Tôi Thấy Hoa Vàng Trên Cỏ Xanh" - Nguyễn Nhật Ánh</h3>
      <p>Câu chuyện về tuổi thơ đẹp đẽ ở miền quê Việt Nam, đọc vào mùa thu càng thêm da diết.</p>
      
      <h3>10. "Mùa Thu Cuối Cùng Ở Paris" - Ernest Hemingway</h3>
      <p>Tác phẩm hồi ký nổi tiếng của Hemingway về quãng thời gian ông sống ở Paris, với những miêu tả tuyệt đẹp về mùa thu ở kinh đô ánh sáng.</p>
      
      <p>Hy vọng danh sách này sẽ giúp bạn tìm được cuốn sách phù hợp để thưởng thức trong những ngày thu se lạnh. Chúc bạn có những giờ phút đọc sách thật thú vị!</p>
    `,
    image: getRandomImage(1200, 700, 2000),
    date: "2023-09-15",
    author: "Minh Anh",
    category: "Sách hay"
  },
  {
    id: "news-2",
    title: "Cuộc Gặp Gỡ Độc Giả Với Tác Giả Best-seller Sắp Diễn Ra",
    excerpt: "Bookstore hân hạnh thông báo về buổi gặp gỡ và giao lưu với tác giả của cuốn sách best-seller 'Tuổi Trẻ Đáng Giá Bao Nhiêu' vào tuần tới.",
    content: `
      <p>Bookstore vui mừng thông báo sự kiện gặp gỡ và giao lưu với tác giả Rosie Nguyễn - người viết cuốn sách best-seller "Tuổi Trẻ Đáng Giá Bao Nhiêu" sẽ diễn ra vào:</p>
      
      <p><strong>Thời gian:</strong> 14:00 - 16:30, Chủ nhật, ngày 30/09/2023</p>
      <p><strong>Địa điểm:</strong> Bookstore Chi nhánh Quận 1, 123 Đường Sách, Quận 1, TP.HCM</p>
      
      <h3>Nội dung chương trình:</h3>
      <ul>
        <li>14:00 - 14:30: Đón tiếp độc giả</li>
        <li>14:30 - 15:30: Tác giả chia sẻ về quá trình sáng tác và những câu chuyện hậu trường</li>
        <li>15:30 - 16:15: Giao lưu và hỏi đáp với độc giả</li>
        <li>16:15 - 16:30: Ký tặng sách</li>
      </ul>
      
      <p>Đây là cơ hội tuyệt vời để các bạn độc giả được gặp gỡ trực tiếp, lắng nghe những chia sẻ và đặt câu hỏi với tác giả của cuốn sách đã truyền cảm hứng cho hàng triệu bạn trẻ Việt Nam.</p>
      
      <p>"Tuổi Trẻ Đáng Giá Bao Nhiêu" là tác phẩm được đúc kết từ những trải nghiệm của tác giả Rosie Nguyễn. Cuốn sách đã bán được hơn 200.000 bản kể từ khi phát hành và trở thành nguồn động lực cho nhiều bạn trẻ dám sống theo đam mê và khát vọng của mình.</p>
      
      <h3>Cách thức đăng ký tham dự:</h3>
      <p>Do số lượng chỗ ngồi có hạn, quý độc giả vui lòng đăng ký tham dự trước ngày 28/09/2023 theo một trong các cách sau:</p>
      <ul>
        <li>Đăng ký trực tiếp tại các chi nhánh Bookstore</li>
        <li>Đăng ký online qua website: www.bookstore.com.vn/events</li>
        <li>Gọi điện đăng ký: (028) 3823 4567</li>
      </ul>
      
      <p>Độc giả tham dự sẽ được giảm 20% khi mua cuốn sách "Tuổi Trẻ Đáng Giá Bao Nhiêu" và các tác phẩm khác của Rosie Nguyễn trong ngày diễn ra sự kiện.</p>
      
      <p>Hãy đến và cùng chia sẻ niềm đam mê đọc sách cùng Bookstore và tác giả Rosie Nguyễn!</p>
      
      <p><em>Thông tin liên hệ:<br>
      Email: events@bookstore.com.vn<br>
      Hotline: (028) 3823 4567</em></p>
    `,
    image: getRandomImage(1200, 700, 2100),
    date: "2023-09-20",
    author: "Ban Truyền Thông",
    category: "Sự kiện"
  },
  {
    id: "news-3",
    title: "Sách Điện Tử vs Sách Giấy: Cuộc Chiến Không Hồi Kết",
    excerpt: "Cùng tìm hiểu về ưu nhược điểm của sách điện tử và sách giấy truyền thống, cũng như xu hướng đọc sách hiện nay.",
    content: `
      <p>Trong thời đại công nghệ số phát triển mạnh mẽ như hiện nay, sách điện tử (e-book) đã trở thành một lựa chọn phổ biến bên cạnh sách giấy truyền thống. Cuộc tranh luận về ưu thế của mỗi loại vẫn chưa có hồi kết. Hãy cùng chúng tôi phân tích những điểm mạnh và điểm yếu của cả hai.</p>
      
      <h3>Sách Giấy - Giá Trị Truyền Thống</h3>
      
      <h4>Ưu điểm:</h4>
      <ul>
        <li><strong>Trải nghiệm đọc đa giác quan:</strong> Hương thơm của giấy, âm thanh khi lật trang, cảm giác chạm vào trang sách tạo nên trải nghiệm đọc hoàn chỉnh mà sách điện tử không thể có được.</li>
        <li><strong>Không gây mỏi mắt:</strong> Đọc sách giấy không gây mỏi mắt như khi nhìn vào màn hình điện tử trong thời gian dài.</li>
        <li><strong>Giá trị sưu tầm:</strong> Sách giấy có giá trị sưu tầm, đặc biệt là những ấn bản đặc biệt hoặc có chữ ký của tác giả.</li>
        <li><strong>Không cần sạc pin:</strong> Bạn có thể đọc sách giấy bất cứ đâu mà không lo về pin.</li>
        <li><strong>Tính xã hội:</strong> Dễ dàng chia sẻ, cho mượn sách giấy giữa bạn bè, người thân.</li>
      </ul>
      
      <h4>Nhược điểm:</h4>
      <ul>
        <li><strong>Chiếm không gian:</strong> Sách giấy chiếm nhiều diện tích lưu trữ, đặc biệt nếu bạn là người thích sưu tầm sách.</li>
        <li><strong>Kém tiện lợi khi di chuyển:</strong> Khó mang theo nhiều sách khi đi xa.</li>
        <li><strong>Tác động môi trường:</strong> Quá trình sản xuất sách giấy tiêu tốn nhiều tài nguyên thiên nhiên.</li>
        <li><strong>Khó tìm kiếm nội dung:</strong> Việc tìm kiếm một đoạn văn cụ thể trong sách giấy tương đối khó khăn.</li>
      </ul>
      
      <h3>Sách Điện Tử - Công Nghệ Hiện Đại</h3>
      
      <h4>Ưu điểm:</h4>
      <ul>
        <li><strong>Tiện lợi:</strong> Có thể mang theo hàng nghìn cuốn sách trong một thiết bị nhỏ gọn.</li>
        <li><strong>Tìm kiếm dễ dàng:</strong> Chức năng tìm kiếm giúp nhanh chóng định vị từ khóa hoặc đoạn văn cần thiết.</li>
        <li><strong>Tùy chỉnh trải nghiệm đọc:</strong> Điều chỉnh cỡ chữ, phông chữ, độ sáng theo ý thích.</li>
        <li><strong>Tiếp cận nhanh:</strong> Mua và tải sách mới chỉ trong vài giây, không cần đến hiệu sách.</li>
        <li><strong>Thân thiện với môi trường:</strong> Giảm sử dụng giấy và mực in.</li>
      </ul>
      
      <h4>Nhược điểm:</h4>
      <ul>
        <li><strong>Gây mỏi mắt:</strong> Màn hình điện tử có thể gây mỏi mắt sau thời gian dài sử dụng (mặc dù công nghệ e-ink đã cải thiện vấn đề này).</li>
        <li><strong>Phụ thuộc pin:</strong> Cần sạc pin định kỳ.</li>
        <li><strong>Thiếu trải nghiệm vật lý:</strong> Không có cảm giác chạm, ngửi, nghe như sách giấy.</li>
        <li><strong>Vấn đề bản quyền số:</strong> Bạn thường chỉ "thuê" quyền đọc sách điện tử chứ không thực sự sở hữu như sách giấy.</li>
        <li><strong>Dễ mất tập trung:</strong> Khi đọc trên thiết bị có kết nối internet, bạn dễ bị phân tâm bởi thông báo và ứng dụng khác.</li>
      </ul>
      
      <h3>Xu Hướng Hiện Nay</h3>
      
      <p>Theo khảo sát mới nhất từ Hiệp hội Xuất bản Việt Nam, mặc dù sách điện tử đang tăng trưởng nhanh chóng, sách giấy vẫn chiếm khoảng 78% thị phần tại Việt Nam. Điều này cho thấy người đọc Việt Nam vẫn ưa chuộng trải nghiệm truyền thống.</p>
      
      <p>Tuy nhiên, đối với nhóm độc giả trẻ dưới 30 tuổi, tỷ lệ sử dụng sách điện tử đang tăng đáng kể, đạt khoảng 40%. Đặc biệt trong mùa dịch COVID-19, số lượng người chuyển sang đọc sách điện tử đã tăng 25% so với trước đó.</p>
      
      <h3>Kết Luận</h3>
      
      <p>Cả sách giấy và sách điện tử đều có những ưu điểm riêng biệt. Thay vì xem đây là một cuộc chiến, nhiều độc giả hiện nay chọn cách kết hợp cả hai hình thức: đọc sách điện tử khi di chuyển hoặc đọc các tài liệu tham khảo, và thưởng thức sách giấy cho những tác phẩm văn học yêu thích hoặc sách có nhiều hình ảnh minh họa.</p>
      
      <p>Cuối cùng, điều quan trọng nhất vẫn là nội dung của cuốn sách và trải nghiệm đọc mà nó mang lại, bất kể hình thức nào. Vậy bạn thuộc team nào? Hãy chia sẻ ý kiến của bạn trong phần bình luận nhé!</p>
    `,
    image: getRandomImage(1200, 700, 2200),
    date: "2023-09-18",
    author: "Thanh Tùng",
    category: "Xu hướng đọc sách"
  },
  {
    id: "news-4",
    title: "5 Cuốn Sách Tâm Lý Học Nên Đọc Một Lần Trong Đời",
    excerpt: "Khám phá những cuốn sách tâm lý học hay nhất, giúp bạn hiểu rõ hơn về bản thân và những người xung quanh.",
    content: `
      <p>Tâm lý học là một lĩnh vực khoa học nghiên cứu về hành vi và tinh thần con người. Những cuốn sách về tâm lý học không chỉ giúp chúng ta hiểu rõ hơn về bản thân mà còn giúp cải thiện mối quan hệ với những người xung quanh. Dưới đây là 5 cuốn sách tâm lý học mà bạn nên đọc ít nhất một lần trong đời:</p>
      
      <h3>1. "Đắc Nhân Tâm" - Dale Carnegie</h3>
      <p>Mặc dù được xuất bản từ năm 1936, "Đắc Nhân Tâm" (How to Win Friends and Influence People) vẫn là cuốn sách kinh điển về kỹ năng giao tiếp và phát triển các mối quan hệ. Dale Carnegie đã đưa ra những nguyên tắc cơ bản nhưng vô cùng hiệu quả trong việc tương tác với người khác:</p>
      <ul>
        <li>Không chỉ trích, than phiền hay trách móc</li>
        <li>Thành thật khen ngợi và đánh giá cao người khác</li>
        <li>Thể hiện sự quan tâm thực sự đến người khác</li>
        <li>Trở thành người biết lắng nghe và khuyến khích người khác nói về bản thân họ</li>
      </ul>
      <p>Cuốn sách giúp chúng ta hiểu rằng muốn thay đổi người khác, trước tiên chúng ta phải thay đổi cách nhìn nhận và hành xử của chính mình.</p>
      
      <h3>2. "Bí Mật Tư Duy Triệu Phú" - T. Harv Eker</h3>
      <p>T. Harv Eker đi sâu vào phân tích sự khác biệt trong tư duy giữa người giàu và người nghèo. Ông chỉ ra rằng thành công tài chính phần lớn đến từ "bản đồ tài chính" trong tâm trí chúng ta - những niềm tin và thái độ về tiền bạc được hình thành từ thời thơ ấu.</p>
      <p>Cuốn sách giúp bạn:</p>
      <ul>
        <li>Nhận diện và thay đổi những niềm tin hạn chế về tiền bạc</li>
        <li>Phát triển tư duy của người giàu</li>
        <li>Hiểu rõ mối quan hệ giữa suy nghĩ, cảm xúc và hành động</li>
      </ul>
      <p>Đây không chỉ là cuốn sách về tiền bạc mà còn là cuốn sách về tâm lý học giúp bạn hiểu rõ hơn về mối quan hệ giữa niềm tin và hành vi của bạn.</p>
      
      <h3>3. "Người Giàu Nhất Thành Babylon" - George S. Clason</h3>
      <p>Thông qua các câu chuyện ngụ ngôn đặt trong bối cảnh Babylon cổ đại, George S. Clason truyền tải những bài học quý giá về tài chính cá nhân và tâm lý tiền bạc. Cuốn sách dạy chúng ta:</p>
      <ul>
        <li>Trả tiền cho bản thân trước (tiết kiệm ít nhất 10% thu nhập)</li>
        <li>Sống dưới khả năng chi tiêu của mình</li>
        <li>Đầu tư khôn ngoan</li>
        <li>Tăng khả năng kiếm tiền</li>
        <li>Bảo vệ tài sản khỏi mất mát</li>
      </ul>
      <p>Giá trị của cuốn sách nằm ở cách nó kết hợp giữa tâm lý học và nguyên tắc tài chính, giúp người đọc phát triển thói quen và tư duy lành mạnh về tiền bạc.</p>
      
      <h3>4. "Điều Kỳ Diệu Của Thay Đổi Tư Duy" - Carol S. Dweck</h3>
      <p>Carol S. Dweck, nhà tâm lý học tại Đại học Stanford, đã nghiên cứu trong nhiều năm về cách tư duy ảnh hưởng đến thành công. Bà phân loại tư duy thành hai loại chính:</p>
      <ul>
        <li><strong>Tư duy cố định (Fixed Mindset):</strong> Tin rằng trí thông minh và tài năng là những phẩm chất cố định, không thể thay đổi.</li>
        <li><strong>Tư duy phát triển (Growth Mindset):</strong> Tin rằng khả năng có thể được phát triển thông qua nỗ lực, chiến lược tốt và sự giúp đỡ từ người khác.</li>
      </ul>
      <p>Cuốn sách giải thích cách tư duy phát triển có thể dẫn đến thành công lớn hơn trong học tập, công việc và cuộc sống. Bằng cách thay đổi từ tư duy cố định sang tư duy phát triển, chúng ta có thể tăng cường khả năng đối mặt với thách thức và phát triển bản thân.</p>
      
      <h3>5. "Sức Mạnh Của Thói Quen" - Charles Duhigg</h3>
      <p>Charles Duhigg phân tích cơ chế hoạt động của thói quen trong cuộc sống con người, từ cá nhân đến tập thể và xã hội. Ông giải thích về "vòng lặp thói quen" gồm ba yếu tố: gợi ý, thói quen và phần thưởng.</p>
      <p>Cuốn sách cung cấp framework để:</p>
      <ul>
        <li>Hiểu cách thói quen hoạt động trong não bộ</li>
        <li>Nhận diện và thay đổi thói quen xấu</li>
        <li>Phát triển thói quen tốt</li>
        <li>Hiểu cách thói quen ảnh hưởng đến tổ chức và xã hội</li>
      </ul>
      <p>Đây là cuốn sách quan trọng cho bất kỳ ai muốn hiểu và kiểm soát hành vi của mình tốt hơn.</p>
      
      <h3>Kết luận</h3>
      <p>Những cuốn sách tâm lý học này không chỉ cung cấp kiến thức mà còn mang đến cái nhìn sâu sắc về bản thân và người khác. Chúng giúp chúng ta hiểu rõ hơn về động lực, niềm tin và hành vi của con người, từ đó cải thiện cuộc sống cá nhân và mối quan hệ với người khác.</p>
      <p>Hãy bắt đầu với một cuốn sách từ danh sách này và bạn sẽ ngạc nhiên về những thay đổi tích cực mà nó có thể mang lại cho cuộc sống của bạn!</p>
    `,
    image: getRandomImage(1200, 700, 2300),
    date: "2023-09-12",
    author: "Ngọc Anh",
    category: "Sách hay"
  },
  {
    id: "news-5",
    title: "Bookstore Khai Trương Chi Nhánh Mới Tại Quận 7",
    excerpt: "Bookstore vui mừng thông báo khai trương chi nhánh mới tại Quận 7, TP.HCM vào ngày 01/10/2023 với nhiều ưu đãi hấp dẫn.",
    content: `
      <p>Bookstore vui mừng thông báo khai trương chi nhánh mới tại Quận 7, Thành phố Hồ Chí Minh. Đây là chi nhánh thứ 5 của chúng tôi tại TP.HCM, đánh dấu bước phát triển không ngừng của Bookstore trong việc mang văn hóa đọc đến gần hơn với cộng đồng.</p>
      
      <h3>Thông tin chi tiết:</h3>
      <ul>
        <li><strong>Thời gian khai trương:</strong> 9:00 sáng, Chủ nhật, ngày 01/10/2023</li>
        <li><strong>Địa chỉ:</strong> Tầng 3, Crescent Mall, 101 Tôn Dật Tiên, Phường Tân Phú, Quận 7, TP.HCM</li>
        <li><strong>Giờ mở cửa:</strong> 9:00 - 22:00 hàng ngày</li>
      </ul>
      
      <h3>Chi nhánh mới với không gian đặc biệt</h3>
      <p>Chi nhánh Quận 7 được thiết kế với không gian hiện đại, rộng rãi trên diện tích 500m², mang đến trải nghiệm mua sắm và đọc sách thoải mái nhất cho khách hàng. Đặc biệt, chi nhánh mới có các khu vực:</p>
      <ul>
        <li><strong>Reading Lounge:</strong> Khu vực đọc sách với ghế sofa thoải mái và ánh sáng tự nhiên</li>
        <li><strong>Kids Corner:</strong> Không gian dành riêng cho trẻ em với sách thiếu nhi và các hoạt động thú vị</li>
        <li><strong>Coffee Corner:</strong> Góc cà phê nhỏ để độc giả có thể thưởng thức đồ uống khi đọc sách</li>
        <li><strong>Community Space:</strong> Khu vực dành cho các buổi ra mắt sách, workshop và gặp gỡ tác giả</li>
      </ul>
      
      <h3>Chương trình khuyến mãi khai trương</h3>
      <p>Nhân dịp khai trương, Bookstore mang đến nhiều ưu đãi hấp dẫn cho khách hàng từ ngày 01/10 đến 15/10/2023:</p>
      <ul>
        <li><strong>Giảm 20%</strong> cho tất cả sách</li>
        <li><strong>Giảm 30%</strong> cho sách thiếu nhi</li>
        <li><strong>Mua 2 tặng 1</strong> cho sách văn học</li>
        <li><strong>Quà tặng</strong> túi tote canvas xinh xắn cho hóa đơn từ 500.000đ</li>
        <li><strong>Tặng voucher 100.000đ</strong> cho hóa đơn từ 1.000.000đ</li>
        <li><strong>Bốc thăm may mắn</strong> với nhiều phần quà giá trị (vào các ngày 01, 07, 15/10/2023)</li>
      </ul>
      
      <h3>Sự kiện đặc biệt trong ngày khai trương</h3>
      <p>Các hoạt động thú vị diễn ra trong ngày khai trương 01/10/2023:</p>
      <ul>
        <li><strong>9:00 - 9:30:</strong> Lễ cắt băng khai trương</li>
        <li><strong>10:00 - 11:30:</strong> Giao lưu với nhà văn Nguyễn Nhật Ánh</li>
        <li><strong>14:00 - 15:30:</strong> Workshop "Đọc sách hiệu quả" với diễn giả Đặng Hoàng Giang</li>
        <li><strong>16:00 - 17:30:</strong> Hoạt động kể chuyện cho trẻ em</li>
        <li><strong>18:00 - 19:30:</strong> Mini concert acoustic</li>
        <li><strong>20:00:</strong> Bốc thăm trúng thưởng</li>
      </ul>
      
      <h3>Đăng ký tham dự</h3>
      <p>Do số lượng chỗ có hạn cho các sự kiện, quý khách vui lòng đăng ký tham dự trước qua:</p>
      <ul>
        <li>Website: www.bookstore.com.vn/events</li>
        <li>Hotline: (028) 3823 4567</li>
        <li>Email: events@bookstore.com.vn</li>
      </ul>
      
      <p>Bookstore xin trân trọng kính mời quý khách hàng đến tham dự sự kiện khai trương và trải nghiệm không gian sách mới tại Chi nhánh Quận 7. Chúng tôi rất mong được đón tiếp và phục vụ quý khách!</p>
      
      <p><em>Thông tin liên hệ:<br>
      Bookstore Chi nhánh Quận 7<br>
      Địa chỉ: Tầng 3, Crescent Mall, 101 Tôn Dật Tiên, Phường Tân Phú, Quận 7, TP.HCM<br>
      Hotline: (028) 7303 7979<br>
      Email: quan7@bookstore.com.vn</em></p>
    `,
    image: getRandomImage(1200, 700, 2400),
    date: "2023-09-25",
    author: "Ban Truyền Thông",
    category: "Sự kiện"
  }
];

export function getNewsById(id: string): NewsType | undefined {
  return news.find(item => item.id === id);
}

export function getRecentNews(limit: number = 3): NewsType[] {
  return [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}

export function getNewsByCategory(category: string): NewsType[] {
  return news.filter(item => item.category === category);
}

export function getRelatedNews(newsId: string, limit: number = 3): NewsType[] {
  const currentNews = getNewsById(newsId);
  if (!currentNews) return [];
  
  return news
    .filter(item => item.category === currentNews.category && item.id !== newsId)
    .slice(0, limit);
}
