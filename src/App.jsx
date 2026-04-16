import "./locales/i18"
import { Route, Routes } from "react-router";
import ProductsDetail from "./components/home/ProductsDetail";
import { useTheme } from "./stores/themeStore";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Basket from "./pages/Basket";
import { useTranslation } from "react-i18next";
import HomePage from "./components/home/HomePage";
import ProductPage from "./pages/ProductPage";



const App = () => {
  const { isDarkModeOn } = useTheme();
  const { t } = useTranslation()

  return (
    <div
      className={`w-full min-h-screen h-fit flex flex-col justify-center items-center select-none ${isDarkModeOn ? "bg-stone-900 text-white" : "bg-white text-black"}`}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/details/:id" element={<ProductsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
