import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./pages/Main";
import Category from "./pages/Category";
import { FormData } from "./pages/FormData";
import AboutUs from "./pages/AboutUs";
import GoogleAuth from "./components/GoogleAuth";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Worker from "./pages/Worker";
import Worker2 from "./pages/Worker2";
import Doubt from "./pages/Doubt";
import Chatbot from "./pages/Chatbot";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [open, setOpen] = useState(false);
  const chatbotRef = useRef(null); // This will track the chatbot component

  // Toggle the chatbot visibility
  function handleChatbot() {
    setOpen((prevState) => !prevState);
    // Toggle state
  }

  useEffect(() => {
    // Handler for outside clicks
    function handleOutsideClick(event) {
      // Check if the click is outside the chatbot container
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setOpen(false); // Close the chatbot if clicked outside
      }
    }

    // Attach the event listener when the chatbot is open
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup on component unmount or when `open` changes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]); // Effect will run when `open` state changes

  return (
    <BrowserRouter>
      <Header />
      {/* Conditionally render the chatbot */}
      {open && (
        <div ref={chatbotRef}>
          <Chatbot open={open} />
        </div>
      )}
      <button
        className={`fixed bottom-5 z-10 right-9 rounded-full h-16 w-16 bg-white ${
          !open ? "fixed" : "hidden"
        }`}
        onClick={handleChatbot}
      >
        <IoChatboxEllipsesSharp className="flex p-3 w-full h-full"/>
      </button>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Category />} path="/select-category" />
        <Route element={<FormData />} path="/submit-data" />
        <Route element={<AboutUs />} path="/about" />
        <Route element={<GoogleAuth />} path="/login" />
        <Route element={<AboutUs />} path="/about" />
        <Route element={<ContactUs />} path="/contact" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Worker />} path="/worker" />
        <Route element={<Doubt />} path="/doubt" />
        <Route element={<Worker2 />} path="/worker2" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
