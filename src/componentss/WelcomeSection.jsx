import { useState } from 'react';
import { FaMapMarkerAlt, FaBuilding, FaRupeeSign, FaSearch, FaHome } from 'react-icons/fa';

const WelcomeSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Buy');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 lg:p-20">
      
      {/* Left Side Content */}
      <div className="lg:w-1/2 space-y-10 lg:pr-10 flex flex-col items-center lg:items-start">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center lg:text-left">
          Find a perfect property
          <br />
          Where you'll love to live
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 text-center lg:text-left">
          We help businesses customize, automate, and scale up their ad production and delivery.
        </p>

        {/* Category Selection */}
        <div className="flex flex-wrap gap-4 mb-4 justify-center lg:justify-start">
          {["Buy", "Sell", "Rent"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`flex items-center justify-center space-x-2 text-sm md:text-base lg:text-lg font-semibold focus:outline-none py-3 px-4 md:py-3 md:px-8 rounded-full transition duration-300 ${
                selectedCategory === category
                  ? "bg-[#590d82] text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-[#590d82] hover:text-white"
              }`}
            >
              <FaHome />
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Options for Selected Category */}
        <div className="space-y-4 w-full">
          {['Buy', 'Sell', 'Rent'].includes(selectedCategory) && (
            <>
              {/* Location Input */}
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter City"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f25d9c] text-lg"
                />
              </div>

              {/* Property Type Input */}
              <div className="flex items-center space-x-2">
                <FaBuilding className="text-gray-500" />
                <select
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f25d9c] text-lg"
                >
                  <option value="" disabled>
                    Select Property Type
                  </option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {/* Price Range Input */}
              <div className="flex items-center space-x-2">
                <FaRupeeSign className="text-gray-500" />
                <select
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f25d9c] text-lg"
                >
                  <option value="" disabled>
                    Select Price Range
                  </option>
                  <option value="0-500000">₹0 - ₹5,00,000</option>
                  <option value="500000-1000000">₹5,00,000 - ₹10,00,000</option>
                  <option value="1000000-2000000">₹10,00,000 - ₹20,00,000</option>
                  <option value="2000000-5000000">₹20,00,000 - ₹50,00,000</option>
                  <option value="5000000+">₹50,00,000+</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex justify-center mt-4">
                <button className="flex items-center justify-center w-full lg:w-auto bg-[#590d82] text-white py-3 px-6 rounded-full hover:bg-[#7912b0] transition duration-300 text-lg">
                  <FaSearch className="mr-2" />
                  Search
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:hidden lg:block lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="./src/assets/Home-Page-images/19198839.jpg" 
          alt="Property"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
