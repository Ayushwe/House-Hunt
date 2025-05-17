import { useState } from "react";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const [activeType, setActiveType] = useState("Resident Property");

  const residentProperties = [
    {
      image: "./src/assets/Resident-Property/img1.jpg",
      address: "DLF Phase 3, Gurgaon, Haryana",
      price: 9500000,
      beds: 3,
      baths: 2,
      sqft: 1600,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img2.jpg",
      address: "BTM Layout, Bangalore, Karnataka",
      price: 7200000,
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img3.jpg",
      address: "Powai, Mumbai, Maharashtra",
      price: 13500000,
      beds: 3,
      baths: 2,
      sqft: 1450,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img4.jpg",
      address: "Kondapur, Hyderabad, Telangana",
      price: 8100000,
      beds: 2,
      baths: 2,
      sqft: 1100,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img5.jpg",
      address: "Rajaji Nagar, Bengaluru, Karnataka",
      price: 9800000,
      beds: 4,
      baths: 3,
      sqft: 1800,
      type: "Resident Property",
    },
    {
      image: "./src/assets/Resident-Property/img6.jpg",
      address: "T. Nagar, Chennai, Tamil Nadu",
      price: 10500000,
      beds: 3,
      baths: 2,
      sqft: 1500,
      type: "Resident Property",
    },
  ];

  const commercialProperties = [
    {
      image: "./src/assets/Commercial-Page-Images/img1.jpg",
      address: "Connaught Place, New Delhi",
      price: 30000000,
      beds: 0,
      baths: 2,
      sqft: 2500,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Page-Images/imgg2.jpg",
      address: "MG Road, Pune, Maharashtra",
      price: 21500000,
      beds: 0,
      baths: 3,
      sqft: 3000,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Page-Images/imgg3.jpg",
      address: "Salt Lake Sector V, Kolkata, West Bengal",
      price: 18500000,
      beds: 0,
      baths: 2,
      sqft: 2800,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Page-Images/imgg4.jpg",
      address: "IT Park, Chandigarh",
      price: 27000000,
      beds: 0,
      baths: 4,
      sqft: 3500,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Page-Images/imgg5.jpg",
      address: "Cyber City, Gurgaon, Haryana",
      price: 32500000,
      beds: 0,
      baths: 3,
      sqft: 4000,
      type: "Commercial Property",
    },
    {
      image: "./src/assets/Commercial-Page-Images/imgg6.jpg",
      address: "Hi-Tech City, Hyderabad, Telangana",
      price: 29000000,
      beds: 0,
      baths: 3,
      sqft: 3700,
      type: "Commercial Property",
    },
  ];

  const industrialProperties = [
    {
      image: "./src/assets/Industrial-Property-Images/img1.jpg",
      address: "MIDC Industrial Area, Pune, Maharashtra",
      price: 18500000,
      beds: 0,
      baths: 1,
      sqft: 4000,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property-Images/img2.jpg",
      address: "Peenya Industrial Estate, Bangalore",
      price: 22000000,
      beds: 0,
      baths: 2,
      sqft: 5000,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property-Images/img3.jpg",
      address: "Sahibabad Industrial Area, Ghaziabad, UP",
      price: 17500000,
      beds: 0,
      baths: 1,
      sqft: 4500,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property-Images/img4.jpg",
      address: "Sanand GIDC, Ahmedabad, Gujarat",
      price: 24500000,
      beds: 0,
      baths: 2,
      sqft: 6000,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property-Images/img5.jpg",
      address: "Balanagar Industrial Area, Hyderabad",
      price: 20000000,
      beds: 0,
      baths: 1,
      sqft: 4800,
      type: "Industrial Property",
    },
    {
      image: "./src/assets/Industrial-Property-Images/img6.jpg",
      address: "Ambattur Industrial Estate, Chennai",
      price: 21000000,
      beds: 0,
      baths: 2,
      sqft: 5200,
      type: "Industrial Property",
    },
  ];

  const agricultureProperties = [
    {
      image: "./src/assets/Agriculture-Property-Images/img1.jpg",
      address: "Nashik District, Maharashtra",
      price: 9500000,
      beds: 0,
      baths: 1,
      sqft: 10000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property-Images/img2.jpg",
      address: "Kangeyam, Tiruppur, Tamil Nadu",
      price: 8700000,
      beds: 0,
      baths: 1,
      sqft: 12000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property-Images/img3.jpg",
      address: "Mandya, Karnataka",
      price: 9200000,
      beds: 0,
      baths: 1,
      sqft: 15000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property-Images/img4.jpg",
      address: "Sonipat, Haryana",
      price: 8800000,
      beds: 0,
      baths: 1,
      sqft: 11000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property-Images/img5.jpg",
      address: "Barabanki, Uttar Pradesh",
      price: 7900000,
      beds: 0,
      baths: 1,
      sqft: 9000,
      type: "Agriculture Property",
    },
    {
      image: "./src/assets/Agriculture-Property-Images/img6.jpg",
      address: "Guntur, Andhra Pradesh",
      price: 10200000,
      beds: 0,
      baths: 2,
      sqft: 14000,
      type: "Agriculture Property",
    },
  ];

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
        return residentProperties;
    }
  };

  const activeProperties = getActiveProperties();

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">
        Featured Properties
      </h2>

      <div className="flex justify-center space-x-4 my-6">
        {["Resident Property", "Commercial Property", "Industrial Property", "Agriculture Property"].map((type) => (
          <button
            key={type}
            className={`${
              activeType === type ? "text-orange-500" : "text-gray-500"
            } font-semibold hover:text-orange-500 transition-all`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
        {/* <div className="text-right">
          <a
            href="#explore"
            className="text-orange-500 font-semibold hover:underline pb-8"
          >
            Explore All <i className="fas fa-arrow-right"></i>
          </a>
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {activeProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
