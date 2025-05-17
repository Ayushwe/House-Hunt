import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const LoginButton = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <button
      onClick={handleLoginClick} // Trigger the redirect on button click
      className="flex items-center bg-[#050207] text-white px-4 py-2 rounded-full hover:bg-[#7912b0] transition duration-300 font-merriweather"
    >
      <FiUser className="mr-2" />
      Login
    </button>
  );
};

export default LoginButton;
