import React from 'react';
import '../styles/Home.css';
import { Code } from 'lucide-react';

const Home = () => {
  // Scroll to About section
  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="hidden min-h-screen bg-gradient-to-br from-slate-50 to-blue-50  md:flex flex-col items-center justify-center w-full relative fade-in delay-1" id='home'>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-300 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="text-center">
          {/* Responsive headline */}
          <h1 className="hero-line1 font-medium text-gray-800 whitespace-nowrap text-4xl  md:text-8xl lg:text-9xl fade-in-up delay-2">
            <span 
          className="bg-gradient-to-b from-[#075985] to-[#48ace3] bg-clip-text text-transparent "
          style={{
            background: 'linear-gradient(180deg, #075985 0%, #48ace3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          L
        </span>EARN <span className="text-grey-800">&</span>
          </h1>

          <h1 className="hero-line2 font-medium text-gray-800 flex flex-wrap justify-center items-center text-3xl sm:text-7xl md:text-8xl lg:text-9xl fade-in-left delay-3">
            <span 
          className="bg-gradient-to-b from-[#075985] to-[#48ace3] bg-clip-text text-transparent "
          style={{
            background: 'linear-gradient(180deg, #075985 0%, #48ace3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          B
        </span>UILD
            <span className="md:text-2xl lg:text-4xl font-normal text-amber-700">
              —THAT'S THE DEV LIFE
            </span>
          </h1>

          {/* Social icons */}
          <div className="social-media flex justify-center space-x-6 pt-4 fade-in-right delay-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img
                loading='lazy'
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 transition-all duration-300 ease-in-out hover:scale-110"
              />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img
                loading='lazy'
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 transition-all duration-300 ease-in-out hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img
                loading='lazy'
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 transition-all duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
        </div>

        {/* Explore button */}
        <div className="btn-div relative fade-in-up delay-5">
          <button
            className="explore-btn bg-sky-800 text-white rounded-full text-base sm:text-lg md:text-xl font-bold flex items-center space-x-2 px-4 py-2 shadow-lg transition duration-300 ease-in-out absolute top-20 lg:left-80 md:left-40"
            onClick={handleExploreClick}
          >
            <span>Explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* mobile view */}
      <div className="block md:hidden  w-full h-screen overflow-x-hidden  relative" id='home'>
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-300 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="mobile-view flex flex-col items-center justify-center gap-y-5 bg-blue-100 w-full rounded-lg p-4">
          <h1 className="text-6xl sm:text-5xl font-medium text-gray-800 text-center fade-in-up delay-2">
            <span className="text-sky-800">L</span>EARN &
          </h1>
          <h1 className="text-6xl sm:text-5xl font-medium text-gray-800 mb-4 flex items-center justify-center text-center fade-in-left delay-3">
            <span className="text-sky-800 ml-1">B</span>UILD
            <span className="quote ml-2 text-sm font-normal text-amber-700">—THAT'S THE DEV LIFE</span>
          </h1>

          <div className="social-media flex justify-center space-x-6 fade-in-right delay-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.simpleicons.org/instagram/8a3ab8" alt="Instagram" className="h-8 w-8 transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="h-8 w-8 transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src="/public/assets/linkedin.svg" alt="LinkedIn" className="h-8 w-8 transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
          </div>

          <div className="btn-div flex justify-center w-full relative fade-in-up delay-5">
            <button
              className="explore-btn absolute top-20 bg-sky-800 text-white rounded-full text-lg font-bold flex items-center space-x-2  shadow-lg  transition duration-300 ease-in-out"
              onClick={handleExploreClick}
            >
              <span>Explore</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
