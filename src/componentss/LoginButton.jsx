import { FiUser } from 'react-icons/fi';

const LoginButton = () => {
  return (
    <button className="flex items-center bg-[#050207] text-white px-4 py-2 rounded-full hover:bg-[#7912b0] transition duration-300 font-merriweather">
      <FiUser className="mr-2" />
      Login
    </button>
  );
};

export default LoginButton;
