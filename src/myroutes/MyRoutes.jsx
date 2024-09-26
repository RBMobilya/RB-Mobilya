import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Allproducts from "../pages/Allproducts";
import SingleProductPage from "../pages/SingleProduct";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<Contact />} />
      <Route
        path="/products/category/:categoryName"
        element={<Allproducts />}
      />
      <Route path="/products" element={<Allproducts />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/product/:id/color/:colorName" element={<SingleProductPage />} />
    </Routes>
  );
};
export default MyRoutes;
