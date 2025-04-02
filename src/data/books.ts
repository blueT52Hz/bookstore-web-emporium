
import { BookType } from '@/types/book';
import { getRandomImage } from '@/lib/utils';

export const books: BookType[] = [
  {
    id: "book-1",
    title: "Không Gia Đình",
    author: "Hector Malot",
    publisher: "NXB Kim Đồng",
    publishYear: 2020,
    category: "fiction",
    pages: 458,
    price: 120000,
    cover: getRandomImage(600, 900, 100),
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
    cover: getRandomImage(600, 900, 200),
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
    cover: getRandomImage(600, 900, 300),
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
    cover: getRandomImage(600, 900, 400),
    description: "Tuổi trẻ đáng giá bao nhiêu? là tác phẩm được đúc kết từ những trải nghiệm của tác giả Rosie Nguyễn. Từ việc đi nhiều nơi, gặp nhiều người, Rosie nhận ra rằng thời thanh xuân với những tháng ngày rực rỡ đẹp đẽ chẳng bao giờ quay trở lại lần thứ hai. Vì thế, tác giả đã mạnh dạn đưa ra những quan điểm và trải nghiệm của bản thân về quãng thời gian quý giá ấy.",
    bestSeller: true
  },
  {
    id: "book-5",
    title: "Lược Sử Thời Gian",
    author: "Stephen Hawking",
    publisher: "NXB Trẻ",
    publishYear: 2017,
    category: "science",
    pages: 296,
    price: 115000,
    cover: getRandomImage(600, 900, 500),
    description: "Lược sử thời gian là cuốn sách khoa học phổ thông nổi tiếng của nhà vật lý Stephen Hawking. Tác phẩm đề cập tới những câu hỏi như vũ trụ đến từ đâu và nó sẽ đi về đâu. Hawking đã tìm cách giải thích những ý tưởng phức tạp về không gian và thời gian như lỗ đen, big bang, năng lượng tối và các lý thuyết khác.",
    newRelease: true
  },
  {
    id: "book-6",
    title: "Người Giàu Có Nhất Thành Babylon",
    author: "George S. Clason",
    publisher: "NXB Tổng Hợp",
    publishYear: 2019,
    category: "business",
    pages: 210,
    price: 82000,
    cover: getRandomImage(600, 900, 600),
    description: "Người giàu có nhất thành Babylon là cuốn sách kinh điển về tài chính cá nhân được viết dưới dạng các câu chuyện thú vị về cách kiếm tiền, giữ tiền và làm cho tiền sinh sôi nảy nở. Bằng cách sử dụng những câu chuyện đơn giản về thương nhân Babylon cổ đại, George S. Clason đã vẽ ra một bức tranh sinh động về những bí quyết làm giàu.",
    bestSeller: true
  },
  {
    id: "book-7",
    title: "Tôi Tài Giỏi, Bạn Cũng Thế",
    author: "Adam Khoo",
    publisher: "NXB Phụ Nữ",
    publishYear: 2018,
    category: "self-help",
    pages: 327,
    price: 110000,
    cover: getRandomImage(600, 900, 700),
    description: "Tôi tài giỏi, bạn cũng thế! là cuốn sách giúp bạn khám phá ra tiềm năng to lớn tiềm ẩn bên trong mỗi chúng ta. Trong cuốn sách này, bạn sẽ học được những phương pháp và kỹ thuật học tập hiệu quả nhất để áp dụng trong học tập và cuộc sống. Cuốn sách đã giúp thay đổi cuộc sống của hàng triệu học sinh trên toàn thế giới.",
    featured: true
  },
  {
    id: "book-8",
    title: "Dạy Con Làm Giàu - Tập 1",
    author: "Robert T. Kiyosaki",
    publisher: "NXB Trẻ",
    publishYear: 2019,
    category: "business",
    pages: 260,
    price: 79000,
    cover: getRandomImage(600, 900, 800),
    description: "Dạy Con Làm Giàu (Rich Dad, Poor Dad) là cuốn sách kinh điển về tài chính cá nhân. Bằng cách kể về hai người cha - người cha ruột (người cha nghèo) và người cha bạn thân (người cha giàu) - Robert Kiyosaki đã giải thích sự khác biệt về tư duy tài chính giữa người giàu và người nghèo.",
    bestSeller: true
  },
  {
    id: "book-9",
    title: "Điều Kỳ Diệu Của Thay Đổi Tư Duy",
    author: "Carol S. Dweck",
    publisher: "NXB Lao Động",
    publishYear: 2017,
    category: "psychology",
    pages: 300,
    price: 95000,
    cover: getRandomImage(600, 900, 900),
    description: "Điều Kỳ Diệu Của Thay Đổi Tư Duy là cuốn sách về tâm lý học của Carol S. Dweck. Cuốn sách trình bày hai loại tư duy: tư duy cố định và tư duy phát triển. Với tư duy cố định, bạn tin rằng tài năng và trí thông minh là những đặc điểm cố định. Với tư duy phát triển, bạn tin rằng khả năng cơ bản có thể được phát triển thông qua nỗ lực và học hỏi.",
    newRelease: true
  },
  {
    id: "book-10",
    title: "Hai Số Phận",
    author: "Jeffrey Archer",
    publisher: "NXB Văn Học",
    publishYear: 2018,
    category: "fiction",
    pages: 768,
    price: 150000,
    cover: getRandomImage(600, 900, 1000),
    description: "Hai Số Phận (Kane & Abel) là câu chuyện về hai người đàn ông - William Kane và Abel Rosnovski - được sinh ra vào cùng một ngày nhưng trong hoàn cảnh hoàn toàn khác nhau. William Kane là con trai của một triệu phú ngân hàng, trong khi Abel Rosnovski là đứa trẻ mồ côi nghèo khổ. Cuốn sách theo dõi cuộc đời của họ khi họ cố gắng thành công trong thế giới kinh doanh khốc liệt.",
    featured: true
  },
  {
    id: "book-11",
    title: "Hạt Giống Tâm Hồn",
    author: "Nhiều tác giả",
    publisher: "NXB Tổng Hợp",
    publishYear: 2020,
    category: "inspiration",
    pages: 280,
    price: 65000,
    cover: getRandomImage(600, 900, 1100),
    description: "Hạt Giống Tâm Hồn là tuyển tập những câu chuyện ngắn truyền cảm hứng về tình yêu, niềm tin và sự hy vọng. Mỗi câu chuyện như một hạt giống nhỏ bé được gieo vào tâm hồn người đọc, giúp họ vượt qua những khó khăn, thử thách trong cuộc sống và hướng đến những giá trị tốt đẹp.",
    newRelease: true
  },
  {
    id: "book-12",
    title: "Chiến Binh Cầu Vồng",
    author: "Andrea Hirata",
    publisher: "NXB Hội Nhà Văn",
    publishYear: 2019,
    category: "fiction",
    pages: 310,
    price: 89000,
    cover: getRandomImage(600, 900, 1200),
    description: "Chiến Binh Cầu Vồng là câu chuyện cảm động về những đứa trẻ nghèo ở hòn đảo Belitong, Indonesia. Dù sống trong điều kiện thiếu thốn, các em vẫn kiên trì theo đuổi ước mơ học tập dưới sự dìu dắt của người thầy giáo tận tụy. Cuốn sách là bài ca về niềm tin, nghị lực và tình yêu thương con người.",
    bestSeller: true
  }
];

