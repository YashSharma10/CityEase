import React from "react";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel"

export const Main = () => {
  const navigate = useNavigate();
  function openCategory() {
    navigate("/select-category")
  }
  return (
    <main>
      {/* main image */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"><span className="text-green-400">Report Today,</span> See Change Tomorrow</h1>
            <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt vel cumque ab veniam ullam dicta porro. Ex, iste corporis.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      {/*sub category  */}
      <section className="flex w-full justify-center gap-2 my-2">
        <Section
          image={
            "https://img.icons8.com/?size=100&id=11691&format=png&color=000000"
          }
          text={"Report a Issue"}
          openScreen={openCategory}
        />
        <Section
          image={
            "https://img.icons8.com/?size=100&id=24875&format=png&color=000000"
          }
          text={"Track Progress"}
        />
        <Section
          image={
            "https://img.icons8.com/?size=100&id=7649&format=png&color=000000"
          }
          text={"Rewards and Leaderboard"}
        />
      </section>

      {/* about section */}
      <section className="mb-3">
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
      </section>

      {/* carousel */}
      {/* <Carousel/> */}
    </main>
  );
};
