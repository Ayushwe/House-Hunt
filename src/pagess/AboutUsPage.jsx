import { FaBuilding } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../componentss/Footer";
const AboutUs = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-[#590d82] via-[#7912b0] to-[#390854] p-12 rounded-lg shadow-lg text-white">
      {/* Title */}
      <h1 className="text-center text-5xl font-extrabold mb-10">About Us</h1>

      {/* About Us Description */}
      <div className="flex justify-center mb-12">
        <div className="w-full max-w-4xl text-center">
          <p className="text-lg leading-relaxed mb-6">
            Welcome to <span className="font-bold">The House Hunt</span>, your
            go-to platform for the best property search in India. We aim to
            simplify your journey to buying, selling, or renting properties with
            transparency and efficiency.
          </p>
          {/* Icon */}
          <FaBuilding className="text-[#f25d9c] text-7xl mx-auto mb-6" />
        </div>
      </div>

      {/* Mission, Vision, Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#f25d9c] p-6 rounded-lg text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To make property transactions simple and accessible for everyone.
          </p>
        </div>
        <div className="bg-[#f68cb9] p-6 rounded-lg text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            To create a world where finding a home is easy and enjoyable for
            everyone.
          </p>
        </div>
        <div className="bg-[#7912b0] p-6 rounded-lg text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-lg">
            A dedicated team of professionals making real estate easy for you.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-12">
        <p className="text-lg mb-4">
          <span className="font-semibold">Contact Us:</span>{" "}
          <a
            href="mailto:contact@thehousehunt.com"
            className="underline text-[#f25d9c]"
          >
            contact@thehousehunt.com
          </a>
        </p>
        <p className="text-lg mb-4">Follow us on social media:</p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="#" className="text-[#f3edef] hover:text-[#f25d9c]">
            <FaFacebookF />
          </a>
          <a href="#" className="text-[#fcf7f9] hover:text-[#f25d9c]">
            <FaTwitter />
          </a>
          <a href="#" className="text-[#e8dfe3] hover:text-[#f25d9c]">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
<Footer/>
</>
  );
};

export default AboutUs;
