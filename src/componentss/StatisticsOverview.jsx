import { FaDollarSign, FaSmile } from 'react-icons/fa';

const StatisticsOverview = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6  bg-pink-50">
      {/* Unified Statistics Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-6 space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Statistics Box 1 */}
        <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md lg:w-1/4">
          <div className="bg-orange-100 rounded-full p-4 mb-4">
            <FaDollarSign className="text-orange-500 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">$15.4M</h3>
          <p className="text-gray-600">Owned from Properties transactions</p>
        </div>

        {/* Statistics Box 2 */}
        <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md lg:w-1/4">
          <div className="bg-orange-100 rounded-full p-4 mb-4">
            <FaDollarSign className="text-orange-500 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">25K+</h3>
          <p className="text-gray-600">Properties for Buy & Sell Successfully</p>
        </div>

        {/* Statistics Box 3 */}
        <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md lg:w-1/4">
          <div className="bg-orange-100 rounded-full p-4 mb-4">
            <FaDollarSign className="text-orange-500 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">$15.4M</h3>
          <p className="text-gray-600">Owned from Properties transactions</p>
        </div>

        {/* Statistics Box 4 */}
        <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md lg:w-1/4">
          <div className="bg-orange-100 rounded-full p-4 mb-4">
            <FaSmile className="text-orange-500 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">600+</h3>
          <p className="text-gray-600">Regular Clients</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsOverview;
