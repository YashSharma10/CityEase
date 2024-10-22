import React from "react";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";
import Roadmap from "../components/Roadmap";
import { useAuth } from "../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spotlight from "../components/ui/Spotlight";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";


export const Main = () => {
  const { authUser } = useAuth(); // Get authUser from context
  const navigate = useNavigate(); // Initialize navigate

  function openCategory() {
    if (!authUser) {
      toast.error("Please login to report an issue!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log("User not logged in: Cannot access Report Issue");
    } else {
      navigate("/select-category");
    }
  }

  function openProfile() {
    if (!authUser) {
      toast.error("Please login to track your progress!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log("User not logged in: Cannot access Profile");
    } else {
      navigate("/Profile");
    }
  }

  return (
    <main className="relative bg-black-900 min-h-screen">
      {/* Toastify Notification */}
      <ToastContainer />
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* Spotlight effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Hero Section */}
      <div className="hero relative flex items-center justify-center py-16 text-white">
        <div className="text-center max-w-2xl z-10">
          <h1 className="text-5xl font-bold mb-4 leading-snug">
            <span className="block text-green-300">Report Today,</span>
            See Change Tomorrow
          </h1>
          <p className="text-lg mb-6">
            Report infrastructure issues, categorize them, and route them to the
            appropriate department. Track real-time progress and contribute to faster
            resolutions.
          </p>
          <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
            Report an Issue
            </HoverBorderGradient>
        </div>
        <div className="absolute inset-0 bg-opacity-60"></div>
      </div>
      </div>

      <div className="bg-black flex items-center justify-center">
  <section className="my-16 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    <Section
      image={
        "https://img.icons8.com/?size=100&id=Mc0tQ0XMU2s_&format=png&color=009700"
      }
      text={"Report an Issue"}
      openScreen={openCategory}
      className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2"
    />
    <Section
      image={
        "https://img.icons8.com/?size=100&id=24875&format=png&color=009700"
      }
      text={"Track Progress"}
      openScreen={openProfile}
      className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2"
    />
    <Section
      image={
        "https://img.icons8.com/?size=100&id=7649&format=png&color=009700"
      }
      text={"Rewards and Leaderboard"}
      className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2"
    />
  </section>
</div>


      {/* Roadmap section */}
      <Roadmap />
    </main>
  );
};
