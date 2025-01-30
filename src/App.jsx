import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/Vans/Vans";
import VanDetail from "../pages/Vans/VanDetail";
import "./server";
import Layout from "../components/Layout";
import Dashboard from "../pages/Host/Dashboard";
import Income from "../pages/Host/Income";
import Reviews from "../pages/Host/Reviews";
import HostLayout from "../components/HostLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          {/* Host Layout */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
