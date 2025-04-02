
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Trash2, ShoppingBag, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BookType } from '@/types/book';
import { getBookById } from '@/data/books';

interface CartItem {
  bookId: string;
  quantity: number;
  book: BookType;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load sample cart data
  useEffect(() => {
    // Simulate loading cart data from API or local storage
    setTimeout(() => {
      const sampleCartItems: CartItem[] = [
        {
          bookId: 'book-1',
          quantity: 1,
          book: getBookById('book-1')!
        },
        {
          bookId: 'book-2',
          quantity: 2,
          book: getBookById('book-2')!
        }
      ];
      
      setCartItems(sampleCartItems);
      setIsLoading(false);
    }, 500);
  }, []);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.book.price * item.quantity), 0);
  };

  // Calculate shipping cost (free for orders over 300,000 VND)
  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 300000 ? 0 : 30000;
  };

  // Calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  // Update quantity
  const updateQuantity = (bookId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.bookId === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (bookId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.bookId !== bookId));
    
    toast({
      title: "Đã xóa sản phẩm",
      description: "Sản phẩm đã được xóa khỏi giỏ hàng",
    });
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    
    toast({
      title: "Đã xóa giỏ hàng",
      description: "Tất cả sản phẩm đã được xóa khỏi giỏ hàng",
    });
  };

  // Proceed to checkout
  const proceedToCheckout = () => {
    toast({
      title: "Tiến hành thanh toán",
      description: "Chức năng thanh toán chưa được triển khai trong phiên bản này",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8 bg-bookbg">
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8 bg-bookbg">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-bookprimary mb-8">Giỏ Hàng</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-bookprimary">
                      Sản phẩm ({cartItems.length})
                    </h2>
                    <button
                      onClick={clearCart}
                      className="text-red-500 flex items-center hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={18} className="mr-1" />
                      Xóa tất cả
                    </button>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.bookId} className="py-6 flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="w-20 h-28 flex-shrink-0">
                          <img
                            src={item.book.cover}
                            alt={item.book.title}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow">
                          <Link
                            to={`/product/${item.bookId}`}
                            className="font-bold text-bookprimary hover:text-booksecondary transition-colors line-clamp-2"
                          >
                            {item.book.title}
                          </Link>
                          <p className="text-bookdark/70 text-sm">
                            Tác giả: {item.book.author}
                          </p>
                          <p className="text-booksecondary font-bold mt-1">
                            {item.book.price.toLocaleString('vi-VN')} ₫
                          </p>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                              <button
                                onClick={() => updateQuantity(item.bookId, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.bookId, parseInt(e.target.value) || 1)}
                                className="w-12 h-8 border-t border-b border-gray-300 text-center"
                              />
                              <button
                                onClick={() => updateQuantity(item.bookId, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.bookId)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <Link
                      to="/products"
                      className="flex items-center text-bookprimary hover:text-booksecondary transition-colors"
                    >
                      <ArrowLeft size={18} className="mr-2" />
                      Tiếp tục mua sắm
                    </Link>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-bookprimary mb-6">
                    Tóm Tắt Đơn Hàng
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-bookdark">
                      <span>Tạm tính</span>
                      <span>{calculateSubtotal().toLocaleString('vi-VN')} ₫</span>
                    </div>
                    <div className="flex justify-between text-bookdark">
                      <span>Phí vận chuyển</span>
                      <span>
                        {calculateShipping() === 0
                          ? 'Miễn phí'
                          : `${calculateShipping().toLocaleString('vi-VN')} ₫`}
                      </span>
                    </div>
                    
                    {calculateShipping() === 0 && (
                      <div className="flex items-center text-green-600 text-sm">
                        <CheckCircle size={16} className="mr-2" />
                        Bạn được miễn phí vận chuyển
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                      <span>Tổng cộng</span>
                      <span className="text-booksecondary text-xl">
                        {calculateTotal().toLocaleString('vi-VN')} ₫
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={proceedToCheckout}
                    className="w-full btn-primary mt-6 flex items-center justify-center"
                  >
                    <ShoppingBag size={18} className="mr-2" />
                    Tiến hành thanh toán
                  </button>

                  <div className="mt-6 text-sm text-bookdark/70">
                    <p>* Đơn hàng từ 300.000₫ được miễn phí vận chuyển</p>
                    <p>* Thời gian giao hàng: 1-3 ngày (nội thành), 3-5 ngày (tỉnh)</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Empty Cart
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-20 h-20 bg-bookprimary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={32} className="text-bookprimary" />
              </div>
              <h2 className="text-2xl font-bold text-bookprimary mb-4">Giỏ hàng của bạn đang trống</h2>
              <p className="text-bookdark/80 mb-6">
                Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng.
              </p>
              <Link to="/products" className="btn-primary">
                Tiếp tục mua sắm
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
