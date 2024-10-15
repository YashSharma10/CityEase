import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-7 text-center mb-12">
          We’d love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us.
        </p>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">CityEase Support Team</h2>
          <div className="text-lg text-gray-700 space-y-2">
            <p>📧 <span className="font-bold">Email:</span> <a href="mailto:support@cityease.com" className="text-blue-600">support@cityease.com</a></p>
            <p>📞 <span className="font-bold">Phone:</span> <a href="tel:+911234567890" className="text-blue-600">+91-123-456-7890</a></p>
            <p>🌐 <span className="font-bold">Website:</span> <a href="https://www.cityease.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">www.cityease.com</a></p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Follow Us</h2>
          <p className="text-lg text-gray-700 leading-7">
            Stay connected and follow us on social media to keep up with the latest updates:
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://twitter.com/CityEase" className="text-blue-600 font-bold text-lg" target="_blank" rel="noopener noreferrer">Twitter: @CityEase</a>
            <a href="https://facebook.com/CityEase" className="text-blue-600 font-bold text-lg" target="_blank" rel="noopener noreferrer">Facebook: facebook.com/CityEase</a>
            <a href="https://instagram.com/CityEase" className="text-blue-600 font-bold text-lg" target="_blank" rel="noopener noreferrer">Instagram: @CityEase</a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 leading-7">
            Let’s work together to improve our cities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
