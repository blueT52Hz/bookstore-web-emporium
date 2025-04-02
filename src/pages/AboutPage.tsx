
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { users, CheckCircle2, Award, Library, Users, Mail, Phone, MapPin } from 'lucide-react';
import { getRandomImage } from '@/lib/utils';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Nguyễn Văn An",
      role: "Sáng lập & CEO",
      image: getRandomImage(300, 300, 3000),
      description: "Là người sáng lập Bookstore với 15 năm kinh nghiệm trong ngành xuất bản và bán lẻ sách."
    },
    {
      name: "Trần Thị Bình",
      role: "Giám đốc Nội dung",
      image: getRandomImage(300, 300, 3100),
      description: "Chuyên gia trong lĩnh vực biên tập và phát triển nội dung với niềm đam mê với văn học."
    },
    {
      name: "Lê Minh Cường",
      role: "Giám đốc Marketing",
      image: getRandomImage(300, 300, 3200),
      description: "Có hơn 10 năm kinh nghiệm trong lĩnh vực marketing kỹ thuật số và truyền thông."
    },
    {
      name: "Phạm Thanh Dung",
      role: "Giám đốc Vận hành",
      image: getRandomImage(300, 300, 3300),
      description: "Chuyên gia trong quản lý chuỗi cung ứng và vận hành cửa hàng bán lẻ."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-bookprimary relative">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={getRandomImage(1920, 1080, 2600)} 
              alt="Books background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Giới Thiệu Về Bookstore</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Nơi kết nối tri thức và lan tỏa niềm đam mê đọc sách đến cộng đồng yêu sách Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-bookprimary mb-6">Câu Chuyện Của Chúng Tôi</h2>
                <p className="text-bookdark/80 mb-4">
                  Bookstore được thành lập vào năm 2010 bởi một nhóm những người yêu sách với ước mơ xây dựng một không gian sách chất lượng, nơi mọi người có thể tìm thấy niềm vui và tri thức từ những cuốn sách hay.
                </p>
                <p className="text-bookdark/80 mb-4">
                  Từ một cửa hàng nhỏ tại Quận 1, TP.HCM, đến nay Bookstore đã phát triển thành chuỗi nhà sách với 15 chi nhánh trên toàn quốc, phục vụ hàng triệu độc giả mỗi năm.
                </p>
                <p className="text-bookdark/80">
                  Suốt hành trình phát triển, chúng tôi luôn giữ vững sứ mệnh lan tỏa văn hóa đọc, đưa sách đến gần hơn với công chúng, và xây dựng một cộng đồng yêu sách sôi nổi tại Việt Nam.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={getRandomImage(800, 600, 2700)} 
                  alt="Bookstore story" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-bookbg">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-bookprimary mb-4">Sứ Mệnh & Giá Trị Cốt Lõi</h2>
              <p className="text-bookdark/80">
                Những nguyên tắc và giá trị định hướng mọi hoạt động của Bookstore trong suốt hành trình phát triển.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-bookprimary mb-4">Sứ Mệnh</h3>
                <p className="text-bookdark/80 mb-6">
                  Sứ mệnh của Bookstore là phổ biến văn hóa đọc, nâng cao dân trí và góp phần xây dựng một xã hội học tập suốt đời. Chúng tôi cam kết mang đến cho độc giả những cuốn sách chất lượng, đa dạng thể loại với giá cả hợp lý, đáp ứng nhu cầu đọc sách của mọi đối tượng.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-booksecondary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Lan tỏa văn hóa đọc đến mọi đối tượng độc giả</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-booksecondary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Tạo không gian trải nghiệm sách chất lượng và thân thiện</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-booksecondary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Hỗ trợ các tác giả Việt Nam trong việc xuất bản và phát hành tác phẩm</span>
                  </li>
                </ul>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-bookprimary mb-4">Giá Trị Cốt Lõi</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-bookprimary/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Award className="text-bookprimary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-bookdark mb-1">Chất Lượng</h4>
                      <p className="text-bookdark/80 text-sm">Đảm bảo chất lượng sách và dịch vụ tốt nhất cho khách hàng.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-bookprimary/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Library className="text-bookprimary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-bookdark mb-1">Tri Thức</h4>
                      <p className="text-bookdark/80 text-sm">Trân trọng giá trị của tri thức và vai trò của sách trong việc phát triển con người.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-bookprimary/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Users className="text-bookprimary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-bookdark mb-1">Cộng Đồng</h4>
                      <p className="text-bookdark/80 text-sm">Xây dựng và phát triển cộng đồng yêu sách, tạo môi trường kết nối và chia sẻ.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-bookprimary mb-4">Đội Ngũ Của Chúng Tôi</h2>
              <p className="text-bookdark/80">
                Đội ngũ lãnh đạo Bookstore với niềm đam mê sách và tầm nhìn phát triển văn hóa đọc tại Việt Nam.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-booksecondary font-medium mb-2">{member.role}</p>
                    <p className="text-bookdark/70 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-bookprimary text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-white/80">Chi Nhánh Toàn Quốc</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="text-white/80">Đầu Sách</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1.5M+</div>
                <p className="text-white/80">Khách Hàng</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-white/80">Nhân Viên</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-bookprimary mb-4">Thông Tin Liên Hệ</h2>
              <p className="text-bookdark/80">
                Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng liên hệ với chúng tôi qua các kênh sau:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-bookbg rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-bookprimary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-bookprimary" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-bookdark/80">info@bookstore.com.vn</p>
                <p className="text-bookdark/80">support@bookstore.com.vn</p>
              </div>
              <div className="bg-bookbg rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-bookprimary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-bookprimary" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">Số Điện Thoại</h3>
                <p className="text-bookdark/80">(028) 3823 4567</p>
                <p className="text-bookdark/80">Hotline: 1900 6385</p>
              </div>
              <div className="bg-bookbg rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-bookprimary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-bookprimary" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">Địa Chỉ</h3>
                <p className="text-bookdark/80">123 Đường Sách, Quận 1, TP.HCM</p>
                <p className="text-bookdark/80">Giờ làm việc: 8:00 - 22:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
