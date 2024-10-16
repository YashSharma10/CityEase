import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./pages/Main";
import Category from "./pages/Category";
import { FormData } from "./pages/FormData";
import AboutUs from "./pages/AboutUs";
// import Login from "./pages/Login";
import GoogleAuth from "./components/GoogleAuth";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Worker from "./pages/Worker";
import Worker2 from "./pages/Worker2";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Category />} path="/select-category" />
        <Route element={<FormData />} path="/submit-data" />
        <Route element={<AboutUs />} path="/about" />
        <Route element={<GoogleAuth/>} path="/login" />
        <Route element={<AboutUs/>} path="/about" />
        <Route element={<ContactUs/>} path="/contact" />
        <Route element={<Profile/>} path="/profile" />
        <Route element={<Worker/>} path="/worker" />
        <Route element={<Worker2/>} path="/worker2" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
