const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <p>
            Your company is a leading provider of residential, commercial, industrial, and agriculture properties. We strive to connect you with the best properties to meet your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Phone: +1 800 123 456</li>
            <li>Email: info@yourcompany.com</li>
            <li>Address: 123 Property St, San Francisco, CA 94110</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
