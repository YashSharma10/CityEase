import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Roadmap = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate each roadmap step when it comes into view
    gsap.utils.toArray(".roadmap-step").forEach((step, index) => {
      gsap.fromTo(step, 
        { opacity: 0, y: 50 }, // Starting state
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: step,
            start: "top center+=200", // Trigger animation when the step is in the center
            toggleActions: "play none none reverse", // Animation behavior
            markers: false // Set to true to see trigger points while developing
          }
        }
      );
    });

    // Animate the connecting lines
    gsap.to(".connector-line", {
      scrollTrigger: {
        trigger: ".roadmap-container",
        start: "top center+=100",
        end: "bottom bottom",
        scrub: true,
      },
      height: "100%",
      ease: "none",
    });
  }, []);

  return (
    <div className="roadmap-container bg-gray-100 py-16 relative overflow-hidden">
      <h2 className="text-center text-4xl font-bold mb-16">Report Issue Process</h2>

      {/* Vertical Line that connects steps */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500 connector-line" />

      <div className="space-y-16 max-w-4xl mx-auto px-4 relative">
        {/* Step 1 */}
        <div className="roadmap-step relative bg-white shadow-lg p-8 rounded-lg opacity-0 transform translate-y-10 flex items-center">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl mr-4">
            1
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Report an Issue</h3>
            <p>Submit the issue you're facing through the issue reporting portal.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="roadmap-step relative bg-white shadow-lg p-8 rounded-lg opacity-0 transform translate-y-10 flex items-center">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl mr-4">
            2
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Select Category</h3>
            <p>Select the category that best fits the nature of the issue.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="roadmap-step relative bg-white shadow-lg p-8 rounded-lg opacity-0 transform translate-y-10 flex items-center">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl mr-4">
            3
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Fill Out Form</h3>
            <p>Provide additional details regarding the issue by filling out the form.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="roadmap-step relative bg-white shadow-lg p-8 rounded-lg opacity-0 transform translate-y-10 flex items-center">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl mr-4">
            4
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Wait for Result</h3>
            <p>Our team will process your request and get back to you with a result.</p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="roadmap-step relative bg-white shadow-lg p-8 rounded-lg opacity-0 transform translate-y-10 flex items-center">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl mr-4">
            5
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Result: Feedback or Re-submit</h3>
            <p>If the result is positive, you can submit feedback. Otherwise, you can re-submit the issue with more details.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
