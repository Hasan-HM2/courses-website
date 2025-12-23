import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart, FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (courseId) => {
    const newCart = cart.filter(item => item.id !== courseId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (!isLoggedIn) {
    return (
      <div className="text-center py-12">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-lg max-w-2xl mx-auto mb-6">
          <FaExclamationTriangle className="text-3xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Authentication Required</h2>
          <p className="mb-4">You need to be logged in to view your cart.</p>
          <Link
            to="/login"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
        <FaShoppingCart className="mr-3" />
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <FaShoppingCart className="text-6xl text-gray-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some courses to get started!</p>
          <Link
            to="/courses"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Browse Courses
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Cart Items ({cart.length})</h2>
                <button
                  onClick={clearCart}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition flex items-center"
                >
                  <FaTrash className="mr-2" />
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                {cart.map(course => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center">
                            <span className="font-medium mr-1">Level:</span>
                            {course.level}
                          </span>
                          <span className="flex items-center">
                            <span className="font-medium mr-1">Lessons:</span>
                            {course.lessonsCount}
                          </span>
                          <span className="flex items-center">
                            <span className="font-medium mr-1">Instructor:</span>
                            {course.instructor}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <span className="text-xl font-bold text-blue-600">${course.price}</span>
                        <button
                          onClick={() => removeFromCart(course.id)}
                          className="text-red-500 hover:text-red-700 transition"
                          title="Remove from cart"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal ({cart.length} items)</span>
                <span className="font-bold">${totalPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax</span>
                <span className="font-bold">${(totalPrice * 0.15).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${(totalPrice * 1.15).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <Link
                to="/courses"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => alert('Checkout functionality is not implemented in this demo.')}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition flex items-center"
              >
                Proceed to Checkout
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Course Statistics */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{cart.length}</div>
              <div className="text-gray-600">Courses in Cart</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {cart.reduce((acc, course) => acc + course.lessonsCount, 0)}
              </div>
              <div className="text-gray-600">Total Lessons</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {new Set(cart.map(course => course.category)).size}
              </div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;