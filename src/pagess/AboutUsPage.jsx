import { FaBuilding, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../componentss/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="bg-white text-[#390854] pt-16 pb-20 px-6 md:px-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#f25d9c] mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="font-bold text-[#7912b0]">The House Hunt</span>, we are reshaping the way India finds homes. Whether you're buying, selling, or renting — we offer smart tools, trusted guidance, and a seamless experience to help you find the perfect property.
          </p>
          <FaBuilding className="text-[#f25d9c] text-6xl mx-auto mt-6" />
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="bg-[#fdf4fb] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-[#f25d9c] text-center">
            <h2 className="text-2xl font-bold text-[#590d82] mb-3">Our Mission</h2>
            <p className="text-gray-700">
              To make property transactions safe, simple, and transparent for every Indian citizen.
            </p>
          </div>
          <div className="bg-[#f5eaff] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-[#7912b0] text-center">
            <h2 className="text-2xl font-bold text-[#390854] mb-3">Our Vision</h2>
            <p className="text-gray-700">
              A world where finding your dream home is just a few clicks away.
            </p>
          </div>
          <div className="bg-[#fff0f7] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-[#f68cb9] text-center">
            <h2 className="text-2xl font-bold text-[#7912b0] mb-3">Our Team</h2>
            <p className="text-gray-700">
              A passionate crew of designers, developers, and real estate experts dedicated to your success.
            </p>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="text-center mt-20">
          <p className="text-xl mb-2">
            <span className="font-semibold text-[#f25d9c]">Contact Us:</span>{' '}
            <a
              href="mailto:contact@thehousehunt.com"
              className="text-[#390854] underline hover:text-[#f68cb9]"
            >
              contact@thehousehunt.com
            </a>
          </p>
          <p className="text-lg text-gray-600 mb-4">Follow us for updates and listings:</p>
          <div className="flex justify-center gap-6 text-2xl mt-2 text-[#390854]">
            <a href="#" className="hover:text-[#f25d9c] transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#f25d9c] transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-[#f25d9c] transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
