import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AppLayout,
  Homepage,
  Login,
  PageNotFound,
  Pricing,
  Product,
} from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
