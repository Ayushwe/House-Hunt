import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinks = ({ onLinkClick }) => {
  return (
    <ul className="space-x-8 flex items-center text-sm sm:text-base lg:text-lg font-semibold font-poppins text-black">
      {['Home', 'About', 'Property', 'Contact'].map((link) => (
        <li key={link}>
          <NavLink
            to={`/${link.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? 'underline text-[#f25d9c]' : 'hover:text-[#f25d9c] transition duration-300'
            }
            onClick={onLinkClick}
          >
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// Adding prop-types validation for onLinkClick
NavLinks.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
};

export default NavLinks;
