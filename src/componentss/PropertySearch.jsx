// src/components/PropertySearch.js
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import { useState } from 'react';

const properties = [
  { id: 1, address: '123 Main St', type: 'Buy', price: 15000, bedrooms: 3, sqft: 1000, yearBuilt: 2010, forSaleBy: 'Agent', newConstruction: false },
  { id: 2, address: '456 Elm St', type: 'Rent', price: 18000, bedrooms: 2, sqft: 800, yearBuilt: 2015, forSaleBy: 'Owner', newConstruction: false },
  { id: 3, address: '789 Oak St', type: 'Buy', price: 20000, bedrooms: 4, sqft: 1500, yearBuilt: 2020, forSaleBy: 'Agent', newConstruction: true },
  // Add more properties as needed
];

const PropertySearch = () => {
  const [filters, setFilters] = useState({
    type: '', // No filter by default
    price: '', // No filter by default
    bedrooms: '', // No filter by default
    sqft: [0, 100000], // No filter by default
    yearBuilt: [0, 10000], // No filter by default
    forSaleBy: '', // No filter by default
    newConstruction: false, // No filter by default
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearch = () => {
    setInitialLoad(false); // Set to false after the first search

    const filtered = properties.filter((property) => {
      const matchesType = !filters.type || property.type === filters.type;
      const matchesPrice =
        !filters.price ||
        (filters.price === '$15,000 - $18,000' && property.price >= 15000 && property.price <= 18000) ||
        (filters.price === '$18,000 - $25,000' && property.price >= 18000 && property.price <= 25000);
      const matchesBedrooms = !filters.bedrooms || property.bedrooms === parseInt(filters.bedrooms.split(' ')[0]);
      const matchesSqft = property.sqft >= filters.sqft[0] && property.sqft <= filters.sqft[1];
      const matchesYearBuilt = property.yearBuilt >= filters.yearBuilt[0] && property.yearBuilt <= filters.yearBuilt[1];
      const matchesForSaleBy = !filters.forSaleBy || property.forSaleBy.toLowerCase().includes(filters.forSaleBy.toLowerCase());
      const matchesNewConstruction = filters.newConstruction === false || property.newConstruction === filters.newConstruction;

      return (
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesSqft &&
        matchesYearBuilt &&
        matchesForSaleBy &&
        matchesNewConstruction
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg max-w-7xl mx-auto my-6">
      <h1 className="text-3xl font-bold mb-4">Find Property</h1>
      <div className="flex">
        {/* Filter Section on the Left */}
        <div className="w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="p-3 rounded-lg border border-gray-300 w-full"
            >
              <option value="">Any</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <select
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              className="p-3 rounded-lg border border-gray-300 w-full"
            >
              <option value="">Any</option>
              <option>$15,000 - $18,000</option>
              <option>$18,000 - $25,000</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bedrooms</label>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleFilterChange}
              className="p-3 rounded-lg border border-gray-300 w-full"
            >
              <option value="">Any</option>
              <option>3 BHK</option>
              <option>2 BHK</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Square Feet</label>
            <input
              type="number"
              name="sqft"
              value={filters.sqft[1]}
              onChange={(e) => setFilters({ ...filters, sqft: [filters.sqft[0], parseInt(e.target.value)] })}
              className="p-3 rounded-lg border border-gray-300 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Year Built</label>
            <input
              type="number"
              name="yearBuilt"
              value={filters.yearBuilt[1]}
              onChange={(e) => setFilters({ ...filters, yearBuilt: [filters.yearBuilt[0], parseInt(e.target.value)] })}
              className="p-3 rounded-lg border border-gray-300 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">For Sale By</label>
            <input
              type="text"
              name="forSaleBy"
              value={filters.forSaleBy}
              onChange={handleFilterChange}
              className="p-3 rounded-lg border border-gray-300 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Construction</label>
            <input
              type="checkbox"
              name="newConstruction"
              checked={filters.newConstruction}
              onChange={() => setFilters({ ...filters, newConstruction: !filters.newConstruction })}
              className="p-3 rounded-lg border border-gray-300"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-black text-white px-6 py-3 rounded-lg flex items-center w-full"
          >
            Search
            <FaSearch className="ml-2" /> {/* Use the imported search icon */}
          </button>
        </div>

        {/* Properties Display on the Right */}
        <div className="w-full md:w-3/4 p-4">
          <div className="mt-4">
            {(initialLoad ? properties : filteredProperties).map((property) => (
              <div key={property.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                <h2 className="text-xl font-semibold">{property.address}</h2>
                <p>Type: {property.type}</p>
                <p>Price: ${property.price}</p>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Square Feet: {property.sqft}</p>
                <p>Year Built: {property.yearBuilt}</p>
                <p>For Sale By: {property.forSaleBy}</p>
                <p>New Construction: {property.newConstruction ? 'Yes' : 'No'}</p>
              </div>
            ))}
            {(initialLoad && properties.length === 0) && (
              <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                <p>No properties found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
