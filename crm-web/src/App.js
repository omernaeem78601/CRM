import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import NavHeader from "./components/Navbar/NavHeader";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
