
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    // Validate subject
    if (!formData.subject) {
      newErrors.subject = 'Vui lòng chọn chủ đề';
      valid = false;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Nội dung quá ngắn (tối thiểu 10 ký tự)';
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
          title: "Gửi liên hệ thành công",
          description: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất. Cảm ơn bạn đã liên hệ!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 1000);
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
              src="https://picsum.photos/id/3000/1920/1080" 
              alt="Contact background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Liên Hệ Với Bookstore</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-bookbg">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-2xl font-bold text-bookprimary mb-6">Thông Tin Liên Hệ</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bookprimary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <MapPin className="text-bookprimary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-bookdark mb-1">Địa Chỉ</h3>
                        <p className="text-bookdark/80">123 Đường Sách, Quận 1, TP.HCM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bookprimary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <Phone className="text-bookprimary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-bookdark mb-1">Điện Thoại</h3>
                        <p className="text-bookdark/80">(028) 3823 4567</p>
                        <p className="text-bookdark/80">Hotline: 1900 6385</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bookprimary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <Mail className="text-bookprimary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-bookdark mb-1">Email</h3>
                        <p className="text-bookdark/80">info@bookstore.com.vn</p>
                        <p className="text-bookdark/80">support@bookstore.com.vn</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bookprimary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <Clock className="text-bookprimary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-bookdark mb-1">Giờ Làm Việc</h3>
                        <p className="text-bookdark/80">Thứ Hai - Chủ Nhật: 8:00 - 22:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-bookdark mb-4">Bản Đồ</h3>
                  <div className="aspect-square rounded-md overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580567147!2d106.69877707486835!3d10.771604389376153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0xa1bd15498ae6f81a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1697185448035!5m2!1svi!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bookstore Location"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-bookprimary mb-6">Gửi Tin Nhắn</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-bookdark font-medium mb-2">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            formErrors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Nguyễn Văn A"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-bookdark font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="example@gmail.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-bookdark font-medium mb-2">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            formErrors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="0912345678"
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-bookdark font-medium mb-2">
                          Chủ đề <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            formErrors.subject ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Chọn chủ đề</option>
                          <option value="general">Thông tin chung</option>
                          <option value="order">Đơn hàng & Vận chuyển</option>
                          <option value="product">Thông tin sản phẩm</option>
                          <option value="return">Đổi/Trả hàng</option>
                          <option value="feedback">Góp ý & Phản hồi</option>
                          <option value="other">Khác</option>
                        </select>
                        {formErrors.subject && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-bookdark font-medium mb-2">
                        Nội dung <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                          formErrors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nhập nội dung tin nhắn của bạn..."
                      ></textarea>
                      {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Gửi tin nhắn
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-bookprimary mb-4">Câu Hỏi Thường Gặp</h2>
              <p className="text-bookdark/80">
                Dưới đây là một số câu hỏi thường gặp. Nếu bạn không tìm thấy câu trả lời cho thắc mắc của mình,
                vui lòng liên hệ với chúng tôi qua form liên hệ ở trên.
              </p>
            </div>

            <div className="bg-bookbg rounded-lg p-6 max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-bold text-bookprimary mb-2">Bookstore có giao hàng tận nơi không?</h3>
                  <p className="text-bookdark/80">
                    Có, Bookstore cung cấp dịch vụ giao hàng tận nơi trên toàn quốc. Đối với đơn hàng từ 300.000đ trở lên,
                    chúng tôi miễn phí giao hàng trong phạm vi 10km từ các chi nhánh Bookstore.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-bold text-bookprimary mb-2">Tôi có thể đổi/trả sách đã mua không?</h3>
                  <p className="text-bookdark/80">
                    Bookstore chấp nhận đổi/trả sách trong vòng 7 ngày kể từ ngày mua với điều kiện sách còn nguyên vẹn,
                    không có dấu hiệu đã sử dụng, và có hóa đơn mua hàng.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-bookprimary mb-2">Các phương thức thanh toán nào được Bookstore chấp nhận?</h3>
                  <p className="text-bookdark/80">
                    Bookstore chấp nhận nhiều phương thức thanh toán khác nhau, bao gồm: Tiền mặt, Thẻ tín dụng/ghi nợ,
                    Chuyển khoản ngân hàng, Ví điện tử (Momo, ZaloPay, VNPay), và Trả góp 0% qua thẻ tín dụng.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link to="/faq" className="btn-secondary">
                  Xem tất cả câu hỏi
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
