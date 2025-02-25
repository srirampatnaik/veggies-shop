import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, total } = useCart();
  const [isReviewing, setIsReviewing] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <ShoppingBag className="w-6 h-6 mr-2 text-gray-900" />
              <h2 className="text-xl font-semibold text-gray-900">Your Cart</h2>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-900 mt-8">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setIsReviewing(true)}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Review Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Review Modal */}
      {isReviewing && (
        <OrderReview
          onClose={() => setIsReviewing(false)}
          onConfirm={() => {
            // Handle order confirmation
            console.log('Order confirmed');
            setIsReviewing(false);
            onClose();
          }}
        />
      )}
    </div>
  );
};

interface OrderReviewProps {
  onClose: () => void;
  onConfirm: () => void;
}

const OrderReview: React.FC<OrderReviewProps> = ({ onClose, onConfirm }) => {
  const { items, total } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Review Your Order</h3>
        <div className="max-h-60 overflow-y-auto mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <span className="text-gray-900">{item.name}</span>
              <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-semibold text-lg mb-6">
          <span className="text-gray-900">Total:</span>
          <span className="text-gray-900">${total.toFixed(2)}</span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-900"
          >
            Back
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
