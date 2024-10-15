import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="md:flex md:justify-between text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">
              Sustainable Development Initiative
            </h2>
            <p className="text-sm mb-6">
              Building a sustainable future, one step at a time. Join us in
              making a positive impact on the environment and society.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:flex md:items-center">
            <div className="space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
              <Link
                to={"/about"}
                className="block md:inline-block hover:text-green-400"
              >
                About Us
              </Link>
              <Link
                to={"/contact"}
                className="block md:inline-block hover:text-green-400"
              >
                Contact
              </Link>
              <a
                href="#"
                className="block md:inline-block hover:text-green-400"
              >
                Donate
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <a href="#" className="text-xl hover:text-green-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-xl hover:text-green-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl hover:text-green-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-xl hover:text-green-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center md:text-left mt-6">
          &copy; {new Date().getFullYear()} Sustainable Development Initiative.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
