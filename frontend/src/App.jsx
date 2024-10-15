import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./pages/Main";
import Category from "./pages/Category";
import { FormData } from "./pages/FormData";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Category />} path="/select-category" />
        <Route element={<FormData />} path="/submit-data" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
