
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import { books, categories, getBooksByCategory } from '@/data/books';
import { BookType } from '@/types/book';
import { Search, Filter } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>(books);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  // Get category from URL if present
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }

    const filterFromUrl = searchParams.get('filter');
    if (filterFromUrl) {
      // Handle filter logic (best-sellers, new-releases, etc.)
    }
  }, [searchParams]);

  // Filter books based on search, category, and price
  useEffect(() => {
    let result = [...books];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(book => book.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        book => 
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.description.toLowerCase().includes(term)
      );
    }

    // Filter by price range
    result = result.filter(
      book => book.price >= priceRange[0] && book.price <= priceRange[1]
    );

    setFilteredBooks(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchTerm, priceRange]);

  // Calculate current books for pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? '' : categoryId);
  };

  // Handle price range change
  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-bookbg py-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-bookprimary mb-8">Sản Phẩm</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-bookprimary mb-4">Bộ Lọc</h2>

                {/* Search */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Tìm Kiếm</h3>
                  <form onSubmit={handleSearch} className="flex">
                    <input
                      type="text"
                      placeholder="Tìm kiếm sách..."
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
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category.id}`}
                          className="mr-2"
                          checked={selectedCategory === category.id}
                          onChange={() => handleCategoryChange(category.id)}
                        />
                        <label htmlFor={`category-${category.id}`} className="cursor-pointer">
                          {category.name} ({category.count})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Giá</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-all"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 0 && priceRange[1] === 200000}
                        onChange={() => handlePriceRangeChange(0, 200000)}
                      />
                      <label htmlFor="price-all">Tất cả</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-under-50k"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 0 && priceRange[1] === 50000}
                        onChange={() => handlePriceRangeChange(0, 50000)}
                      />
                      <label htmlFor="price-under-50k">Dưới 50.000₫</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-50k-100k"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 50000 && priceRange[1] === 100000}
                        onChange={() => handlePriceRangeChange(50000, 100000)}
                      />
                      <label htmlFor="price-50k-100k">50.000₫ - 100.000₫</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-100k-150k"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 100000 && priceRange[1] === 150000}
                        onChange={() => handlePriceRangeChange(100000, 150000)}
                      />
                      <label htmlFor="price-100k-150k">100.000₫ - 150.000₫</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="price-over-150k"
                        name="price"
                        className="mr-2"
                        checked={priceRange[0] === 150000 && priceRange[1] === 200000}
                        onChange={() => handlePriceRangeChange(150000, 200000)}
                      />
                      <label htmlFor="price-over-150k">Trên 150.000₫</label>
                    </div>
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  className="w-full py-2 px-4 bg-gray-200 text-bookdark rounded-md hover:bg-gray-300 transition-colors"
                  onClick={() => {
                    setSelectedCategory('');
                    setSearchTerm('');
                    setPriceRange([0, 200000]);
                  }}
                >
                  Xóa Bộ Lọc
                </button>
              </div>
            </div>

            {/* Books Grid */}
            <div className="lg:col-span-3">
              {/* Results Count & Sort */}
              <div className="flex justify-between items-center mb-6 bg-white rounded-lg p-4 shadow-sm">
                <p className="text-bookdark">
                  Hiển thị <span className="font-semibold">{filteredBooks.length}</span> sản phẩm
                </p>
                <div className="flex items-center">
                  <label htmlFor="sort-by" className="mr-2">Sắp xếp:</label>
                  <select
                    id="sort-by"
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-bookprimary"
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="price-asc">Giá: Thấp đến cao</option>
                    <option value="price-desc">Giá: Cao đến thấp</option>
                    <option value="name-asc">Tên: A-Z</option>
                    <option value="name-desc">Tên: Z-A</option>
                  </select>
                </div>
              </div>

              {/* Books Grid */}
              {currentBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                  <h3 className="text-xl font-bold text-bookprimary mb-2">Không tìm thấy sách</h3>
                  <p className="text-bookdark/80 mb-4">
                    Không có sách nào phù hợp với tiêu chí tìm kiếm của bạn.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSelectedCategory('');
                      setSearchTerm('');
                      setPriceRange([0, 200000]);
                    }}
                  >
                    Xóa Bộ Lọc
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center">
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded-md mr-2 bg-white border border-gray-300 disabled:opacity-50"
                    >
                      &laquo;
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
                      &raquo;
                    </button>
                  </nav>
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

export default ProductsPage;
