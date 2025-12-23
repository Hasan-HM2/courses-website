import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import Pagination from '../components/Pagination';
import { coursesData } from '../data/coursesData';
import { useAuth } from '../context/AuthContext';
import { FaInfoCircle, FaFilter } from 'react-icons/fa';

const Courses = () => {
  const [courses] = useState(coursesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [filter, setFilter] = useState('all');
  const { isLoggedIn } = useAuth();
  const coursesPerPage = 6;
  
  // Filter courses based on selected filter
  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => 
        filter === 'category' ? true : course.level.toLowerCase() === filter
      );

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handleAddToCart = (course) => {
    if (!isLoggedIn) {
      alert('Please login first to add courses to cart');
      return;
    }

    const isCourseInCart = cart.some(item => item.id === course.id);
    
    if (isCourseInCart) {
      alert('This course is already in your cart');
      return;
    }

    const newCart = [...cart, course];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    alert('Course added to cart successfully!');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">All Courses</h1>
      
      {!isLoggedIn && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded flex items-center">
          <FaInfoCircle className="mr-3" />
          <div>
            <p className="font-bold">Note:</p>
            <p>You must be logged in to add courses to your cart</p>
          </div>
        </div>
      )}

      {/* Filter Section */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <FaFilter className="mr-2 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-700">Filter Courses</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            All Courses
          </button>
          <button
            onClick={() => setFilter('beginner')}
            className={`px-4 py-2 rounded-lg ${filter === 'beginner' ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Beginner
          </button>
          <button
            onClick={() => setFilter('intermediate')}
            className={`px-4 py-2 rounded-lg ${filter === 'intermediate' ? 'bg-yellow-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setFilter('advanced')}
            className={`px-4 py-2 rounded-lg ${filter === 'advanced' ? 'bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Advanced
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentCourses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No courses found for the selected filter.</p>
          <button
            onClick={() => setFilter('all')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Show All Courses
          </button>
        </div>
      ) : (
        <>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          <div className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Statistics</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600">{filteredCourses.length}</div>
                <div className="text-gray-600">Available Courses</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-green-600">
                  {filteredCourses.reduce((acc, course) => acc + course.lessonsCount, 0)}
                </div>
                <div className="text-gray-600">Total Lessons</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-purple-600">
                  {new Set(filteredCourses.map(course => course.category)).size}
                </div>
                <div className="text-gray-600">Different Specializations</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Courses;