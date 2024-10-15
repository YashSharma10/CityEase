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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
