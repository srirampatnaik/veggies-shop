import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <h3 className="text-white text-xl font-semibold p-4 w-full">
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;