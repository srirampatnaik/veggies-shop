import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { items, addItem, removeItem, updateQuantity } = useCart();
  const cartItem = items.find(item => item.id === product.id);

  const handleAddToCart = () => {
    addItem(product);
  };

  const handleUpdateQuantity = (quantity: number) => {
    if (quantity === 0) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, quantity);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        {cartItem ? (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{cartItem.quantity}</span>
            <button
              onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;