export const categories = [
  {
    id: "fiction",
    name: "Văn Học",
    image: getRandomImage(640, 480, 1300),
    count: books.filter(book => book.category === "fiction").length
  },
  {
    id: "business",
    name: "Kinh Tế",
    image: getRandomImage(640, 480, 1400),
    count: books.filter(book => book.category === "business").length
  },
  {
    id: "self-help",
    name: "Tâm Lý - Kỹ Năng Sống",
    image: getRandomImage(640, 480, 1500),
    count: books.filter(book => book.category === "self-help").length
  },
  {
    id: "science",
    name: "Khoa Học",
    image: getRandomImage(640, 480, 1600),
    count: books.filter(book => book.category === "science").length
  },
  {
    id: "psychology",
    name: "Tâm Lý Học",
    image: getRandomImage(640, 480, 1700),
    count: books.filter(book => book.category === "psychology").length
  },
  {
    id: "inspiration",
    name: "Sách Truyền Cảm Hứng",
    image: getRandomImage(640, 480, 1800),
    count: books.filter(book => book.category === "inspiration").length
  }
];

export function getBookById(id: string): BookType | undefined {
  return books.find(book => book.id === id);
}

export function getBooksByCategory(category: string): BookType[] {
  return books.filter(book => book.category === category);
}

export function getFeaturedBooks(): BookType[] {
  return books.filter(book => book.featured);
}

export function getBestSellerBooks(): BookType[] {
  return books.filter(book => book.bestSeller);
}

export function getNewReleaseBooks(): BookType[] {
  return books.filter(book => book.newRelease);
}

export function getRelatedBooks(bookId: string, limit: number = 4): BookType[] {
  const book = getBookById(bookId);
  if (!book) return [];
  
  return books
    .filter(b => b.category === book.category && b.id !== bookId)
    .slice(0, limit);
}
