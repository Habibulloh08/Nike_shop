import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Singlepage from "./page/Singlepage";
import Contact from "./components/Contact";
import Payment from "./page/Payment";
// import Error from "./components/Error ";
function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Singlepage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
