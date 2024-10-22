import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-7 text-center mb-12">
          At <span className="font-bold text-green-600">CityEase</span>, we believe in harnessing the power of community-driven action to create better urban spaces.
          Our platform empowers citizens to take control of their surroundings by reporting city issues like broken streetlights, potholes, water leaks, and more.
          With CityEase, residents can actively participate in improving their neighborhoods, making our cities smarter, safer, and more efficient.
        </p>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-7 max-w-xl mx-auto">
            Our mission is simple: to build a transparent, accessible system where anyone can report city infrastructure problems, track their progress,
            and stay updated in real-time. By providing a direct communication channel between citizens and local authorities, 
            CityEase ensures that every issue is addressed and resolved efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 shadow-lg rounded-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Quick & Easy Reporting</h3>
            <p className="text-gray-700">
              Submit issues with geolocation and media uploads.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Real-time Status Tracking</h3>
            <p className="text-gray-700">
              Receive notifications and updates on your report’s progress.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Priority Resolution to Problems</h3>
            <p className="text-gray-700">
              Issues get priority based on the number of reports and urgency.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Smart Categorization</h3>
            <p className="text-gray-700">
              Automatically routes reports to the appropriate authority for resolution.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Efficient Communication</h3>
            <p className="text-gray-700">
              Municipal workers and citizens collaborate to resolve issues faster.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Data-Driven Insights</h3>
            <p className="text-gray-700">
              Access analytics to improve resource allocation and address recurring issues.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 leading-7 max-w-xl mx-auto">
            Together, we can build cleaner, safer, and more vibrant urban communities—one report at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
