import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-green-400">
              Sustainable Development Initiative
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Building a sustainable future, one step at a time. Join us in making a positive impact on the environment and society.
            </p>
            <p className="text-xs italic text-gray-400">
              Together, we can create a greener, cleaner planet for future generations.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Updates */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Recent Updates</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/updates/1"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  Community Clean-Up Day: Join us on October 25!
                </Link>
              </li>
              <li>
                <Link
                  to="/updates/2"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  New Initiatives for Renewable Energy Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/updates/3"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  Volunteer Opportunities for Local Tree Planting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Get Involved & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Get Involved</h3>
            <p className="text-sm leading-relaxed mb-4">
              Join us in our mission to promote sustainability. Here are ways you can get involved:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/volunteer"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  Volunteer for Events
                </Link>
              </li>
              <li>
                <Link
                  to="/partnerships"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-lg hover:text-green-400 transition duration-300"
                >
                  Make a Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Stay Updated</h3>
            <p className="text-sm leading-relaxed mb-4">
              Sign up for our newsletter to receive the latest updates and opportunities:
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-gray-800 border border-green-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400"
                required
              />
              <button
                type="submit"
                className="bg-green-400 text-gray-900 font-bold py-2 rounded-md hover:bg-green-500 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-8 mb-4">
          <a href="#" className="text-2xl text-gray-300 hover:text-green-400 transition duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl text-gray-300 hover:text-green-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl text-gray-300 hover:text-green-400 transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl text-gray-300 hover:text-green-400 transition duration-300">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center md:text-left mt-4 border-t border-green-500 pt-4 text-gray-400">
          &copy; {new Date().getFullYear()} Sustainable Development Initiative. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
