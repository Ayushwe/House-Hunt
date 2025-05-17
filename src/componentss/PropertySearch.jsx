import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import PropertyFilters from "./PropertyFilters";

const PropertySearch = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [residentImages, setResidentImages] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const [filters, setFilters] = useState({
    type: "Rent",
    price: { min: 10000, max: 25000 },
    bedrooms: "1 BHK",
    sqft: { min: 500, max: 2000 },
    yearBuilt: { min: 2000, max: 2025 },
    location: "Delhi",
    parking: "Available",
    furnishing: "Semi-Furnished",
    newConstruction: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch listings data
        const listingsSnapshot = await getDocs(collection(db, "listings"));
        const listingsData = listingsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Fetch ResidentProperty images
        const residentSnapshot = await getDocs(collection(db, "ResidentProperty"));
        const residentImagesData = residentSnapshot.docs.map((doc) =>
          doc.data().images && doc.data().images.length > 0
            ? doc.data().images[0]
            : null
        ).filter(Boolean);

        setAllProperties(listingsData);
        setFilteredProperties(listingsData);
        setResidentImages(residentImagesData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    setInitialLoad(false);

    const filtered = allProperties.filter((property) => {
      const matchesType =
        !filters.type || property.type === filters.type;
      const matchesPrice =
        property.Price >= filters.price.min &&
        property.Price <= filters.price.max;
      const matchesBedrooms =
        !filters.bedrooms ||
        property.bedrooms === parseInt(filters.bedrooms.split(" ")[0]);
      const matchesSqft =
        property.sqft >= filters.sqft.min && property.sqft <= filters.sqft.max;
      const matchesYearBuilt =
        property.yearBuilt >= filters.yearBuilt.min &&
        property.yearBuilt <= filters.yearBuilt.max;
      const matchesLocation =
        !filters.location ||
        property.address.toLowerCase().includes(filters.location.toLowerCase());
      const matchesParking =
        filters.parking === "Any" || property.parking === filters.parking;
      const matchesFurnishing =
        filters.furnishing === "Any" ||
        property.furnishing === filters.furnishing;
      const matchesNewConstruction =
        filters.newConstruction === false ||
        property.newConstruction === filters.newConstruction;

      return (
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesSqft &&
        matchesYearBuilt &&
        matchesLocation &&
        matchesParking &&
        matchesFurnishing &&
        matchesNewConstruction
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg max-w-7xl mx-auto my-6">
      <h1 className="text-3xl font-bold mb-6">Find Property</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <PropertyFilters
          filters={filters}
          setFilters={setFilters}
          handleSearch={handleSearch}
        />
        <div className="w-full md:w-3/4 p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(initialLoad ? allProperties : filteredProperties).map(
              (property, idx) => (
                <div
                  key={property.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  {/* Image */}
                  {residentImages[idx % residentImages.length] && (
                    <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-200">
                      <img
                        src={residentImages[idx % residentImages.length]}
                        alt="Property"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900 truncate">
                      {property.address}
                    </h2>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-indigo-600 font-medium">
                        {property.type}
                      </span>
                      <span className="text-lg font-bold text-green-700">
                        ₹{property.Price?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-700 text-sm mb-3">
                      <span>
                        <span className="font-semibold">{property.bedrooms}</span> Bed
                      </span>
                      <span>
                        <span className="font-semibold">{property.sqft}</span> sqft
                      </span>
                      <span>
                        <span className="font-semibold">{property.yearBuilt}</span>
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm mb-2">
                      For Sale By:{" "}
                      <span className="font-medium">{property.forSaleBy}</span>
                    </div>
                    <div className="text-gray-600 text-sm mb-2">
                      New Construction:{" "}
                      <span className="font-medium">
                        {property.newConstruction ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}

            {!initialLoad && filteredProperties.length === 0 && (
              <div className="col-span-full bg-white p-6 rounded-lg shadow-lg text-center">
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
