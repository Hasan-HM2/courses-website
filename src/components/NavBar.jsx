import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaBook, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="w-full px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold hover:text-blue-200 transition flex items-center truncate max-w-[60%]"
          >
            <FaBook className="mr-2 text-lg sm:text-xl" />
            <span className="hidden xs:inline">CourseHub</span>
            <span className="xs:hidden">CH</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link 
              to="/" 
              className="hover:text-blue-200 transition font-medium flex items-center text-sm lg:text-base"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link 
              to="/courses" 
              className="hover:text-blue-200 transition font-medium flex items-center text-sm lg:text-base"
            >
              <FaBook className="mr-2" />
              Courses
            </Link>
            <Link 
              to="/cart" 
              className="hover:text-blue-200 transition font-medium flex items-center text-sm lg:text-base"
            >
              <FaShoppingCart className="mr-2" />
              Cart
            </Link>
            
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg transition flex items-center text-sm lg:text-base"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg transition flex items-center text-sm lg:text-base"
              >
                <FaSignInAlt className="mr-2" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl p-2 hover:text-blue-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 mt-3' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-3 pt-2 border-t border-blue-500">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-200 transition font-medium flex items-center py-2 px-2"
            >
              <FaHome className="mr-3" />
              Home
            </Link>
            <Link 
              to="/courses" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-200 transition font-medium flex items-center py-2 px-2"
            >
              <FaBook className="mr-3" />
              Courses
            </Link>
            <Link 
              to="/cart" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-200 transition font-medium flex items-center py-2 px-2"
            >
              <FaShoppingCart className="mr-3" />
              Cart
            </Link>
            
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-2 rounded-lg transition flex items-center text-left"
              >
                <FaSignOutAlt className="mr-3" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-2 rounded-lg transition flex items-center"
              >
                <FaSignInAlt className="mr-3" />
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