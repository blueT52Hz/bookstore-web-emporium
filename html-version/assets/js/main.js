// Main JavaScript file for the Bookstore Website

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
  
  if (menuToggle && mobileMenu && mobileMenuOverlay && mobileMenuCloseBtn) {
    // Open menu
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('open');
      mobileMenuOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    
    // Close menu
    function closeMenu() {
      mobileMenu.classList.remove('open');
      mobileMenuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    
    mobileMenuCloseBtn.addEventListener('click', closeMenu);
    mobileMenuOverlay.addEventListener('click', closeMenu);
    
    // Close menu when link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
  
  // Banner slider functionality
  const bannerSlides = document.querySelectorAll('.banner-slide');
  const bannerDots = document.querySelectorAll('.banner-dot');
  
  if (bannerSlides.length > 0 && bannerDots.length > 0) {
    let currentSlide = 0;
    
    // Initialize slider
    showSlide(currentSlide);
    
    // Automatic slideshow
    setInterval(() => {
      currentSlide = (currentSlide + 1) % bannerSlides.length;
      showSlide(currentSlide);
    }, 5000);
    
    // Show the selected slide
    function showSlide(index) {
      bannerSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      
      bannerDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
    
    // Click on dots to change slide
    bannerDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
    });
  }
  
  // Active navigation link highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if ((href === '/' && currentPath === '/') || 
        (href !== '/' && currentPath.includes(href))) {
      link.classList.add('active');
    }
  });
  
  // Mobile navigation active link highlighting
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  mobileNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if ((href === '/' && currentPath === '/') || 
        (href !== '/' && currentPath.includes(href))) {
      link.classList.add('active');
    }
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // In a real application, you would send this to your server
        alert('Cảm ơn bạn đã đăng ký nhận thông tin từ chúng tôi!');
        emailInput.value = '';
      } else {
        alert('Vui lòng nhập địa chỉ email của bạn.');
      }
    });
  }
  
  // Books data
  const books = [
    {
      id: "book-1",
      title: "Không Gia Đình",
      author: "Hector Malot",
      publisher: "NXB Kim Đồng",
      publishYear: 2020,
      category: "fiction",
      pages: 458,
      price: 120000,
      cover: "https://picsum.photos/seed/100/600/900",
      description: "Không gia đình kể về cuộc đời của cậu bé Rémi mồ côi bị bán cho một người nghệ sĩ dạo già tên Vitalis từ khi 8 tuổi. Theo chân người nghệ sĩ dạo già và đoàn thú, cậu bé đã chu du khắp đất nước Pháp, đối mặt với nhiều hiểm nguy, học hỏi nhiều điều mới mẻ và trưởng thành hơn. Sau nhiều biến cố, cuối cùng Rémi cũng tìm được gia đình thực sự của mình.",
      featured: true,
      bestSeller: true
    },
    {
      id: "book-2",
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      publisher: "NXB Tổng Hợp",
      publishYear: 2019,
      category: "self-help",
      pages: 320,
      price: 88000,
      cover: "https://picsum.photos/seed/200/600/900",
      description: "Đắc nhân tâm là cuốn sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Đây là cuốn sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất của tờ The New York Times suốt 10 năm liền. Riêng bản tiếng Anh của sách đã bán được hơn 15 triệu bản trên thế giới. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong lĩnh vực giao tiếp và ứng xử.",
      featured: true,
      bestSeller: true
    },
    {
      id: "book-3",
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      publisher: "NXB Hội Nhà Văn",
      publishYear: 2020,
      category: "fiction",
      pages: 224,
      price: 69000,
      cover: "https://picsum.photos/seed/300/600/900",
      description: "Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người. Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhưng lại chứa đựng những bài học về hành trình khám phá cuộc sống.",
      featured: true
    },
    {
      id: "book-4",
      title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
      author: "Rosie Nguyễn",
      publisher: "NXB Hội Nhà Văn",
      publishYear: 2018,
      category: "self-help",
      pages: 285,
      price: 78000,
      cover: "https://picsum.photos/seed/400/600/900",
      description: "Tuổi trẻ đáng giá bao nhiêu? là tác phẩm được đúc kết từ những trải nghiệm của tác giả Rosie Nguyễn. Từ việc đi nhiều nơi, gặp nhiều người, Rosie nhận ra rằng thời thanh xuân với những tháng ngày rực rỡ đẹp đẽ chẳng bao giờ quay trở lại lần thứ hai. Vì thế, tác giả đã mạnh dạn đưa ra những quan điểm và trải nghiệm của bản thân về quãng thời gian quý giá ấy.",
      bestSeller: true
    }
  ];
  
  // Categories data
  const categories = [
    {
      id: "fiction",
      name: "Văn Học",
      image: "https://picsum.photos/seed/1300/640/480",
      count: 5
    },
    {
      id: "business",
      name: "Kinh Tế",
      image: "https://picsum.photos/seed/1400/640/480",
      count: 3
    },
    {
      id: "self-help",
      name: "Tâm Lý - Kỹ Năng Sống",
      image: "https://picsum.photos/seed/1500/640/480",
      count: 4
    },
    {
      id: "science",
      name: "Khoa Học",
      image: "https://picsum.photos/seed/1600/640/480",
      count: 2
    },
    {
      id: "psychology",
      name: "Tâm Lý Học",
      image: "https://picsum.photos/seed/1700/640/480",
      count: 3
    },
    {
      id: "inspiration",
      name: "Sách Truyền Cảm Hứng",
      image: "https://picsum.photos/seed/1800/640/480",
      count: 2
    }
  ];
  
  // News data
  const news = [
    {
      id: "news-1",
      title: "Buổi Ra Mắt Sách 'Hành Trình Về Phương Đông'",
      date: "2023-03-15",
      image: "https://picsum.photos/seed/news1/800/500",
      excerpt: "Buổi ra mắt sách 'Hành Trình Về Phương Đông' bản tái bản đã diễn ra thành công tại Hà Nội với sự tham gia của hơn 200 độc giả.",
      content: "Nội dung đầy đủ của bài viết...",
    },
    {
      id: "news-2",
      title: "Top 10 Cuốn Sách Bán Chạy Nhất Tháng 3/2023",
      date: "2023-04-01",
      image: "https://picsum.photos/seed/news2/800/500",
      excerpt: "Cùng Bookstore điểm qua 10 cuốn sách bán chạy nhất trong tháng 3 vừa qua, với nhiều bất ngờ đến từ các tác giả mới.",
      content: "Nội dung đầy đủ của bài viết...",
    },
    {
      id: "news-3",
      title: "Workshop 'Đọc Sách Hiệu Quả' Dành Cho Sinh Viên",
      date: "2023-04-10",
      image: "https://picsum.photos/seed/news3/800/500",
      excerpt: "Bookstore phối hợp cùng các trường đại học tổ chức workshop hướng dẫn sinh viên phương pháp đọc sách hiệu quả.",
      content: "Nội dung đầy đủ của bài viết...",
    }
  ];
  
  // Function to format price with Vietnamese currency
  function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  }
  
  // Function to create book card HTML
  function createBookCard(book) {
    return `
      <div class="card book-card">
        <img src="${book.cover}" alt="${book.title}" class="book-card-cover">
        <div class="book-card-body">
          <h3 class="book-card-title">${book.title}</h3>
          <p class="book-card-author">${book.author}</p>
          <p class="book-card-price">${formatPrice(book.price)}</p>
        </div>
      </div>
    `;
  }
  
  // Function to create category card HTML
  function createCategoryCard(category) {
    return `
      <a href="pages/category.html?id=${category.id}" class="category-card">
        <img src="${category.image}" alt="${category.name}">
        <div class="category-overlay">
          <h3 class="category-name">${category.name}</h3>
          <p class="category-count">${category.count} sản phẩm</p>
        </div>
      </a>
    `;
  }
  
  // Function to create news card HTML
  function createNewsCard(newsItem) {
    // Format date
    const date = new Date(newsItem.date);
    const formattedDate = new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
    
    return `
      <div class="card news-card">
        <img src="${newsItem.image}" alt="${newsItem.title}" class="news-card-image">
        <div class="news-card-body">
          <p class="news-card-date">${formattedDate}</p>
          <h3 class="news-card-title">${newsItem.title}</h3>
          <p class="news-card-excerpt">${newsItem.excerpt}</p>
          <a href="pages/news-detail.html?id=${newsItem.id}" class="read-more">
            Đọc tiếp
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    `;
  }
  
  // Populate featured books section
  const featuredBooksContainer = document.querySelector('#featured-books');
  if (featuredBooksContainer) {
    const featuredBooks = books.filter(book => book.featured);
    
    if (featuredBooks.length > 0) {
      featuredBooksContainer.innerHTML = featuredBooks
        .slice(0, 4)
        .map(createBookCard)
        .join('');
    }
  }
  
  // Populate bestseller books section
  const bestSellerBooksContainer = document.querySelector('#bestseller-books');
  if (bestSellerBooksContainer) {
    const bestSellerBooks = books.filter(book => book.bestSeller);
    
    if (bestSellerBooks.length > 0) {
      bestSellerBooksContainer.innerHTML = bestSellerBooks
        .slice(0, 4)
        .map(createBookCard)
        .join('');
    }
  }
  
  // Populate categories section
  const categoriesContainer = document.querySelector('#categories');
  if (categoriesContainer) {
    categoriesContainer.innerHTML = categories
      .slice(0, 6)
      .map(createCategoryCard)
      .join('');
  }
  
  // Populate news section
  const newsContainer = document.querySelector('#recent-news');
  if (newsContainer) {
    newsContainer.innerHTML = news
      .map(createNewsCard)
      .join('');
  }
}); 