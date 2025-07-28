import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { 
  FaHome, 
  FaUserAlt, 
  FaLaptopCode, 
  FaServer, 
  FaProjectDiagram, 
  FaEnvelope 
} from 'react-icons/fa';
import { HiMenu as Menu, HiX as X } from 'react-icons/hi';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', name: 'HOME', icon: <FaHome /> },
    { id: 'about', name: 'ABOUT', icon: <FaUserAlt /> },
    { id: 'skills', name: 'SKILLS', icon: <FaLaptopCode /> },
    { id: 'services', name: 'SERVICES', icon: <FaServer /> },
    { id: 'projects', name: 'PROJECTS', icon: <FaProjectDiagram /> },
    { id: 'contact', name: 'CONTACT', icon: <FaEnvelope /> }
  ];
const handleNavigate = (id, name) => {
  setActiveItem(name);
  setIsMenuOpen(false);
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <>
    
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="desktop-sidebar hidden  bg-stone-200 w-[80px] h-screen ">
        <div className="flex flex-col items-center justify-center h-full gap-y-8">
         {menuItems.map((item) => (
  <div
  key={item.id}
  className={`group menu-item flex flex-col items-center justify-center cursor-pointer relative ${
    activeItem === item.name ? "active" : ""
  }`}
  onMouseEnter={() => setActiveItem(item.name)}
  onClick={() => handleNavigate(item.id, item.name)}
>
  <div className="icon text-sky-800 text-2xl transition-all duration-200 ease-in-out hover:text-sky-900 hover:scale-110">
    {item.icon}
  </div>

  {/* Tooltip text */}
  <span className="menu-text absolute left-[100%] ml-2 whitespace-nowrap bg-white text-sky-800 text-sm font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
    {item.name}
  </span>
</div>
))}
        </div>
      </div>

      {/* Mobile Menu Button - visible only on mobile */}
      <button
        className="menu-button fixed top-4 left-4 z-50 p-2 rounded-md text-slate-600 bg-stone-200 absolute right-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6 absolute right-4" /> : <Menu className="h-6 w-6 absolute right-4" />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
  <div className="absolute top-10 md:hidden fixed bg-white w-full z-50">
    <div className="py-4 border-t border-slate-200 bg rounded-lg shadow-lg w-full">
      <nav className="flex flex-col space-y-2 px-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigate(item.id, item.name)}
            className={`mobile-items flex items-center gap-x-2 px-3 py-2 rounded-md text-lg font-medium text-left transition-colors ${
              activeItem === item.name
                ? 'text-sky-800 bg-sky-100'
                : 'text-slate-600 hover:text-sky-800 hover:bg-slate-50'
            }`}
          >
            {item.name}
          </div>
        ))}
      </nav>
    </div>
  </div>
)}
    </>
  );
}

export default Sidebar;