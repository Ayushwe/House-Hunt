// src/components/PropertyList.js
const PropertyList = () => {
  const properties = [
    {
      id: 1,
      address: '2861 62nd Ave, Oakland, CA 94605',
      beds: 3,
      baths: 1,
      sqft: '1,032 sqft',
      price: '$649,900',
      img: 'house_image_url', // Replace with image URL
    },
    // Add more properties
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Map section */}
      <div className="p-4 bg-white shadow-lg rounded-xl">
        <iframe
          title="Map"
          className="w-full h-64 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4325673!2d-122.2865!3d37.7653"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Property Cards */}
      {properties.map((property) => (
        <div key={property.id} className="p-4 bg-white shadow-lg rounded-xl">
          <img
            src={property.img}
            alt={property.address}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{property.address}</h2>
            <div className="text-gray-600">
              <span>{property.beds} Bed Room</span> &bull;{' '}
              <span>{property.baths} Bath</span> &bull;{' '}
              <span>{property.sqft}</span>
            </div>
            <p className="text-lg font-semibold">{property.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
