// Frontend/SearchBar.js
import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const placeholders = [
    "Search 'Noida'",
    "3 BHK for sale in Mumbai",
    "Rent 2 BHK in Bangalore",
    "Luxury villas in Pune",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('IN'); // Default country is India

  // Rotating placeholder effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        setFade(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fetch cities using your Express API
  useEffect(() => {
    if (searchInput.length < 1) { // Show suggestions as soon as one character is typed
      setSuggestions([]);
      return;
    }

    const fetchCities = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cities/${selectedCountry}`, {
          params: { searchInput },
        });

        // Map and limit suggestions to 5 or 6 cities
        const cityResults = response.data
          .map((city) => ({
            name: city.name,
            display_name: city.display_name,
          }))
          .slice(0, 6); // Limit to the first 6 cities

        setSuggestions(cityResults);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    const debounce = setTimeout(fetchCities, 500); // debounce to limit API calls
    return () => clearTimeout(debounce);
  }, [searchInput, selectedCountry]);

  const handleInputChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z0-9 ]/g, ''); // sanitize input
    setSearchInput(sanitizedInput);
  };

  const handleSuggestionClick = (cityName) => {
    setSearchInput(cityName);
    setSuggestions([]);
  };

  return (
    <div className="relative flex flex-col items-center max-w-md w-full">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 space-x-2 w-full">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder={searchInput ? '' : placeholders[index]}
          className={`bg-transparent focus:outline-none text-gray-700 font-roboto w-full transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-50'}`}
        />
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-md z-10">
          {suggestions.map((city, idx) => (
            <li
              key={idx}
              onClick={() => handleSuggestionClick(city.name)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left text-sm"
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
