import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="text-gray-900">${item.price.toFixed(2)} / each</p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="p-1 hover:bg-gray-100 rounded text-gray-900"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center text-gray-900">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded text-gray-900"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => removeItem(item.id)}
            className="p-1 hover:bg-red-100 text-red-500 rounded ml-2"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
