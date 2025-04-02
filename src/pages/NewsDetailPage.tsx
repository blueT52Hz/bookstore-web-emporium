
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getNewsById, getRelatedNews } from '@/data/news';
import { NewsType } from '@/types/news';
import { formatDate } from '@/lib/utils';
import { ChevronRight, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsType | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundNews = getNewsById(id);
      if (foundNews) {
        setNews(foundNews);
        setRelatedNews(getRelatedNews(id));
      }
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-bookbg py-8">
          <div className="container-custom">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bookprimary"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-bookbg py-8">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h1 className="text-2xl font-bold text-bookprimary mb-4">Không tìm thấy bài viết</h1>
              <p className="text-bookdark mb-6">Xin lỗi, bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
              <Link to="/news" className="btn-primary">
                Quay lại trang tin tức
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-bookbg py-8">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm mb-6">
            <Link to="/" className="text-bookdark/70 hover:text-bookprimary">Trang chủ</Link>
            <ChevronRight size={16} className="mx-2 text-bookdark/70" />
            <Link to="/news" className="text-bookdark/70 hover:text-bookprimary">Tin tức</Link>
            <ChevronRight size={16} className="mx-2 text-bookdark/70" />
            <span className="text-bookprimary line-clamp-1">{news.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Featured Image */}
                <div className="aspect-[16/9]">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6 md:p-8">
                  <h1 className="text-3xl font-bold text-bookprimary mb-4">{news.title}</h1>

                  <div className="flex items-center text-bookdark/70 mb-6">
                    <span className="mr-4">{formatDate(news.date)}</span>
                    <span className="mr-4">Tác giả: {news.author}</span>
                    <span>Danh mục: {news.category}</span>
                  </div>

                  <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: news.content }}></div>

                  {/* Tags */}
                  <div className="flex items-center flex-wrap gap-2 mb-6">
                    <span className="text-bookdark font-medium">Tags:</span>
                    <Link
                      to={`/news?tag=sach`}
                      className="bg-bookbg px-3 py-1 rounded-md text-sm hover:bg-bookprimary hover:text-white transition-colors"
                    >
                      Sách
                    </Link>
                    <Link
                      to={`/news?tag=${news.category.toLowerCase()}`}
                      className="bg-bookbg px-3 py-1 rounded-md text-sm hover:bg-bookprimary hover:text-white transition-colors"
                    >
                      {news.category}
                    </Link>
                  </div>

                  {/* Share */}
                  <div className="border-t border-gray-200 pt-6">
                    <p className="font-medium mb-3">Chia sẻ bài viết:</p>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Facebook size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                        <Twitter size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                        <Linkedin size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-bookprimary mb-4">Tác giả</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={`https://picsum.photos/id/${3500}/200/200`}
                      alt={news.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{news.author}</h4>
                    <p className="text-bookdark/70 text-sm">Biên tập viên</p>
                  </div>
                </div>
                <p className="text-bookdark/80 text-sm">
                  Là biên tập viên với nhiều năm kinh nghiệm trong lĩnh vực xuất bản và
                  truyền thông. Chuyên viết về sách, văn hóa đọc và các xu hướng trong ngành xuất bản.
                </p>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-bookprimary mb-4">Danh Mục</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/news?category=Sách hay"
                      className="flex items-center justify-between text-bookdark hover:text-booksecondary transition-colors"
                    >
                      <span>Sách hay</span>
                      <span className="bg-bookbg px-2 py-0.5 rounded-full text-xs">5</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news?category=Sự kiện"
                      className="flex items-center justify-between text-bookdark hover:text-booksecondary transition-colors"
                    >
                      <span>Sự kiện</span>
                      <span className="bg-bookbg px-2 py-0.5 rounded-full text-xs">3</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news?category=Xu hướng đọc sách"
                      className="flex items-center justify-between text-bookdark hover:text-booksecondary transition-colors"
                    >
                      <span>Xu hướng đọc sách</span>
                      <span className="bg-bookbg px-2 py-0.5 rounded-full text-xs">2</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Related Articles */}
              {relatedNews.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-bookprimary mb-4">Bài Viết Liên Quan</h3>
                  <div className="space-y-4">
                    {relatedNews.map((item) => (
                      <div key={item.id} className="flex items-start">
                        <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0 mr-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            to={`/news/${item.id}`}
                            className="font-medium text-sm line-clamp-2 hover:text-booksecondary transition-colors"
                          >
                            {item.title}
                          </Link>
                          <p className="text-xs text-bookdark/60 mt-1">
                            {formatDate(item.date)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;
