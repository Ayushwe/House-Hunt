import React, { useState } from "react";

const ContactUsPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, you could integrate with an API or email service.
  };

  return (
    <div className="min-h-screen bg-[#f68cb9]/10 flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Info Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#590d82] via-[#7912b0] to-[#390854] p-10 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-3">Contact Us</h2>
          <p className="mb-6 text-lg leading-relaxed opacity-90">
            We’re here to help! Fill out the form or reach us directly. Expect a response within 24 hours.
          </p>
          <div className="space-y-4 text-base">
            <div>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:contact@thehousehunt.com" className="text-[#f25d9c] hover:underline">
                contact@thehousehunt.com
              </a>
            </div>
            <div>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="+91 98765 43210" className="text-[#f25d9c] hover:underline">
                +91 98765 43210
              </a>
            </div>
            <div>
              <span className="font-semibold">Address:</span>{" "}
              Mumbai, Maharashtra, India
            </div>
          </div>
          <div className="mt-8 flex space-x-4">
            {/* Social icons (optional) */}
            <a href="#" className="hover:text-[#f68cb9] transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter icon */}
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.93-.856 2.012-.857 3.17 0 2.188 1.115 4.117 2.823 5.251a4.904 4.904 0 01-2.229-.616v.062a4.919 4.919 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.936 4.936 0 004.604 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-10 bg-white flex flex-col justify-center">
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-[#590d82] mb-2">Thank you!</h3>
              <p className="text-lg text-gray-700">Your message has been sent.<br />We’ll get back to you soon.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[#590d82] font-semibold mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-[#f68cb9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f25d9c] transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-[#590d82] font-semibold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-[#f68cb9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f25d9c] transition"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-[#590d82] font-semibold mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-[#f68cb9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f25d9c] transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#f25d9c] via-[#f68cb9] to-[#590d82] text-white font-bold text-lg shadow-md hover:from-[#f68cb9] hover:to-[#f25d9c] transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
