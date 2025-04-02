
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Bookstore có giao hàng tận nơi không?",
    answer: "Có, Bookstore cung cấp dịch vụ giao hàng tận nơi trên toàn quốc. Đối với đơn hàng từ 300.000đ trở lên, chúng tôi miễn phí giao hàng trong phạm vi 10km từ các chi nhánh Bookstore. Với đơn hàng dưới 300.000đ hoặc khoảng cách xa hơn, phí giao hàng sẽ được tính dựa trên khoảng cách và trọng lượng đơn hàng.",
    category: "Đặt hàng & Giao hàng"
  },
  {
    question: "Tôi có thể đổi/trả sách đã mua không?",
    answer: "Bookstore chấp nhận đổi/trả sách trong vòng 7 ngày kể từ ngày mua với điều kiện sách còn nguyên vẹn, không có dấu hiệu đã sử dụng, và có hóa đơn mua hàng. Đối với sách bị lỗi kỹ thuật (thiếu trang, in mờ, đóng gáy lỗi), chúng tôi sẽ đổi sản phẩm mới cùng loại hoặc hoàn tiền đầy đủ.",
    category: "Đổi/Trả & Bảo hành"
  },
  {
    question: "Làm thế nào để tôi có thể tìm sách theo chủ đề?",
    answer: "Bạn có thể tìm sách theo chủ đề thông qua mục 'Danh mục' trên website hoặc tại các kệ sách được phân loại theo chủ đề ở các cửa hàng của chúng tôi. Ngoài ra, bạn có thể sử dụng công cụ tìm kiếm trên website hoặc hỏi nhân viên tại cửa hàng để được hỗ trợ tìm sách theo chủ đề bạn quan tâm.",
    category: "Sản phẩm & Dịch vụ"
  },
  {
    question: "Bookstore có chương trình khách hàng thân thiết không?",
    answer: "Có, Bookstore có chương trình khách hàng thân thiết 'Book Lovers'. Khi tham gia, bạn sẽ tích lũy điểm thưởng từ mỗi lần mua hàng và được hưởng nhiều ưu đãi đặc biệt như: giảm giá, quà tặng sinh nhật, thông báo sớm về sách mới và sự kiện đặc biệt. Bạn có thể đăng ký tại bất kỳ chi nhánh Bookstore hoặc trên website của chúng tôi.",
    category: "Khuyến mãi & Ưu đãi"
  },
  {
    question: "Tôi có thể đặt trước sách chưa phát hành không?",
    answer: "Có, Bookstore cung cấp dịch vụ đặt trước sách sắp phát hành. Khi đặt trước, bạn sẽ được ưu tiên nhận sách ngay khi phát hành và thường được hưởng giá ưu đãi hơn so với mua sau khi sách đã ra mắt. Bạn có thể đặt trước sách tại website hoặc tại các cửa hàng của chúng tôi.",
    category: "Đặt hàng & Giao hàng"
  },
  {
    question: "Làm thế nào để tôi biết sách tôi muốn mua còn hàng không?",
    answer: "Trên website của Bookstore, trạng thái còn hàng được hiển thị rõ ràng ở mỗi sản phẩm. Ngoài ra, bạn có thể kiểm tra số lượng sách còn tại từng chi nhánh cụ thể bằng cách chọn chi nhánh trong mục 'Kiểm tra tồn kho'. Nếu sách bạn quan tâm tạm hết hàng, bạn có thể đăng ký nhận thông báo khi có hàng trở lại.",
    category: "Sản phẩm & Dịch vụ"
  },
  {
    question: "Bookstore có nhận đặt sách từ nước ngoài không?",
    answer: "Có, Bookstore cung cấp dịch vụ đặt sách nước ngoài thông qua chương trình 'Global Books'. Thời gian giao hàng thường từ 2-4 tuần tùy theo quốc gia xuất xứ và nhà xuất bản. Giá sách nhập khẩu sẽ bao gồm giá gốc, thuế nhập khẩu và phí vận chuyển quốc tế. Bạn có thể liên hệ trực tiếp với chúng tôi để được tư vấn chi tiết.",
    category: "Sản phẩm & Dịch vụ"
  },
  {
    question: "Các phương thức thanh toán nào được Bookstore chấp nhận?",
    answer: "Bookstore chấp nhận nhiều phương thức thanh toán khác nhau, bao gồm: Tiền mặt (tại cửa hàng hoặc khi nhận hàng COD), Thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB), Chuyển khoản ngân hàng, Ví điện tử (Momo, ZaloPay, VNPay), QR Code, và Trả góp 0% qua thẻ tín dụng cho đơn hàng từ 3 triệu đồng.",
    category: "Thanh toán"
  },
  {
    question: "Tôi có thể yêu cầu hóa đơn VAT khi mua sách không?",
    answer: "Có, Bookstore cung cấp hóa đơn VAT cho khách hàng có nhu cầu. Bạn cần cung cấp thông tin xuất hóa đơn (tên công ty, địa chỉ, mã số thuế) khi thanh toán tại cửa hàng hoặc khi đặt hàng online (trong phần ghi chú đơn hàng). Hóa đơn điện tử sẽ được gửi qua email trong vòng 3 ngày làm việc sau khi mua hàng.",
    category: "Thanh toán"
  },
  {
    question: "Bookstore có tổ chức sự kiện gặp gỡ tác giả không?",
    answer: "Có, Bookstore thường xuyên tổ chức các sự kiện gặp gỡ, giao lưu và ký tặng sách với các tác giả nổi tiếng. Thông tin về các sự kiện này được cập nhật trên website, fanpage Facebook và Instagram của chúng tôi. Bạn cũng có thể đăng ký nhận thông báo về sự kiện qua email hoặc ứng dụng Bookstore trên điện thoại.",
    category: "Sự kiện & Hoạt động"
  },
  {
    question: "Làm thế nào để tôi có thể góp ý hoặc khiếu nại về dịch vụ?",
    answer: "Bookstore luôn trân trọng mọi góp ý từ khách hàng. Bạn có thể gửi góp ý hoặc khiếu nại qua các kênh sau: Email: feedback@bookstore.com.vn, Hotline: 1900 6385 (8:00 - 22:00 hàng ngày), Form góp ý trên website, hoặc trực tiếp tại quầy dịch vụ khách hàng ở các cửa hàng. Chúng tôi cam kết phản hồi mọi góp ý trong vòng 24 giờ làm việc.",
    category: "Dịch vụ khách hàng"
  },
  {
    question: "Bookstore có chương trình ưu đãi cho học sinh, sinh viên không?",
    answer: "Có, Bookstore có chương trình 'Student Privilege' dành riêng cho học sinh, sinh viên với ưu đãi giảm 10% cho sách giáo khoa, sách tham khảo và văn phòng phẩm. Để được hưởng ưu đãi, bạn cần xuất trình thẻ học sinh/sinh viên còn hiệu lực khi mua hàng tại cửa hàng hoặc đăng ký tài khoản Student Privilege trên website.",
    category: "Khuyến mãi & Ưu đãi"
  },
  {
    question: "Tôi có thể mua sách điện tử (e-book) tại Bookstore không?",
    answer: "Hiện tại, Bookstore đang trong quá trình phát triển dịch vụ sách điện tử và dự kiến sẽ ra mắt vào quý 4 năm 2023. Khi dịch vụ được triển khai, khách hàng có thể mua và đọc e-book trên ứng dụng Bookstore Reader (iOS và Android) hoặc trên website. Sách điện tử sẽ có giá ưu đãi hơn so với sách giấy và thường có các tính năng bổ sung như đánh dấu, ghi chú và tìm kiếm.",
    category: "Sản phẩm & Dịch vụ"
  },
  {
    question: "Bookstore có bán sách cũ không?",
    answer: "Có, Bookstore có mục 'Sách Cũ Giá Tốt' tại một số chi nhánh chọn lọc, nơi bạn có thể tìm mua sách đã qua sử dụng với giá ưu đãi (thường giảm 30-50% so với giá mới). Chúng tôi cũng có chương trình 'Trao Đổi Sách' cho phép bạn mang sách cũ còn trong tình trạng tốt đến đổi lấy voucher mua sách mới.",
    category: "Sản phẩm & Dịch vụ"
  },
  {
    question: "Làm thế nào để tôi có thể làm thẻ thư viện của Bookstore?",
    answer: "Bookstore có dịch vụ 'Reading Club' - thư viện cho thuê sách với hơn 10,000 đầu sách đa dạng thể loại. Để làm thẻ thư viện, bạn cần đăng ký tại quầy dịch vụ khách hàng ở các chi nhánh có thư viện, cung cấp CMND/CCCD, nộp phí thường niên (499.000đ/năm) và đặt cọc (500.000đ, sẽ được hoàn lại khi không tiếp tục sử dụng dịch vụ). Thẻ thư viện cho phép bạn mượn tối đa 3 cuốn sách cùng lúc, thời gian mượn 15 ngày/cuốn.",
    category: "Sản phẩm & Dịch vụ"
  }
];

export function getFaqsByCategory(category: string): FAQItem[] {
  return faqs.filter(faq => faq.category === category);
}

export function getAllFaqCategories(): string[] {
  return [...new Set(faqs.map(faq => faq.category))];
}
