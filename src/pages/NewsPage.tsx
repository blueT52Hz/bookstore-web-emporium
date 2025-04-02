
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { news } from '@/data/news';
import { Search, ChevronRight, ChevronLeft } from 'lucide-react';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  // Get unique categories from news
  const categories = [...new Set(news.map(item => item.category))];

  // Filter news based on search and category
  const filteredNews = news.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort by date (newest first)
  const sortedNews = [...filteredNews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get current news items
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(sortedNews.length / newsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-bookbg py-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-bookprimary mb-8">Tin Tức & Blog</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                {/* Search */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Tìm Kiếm</h3>
                  <form onSubmit={handleSearch} className="flex">
                    <input
                      type="text"
                      placeholder="Tìm kiếm bài viết..."
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-bookprimary"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-bookprimary text-white px-3 py-2 rounded-r-md"
                    >
                      <Search size={18} />
                    </button>
                  </form>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Danh Mục</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="category-all"
                        name="category"
                        className="mr-2"
                        checked={selectedCategory === ''}
                        onChange={() => {
                          setSelectedCategory('');
                          setCurrentPage(1);
                        }}
                      />
                      <label htmlFor="category-all" className="cursor-pointer">
                        Tất cả
                      </label>
                    </div>
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="radio"
                          id={`category-${category}`}
                          name="category"
                          className="mr-2"
                          checked={selectedCategory === category}
                          onChange={() => {
                            setSelectedCategory(category);
                            setCurrentPage(1);
                          }}
                        />
                        <label htmlFor={`category-${category}`} className="cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div>
                  <h3 className="font-semibold mb-2">Bài Viết Gần Đây</h3>
                  <div className="space-y-4">
                    {news.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-start">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 mr-3">
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
                            {new Date(item.date).toLocaleDateString('vi-VN')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="lg:col-span-3">
              {currentNews.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentNews.map((item) => (
                      <NewsCard key={item.id} news={item} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8">
                      <nav className="flex items-center">
                        <button
                          onClick={() => paginate(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="px-3 py-1 rounded-md mr-2 bg-white border border-gray-300 disabled:opacity-50"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => paginate(page)}
                            className={`px-3 py-1 rounded-md mx-1 ${
                              currentPage === page
                                ? 'bg-bookprimary text-white'
                                : 'bg-white border border-gray-300'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                        
                        <button
                          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="px-3 py-1 rounded-md ml-2 bg-white border border-gray-300 disabled:opacity-50"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center shadow-md">
                  <h3 className="text-xl font-bold text-bookprimary mb-2">Không tìm thấy bài viết</h3>
                  <p className="text-bookdark/80 mb-4">
                    Không có bài viết nào phù hợp với tiêu chí tìm kiếm của bạn.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('');
                    }}
                  >
                    Xóa Bộ Lọc
                  </button>
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

export default NewsPage;
