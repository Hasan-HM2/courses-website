import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaCertificate, FaLaptopCode, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-2xl sm:text-3xl md:text-4xl text-blue-600" />,
      title: "High-Quality Courses",
      description: "Courses carefully prepared by industry experts"
    },
    {
      icon: <FaLaptopCode className="text-2xl sm:text-3xl md:text-4xl text-green-600" />,
      title: "Practical Learning",
      description: "Hands-on projects with every course"
    },
    {
      icon: <FaUsers className="text-2xl sm:text-3xl md:text-4xl text-purple-600" />,
      title: "Interactive Community",
      description: "Join a community of learners and developers"
    },
    {
      icon: <FaCertificate className="text-2xl sm:text-3xl md:text-4xl text-orange-600" />,
      title: "Certified Courses",
      description: "Get certified certificates upon course completion"
    }
  ];

  const testimonials = [
    {
      name: "AlHassan Mohammad",
      role: "Web Developer",
      text: "The courses completely changed my career path. I thank the CourseHub team for their excellent effort."
    },
    {
      name: "Maryam",
      role: "UX/UI Designer",
      text: "I found everything I needed to start my career in UI/UX design."
    },
    {
      name: "Reem Hasan",
      role: "Engineering Student",
      text: "The platform helped me learn practical skills that I didn't learn in university."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="text-center py-6 sm:py-8 md:py-12 px-4">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
          Welcome to <span className="text-blue-600">CourseHub</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-2xl mx-auto px-2">
          The leading e-learning platform for programming and web development education in the Arab world
        </p>
        <div className="flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-4">
          <Link
            to="/courses"
            className="w-full xs:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-medium transition text-center"
          >
            Browse Courses
          </Link>
          <Link
            to="/login"
            className="w-full xs:w-auto bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-medium transition text-center"
          >
            Start Learning Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-8 sm:mb-12 md:mb-16 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">
          About Our Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* What We Offer? */}
          <div className="group bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500 hover:bg-blue-50/30 cursor-pointer">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                What We Offer?
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                We offer specialized courses in programming and web development fields, specifically designed for Arab learners.
                We aim to bridge the gap between academic learning and job market requirements.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                All our courses are presented in Arabic with high quality, focusing on practical and applied aspects.
              </p>
            </div>
          </div>

          {/* Who Are These Courses For? */}
          <div className="group bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-500 hover:bg-green-50/30 cursor-pointer">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-1.205a21.4 21.4 0 00-2.2-5.197"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                Who Are These Courses For?
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">
              These courses are designed for anyone who wants to learn programming and web development, whether you are:
            </p>

            <ul className="text-sm sm:text-base text-gray-600 space-y-2">
              <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-green-500 mr-2 mt-1">•</span>
                A beginner wanting to start your programming journey
              </li>
              <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-75">
                <span className="text-green-500 mr-2 mt-1">•</span>
                A developer wanting to upgrade your skills
              </li>
              <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-100">
                <span className="text-green-500 mr-2 mt-1">•</span>
                A student wanting to learn practical skills
              </li>
              <li className="flex items-start group-hover:translate-x-2 transition-transform duration-300 delay-150">
                <span className="text-green-500 mr-2 mt-1">•</span>
                A professional wanting to change career paths
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-8 sm:mb-12 md:mb-16 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="mb-3 sm:mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-8 sm:mb-12 md:mb-16 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">
          What Our Students Say?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md">
              <p className="text-sm sm:text-base text-gray-600 italic mb-3 sm:mb-4">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-3 sm:pt-4">
                <h4 className="font-bold text-gray-800 text-base sm:text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-blue-600 text-sm sm:text-base">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-none sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 mx-4 sm:mx-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 opacity-90 px-2">
          Join thousands of learners who started their journey with us
        </p>
        <Link
          to="/courses"
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-bold transition"
        >
          <span className="flex items-center justify-center">
            Start Learning Now
            <FaArrowRight className="ml-2" />
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Home;