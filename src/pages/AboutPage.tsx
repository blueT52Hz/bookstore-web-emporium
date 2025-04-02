import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Clock, Award, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-bookbg py-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-bookprimary mb-8">Về Chúng Tôi</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Mission & Vision */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-bookprimary mb-4">Sứ Mệnh</h2>
                <p className="text-bookdark/80 mb-4">
                  Mang đến cho người đọc những cuốn sách hay nhất, chất lượng nhất với giá cả hợp lý.
                  Góp phần nâng cao văn hóa đọc và tri thức cho cộng đồng.
                </p>
                <div className="flex items-center">
                  <BookOpen className="mr-2 text-bookprimary" size={24} />
                  <span className="font-semibold">Giá trị cốt lõi: Tri thức, Chất lượng, Cộng đồng</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-bookprimary mb-4">Tầm Nhìn</h2>
                <p className="text-bookdark/80 mb-4">
                  Trở thành nhà sách trực tuyến hàng đầu Việt Nam, được yêu thích và tin cậy bởi hàng triệu độc giả.
                </p>
                <div className="flex items-center">
                  <Clock className="mr-2 text-bookprimary" size={24} />
                  <span className="font-semibold">Cam kết: Không ngừng đổi mới và phát triển</span>
                </div>
              </div>
            </div>

            {/* Right Column - Our Story & Team */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-bookprimary mb-4">Câu Chuyện Của Chúng Tôi</h2>
                <p className="text-bookdark/80 mb-4">
                  Bookstore được thành lập vào năm 2023 bởi một nhóm bạn trẻ đam mê sách và mong muốn
                  lan tỏa tình yêu đọc sách đến mọi người. Từ một cửa hàng nhỏ, chúng tôi đã không ngừng
                  nỗ lực để xây dựng một hệ thống nhà sách trực tuyến đa dạng và tiện lợi.
                </p>
                <div className="flex items-center">
                  <Award className="mr-2 text-bookprimary" size={24} />
                  <span className="font-semibold">Thành tựu: Hơn 100.000 khách hàng tin dùng</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-bookprimary mb-4">Đội Ngũ</h2>
                <p className="text-bookdark/80 mb-4">
                  Đội ngũ Bookstore là những người trẻ nhiệt huyết, sáng tạo và luôn tận tâm với khách hàng.
                  Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trong quá trình tìm kiếm và lựa chọn sách.
                </p>
                <div className="flex items-center">
                  <Users className="mr-2 text-bookprimary" size={24} />
                  <span className="font-semibold">Nhân sự: Hơn 50 nhân viên chuyên nghiệp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-bold text-bookprimary mb-4">Thông Tin Thêm</h2>
            <ul className="list-disc list-inside text-bookdark/80">
              <li>Địa chỉ: 123 Đường Sách, Quận 1, TP. Hồ Chí Minh</li>
              <li>Điện thoại: (028) 3823 4567</li>
              <li>Email: info@bookstore.com</li>
              <li>Website: www.bookstore.com</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
