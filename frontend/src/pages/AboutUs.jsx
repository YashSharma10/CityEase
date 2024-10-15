
const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us: Building Sustainable Cities
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/400"
            alt="Sustainable Cities"
            className="rounded-full w-40 h-40 object-cover"
          />
        </div>

        {/* Company Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our mission is to build sustainable cities that meet the needs of both the environment
          and the people living in them. By focusing on renewable energy, efficient public 
          transportation, and green infrastructure, we aim to create urban spaces that are 
          resilient, inclusive, and environmentally friendly.
        </p>

        {/* Case Studies of Sustainable Cities */}
        <div className="space-y-8">
          {/* City: Copenhagen */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-city"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Copenhagen, Denmark</h3>
                <p className="text-gray-600">
                  Copenhagen is a world leader in sustainability with a goal to become carbon-neutral
                  by 2025. The city has reduced its CO<sub>2</sub> emissions by more than 40% 
                  since 1995 through clean energy initiatives, bike infrastructure, and energy-efficient buildings.
                </p>
              </div>
            </div>
          </div>

          {/* City: Singapore */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-tree"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Singapore</h3>
                <p className="text-gray-600">
                  Singapore has pioneered the concept of the "garden city" by incorporating 
                  green spaces into urban planning. Its "zero waste" strategy and vertical gardens 
                  have made the city more livable while addressing waste management challenges.
                </p>
              </div>
            </div>
          </div>

          {/* City: Curitiba */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-bus-alt"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Curitiba, Brazil</h3>
                <p className="text-gray-600">
                  Curitiba is known for its innovative public transportation system, including 
                  the Bus Rapid Transit (BRT) system. This has drastically reduced traffic congestion 
                  and air pollution, making it a model for sustainable urban mobility worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* City: Vancouver */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-leaf"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Vancouver, Canada</h3>
                <p className="text-gray-600">
                  Vancouver is one of the greenest cities in the world, with a focus on 
                  renewable energy, sustainable building design, and waste management. 
                  The city aims to run on 100% renewable energy by 2050.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Vision */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Our Vision for the Future</h3>
          <p className="text-gray-600 mt-4">
            We envision cities that are not only environmentally sustainable but also promote 
            social equity and economic prosperity. By leveraging technology and innovation, 
            we are solving urban challenges to create a better future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
