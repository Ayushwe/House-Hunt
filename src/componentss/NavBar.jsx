import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import NavLinks from './NavLinks';   
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between h-[70px] px-4 lg:px-20">
        {/* Logo */}
        <img
          src="./src/assets/Home-Page-images/logo.png"
          className="w-[70px] sm:w-[90px] md:w-[100px] lg:w-[103px]"
          alt="Logo"
        />

        {/* For large screens: Show navigation links and login button */}
        <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          {/* Navigation Links */}
          <NavLinks onLinkClick={handleLinkClick} />

          {/* Search Bar */}
          <SearchBar />

          {/* Login Button */}
          <LoginButton />
        </div>

        {/* For small and medium screens: Hamburger menu */}
        <div className="lg:hidden flex items-center flex-1 justify-between">
          {/* Search Bar */}
          <SearchBar />

          {/* Hamburger Icon */}
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex items-center text-gray-700 hover:text-[#f25d9c] transition duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX className="text-gray-500" /> : <FiMenu className="text-gray-500" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden flex flex-col items-center mt-4 space-y-2 transition-transform duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <NavLinks onLinkClick={handleLinkClick} />
      </div>
    </nav>
  );
};

export default NavBar;
