import { useState } from "react";
import PropertyCard from "./PropertyCard"; // Assuming this file is in the same folder

const FeaturedProperties = () => {
  // State to manage selected property type
  const [activeType, setActiveType] = useState("Resident Property");

  // Separate arrays for each property type
  const residentProperties = [
    {
      image: "./src/assets/Resident-Property/img1.jpg",
      address: "2861 62nd Ave, Oakland, CA 94605",
      price: 649900,
      beds: 3,
      baths: 1,
      sqft: 1032,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img2.jpg",
      address: "945 Cedar Blvd, Newark, CA 94560",
      price: 710000,
      beds: 4,
      baths: 2,
      sqft: 1400,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img3.jpg",
      address: "1234 Maple Ave, San Jose, CA 95125",
      price: 850000,
      beds: 5,
      baths: 3,
      sqft: 1800,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img4.jpg",
      address: "5678 Pine St, Fresno, CA 93722",
      price: 525000,
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img5.jpg",
      address: "4321 Oak Grove Ave, Sacramento, CA 95820",
      price: 670000,
      beds: 3,
      baths: 2,
      sqft: 1500,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img6.jpg",
      address: "789 Birch Rd, Los Gatos, CA 95030",
      price: 980000,
      beds: 4,
      baths: 3,
      sqft: 2000,
      type: "Resident Property",
    },
  ];

  const commercialProperties = [
    {
      image: "./src/assets/Home-Page-images/property-2.jpg",
      address: "123 Main St, San Francisco, CA 94110",
      price: 950000,
      beds: 4,
      baths: 2,
      sqft: 1500,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Property/img2.jpg",
      address: "456 Business Blvd, Palo Alto, CA 94303",
      price: 1250000,
      beds: 0,
      baths: 4,
      sqft: 3000,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Property/img3.jpg",
      address: "789 Office St, Santa Clara, CA 95050",
      price: 890000,
      beds: 0,
      baths: 3,
      sqft: 2400,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Property/img4.jpg",
      address: "1010 Industrial Way, Fremont, CA 94538",
      price: 1400000,
      beds: 0,
      baths: 5,
      sqft: 4000,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Property/img5.jpg",
      address: "321 Business Center Dr, Cupertino, CA 95014",
      price: 1100000,
      beds: 0,
      baths: 2,
      sqft: 2200,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Property/img6.jpg",
      address: "135 Corporate Plaza, Mountain View, CA 94043",
      price: 1650000,
      beds: 0,
      baths: 6,
      sqft: 5000,
      type: "Commercial Property",
    },
  ];

  const industrialProperties = [
    {
      image: "./src/assets/Home-Page-images/property-3.jpg",
      address: "456 Elm St, Los Angeles, CA 90001",
      price: 789000,
      beds: 3,
      baths: 2,
      sqft: 1300,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property/img2.jpg",
      address: "987 Factory Ave, Long Beach, CA 90805",
      price: 1050000,
      beds: 0,
      baths: 2,
      sqft: 3500,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property/img3.jpg",
      address: "123 Warehouse Ln, Anaheim, CA 92801",
      price: 1200000,
      beds: 0,
      baths: 3,
      sqft: 4500,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property/img4.jpg",
      address: "456 Manufacturing Blvd, Riverside, CA 92501",
      price: 890000,
      beds: 0,
      baths: 1,
      sqft: 2500,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property/img5.jpg",
      address: "789 Production St, Irvine, CA 92614",
      price: 1390000,
      beds: 0,
      baths: 4,
      sqft: 5000,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property/img6.jpg",
      address: "1010 Assembly Ave, Burbank, CA 91504",
      price: 1550000,
      beds: 0,
      baths: 3,
      sqft: 5500,
      type: "Industrial Property",
    },
  ];

  const agricultureProperties = [
    {
      image: "./src/assets/Home-Page-images/property-4.jpg",
      address: "789 Oak St, San Diego, CA 92101",
      price: 1150000,
      beds: 5,
      baths: 3,
      sqft: 1800,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property/img2.jpg",
      address: "123 Farm Rd, Modesto, CA 95354",
      price: 950000,
      beds: 0,
      baths: 2,
      sqft: 6000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property/img3.jpg",
      address: "456 Field St, Bakersfield, CA 93301",
      price: 1300000,
      beds: 0,
      baths: 3,
      sqft: 7000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property/img4.jpg",
      address: "789 Orchard Ave, Fresno, CA 93710",
      price: 1150000,
      beds: 0,
      baths: 1,
      sqft: 8000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property/img5.jpg",
      address: "1010 Harvest Rd, Visalia, CA 93291",
      price: 950000,
      beds: 0,
      baths: 2,
      sqft: 5000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property/img6.jpg",
      address: "321 Vineyard Blvd, Napa, CA 94558",
      price: 1800000,
      beds: 0,
      baths: 4,
      sqft: 9000,
      type: "Agriculture Property",
    },
  ];

  // Function to determine which property array to display
  const getActiveProperties = () => {
    switch (activeType) {
      case "Resident Property":
        return residentProperties;
      case "Commercial Property":
        return commercialProperties;
      case "Industrial Property":
        return industrialProperties;
      case "Agriculture Property":
        return agricultureProperties;
      default:
        return residentProperties; // Default to Resident Property if nothing matches
    }
  };

  // Get the currently active properties based on the selected type
  const activeProperties = getActiveProperties();

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">
        Featured Properties
      </h2>

      {/* Property type buttons */}
      <div className="flex justify-center space-x-4 my-6">
        <button
          className={`${
            activeType === "Resident Property"
              ? "text-orange-500"
              : "text-gray-500"
          } font-semibold hover:text-orange-500 transition-all`}
          onClick={() => setActiveType("Resident Property")}
        >
          Resident Property
        </button>
        <button
          className={`${
            activeType === "Commercial Property"
              ? "text-orange-500"
              : "text-gray-500"
          } font-semibold hover:text-orange-500 transition-all`}
          onClick={() => setActiveType("Commercial Property")}
        >
          Commercial Property
        </button>
        <button
          className={`${
            activeType === "Industrial Property"
              ? "text-orange-500"
              : "text-gray-500"
          } font-semibold hover:text-orange-500 transition-all`}
          onClick={() => setActiveType("Industrial Property")}
        >
          Industrial Property
        </button>
        <button
          className={`${
            activeType === "Agriculture Property"
              ? "text-orange-500"
              : "text-gray-500"
          } font-semibold hover:text-orange-500 transition-all`}
          onClick={() => setActiveType("Agriculture Property")}
        >
          Agriculture Property
        </button>
        <div className="text-right">
          <a
            href="#explore"
            className="text-orange-500 font-semibold hover:underline pb-8"
          >
            Explore All <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Display filtered property cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {activeProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
