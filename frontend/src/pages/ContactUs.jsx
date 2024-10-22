import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="bg-green-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-7 text-center mb-12">
          We’d love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us.
        </p>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">CityEase Support Team</h2>
          <div className="text-lg text-gray-700 space-y-2">
            <p className="flex justify-center items-center">
              <FaEnvelope className="text-green-600 mr-2" /> 
              <span className="font-bold">Email:</span> 
              <a href="mailto:support@cityease.com" className="text-blue-600 hover:underline">support@cityease.com</a>
            </p>
            <p className="flex justify-center items-center">
              <FaPhoneAlt className="text-green-600 mr-2" /> 
              <span className="font-bold">Phone:</span> 
              <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91-123-456-7890</a>
            </p>
            <p className="flex justify-center items-center">
              <FaGlobe className="text-green-600 mr-2" /> 
              <span className="font-bold">Website:</span> 
              <a href="https://www.cityease.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cityease.com</a>
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Follow Us</h2>
          <p className="text-lg text-gray-700 leading-7">
            Stay connected and follow us on social media to keep up with the latest updates:
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://twitter.com/CityEase" className="text-blue-600 font-bold text-lg flex items-center" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="mr-1" /> Twitter: @CityEase
            </a>
            <a href="https://facebook.com/CityEase" className="text-blue-600 font-bold text-lg flex items-center" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="mr-1" /> Facebook: facebook.com/CityEase
            </a>
            <a href="https://instagram.com/CityEase" className="text-blue-600 font-bold text-lg flex items-center" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="mr-1" /> Instagram: @CityEase
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 leading-7">
            Let’s work together to improve our cities!
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-green-800 text-center mb-4">Send Us a Message</h2>
          <form className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
