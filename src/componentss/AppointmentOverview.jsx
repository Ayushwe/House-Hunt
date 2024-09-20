import { FaMapMarkerAlt, FaEye, FaShoppingBag, FaSmile } from 'react-icons/fa';

const AppointmentOverview = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-20">
      
      {/* Left Side Content */}
      <div className="bg-pink-100 rounded-lg p-8 space-y-4 lg:w-[40%]">
        <h2 className="text-3xl font-bold text-gray-800">
          Simple & easy way to find your dream Appointment
        </h2>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </div>

      {/* Right Side Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-0 lg:w-[50%]">
        {/* Box 1 */}
        <div className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-8 h-40">
          <FaMapMarkerAlt className="text-orange-500 text-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Search your location</h3>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-8 h-40">
          <FaEye className="text-orange-500 text-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Visit Appointment</h3>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-8 h-40">
          <FaShoppingBag className="text-orange-500 text-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Get your dream house</h3>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-8 h-40">
          <FaSmile className="text-orange-500 text-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Enjoy your Appointment</h3>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOverview;
