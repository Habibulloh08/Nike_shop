import React from "react";
import Product from "./Product";
import Cart from "./Cart";
import Singlepage from "../page/Singlepage";
const Section = () => {
  return (
    <section>
      <Product />
      <Cart />
      <Singlepage />
    </section>
  );
};

export default Section;
