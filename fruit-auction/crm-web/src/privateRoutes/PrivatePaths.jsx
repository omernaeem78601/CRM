import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import FarmersList from "../pages/FarmersList";
import VendorList from "../pages/VendorList";
import MyAccount from "../pages/MyAccount";
import RequestPartner from "../pages/RequestPartner";

const PrivatePaths = () => {
  return (
    <>
    <Routes>

      <Route path="/farmer-list" element={<FarmersList />} />
      <Route path="/vendor-list" element={<VendorList />} />
      <Route path="/account-setting" element={<MyAccount />} />
      <Route path="/request-partner" element={<RequestPartner />} />
      <Outlet />
    </Routes>
    </>
  );
};

export default PrivatePaths;
