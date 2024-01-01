import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import NavHeader from "./components/Navbar/NavHeader";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import {PrivacyPolicy} from "./pages/PrivacyPolicy";
import Category from "./components/Category";
import About from "./pages/About";
import FarmersList from "./pages/FarmersList";
import MyAccount from "./pages/MyAccount";
import VendorList from "./pages/VendorList";
import RequestPartner from "./pages/RequestPartner";

function App() {
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/government-policies" element={<PrivacyPolicy />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/farmer-list" element={<FarmersList />} />
        <Route path="/vendor-list" element={<VendorList />} />
        <Route path="/account-setting" element={<MyAccount />} />
        <Route path="/request-partner" element={<RequestPartner />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
