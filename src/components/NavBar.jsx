import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaBook, FaShoppingCart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition flex items-center">
            <FaBook className="mr-2" />
            CourseHub
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition font-medium flex items-center">
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link to="/courses" className="hover:text-blue-200 transition font-medium flex items-center">
              <FaBook className="mr-2" />
              Courses
            </Link>
            <Link to="/cart" className="hover:text-blue-200 transition font-medium flex items-center">
              <FaShoppingCart className="mr-2" />
              Cart
            </Link>
            
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition flex items-center"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition flex items-center"
              >
                <FaSignInAlt className="mr-2" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;