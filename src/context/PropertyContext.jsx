import React, { createContext, useState, useContext } from 'react';

const PropertyContext = createContext();

export const usePropertyContext = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
  const initialProperties = [
    { id: 1, address: '2861 62nd Ave, Oakland, CA 94605', type: 'Buy', price: 649900, beds: 3, baths: 1, sqft: 1032, img: 'house_image_url' },
    { id: 2, address: '456 Elm St', type: 'Rent', price: 18000, beds: 2, baths: 1, sqft: 800, img: 'house_image_url' },
    { id: 3, address: '789 Oak St', type: 'Buy', price: 20000, beds: 4, baths: 2, sqft: 1500, img: 'house_image_url' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Buy');

  const [filters, setFilters] = useState({
    type: '',
    price: '',
    bedrooms: '',
    sqft: [0, 100000],
    newConstruction: false,
  });

  const [filteredProperties, setFilteredProperties] = useState(initialProperties);

  const filterProperties = () => {
    const filtered = initialProperties.filter((property) => {
      const matchesType = !filters.type || property.type === filters.type;
      const matchesPrice = !filters.price || property.price <= filters.price;
      const matchesBedrooms = !filters.bedrooms || property.beds === parseInt(filters.bedrooms);
      const matchesSqft = property.sqft >= filters.sqft[0] && property.sqft <= filters.sqft[1];
      const matchesNewConstruction = !filters.newConstruction || property.newConstruction === filters.newConstruction;

      return matchesType && matchesPrice && matchesBedrooms && matchesSqft && matchesNewConstruction;
    });

    setFilteredProperties(filtered);
  };

  return (
    <PropertyContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        filters,
        setFilters,
        filteredProperties,
        filterProperties,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
