
import React from 'react';
import { Link } from 'react-router-dom';
import { NewsType } from '@/types/news';
import { formatDate } from '@/lib/utils';

interface NewsCardProps {
  news: NewsType;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/news/${news.id}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="text-xs text-bookdark/60 mb-2">
          {formatDate(news.date)}
        </div>
        <Link to={`/news/${news.id}`} className="block">
          <h3 className="font-bold text-xl mb-2 line-clamp-2 hover:text-booksecondary transition-colors">
            {news.title}
          </h3>
        </Link>
        <p className="text-bookdark/80 mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        <Link 
          to={`/news/${news.id}`} 
          className="inline-block text-booksecondary font-semibold hover:underline"
        >
          Đọc thêm
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
