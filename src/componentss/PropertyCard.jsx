import PropTypes from 'prop-types';

const PropertyCard = ({ image, address, price, beds, baths, sqft, type }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <img className="w-full h-56 object-cover" src={image} alt="property" />
      <div className="p-5">
        <p className="text-gray-900 font-bold text-lg">{address}</p>
        <div className="flex items-center my-3 text-gray-700 space-x-4">
          <p className="flex items-center">
            <i className="fas fa-bed mr-1 text-orange-500"></i> {beds} Bed
          </p>
          <p className="flex items-center">
            <i className="fas fa-bath mr-1 text-orange-500"></i> {baths} Bath
          </p>
        </div>
        <p className="text-gray-700 text-sm mb-2">{sqft} sqft</p>
        <p className="text-gray-600 text-sm mb-4">{type}</p>
        <div className="flex justify-between items-center">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all">
            View Details
          </button>
          <p className="text-black font-semibold">${price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

// Define Prop Types
PropertyCard.propTypes = {
  image: PropTypes.string.isRequired, // Ensure 'image' is a string and required
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  baths: PropTypes.number.isRequired,
  sqft: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default PropertyCard;
