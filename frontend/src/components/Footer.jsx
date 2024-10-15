import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="md:flex md:justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Sustainable Development Initiative</h2>
            <p className="text-sm mb-4">
              Building a sustainable future, one step at a time. Join us in making a positive impact on the environment and society.
            </p>
            <p className="text-xs italic">
              Together, we can create a greener, cleaner planet for future generations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:flex md:items-center md:w-1/2">
            <div className="space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              <Link
                to={"/about"}
                className="block md:inline-block text-lg hover:text-green-400 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to={"/contact"}
                className="block md:inline-block text-lg hover:text-green-400 transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                to={"/donate"}
                className="block md:inline-block text-lg hover:text-green-400 transition-colors duration-300"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Updates Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Recent Updates</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <Link to="/updates/1" className="hover:text-green-400 transition-colors duration-300">
                Community Clean-Up Day: Join us on October 25!
              </Link>
            </li>
            <li>
              <Link to="/updates/2" className="hover:text-green-400 transition-colors duration-300">
                New Initiatives for Renewable Energy Projects
              </Link>
            </li>
            <li>
              <Link to="/updates/3" className="hover:text-green-400 transition-colors duration-300">
                Volunteer Opportunities for Local Tree Planting
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Get Involved */}
        <div className="mt-4 md:flex md:justify-end md:space-x-8">
          <div className="md:w-1/2 mb-4">
            <h3 className="text-lg font-semibold mb-2">Get Involved</h3>
            <p className="text-sm mb-2">
              Join us in our mission to promote sustainability. Here are ways you can get involved:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <Link to="/volunteer" className="hover:text-green-400 transition-colors duration-300">
                  Volunteer for Events
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="hover:text-green-400 transition-colors duration-300">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-green-400 transition-colors duration-300">
                  Make a Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:w-1/2 mb-4">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm mb-2">
              Sign up for our newsletter to receive the latest updates and opportunities:
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded border border-green-400 bg-green-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-300"
                required
              />
              <button
                type="submit"
                className="bg-green-400 text-green-900 font-bold py-1 rounded hover:bg-green-500 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-4 mb-4">
          <a href="#" className="text-2xl hover:text-green-400 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-green-400 transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-green-400 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-green-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center md:text-left mt-4 border-t border-green-500 pt-2">
          &copy; {new Date().getFullYear()} Sustainable Development Initiative. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
