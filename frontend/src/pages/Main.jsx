import React from "react";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Roadmap from "../components/Roadmap";
import { useAuth } from "../context/AuthProvider";

export const Main = () => {
  const { authUser } = useAuth();

  const navigate = useNavigate();

  function openCategory() {
    if (!authUser) {
      console.log("login required");
    } else navigate("/select-category");
  }

  function openProfile() {
    navigate("/Profile");
  }

  return (
    <main>
      {/* main image */}
      <div
        className="hero h-96" // Adjust the height as needed
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-green-400">Report Today,</span> See Change
              Tomorrow
            </h1>
            <p className="mb-2">
              Report infrastructure issues, categorizes them and routes them to
              the appropriate department. We offer real-time tracking, improving
              transparency and accountability for faster resolution.
            </p>
          </div>
        </div>
      </div>

      {/* sub category with increased margin */}
      <section className="flex w-full justify-center gap-4 my-8 mx-8">
        {" "}
        {/* Increased margins */}
        <Section
          image={
            "https://img.icons8.com/?size=100&id=Mc0tQ0XMU2s_&format=png&color=000000"
          }
          text={"Report an Issue"}
          openScreen={openCategory}
        />
        <Section
          image={
            "https://img.icons8.com/?size=100&id=24875&format=png&color=000000"
          }
          text={"Track Progress"}
          openScreen={openProfile}
        />
        <Section
          image={
            "https://img.icons8.com/?size=100&id=7649&format=png&color=000000"
          }
          text={"Rewards and Leaderboard"}
        />
      </section>

      {/* Roadmap section */}
      <Roadmap />

      {/* about section */}
      {/* <section className="mb-3">
        <div className="text-center p-3">
          <h1 className="text-3xl">About CityEase</h1>
        </div>
        <div className="flex items-center">
          <div className="bg-purple-300 max-w-screen-lg p-8 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
            enim expedita asperiores earum voluptatibus excepturi eos a!
            Adipisci odio quam, animi unde cum obcaecati saepe dolor harum esse
            laboriosam.
          </div>
          <div className="w-full bg-red-400 p-8 text-xl">
            Empowering you to shape a better city
          </div>
        </div>
      </section> */}

      {/* carousel */}
      {/* <Carousel/> */}
    </main>
  );
};
