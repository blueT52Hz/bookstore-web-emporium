
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, Users, BookOpen, Heart, Clock, MapPin, Target, ArrowUpRight } from 'lucide-react';
import { getRandomImage } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

const CareersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null as File | null
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    resume: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const jobPositions: JobPosition[] = [
    {
      id: 'job-1',
      title: 'Quản Lý Cửa Hàng',
      department: 'Vận hành',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Chúng tôi đang tìm kiếm một Quản lý cửa hàng có kinh nghiệm để quản lý hoạt động hàng ngày của cửa hàng sách Bookstore tại TP.HCM. Bạn sẽ chịu trách nhiệm điều hành nhân viên, quản lý kho hàng, và đảm bảo dịch vụ khách hàng xuất sắc.',
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Quản trị Kinh doanh hoặc các ngành liên quan',
        'Ít nhất 3 năm kinh nghiệm trong vai trò quản lý cửa hàng bán lẻ, ưu tiên ngành sách hoặc văn phòng phẩm',
        'Kỹ năng lãnh đạo và quản lý nhân sự xuất sắc',
        'Khả năng phân tích báo cáo bán hàng và đề xuất cải tiến',
        'Hiểu biết về thị trường sách và xu hướng đọc sách là một lợi thế'
      ],
      responsibilities: [
        'Quản lý và đào tạo đội ngũ nhân viên cửa hàng',
        'Đảm bảo dịch vụ khách hàng chất lượng cao',
        'Quản lý hàng tồn kho và đặt hàng',
        'Theo dõi và phân tích hiệu suất bán hàng',
        'Tổ chức các sự kiện tại cửa hàng (ra mắt sách, gặp gỡ tác giả)'
      ],
      benefits: [
        'Lương cạnh tranh + thưởng theo hiệu suất',
        'Bảo hiểm sức khỏe toàn diện',
        'Cơ hội đào tạo và phát triển nghề nghiệp',
        '13 tháng lương + thưởng cuối năm',
        'Giảm giá 30% khi mua sách'
      ]
    },
    {
      id: 'job-2',
      title: 'Chuyên Viên Marketing',
      department: 'Marketing',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Bookstore đang tìm kiếm một Chuyên viên Marketing đầy nhiệt huyết và sáng tạo để tham gia vào đội ngũ của chúng tôi. Bạn sẽ chịu trách nhiệm phát triển và triển khai các chiến dịch marketing để quảng bá thương hiệu Bookstore và tăng doanh số bán hàng.',
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Marketing, Truyền thông hoặc các ngành liên quan',
        'Ít nhất 2 năm kinh nghiệm trong lĩnh vực marketing, ưu tiên kinh nghiệm trong ngành bán lẻ hoặc xuất bản',
        'Kiến thức vững về digital marketing, social media và content marketing',
        'Khả năng sáng tạo và viết nội dung tốt',
        'Kỹ năng phân tích dữ liệu marketing'
      ],
      responsibilities: [
        'Lên kế hoạch và triển khai các chiến dịch marketing đa kênh',
        'Quản lý các kênh mạng xã hội của Bookstore',
        'Tạo nội dung hấp dẫn cho website, blog và các kênh social media',
        'Phối hợp với đội ngũ bán hàng để tổ chức các sự kiện quảng bá',
        'Phân tích hiệu quả chiến dịch marketing và đề xuất cải tiến'
      ],
      benefits: [
        'Lương cạnh tranh + thưởng theo hiệu suất',
        'Môi trường làm việc năng động, sáng tạo',
        'Cơ hội học hỏi và phát triển trong ngành xuất bản',
        'Chế độ bảo hiểm sức khỏe và phúc lợi đầy đủ',
        'Giảm giá 30% khi mua sách'
      ]
    },
    {
      id: 'job-3',
      title: 'Nhân Viên Bán Hàng',
      department: 'Bán hàng',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian / Bán thời gian',
      description: 'Bookstore đang tìm kiếm các nhân viên bán hàng đam mê sách và có kỹ năng dịch vụ khách hàng tốt. Bạn sẽ trở thành một phần quan trọng trong việc tạo nên trải nghiệm mua sắm tuyệt vời cho khách hàng tại cửa hàng của chúng tôi.',
      requirements: [
        'Tốt nghiệp THPT trở lên',
        'Yêu thích sách và có kiến thức về các thể loại sách khác nhau',
        'Kỹ năng giao tiếp và dịch vụ khách hàng tốt',
        'Tinh thần làm việc nhóm và trách nhiệm cao',
        'Kinh nghiệm bán hàng là một lợi thế nhưng không bắt buộc'
      ],
      responsibilities: [
        'Tư vấn và giới thiệu sách cho khách hàng',
        'Xử lý thanh toán và đóng gói sách',
        'Duy trì trưng bày cửa hàng gọn gàng và hấp dẫn',
        'Kiểm kê và sắp xếp hàng hóa',
        'Hỗ trợ tổ chức các sự kiện tại cửa hàng'
      ],
      benefits: [
        'Lương cạnh tranh + thưởng theo doanh số',
        'Môi trường làm việc thân thiện và chuyên nghiệp',
        'Đào tạo về sản phẩm và kỹ năng bán hàng',
        'Lịch làm việc linh hoạt (với vị trí bán thời gian)',
        'Giảm giá 30% khi mua sách'
      ]
    },
    {
      id: 'job-4',
      title: 'Chuyên Viên Nội Dung',
      department: 'Marketing',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Bookstore đang tìm kiếm một Chuyên viên Nội dung tài năng để tạo ra những bài viết hấp dẫn về sách, tác giả và các chủ đề liên quan đến đọc sách. Bạn sẽ chịu trách nhiệm phát triển nội dung cho website, blog, bản tin và các kênh mạng xã hội của chúng tôi.',
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Báo chí, Văn học, Marketing hoặc các ngành liên quan',
        'Kỹ năng viết sáng tạo và khả năng kể chuyện xuất sắc',
        'Đam mê đọc sách và hiểu biết rộng về nhiều thể loại sách',
        'Kinh nghiệm viết nội dung SEO là một lợi thế',
        'Khả năng nghiên cứu và tổng hợp thông tin tốt'
      ],
      responsibilities: [
        'Viết bài đánh giá sách, giới thiệu tác giả và các bài viết chuyên đề',
        'Tạo nội dung cho các kênh mạng xã hội và bản tin điện tử',
        'Phối hợp với đội ngũ marketing để tạo nội dung cho các chiến dịch',
        'Cập nhật website và blog của công ty',
        'Biên tập và kiểm tra nội dung do nhân viên khác tạo ra'
      ],
      benefits: [
        'Lương cạnh tranh',
        'Môi trường làm việc sáng tạo',
        'Cơ hội làm việc với các tác giả và nhà xuất bản',
        'Tiếp cận sớm với những cuốn sách mới',
        'Giảm giá 30% khi mua sách'
      ]
    }
  ];

  const handlePositionSelect = (position: JobPosition) => {
    setSelectedPosition(position);
    // Scroll to detail section
    setTimeout(() => {
      document.getElementById('job-detail')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
    
    // Clear error when user selects a file
    if (formErrors.resume) {
      setFormErrors(prev => ({
        ...prev,
        resume: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
      valid = false;
    }
    
    // Validate phone (optional but must be valid if provided)
    if (formData.phone) {
      const phoneRegex = /^[0-9]{10,11}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Số điện thoại không hợp lệ';
        valid = false;
      }
    }
    
    // Validate resume file
    if (!formData.resume) {
      newErrors.resume = 'Vui lòng tải lên CV của bạn';
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Nộp đơn ứng tuyển thành công",
          description: "Chúng tôi đã nhận được hồ sơ của bạn và sẽ liên hệ sớm. Cảm ơn bạn đã ứng tuyển!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          resume: null
        });
        
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-bookprimary relative">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={getRandomImage(1920, 1080, 4000)} 
              alt="Careers background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tuyển Dụng</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Gia nhập đội ngũ của Bookstore và cùng chúng tôi lan tỏa văn hóa đọc đến cộng đồng.
                Khám phá các cơ hội nghề nghiệp thú vị đang chờ đón bạn.
              </p>
              <button
                onClick={() => document.getElementById('job-positions')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Xem vị trí tuyển dụng
              </button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-bookprimary mb-4">Tại Sao Nên Gia Nhập Bookstore?</h2>
              <p className="text-bookdark/80">
                Bookstore không chỉ là nơi làm việc, mà còn là ngôi nhà thứ hai dành cho những người yêu sách và
                mong muốn lan tỏa văn hóa đọc đến cộng đồng.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-bookbg rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-bookprimary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-bookprimary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-bookprimary mb-2">Môi Trường Yêu Sách</h3>
                <p className="text-bookdark/80">
                  Làm việc trong không gian ngập tràn sách và những người đam mê đọc sách như bạn.
                </p>
              </div>

              <div className="bg-bookbg rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-bookprimary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-bookprimary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-bookprimary mb-2">Phát Triển Sự Nghiệp</h3>
                <p className="text-bookdark/80">
                  Cơ hội đào tạo và phát triển nghề nghiệp rõ ràng để bạn có thể tiến xa trong lĩnh vực của mình.
                </p>
              </div>

              <div className="bg-bookbg rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-bookprimary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-bookprimary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-bookprimary mb-2">Đội Ngũ Tuyệt Vời</h3>
                <p className="text-bookdark/80">
                  Làm việc cùng những đồng nghiệp tài năng, nhiệt huyết và luôn sẵn sàng hỗ trợ nhau.
                </p>
              </div>

              <div className="bg-bookbg rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-bookprimary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-bookprimary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-bookprimary mb-2">Phúc Lợi Hấp Dẫn</h3>
                <p className="text-bookdark/80">
                  Chế độ lương thưởng cạnh tranh, giảm giá đặc biệt khi mua sách và nhiều phúc lợi khác.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Positions */}
        <section id="job-positions" className="py-16 bg-bookbg">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-bookprimary mb-8">Vị Trí Tuyển Dụng</h2>

            <div className="grid grid-cols-1 gap-4">
              {jobPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handlePositionSelect(position)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-bookprimary">{position.title}</h3>
                      <div className="flex flex-wrap mt-2 gap-2">
                        <span className="bg-bookprimary/10 text-bookprimary px-3 py-1 rounded-full text-sm flex items-center">
                          <Briefcase size={14} className="mr-1" />
                          {position.department}
                        </span>
                        <span className="bg-bookprimary/10 text-bookprimary px-3 py-1 rounded-full text-sm flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {position.location}
                        </span>
                        <span className="bg-bookprimary/10 text-bookprimary px-3 py-1 rounded-full text-sm flex items-center">
                          <Clock size={14} className="mr-1" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center text-booksecondary hover:underline self-start md:self-center">
                      Xem chi tiết
                      <ArrowUpRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Detail and Application */}
        {selectedPosition && (
          <section id="job-detail" className="py-16 bg-white">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Job Detail */}
                <div className="lg:col-span-2">
                  <div className="bg-bookbg rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-bookprimary mb-2">{selectedPosition.title}</h2>
                    
                    <div className="flex flex-wrap mt-4 mb-6 gap-2">
                      <span className="bg-bookprimary/10 text-bookprimary px-3 py-1 rounded-full text-sm flex items-center">
                        <Briefcase size={14} className="mr-1" />
                        {selectedPosition.department}
                      </span>
                      <span className="bg-bookprimary/10 text-bookprimary px-3 py-1 rounded-full text-sm flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {selectedPosition.location}
                      </span>
                      <span className="bg-bookprimary/10 text-bookprimary px-3 py-1 rounded-full text-sm flex items-center">
                        <Clock size={14} className="mr-1" />
                        {selectedPosition.type}
                      </span>
                    </div>
                    
                    <div className="prose max-w-none text-bookdark/80">
                      <p className="mb-6">{selectedPosition.description}</p>
                      
                      <h3 className="text-xl font-bold text-bookprimary mb-4">Yêu Cầu Công Việc</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedPosition.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-booksecondary mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="text-xl font-bold text-bookprimary mb-4">Trách Nhiệm Công Việc</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedPosition.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-booksecondary mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="text-xl font-bold text-bookprimary mb-4">Quyền Lợi</h3>
                      <ul className="space-y-2">
                        {selectedPosition.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-booksecondary mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Application Form */}
                <div className="lg:col-span-1">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-bookprimary mb-6">Ứng Tuyển Ngay</h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-bookdark font-medium mb-2">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            formErrors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Nguyễn Văn A"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-bookdark font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="example@gmail.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-bookdark font-medium mb-2">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            formErrors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="0912345678"
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="message" className="block text-bookdark font-medium mb-2">
                          Giới thiệu bản thân
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary"
                          placeholder="Giới thiệu ngắn gọn về bản thân và kinh nghiệm của bạn..."
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="resume" className="block text-bookdark font-medium mb-2">
                          Tải lên CV <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          onChange={handleFileChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            formErrors.resume ? 'border-red-500' : 'border-gray-300'
                          }`}
                          accept=".pdf,.doc,.docx"
                        />
                        <p className="text-xs text-bookdark/60 mt-1">
                          Chấp nhận file PDF, DOC, DOCX. Kích thước tối đa 5MB.
                        </p>
                        {formErrors.resume && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.resume}</p>
                        )}
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                            Đang gửi...
                          </>
                        ) : (
                          'Nộp đơn ứng tuyển'
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Recruitment Process */}
        <section className="py-16 bg-bookbg">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-bookprimary mb-4">Quy Trình Tuyển Dụng</h2>
              <p className="text-bookdark/80">
                Quy trình tuyển dụng của Bookstore được thiết kế để tìm kiếm những ứng viên phù hợp nhất,
                không chỉ về kỹ năng mà còn về đam mê và sự phù hợp với văn hóa công ty.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-bookprimary/30 transform md:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative">
                  <div className="ml-12 md:ml-0 md:flex md:items-center md:justify-between">
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-bookprimary rounded-full transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="md:w-5/12 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold text-bookprimary mb-2">Nộp Đơn Ứng Tuyển</h3>
                      <p className="text-bookdark/80">
                        Điền form ứng tuyển online và tải lên CV của bạn. Chúng tôi sẽ xem xét tất cả hồ sơ
                        và liên hệ với các ứng viên phù hợp.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-5/12 md:pl-8"></div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <div className="ml-12 md:ml-0 md:flex md:items-center md:justify-between">
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-bookprimary rounded-full transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="md:w-5/12 md:text-right md:pr-8 md:order-1 md:hidden"></div>
                    <div className="md:w-5/12 md:text-left md:pl-8 md:order-2">
                      <h3 className="text-xl font-bold text-bookprimary mb-2">Phỏng Vấn Sơ Bộ</h3>
                      <p className="text-bookdark/80">
                        Phỏng vấn qua điện thoại hoặc video để tìm hiểu thêm về kinh nghiệm, kỹ năng
                        và mong muốn của bạn.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="ml-12 md:ml-0 md:flex md:items-center md:justify-between">
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-bookprimary rounded-full transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="md:w-5/12 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold text-bookprimary mb-2">Phỏng Vấn Chuyên Sâu</h3>
                      <p className="text-bookdark/80">
                        Phỏng vấn trực tiếp với quản lý và các thành viên trong đội ngũ để đánh giá kỹ năng
                        chuyên môn và khả năng làm việc nhóm.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-5/12 md:pl-8"></div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative">
                  <div className="ml-12 md:ml-0 md:flex md:items-center md:justify-between">
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-bookprimary rounded-full transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div className="md:w-5/12 md:text-right md:pr-8 md:order-1 md:hidden"></div>
                    <div className="md:w-5/12 md:text-left md:pl-8 md:order-2">
                      <h3 className="text-xl font-bold text-bookprimary mb-2">Đánh Giá & Quyết Định</h3>
                      <p className="text-bookdark/80">
                        Đánh giá toàn diện về ứng viên và đưa ra quyết định cuối cùng. Chúng tôi luôn cố gắng
                        thông báo kết quả sớm nhất có thể.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative">
                  <div className="ml-12 md:ml-0 md:flex md:items-center md:justify-between">
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-bookprimary rounded-full transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <div className="md:w-5/12 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold text-bookprimary mb-2">Chào Mừng & Hội Nhập</h3>
                      <p className="text-bookdark/80">
                        Chào mừng bạn gia nhập đội ngũ Bookstore! Chúng tôi có chương trình định hướng để
                        giúp bạn hòa nhập nhanh chóng vào môi trường làm việc mới.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-5/12 md:pl-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
