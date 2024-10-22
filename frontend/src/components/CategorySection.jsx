import React from "react";
import { useNavigate } from "react-router-dom";

const CategorySection = ({ imgUrl, categoryTitle, subCategoryTitle }) => {
  const navigate = useNavigate();

  // Navigate to the form submission page with the state
  const openFormData = () => {
    navigate('/submit-data', {
      state: { message: categoryTitle, subCategoryTitle },
    });
  };

  return (
    <div
      onClick={openFormData}
      className="flex w-64 justify-center items-center flex-col gap-1 border rounded-md p-4 transition-transform transform hover:scale-105 cursor-pointer relative overflow-hidden group"
    >
      {/* Image with white color */}
      <img
        src={imgUrl}
        alt={categoryTitle}
        className="w-16 h-16 mb-2 filter invert" // White color using filter
      />
      {/* White text */}
      <h2 className="text-lg font-semibold text-center text-white">{categoryTitle}</h2> {/* Fixed curly brace */}

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-md border-4 border-transparent group-hover:border-transparent group-hover:animate-glow"></div>

      {/* Animated gradient effect */}
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(0, 255, 0, 0.5), 
                        0 0 10px rgba(0, 255, 0, 0.3), 
                        0 0 15px rgba(0, 255, 0, 0.2);
          }
          100% {
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 
                        0 0 20px rgba(0, 255, 0, 0.5), 
                        0 0 30px rgba(0, 255, 0, 0.3);
          }
        }

        .group:hover .animate-glow {
          animation: glow 1.5s infinite alternate;
          border: 4px solid transparent; /* Ensure a solid border */
          background: linear-gradient(90deg, rgba(0, 255, 0, 1), rgba(0, 200, 0, 1)); /* Gradient background */
          background-clip: border-box; /* Ensures the background is clipped to the border */
          border-radius: 0.5rem; /* Same rounding as the container */
        }
      `}</style>
    </div>
  );
};

export default CategorySection;
