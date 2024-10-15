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
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=10662&format=png&color=000000"
          }
          categoryTitle={"Public Transportation"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=agokfJYrCkdX&format=png&color=000000"
          }
          categoryTitle={"Public Parks"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=XAcRRlNdqGIn&format=png&color=000000"
          }
          categoryTitle={"Electricity & Power Outages"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=4539&format=png&color=000000"
          }
          categoryTitle={"Animal Control"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=mnPkwNOXSIqA&format=png&color=000000"
          }
          categoryTitle={"Public Toilets & Sanitation"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=7BhOj261T8ZA&format=png&color=000000"
          }
          categoryTitle={"Parking Violations"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=54gBpMx6Fs4V&format=png&color=000000"
          }
          categoryTitle={"Flooding & Waterlogging"}
        />{" "}
        <CategorySection
          imgUrl={
            "https://img.icons8.com/?size=100&id=33951&format=png&color=000000"
          }
          categoryTitle={"Other"}
        />
      </div>
    </div>
  );
};

export default Category;
