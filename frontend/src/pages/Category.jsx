import React from "react";
import CategorySection from "../components/CategorySection";

const Category = () => {
  return (
    <div>
      <div className="h-32 bg-blue-400 flex justify-center items-center">
        <h1 className="text-2xl ">Choose A Category</h1>
      </div>
      <div className="flex justify-center gap-4 p-3">
        <CategorySection imgUrl={"https://img.icons8.com/?size=100&id=1946&format=png&color=000000"} categoryTitle={"Water"} />
        <CategorySection imgUrl={"https://img.icons8.com/?size=100&id=347&format=png&color=000000"} categoryTitle={"Road"}/>
        <CategorySection imgUrl={"https://img.icons8.com/?size=100&id=1948&format=png&color=000000"} categoryTitle={"Electricity"}/>
      </div>
    </div>
  );
};

export default Category;
