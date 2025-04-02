
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Giới Thiệu', path: '/about' },
    { name: 'Sản Phẩm', path: '/products' },
    { name: 'Tin Tức', path: '/news' },
    { name: 'Liên Hệ', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Tuyển Dụng', path: '/careers' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="flex items-center gap-4">
            {!isMobile && (
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium transition-colors duration-200 hover:text-booksecondary ${
                      isActive(link.path) ? 'text-booksecondary' : 'text-bookdark'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            <div className="flex items-center space-x-4">
              <Link to="/search" className="text-bookdark hover:text-booksecondary transition-colors">
                <Search size={20} />
              </Link>
              <Link to="/cart" className="text-bookdark hover:text-booksecondary transition-colors">
                <ShoppingCart size={20} />
              </Link>
              <Link to="/login" className="text-bookdark hover:text-booksecondary transition-colors">
                <User size={20} />
              </Link>
              {isMobile && (
                <button onClick={toggleMenu} className="md:hidden text-bookdark">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        >
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-bookprimary">Menu</span>
                <button onClick={closeMenu}>
                  <X size={24} className="text-bookdark" />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-2 font-medium transition-colors duration-200 hover:text-booksecondary ${
                      isActive(link.path) ? 'text-booksecondary' : 'text-bookdark'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Link 
                  to="/login" 
                  className="block w-full btn-primary text-center" 
                  onClick={closeMenu}
                >
                  Đăng nhập / Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
