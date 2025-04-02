
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import { getBookById, getRelatedBooks, categories } from '@/data/books';
import { BookType } from '@/types/book';
import { ShoppingCart, Heart, Share2, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookType | null>(null);
  const [relatedBooks, setRelatedBooks] = useState<BookType[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundBook = getBookById(id);
      if (foundBook) {
        setBook(foundBook);
        setRelatedBooks(getRelatedBooks(id));
      }
      setIsLoading(false);
    }
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    if (book) {
      toast({
        title: "Thêm vào giỏ hàng thành công",
        description: `Đã thêm ${quantity} cuốn sách "${book.title}" vào giỏ hàng`,
      });
    }
  };

  const addToWishlist = () => {
    if (book) {
      toast({
        title: "Đã thêm vào danh sách yêu thích",
        description: `"${book.title}" đã được thêm vào danh sách yêu thích của bạn`,
      });
    }
  };

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

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-bookbg py-8">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h1 className="text-2xl font-bold text-bookprimary mb-4">Không tìm thấy sách</h1>
              <p className="text-bookdark mb-6">Xin lỗi, sách bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
              <Link to="/products" className="btn-primary">
                Quay lại trang sản phẩm
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryInfo = categories.find(cat => cat.id === book.category);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-bookbg py-8">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm mb-6">
            <Link to="/" className="text-bookdark/70 hover:text-bookprimary">Trang chủ</Link>
            <ChevronRight size={16} className="mx-2 text-bookdark/70" />
            <Link to="/products" className="text-bookdark/70 hover:text-bookprimary">Sản phẩm</Link>
            <ChevronRight size={16} className="mx-2 text-bookdark/70" />
            <Link 
              to={`/products?category=${book.category}`} 
              className="text-bookdark/70 hover:text-bookprimary"
            >
              {categoryInfo?.name || 'Danh mục'}
            </Link>
            <ChevronRight size={16} className="mx-2 text-bookdark/70" />
            <span className="text-bookprimary">{book.title}</span>
          </nav>

          {/* Product Detail */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="max-w-md">
                  <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-lg mb-4">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl font-bold text-bookprimary mb-2">{book.title}</h1>
                <p className="text-xl text-bookdark/80 mb-4">
                  Tác giả: <span className="font-medium">{book.author}</span>
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-bookdark/70">(24 đánh giá)</span>
                </div>

                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <p className="text-3xl font-bold text-booksecondary mb-2">
                    {book.price.toLocaleString('vi-VN')} ₫
                  </p>
                  <p className="text-green-600 font-medium">Còn hàng</p>
                </div>

                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-bookdark/70 mb-1">Nhà xuất bản</p>
                      <p className="font-medium">{book.publisher}</p>
                    </div>
                    <div>
                      <p className="text-bookdark/70 mb-1">Năm xuất bản</p>
                      <p className="font-medium">{book.publishYear}</p>
                    </div>
                    <div>
                      <p className="text-bookdark/70 mb-1">Số trang</p>
                      <p className="font-medium">{book.pages}</p>
                    </div>
                    <div>
                      <p className="text-bookdark/70 mb-1">Thể loại</p>
                      <p className="font-medium">{categoryInfo?.name || 'Chưa phân loại'}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <p className="mr-4">Số lượng:</p>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={decrementQuantity}
                        className="px-3 py-1 text-bookdark border-r border-gray-300"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-16 px-3 py-1 text-center focus:outline-none"
                      />
                      <button
                        onClick={incrementQuantity}
                        className="px-3 py-1 text-bookdark border-l border-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={addToCart}
                    className="btn-primary flex items-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Thêm vào giỏ hàng
                  </button>
                  <button
                    onClick={addToWishlist}
                    className="bg-white border border-bookprimary text-bookprimary hover:bg-bookprimary/5 py-2 px-4 rounded transition-colors flex items-center gap-2"
                  >
                    <Heart size={18} />
                    Yêu thích
                  </button>
                  <button className="bg-white border border-gray-300 text-bookdark hover:bg-gray-50 py-2 px-4 rounded transition-colors flex items-center gap-2">
                    <Share2 size={18} />
                    Chia sẻ
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`py-3 px-4 font-medium ${
                  activeTab === 'description'
                    ? 'text-bookprimary border-b-2 border-bookprimary'
                    : 'text-bookdark/70 hover:text-bookprimary'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Mô tả sách
              </button>
              <button
                className={`py-3 px-4 font-medium ${
                  activeTab === 'reviews'
                    ? 'text-bookprimary border-b-2 border-bookprimary'
                    : 'text-bookdark/70 hover:text-bookprimary'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Đánh giá (24)
              </button>
              <button
                className={`py-3 px-4 font-medium ${
                  activeTab === 'author'
                    ? 'text-bookprimary border-b-2 border-bookprimary'
                    : 'text-bookdark/70 hover:text-bookprimary'
                }`}
                onClick={() => setActiveTab('author')}
              >
                Tác giả
              </button>
            </div>

            <div>
              {activeTab === 'description' && (
                <div className="prose max-w-none text-bookdark/80 leading-relaxed">
                  <p className="mb-4">{book.description}</p>
                  <p>
                    Cuốn sách là lựa chọn hoàn hảo cho những ai yêu thích thể loại {categoryInfo?.name.toLowerCase() || ''} 
                    và muốn khám phá thêm những tác phẩm mới của tác giả {book.author}.
                  </p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Đánh giá từ độc giả</h3>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${
                                star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">4.0/5</span>
                        <span className="ml-2 text-bookdark/70">(24 đánh giá)</span>
                      </div>
                      
                      {/* Rating bars */}
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center">
                            <span className="w-8 text-sm text-bookdark/70">{rating} sao</span>
                            <div className="w-full max-w-xs h-2 mx-3 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-yellow-400 rounded-full" 
                                style={{ 
                                  width: `${rating === 4 ? '60' : rating === 5 ? '30' : rating === 3 ? '8' : '2'}%` 
                                }}
                              ></div>
                            </div>
                            <span className="text-sm text-bookdark/70">
                              {rating === 4 ? '15' : rating === 5 ? '7' : rating === 3 ? '2' : '0'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Sample reviews */}
                    <div className="space-y-6">
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium">Minh Tuấn</p>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-bookdark/70">12/08/2023</p>
                        </div>
                        <p className="text-bookdark/80">
                          Cuốn sách rất hay và sâu sắc. Tôi đã học được rất nhiều điều từ nó.
                          Tác giả truyền tải thông điệp một cách rõ ràng và dễ hiểu. Sẽ giới thiệu cho bạn bè!
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium">Thu Hương</p>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-bookdark/70">05/08/2023</p>
                        </div>
                        <p className="text-bookdark/80">
                          Nội dung sách rất hấp dẫn, tôi không thể đặt xuống cho đến khi đọc xong.
                          Chất lượng in ấn và giấy tốt. Rất hài lòng với mua hàng này!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Viết đánh giá của bạn</h3>
                    <p className="mb-2">Đánh giá của bạn:</p>
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="mr-1">
                          <Star className="w-6 h-6 text-gray-300" />
                        </button>
                      ))}
                    </div>
                    <form>
                      <div className="mb-4">
                        <label htmlFor="review-content" className="block mb-2">Nhận xét của bạn:</label>
                        <textarea
                          id="review-content"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary"
                          rows={4}
                          placeholder="Viết nhận xét của bạn ở đây..."
                        ></textarea>
                      </div>
                      <button type="submit" className="btn-primary">
                        Gửi đánh giá
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {activeTab === 'author' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Về tác giả {book.author}</h3>
                  <p className="text-bookdark/80 mb-4">
                    {book.author} là một tác giả nổi tiếng với nhiều tác phẩm được yêu thích.
                    Với phong cách viết đặc trưng và sâu sắc, các tác phẩm của {book.author} 
                    đã chinh phục trái tim của hàng triệu độc giả trên toàn thế giới.
                  </p>
                  <p className="text-bookdark/80">
                    Ngoài "{book.title}", tác giả còn có nhiều tác phẩm nổi tiếng khác đã được 
                    dịch ra nhiều thứ tiếng và nhận được nhiều giải thưởng văn học danh giá.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related Books */}
          {relatedBooks.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-bookprimary mb-6">Sách Liên Quan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedBooks.map((relatedBook) => (
                  <BookCard key={relatedBook.id} book={relatedBook} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
