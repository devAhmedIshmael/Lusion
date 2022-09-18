import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div id="main">
      <Sidebar />
      <Routes>
        <Route path="/Lusion" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default Main;
