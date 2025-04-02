
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import BookCard from '@/components/BookCard';
import CategoryCard from '@/components/CategoryCard';
import NewsCard from '@/components/NewsCard';
import { getFeaturedBooks, getBestSellerBooks, getNewReleaseBooks, categories } from '@/data/books';
import { getRecentNews } from '@/data/news';
import { Book, ChevronRight } from 'lucide-react';

const bannerSlides = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1200/1200/700',
    title: 'Khám Phá Thế Giới Qua Từng Trang Sách',
    subtitle: 'Bookstore - Nơi Mang Đến Những Cuốn Sách Hay Nhất Cho Bạn',
    link: '/products'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/1300/1200/700',
    title: 'Ưu Đãi Đặc Biệt - Giảm Giá Tới 30%',
    subtitle: 'Áp dụng cho đơn hàng từ 500.000đ từ ngày 01/10 - 15/10/2023',
    link: '/products'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/1400/1200/700',
    title: 'Sự Kiện Ra Mắt Sách Mới',
    subtitle: 'Gặp gỡ tác giả và nhận bản ký tặng đặc biệt',
    link: '/news'
  }
];

const Index = () => {
  const featuredBooks = getFeaturedBooks();
  const bestSellerBooks = getBestSellerBooks().slice(0, 4);
  const newReleaseBooks = getNewReleaseBooks().slice(0, 4);
  const recentNews = getRecentNews(3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Banner */}
        <Banner slides={bannerSlides} />

        {/* Welcome Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="section-title">Chào Mừng Đến Với Bookstore</h1>
              <p className="text-bookdark/80 mb-6">
                Bookstore là thiên đường dành cho những người yêu sách với hàng nghìn đầu sách thuộc mọi thể loại, 
                từ văn học kinh điển đến sách thiếu nhi, sách kinh tế, tâm lý học và nhiều thể loại khác.
                Chúng tôi cam kết mang đến cho bạn những cuốn sách hay nhất với chất lượng tốt nhất và giá cả phải chăng.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/about" className="btn-primary">
                  Giới Thiệu
                </Link>
                <Link to="/products" className="btn-secondary">
                  Khám Phá Sách
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="section-padding bg-bookbg">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-bookprimary">Sách Nổi Bật</h2>
              <Link 
                to="/products" 
                className="flex items-center text-booksecondary hover:underline font-medium"
              >
                Xem tất cả <ChevronRight size={18} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredBooks.slice(0, 4).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="section-title">Danh Mục Sách</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 6).map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Two Columns: Best Sellers & New Releases */}
        <section className="section-padding bg-bookbg">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Best Sellers */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-bookprimary">Sách Bán Chạy</h2>
                  <Link 
                    to="/products?filter=best-sellers" 
                    className="flex items-center text-booksecondary hover:underline font-medium"
                  >
                    Xem thêm <ChevronRight size={18} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bestSellerBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>

              {/* New Releases */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-bookprimary">Sách Mới</h2>
                  <Link 
                    to="/products?filter=new-releases" 
                    className="flex items-center text-booksecondary hover:underline font-medium"
                  >
                    Xem thêm <ChevronRight size={18} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {newReleaseBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-bookprimary text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Tại Sao Chọn Bookstore?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Đa Dạng Sách</h3>
                <p className="text-white/80">Hơn 50,000 đầu sách thuộc mọi thể loại, đáp ứng mọi nhu cầu đọc sách.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Dịch Vụ Tận Tâm</h3>
                <p className="text-white/80">Đội ngũ nhân viên am hiểu về sách, luôn sẵn sàng tư vấn và hỗ trợ.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Giao Hàng Nhanh</h3>
                <p className="text-white/80">Giao hàng nhanh chóng và đảm bảo sách đến tay bạn trong tình trạng hoàn hảo.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cộng Đồng Đọc Sách</h3>
                <p className="text-white/80">Tham gia cộng đồng yêu sách sôi nổi với các sự kiện, workshop thường xuyên.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-bookprimary">Tin Tức & Blog</h2>
              <Link 
                to="/news" 
                className="flex items-center text-booksecondary hover:underline font-medium"
              >
                Xem tất cả <ChevronRight size={18} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-bookprimary/10">
          <div className="container-custom">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-bookprimary">Đăng Ký Nhận Thông Tin</h2>
              <p className="text-bookdark/80 mb-6">
                Đăng ký để nhận thông tin về sách mới, sự kiện và ưu đãi đặc biệt từ Bookstore.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Địa chỉ email của bạn" 
                  className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bookprimary"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Đăng Ký
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
