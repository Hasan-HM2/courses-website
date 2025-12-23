import React from 'react';
import Navbar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">CourseHub</h3>
              <p className="text-gray-400 mt-2">Your learning journey starts here</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© 2025 CourseHub. All rights reserved.</p>
              <p className="text-gray-400 mt-1">The leading e-learning platform in the Arab world</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;