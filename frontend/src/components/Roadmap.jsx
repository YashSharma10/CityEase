import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from "../components/ui/timeline"; // Ensure the Timeline component is imported 

const Roadmap = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate each roadmap step when it comes into view
    gsap.utils.toArray(".roadmap-step").forEach((step) => {
      gsap.fromTo(step, 
        { opacity: 0, y: 50 }, // Starting state
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, // Reduced duration for a quicker animation
          ease: "power2.out", // Smooth easing
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
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
      height: "100%",
      ease: "none",
    });
  }, []);

  const data = [
    {
      title: "Step 1",
      content: (
        <div className="roadmap-step">
          <h3 className="text-3xl font-semibold mb-2">Report an Issue</h3>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Submit the issue you're facing through the issue reporting portal.
          </p>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div className="roadmap-step">
          <h3 className="text-3xl font-semibold mb-2">Select Category</h3>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Select the category that best fits the nature of the issue.
          </p>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div className="roadmap-step">
          <h3 className="text-3xl font-semibold mb-2">Fill Out Form</h3>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Provide additional details regarding the issue by filling out the form.
          </p>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div className="roadmap-step">
          <h3 className="text-3xl font-semibold mb-2">Wait for Result</h3>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Our team will process your request and get back to you with a result.
          </p>
        </div>
      ),
    },
    {
      title: "Step 5",
      content: (
        <div className="roadmap-step">
          <h3 className="text-3xl font-semibold mb-2">Result: Feedback or Re-submit</h3>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            If the result is positive, you can submit feedback. Otherwise, you can re-submit the issue with more details.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="roadmap-container bg-[#000000] py-16 relative overflow-hidden font-inter">
      <h2 className="text-center text-4xl font-bold text-white mb-16">Report Issue Process</h2>

      {/* Vertical Line that connects steps */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1" />

      <div className="w-full">
      <Timeline data={data} />
    </div>
    </div>
  );
};

export default Roadmap;
