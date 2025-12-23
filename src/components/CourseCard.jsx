import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaClock, FaUserGraduate, FaArrowRight } from 'react-icons/fa';

const CourseCard = ({ course, onAddToCart }) => {
  const getLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
            <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {course.category}
            </span>
          </div>
          <span className="text-2xl font-bold text-blue-600">${course.price}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.shortDescription}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <FaBook className="mr-1" />
              {course.lessonsCount} lessons
            </span>
            <span className="flex items-center">
              <FaClock className="mr-1" />
              {course.duration}
            </span>
          </div>
          <span className="flex items-center">
            <FaUserGraduate className="mr-1" />
            {course.instructor}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <Link
            to={`/course/${course.id}`}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium flex items-center"
          >
            View Details
            <FaArrowRight className="ml-2" />
          </Link>
          <button
            onClick={() => onAddToCart(course)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;