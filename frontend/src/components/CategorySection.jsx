import React from "react";
import { useNavigate } from "react-router-dom";

const CategorySection = ({ imgUrl,categoryTitle }) => {
    const navigate = useNavigate()
    function openFormData() {
        // navigate("/submit-data")
        navigate('/submit-data', { state: { message: categoryTitle } })
    }
  return (
    <div onClick={openFormData} className="flex justify-center items-center flex-col gap-1 border rounded-md p-4 hover:bg-slate-100 hover:cursor-pointer">
      <img src={imgUrl} alt="error" />
      <h2>{categoryTitle}</h2>
    </div>
  );
};

export default CategorySection;
