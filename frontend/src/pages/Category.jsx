import React from "react";
import { motion } from "framer-motion";
import CategorySection from "../components/CategorySection";
import { SparklesCore } from "../components/ui/sparkles";

const Category = () => {
  return (
    <div className="bg-black">

      {/* Main Heading Section */}
      <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-5xl text-2xl lg:text-7xl font-bold text-center text-white relative z-20">
          Choose a Category
        </h1>
        <div className="w-[35rem] h-32 relative">
          {/* Gradients */}
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-48 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[4px] w-1/4 blur-sm" />
          <div className="absolute inset-x-48 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Sparkles Core */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1000}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      {/* Category Section */}
      <div className="bg-black flex justify-center gap-4 p-3 flex-wrap">
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=2deo7hNfn3l0&format=png&color=000000"}
          categoryTitle={"Street Light"}
          subCategoryTitle={[
            "Malfunctioning streetlights",
            "Broken or flickering lights",
            "Requests for additional street lighting in dark areas",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=49638&format=png&color=000000"}
          categoryTitle={"Road & Pavement Issues"}
          subCategoryTitle={[
            "Potholes",
            "Cracked or uneven sidewalks",
            "Blocked or damaged roads",
            "Missing or broken road signs",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=OkbqTO4l98To&format=png&color=000000"}
          categoryTitle={"Waste Management"}
          subCategoryTitle={[
            "Overflowing garbage bins",
            "Illegal dumping",
            "Delayed garbage collection",
            "Littering in public spaces",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=kvC4ckynd0r0&format=png&color=000000"}
          categoryTitle={"Traffic Signals & Signs"}
          subCategoryTitle={[
            "Broken or malfunctioning traffic lights",
            "Faded or damaged road markings",
            "Missing or obscured traffic signs",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=K3f3XWd7mLpe&format=png&color=000000"}
          categoryTitle={"Water Supply & Drainage"}
          subCategoryTitle={[
            "Leaking water pipes",
            "Low water pressure",
            "Water contamination",
            "Blocked or overflowing drains/sewers",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=agokfJYrCkdX&format=png&color=000000"}
          categoryTitle={"Public Parks"}
          subCategoryTitle={[
            "Damaged park equipment",
            "Overgrown grass or unmaintained greenery",
            "Litter in parks",
            "Lack of seating or shelters",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=XAcRRlNdqGIn&format=png&color=000000"}
          categoryTitle={"Electricity & Power Outages"}
          subCategoryTitle={[
            "Frequent power cuts",
            "Voltage fluctuations",
            "Damaged electrical poles",
            "Fallen power lines",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=4539&format=png&color=000000"}
          categoryTitle={"Animal Control"}
          subCategoryTitle={[
            "Stray dogs or animals",
            "Animal attacks or threats",
            "Lack of animal shelters",
            "Unclean animal areas",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=mnPkwNOXSIqA&format=png&color=000000"}
          categoryTitle={"Public Toilets & Sanitation"}
          subCategoryTitle={[
            "Unclean public toilets",
            "Non-functional toilets",
            "Lack of water or sanitation supplies",
            "Insufficient number of public toilets",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=7BhOj261T8ZA&format=png&color=000000"}
          categoryTitle={"Parking Violations"}
          subCategoryTitle={[
            "Illegal parking",
            "Blocking public paths or driveways",
            "Parking in restricted areas",
            "Double parking",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=54gBpMx6Fs4V&format=png&color=000000"}
          categoryTitle={"Flooding & Waterlogging"}
          subCategoryTitle={[
            "Flooded streets",
            "Waterlogged sidewalks",
            "Blocked drainage causing water accumulation",
            "Recurring flood-prone areas",
          ]}
        />
        <CategorySection
          imgUrl={"https://img.icons8.com/?size=100&id=33951&format=png&color=000000"}
          categoryTitle={"Other"}
          subCategoryTitle={[
            "Any issues not listed",
            "General public concerns",
            "Community suggestions",
            "Feedback for improvements",
          ]}
        />
      </div>
    </div>
  );
};

export default Category;
