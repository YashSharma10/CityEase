import React from "react";
import CategorySection from "../components/CategorySection";

const Category = () => {
  return (
    <div>
      <div className="h-32 bg-green-400 text-white flex justify-center items-center">
        <h1 className="text-3xl ">Choose A Category</h1>
      </div>
      <div className="flex justify-center gap-4 p-3 flex-wrap ">
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=1946&format=png&color=000000"
          }
          categoryTitle={"Water"}
        />
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=347&format=png&color=000000"
          }
          categoryTitle={"Road"}
        />
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=1948&format=png&color=000000"
          }
          categoryTitle={"Electricity"}
        />
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=2deo7hNfn3l0&format=png&color=000000"
          }
          categoryTitle={"Street Light"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=49638&format=png&color=000000"
          }
          categoryTitle={"Road & Pavement Issues"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=OkbqTO4l98To&format=png&color=000000"
          }
          categoryTitle={"Waste Management"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=kvC4ckynd0r0&format=png&color=000000"
          }
          categoryTitle={"Traffic Signals & Signs"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=K3f3XWd7mLpe&format=png&color=000000"
          }
          categoryTitle={"Water Supply & Drainage"}
        />
      </div>
    </div>
  );
};

export default Category;
