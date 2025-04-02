
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bookprimary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-white/80 mb-4">
              Bookstore - Nơi mang đến cho bạn những cuốn sách hay nhất với chất lượng tốt nhất và 
              giá cả phải chăng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-booksecondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-booksecondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-booksecondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-booksecondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-booksecondary transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-booksecondary transition-colors">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-booksecondary transition-colors">
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/80 hover:text-booksecondary transition-colors">
                  Tin Tức
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-booksecondary transition-colors">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Danh Mục Sách</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=fiction" className="text-white/80 hover:text-booksecondary transition-colors">
                  Văn Học
                </Link>
              </li>
              <li>
                <Link to="/products?category=business" className="text-white/80 hover:text-booksecondary transition-colors">
                  Kinh Tế
                </Link>
              </li>
              <li>
                <Link to="/products?category=children" className="text-white/80 hover:text-booksecondary transition-colors">
                  Thiếu Nhi
                </Link>
              </li>
              <li>
                <Link to="/products?category=self-help" className="text-white/80 hover:text-booksecondary transition-colors">
                  Tâm Lý - Kỹ Năng Sống
                </Link>
              </li>
              <li>
                <Link to="/products?category=history" className="text-white/80 hover:text-booksecondary transition-colors">
                  Lịch Sử
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Thông Tin Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  123 Đường Sách, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-white/80">
                  (028) 3823 4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-white/80">
                  info@bookstore.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Bookstore. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
