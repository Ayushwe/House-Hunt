import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');  // Sanitize input
    setSearchInput(sanitizedInput);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 space-x-2 flex-1 max-w-md">
      <FiSearch className="text-gray-500" />
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search..."
        className="bg-transparent focus:outline-none text-gray-700 font-roboto w-full"
      />
    </div>
  );
};

export default SearchBar;
