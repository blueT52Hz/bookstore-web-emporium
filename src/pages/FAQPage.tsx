
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQItem from '@/components/FAQItem';
import { faqs, getAllFaqCategories, getFaqsByCategory } from '@/data/faq';
import { Search } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  
  const categories = getAllFaqCategories();
  
  // Filter FAQs based on search term and active category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === '' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by filtering above
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-bookprimary relative">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://picsum.photos/id/3100/1920/1080" 
              alt="FAQ background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Câu Hỏi Thường Gặp</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Tìm câu trả lời cho những thắc mắc thường gặp về sản phẩm, đơn hàng, chính sách
                và các dịch vụ của Bookstore.
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="mt-8 max-w-lg mx-auto flex bg-white rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Tìm kiếm câu hỏi..."
                  className="flex-grow px-5 py-3 focus:outline-none text-bookdark"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-bookprimary text-white px-5 py-3 flex items-center"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-bookbg">
          <div className="container-custom">
            {/* Category Tabs */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-2 min-w-max pb-2">
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeCategory === ''
                      ? 'bg-bookprimary text-white'
                      : 'bg-white text-bookdark hover:bg-bookprimary/10 transition-colors'
                  }`}
                  onClick={() => setActiveCategory('')}
                >
                  Tất cả
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-md whitespace-nowrap ${
                      activeCategory === category
                        ? 'bg-bookprimary text-white'
                        : 'bg-white text-bookdark hover:bg-bookprimary/10 transition-colors'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            {filteredFaqs.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-1">
                  {filteredFaqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-bold text-bookprimary mb-2">Không tìm thấy câu hỏi</h3>
                <p className="text-bookdark/80 mb-4">
                  Không có câu hỏi nào phù hợp với từ khóa bạn tìm kiếm.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('');
                    }}
                  >
                    Xem tất cả câu hỏi
                  </button>
                  <Link to="/contact" className="btn-secondary">
                    Liên hệ với chúng tôi
                  </Link>
                </div>
              </div>
            )}

            {/* Contact Us CTA */}
            <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-bookprimary mb-4">Không tìm thấy câu trả lời?</h2>
              <p className="text-bookdark/80 mb-6 max-w-2xl mx-auto">
                Nếu bạn không tìm thấy câu trả lời cho thắc mắc của mình, đừng ngại liên hệ với chúng tôi.
                Đội ngũ hỗ trợ khách hàng của Bookstore luôn sẵn sàng giúp đỡ bạn.
              </p>
              <Link to="/contact" className="btn-primary">
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
