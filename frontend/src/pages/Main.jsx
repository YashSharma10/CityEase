import React from "react";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";
import Roadmap from "../components/Roadmap";
import { useAuth } from "../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Main = () => {
  const { authUser } = useAuth(); // Get authUser from context
  const navigate = useNavigate(); // Initialize navigate

  function openCategory() {
    if (!authUser) {
      toast.error("Please login to report an issue!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log("User not logged in: Cannot access Report Issue"); // Debugging log
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
      console.log("User not logged in: Cannot access Profile"); // Debugging log
    } else {
      navigate("/Profile");
    }
  }

  return (
    <main>
      {/* Toastify Notification */}
      <ToastContainer />

      {/* main image */}
      <div
        className="hero h-96"
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
    </main>
  );
};
