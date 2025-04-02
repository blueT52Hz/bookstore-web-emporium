
import React from 'react';
import { Link } from 'react-router-dom';
import { BookType } from '@/types/book';

interface BookCardProps {
  book: BookType;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card group">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <Link to={`/product/${book.id}`} className="btn-secondary w-full text-center">
            Xem chi tiết
          </Link>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/product/${book.id}`} className="block">
          <h3 className="font-bold text-lg mb-1 line-clamp-2 hover:text-booksecondary transition-colors">
            {book.title}
          </h3>
        </Link>
        <p className="text-sm text-bookdark/70 mb-2">{book.author}</p>
        <p className="text-bookprimary font-bold">{book.price.toLocaleString('vi-VN')} ₫</p>
      </div>
    </div>
  );
};

export default BookCard;
