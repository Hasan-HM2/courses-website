import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { useAuth } from '../context/AuthContext';
import { FaBook, FaClock, FaUserGraduate, FaLanguage, FaCalendarAlt, FaCheck, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [cart, setCart] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const foundCourse = coursesData.find(c => c.id === parseInt(id));
    if (!foundCourse) {
      navigate('/404');
      return;
    }
    setCourse(foundCourse);

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('Please login first to add courses to cart');
      return;
    }

    if (!course) return;

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

  const getLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (!course) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">⏳</div>
        <p className="text-xl text-gray-600">Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link
        to="/courses"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Courses
      </Link>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
                <span className="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-bold">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl opacity-90">{course.shortDescription}</p>
            </div>
            <div className="text-center bg-white text-gray-800 rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">${course.price}</div>
              <div className="text-gray-600 text-sm">Price</div>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About This Course</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{course.fullDescription}</p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span>Build complete React applications</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span>State management using Hooks</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span>Working with APIs</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span>Developing practical projects</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Course Info Card */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center">
                      <FaBook className="mr-2" />
                      Lessons:
                    </span>
                    <span className="font-bold">{course.lessonsCount} lessons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Level:</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${getLevelColor(course.level)} text-white font-bold`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center">
                      <FaClock className="mr-2" />
                      Duration:
                    </span>
                    <span className="font-bold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      Days:
                    </span>
                    <span className="font-bold">{course.days.join(', ')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-bold">{course.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center">
                      <FaLanguage className="mr-2" />
                      Language:
                    </span>
                    <span className="font-bold">{course.language}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center">
                      <FaUserGraduate className="mr-2" />
                      Instructor:
                    </span>
                    <span className="font-bold">{course.instructor}</span>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!isLoggedIn}
                className={`w-full py-3 rounded-lg text-lg font-bold transition flex items-center justify-center ${!isLoggedIn ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
              >
                <FaShoppingCart className="mr-3" />
                {!isLoggedIn ? 'Login to Add to Cart' : 'Add to Cart'}
              </button>

              {!isLoggedIn && (
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">You need to login to add this course to cart</p>
                  <Link
                    to="/login"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Click here to login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;