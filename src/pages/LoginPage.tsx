
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] = useState(false);
  const { toast } = useToast();

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    remember: false
  });

  // Register form state
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  // Form errors
  const [loginErrors, setLoginErrors] = useState({
    email: '',
    password: ''
  });

  const [registerErrors, setRegisterErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: ''
  });

  // Handle login form changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (loginErrors[name as keyof typeof loginErrors]) {
      setLoginErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle register form changes
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (registerErrors[name as keyof typeof registerErrors]) {
      setRegisterErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate login form
  const validateLoginForm = () => {
    let valid = true;
    const newErrors = { ...loginErrors };
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginForm.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
      valid = false;
    } else if (!emailRegex.test(loginForm.email)) {
      newErrors.email = 'Email không hợp lệ';
      valid = false;
    }
    
    // Validate password
    if (!loginForm.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
      valid = false;
    }
    
    setLoginErrors(newErrors);
    return valid;
  };

  // Validate register form
  const validateRegisterForm = () => {
    let valid = true;
    const newErrors = { ...registerErrors };
    
    // Validate name
    if (!registerForm.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!registerForm.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
      valid = false;
    } else if (!emailRegex.test(registerForm.email)) {
      newErrors.email = 'Email không hợp lệ';
      valid = false;
    }
    
    // Validate phone (optional but must be valid if provided)
    if (registerForm.phone) {
      const phoneRegex = /^[0-9]{10,11}$/;
      if (!phoneRegex.test(registerForm.phone)) {
        newErrors.phone = 'Số điện thoại không hợp lệ';
        valid = false;
      }
    }
    
    // Validate password
    if (!registerForm.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
      valid = false;
    } else if (registerForm.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
      valid = false;
    }
    
    // Validate confirm password
    if (!registerForm.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu';
      valid = false;
    } else if (registerForm.password !== registerForm.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
      valid = false;
    }
    
    // Validate terms agreement
    if (!registerForm.agreeTerms) {
      newErrors.agreeTerms = 'Bạn phải đồng ý với điều khoản sử dụng';
      valid = false;
    }
    
    setRegisterErrors(newErrors);
    return valid;
  };

  // Handle login submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateLoginForm()) {
      // Simulate login API call
      toast({
        title: "Đăng nhập thành công",
        description: "Chào mừng bạn quay trở lại với Bookstore!",
      });
    }
  };

  // Handle register submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateRegisterForm()) {
      // Simulate register API call
      toast({
        title: "Đăng ký thành công",
        description: "Chào mừng bạn đến với Bookstore!",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-bookbg py-12">
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Tabs */}
              <div className="flex">
                <button
                  className={`flex-1 py-4 font-bold ${
                    activeTab === 'login'
                      ? 'bg-bookprimary text-white'
                      : 'bg-gray-100 text-bookdark hover:bg-gray-200 transition-colors'
                  }`}
                  onClick={() => setActiveTab('login')}
                >
                  Đăng Nhập
                </button>
                <button
                  className={`flex-1 py-4 font-bold ${
                    activeTab === 'register'
                      ? 'bg-bookprimary text-white'
                      : 'bg-gray-100 text-bookdark hover:bg-gray-200 transition-colors'
                  }`}
                  onClick={() => setActiveTab('register')}
                >
                  Đăng Ký
                </button>
              </div>

              <div className="p-6">
                {/* Login Form */}
                {activeTab === 'login' && (
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-4">
                      <label htmlFor="login-email" className="block text-bookdark font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="login-email"
                        name="email"
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                          loginErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="example@gmail.com"
                      />
                      {loginErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{loginErrors.email}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="login-password" className="block text-bookdark font-medium mb-2">
                        Mật khẩu <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="login-password"
                          name="password"
                          value={loginForm.password}
                          onChange={handleLoginChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            loginErrors.password ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {loginErrors.password && (
                        <p className="text-red-500 text-sm mt-1">{loginErrors.password}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="remember"
                          name="remember"
                          checked={loginForm.remember}
                          onChange={handleLoginChange}
                          className="mr-2"
                        />
                        <label htmlFor="remember" className="text-sm text-bookdark">
                          Ghi nhớ đăng nhập
                        </label>
                      </div>
                      <Link to="/forgot-password" className="text-sm text-booksecondary hover:underline">
                        Quên mật khẩu?
                      </Link>
                    </div>

                    <button type="submit" className="w-full btn-primary">
                      Đăng Nhập
                    </button>

                    <div className="mt-6 text-center">
                      <p className="text-bookdark">
                        Chưa có tài khoản?{' '}
                        <button
                          type="button"
                          className="text-booksecondary hover:underline"
                          onClick={() => setActiveTab('register')}
                        >
                          Đăng ký ngay
                        </button>
                      </p>
                    </div>
                  </form>
                )}

                {/* Register Form */}
                {activeTab === 'register' && (
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-4">
                      <label htmlFor="register-name" className="block text-bookdark font-medium mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="register-name"
                        name="name"
                        value={registerForm.name}
                        onChange={handleRegisterChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                          registerErrors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nguyễn Văn A"
                      />
                      {registerErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{registerErrors.name}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="register-email" className="block text-bookdark font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="register-email"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                          registerErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="example@gmail.com"
                      />
                      {registerErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{registerErrors.email}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="register-phone" className="block text-bookdark font-medium mb-2">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="register-phone"
                        name="phone"
                        value={registerForm.phone}
                        onChange={handleRegisterChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                          registerErrors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="0912345678"
                      />
                      {registerErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{registerErrors.phone}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="register-password" className="block text-bookdark font-medium mb-2">
                        Mật khẩu <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showRegisterPassword ? 'text' : 'password'}
                          id="register-password"
                          name="password"
                          value={registerForm.password}
                          onChange={handleRegisterChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            registerErrors.password ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        >
                          {showRegisterPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {registerErrors.password && (
                        <p className="text-red-500 text-sm mt-1">{registerErrors.password}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="register-confirm-password" className="block text-bookdark font-medium mb-2">
                        Xác nhận mật khẩu <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showRegisterConfirmPassword ? 'text' : 'password'}
                          id="register-confirm-password"
                          name="confirmPassword"
                          value={registerForm.confirmPassword}
                          onChange={handleRegisterChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bookprimary ${
                            registerErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          onClick={() => setShowRegisterConfirmPassword(!showRegisterConfirmPassword)}
                        >
                          {showRegisterConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {registerErrors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{registerErrors.confirmPassword}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agree-terms"
                          name="agreeTerms"
                          checked={registerForm.agreeTerms}
                          onChange={handleRegisterChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="agree-terms" className="text-sm text-bookdark">
                          Tôi đồng ý với{' '}
                          <Link to="/terms" className="text-booksecondary hover:underline">
                            Điều khoản sử dụng
                          </Link>{' '}
                          và{' '}
                          <Link to="/privacy" className="text-booksecondary hover:underline">
                            Chính sách bảo mật
                          </Link>
                        </label>
                      </div>
                      {registerErrors.agreeTerms && (
                        <p className="text-red-500 text-sm mt-1">{registerErrors.agreeTerms}</p>
                      )}
                    </div>

                    <button type="submit" className="w-full btn-primary">
                      Đăng Ký
                    </button>

                    <div className="mt-6 text-center">
                      <p className="text-bookdark">
                        Đã có tài khoản?{' '}
                        <button
                          type="button"
                          className="text-booksecondary hover:underline"
                          onClick={() => setActiveTab('login')}
                        >
                          Đăng nhập
                        </button>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
