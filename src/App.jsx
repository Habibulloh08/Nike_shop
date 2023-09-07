import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Singlepage from "./page/Singlepage";
import Section from "./components/Section";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Singlepage />} />
      </Routes>
    </div>
  );
}

export default App;
