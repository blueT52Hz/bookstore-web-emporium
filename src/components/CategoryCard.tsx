
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
    count: number;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/products?category=${category.id}`} 
      className="relative group overflow-hidden rounded-lg"
    >
      <div className="aspect-[4/3]">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-end p-6 text-white">
          <h3 className="text-xl font-bold mb-1">{category.name}</h3>
          <p className="text-sm opacity-80">{category.count} cuốn sách</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
