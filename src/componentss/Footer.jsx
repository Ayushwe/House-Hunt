import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#390854] border-t border-gray-200 pt-12 pb-8 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-[#590d82] mb-4">The House Hunt</h3>
          <p className="text-gray-600 leading-relaxed">
            Helping you buy, sell, or rent properties with trust, speed, and simplicity — from metro cities to remote towns across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#7912b0] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-[#f25d9c] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#f25d9c] transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#f25d9c] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#f25d9c] transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#7912b0] mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-700">
            <li>📞 +91 98765 43210</li>
            <li>📧 contact@thehousehunt.com</li>
            <li>📍 Mumbai, Maharashtra, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#7912b0] mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-2xl text-[#590d82]">
            <a href="#" className="hover:text-[#f25d9c] transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#f25d9c] transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-[#f25d9c] transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-100 pt-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} The House Hunt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
