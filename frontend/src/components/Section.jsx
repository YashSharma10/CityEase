import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Section = ({ image, text, openScreen }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the card
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.8, y: 50 }, // Starting state
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" } // Final state
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center w-72 p-1 shadow-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-xl"
    >
      <figure className="px-2 pt-2">
        <img src={image} alt="Section Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="card-actions">
          <button className="btn bg-green-500 text-white" onClick={openScreen}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;