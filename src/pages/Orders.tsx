import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Orders: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Mock orders data - in a real app, this would come from an API
  const orders = [
    {
      id: '1',
      date: '2025-02-25',
      status: 'Delivered',
      total: 45.99,
      items: [
        { name: 'Fresh Tomatoes', quantity: 2, price: 5.99 },
        { name: 'Organic Spinach', quantity: 1, price: 3.99 },
        { name: 'Bell Peppers', quantity: 3, price: 2.99 }
      ]
    },
    {
      id: '2',
      date: '2025-02-23',
      status: 'Processing',
      total: 32.50,
      items: [
        { name: 'Carrots', quantity: 2, price: 4.99 },
        { name: 'Broccoli', quantity: 1, price: 3.99 }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      <div className="space-y-6">
        {orders.map(order => (
          <div key={order.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                  <p className="text-gray-600">{order.date}</p>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 -mx-6 px-6 py-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Order Items</h3>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-600"> × {item.quantity}</span>
                      </div>
                      <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 -mx-6 px-6 py-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>${order.total.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-4">
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View Order Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
