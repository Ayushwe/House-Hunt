import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import { useAuth } from '../context/AuthContext';
import { Menu } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const goToProfile = () => {
    navigate('/profile');
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

        {/* Desktop */}
        <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          <NavLinks onLinkClick={handleLinkClick} />
          <SearchBar />

          {user ? (
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center focus:outline-none">
                <img
                  src={user.photoURL || '/default-avatar.png'}
                  alt="profile"
                  className="w-9 h-9 rounded-full border border-gray-300"
                />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                <div className="p-4 border-b">
                  <p className="font-semibold text-sm">{user.displayName || 'User'}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={goToProfile}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${
                        active ? 'bg-gray-100' : ''
                      }`}
                    >
                      <FiUser /> Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logout}
                      className={`w-full text-left px-4 py-2 text-sm text-red-600 flex items-center gap-2 ${
                        active ? 'bg-gray-100' : ''
                      }`}
                    >
                      <FiLogOut /> Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <LoginButton />
          )}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center flex-1 justify-between">
          <SearchBar />
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="text-gray-700 hover:text-[#f25d9c] transition duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX className="text-gray-500" /> : <FiMenu className="text-gray-500" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 space-y-2 px-4`}>
        <NavLinks onLinkClick={handleLinkClick} />
        {user ? (
          <div className="flex items-center justify-between px-4 py-2 border rounded-md bg-gray-50">
            <div>
              <p className="text-sm font-semibold">{user.displayName || 'User'}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={goToProfile}
                className="text-sm text-blue-600 hover:underline"
              >
                Profile
              </button>
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
              >
                <FiLogOut /> Logout
              </button>
            </div>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
