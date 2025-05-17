import { FaSearch } from 'react-icons/fa';

const PropertyFilters = ({ filters, setFilters, handleSearch }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters({ ...filters, [name]: checked });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  return (
    <div className="w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Type */}
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <select name="type" value={filters.type} onChange={handleChange} className="p-3 rounded-lg border w-full">
          <option value="">Any</option>
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-gray-700">Price Range</label>
        <div className="flex gap-4">
          <input
            type="number"
            name="priceMin"
            value={filters.priceMin}
            onChange={handleChange}
            className="p-3 rounded-lg border w-full"
            placeholder="Min Price"
          />
          <input
            type="number"
            name="priceMax"
            value={filters.priceMax}
            onChange={handleChange}
            className="p-3 rounded-lg border w-full"
            placeholder="Max Price"
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-4">
        <label className="block text-gray-700">Bedrooms</label>
        <select name="bedrooms" value={filters.bedrooms} onChange={handleChange} className="p-3 rounded-lg border w-full">
          <option value="">Any</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4+ BHK</option>
        </select>
      </div>

      {/* Square Feet Range */}
      <div className="mb-4">
        <label className="block text-gray-700">Square Feet</label>
        <div className="flex gap-4">
          <input
            type="number"
            name="sqftMin"
            value={filters.sqftMin}
            onChange={handleChange}
            className="p-3 rounded-lg border w-full"
            placeholder="Min Square Feet"
          />
          <input
            type="number"
            name="sqftMax"
            value={filters.sqftMax}
            onChange={handleChange}
            className="p-3 rounded-lg border w-full"
            placeholder="Max Square Feet"
          />
        </div>
      </div>

      {/* Year Built Range */}
      <div className="mb-4">
        <label className="block text-gray-700">Year Built</label>
        <div className="flex gap-4">
          <input
            type="number"
            name="yearBuiltMin"
            value={filters.yearBuiltMin}
            onChange={handleChange}
            className="p-3 rounded-lg border w-full"
            placeholder="Min Year"
          />
          <input
            type="number"
            name="yearBuiltMax"
            value={filters.yearBuiltMax}
            onChange={handleChange}
            className="p-3 rounded-lg border w-full"
            placeholder="Max Year"
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-gray-700">Location (City/Area)</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="p-3 rounded-lg border w-full"
          placeholder="Enter city or area"
        />
      </div>

      {/* Parking Space */}
      <div className="mb-4">
        <label className="block text-gray-700">Parking Space</label>
        <select
          name="parking"
          value={filters.parking}
          onChange={handleChange}
          className="p-3 rounded-lg border w-full"
        >
          <option value="">Any</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
      </div>

      {/* Furnishing Status */}
      <div className="mb-4">
        <label className="block text-gray-700">Furnishing Status</label>
        <select
          name="furnishing"
          value={filters.furnishing}
          onChange={handleChange}
          className="p-3 rounded-lg border w-full"
        >
          <option value="">Any</option>
          <option value="Furnished">Furnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>

      {/* New Construction */}
      <div className="mb-4">
        <label className="block text-gray-700">New Construction</label>
        <input
          type="checkbox"
          name="newConstruction"
          checked={filters.newConstruction}
          onChange={handleChange}
          className="ml-2"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 py-3 rounded-lg flex items-center w-full"
      >
        Search <FaSearch className="ml-2" />
      </button>
    </div>
  );
};

export default PropertyFilters;
