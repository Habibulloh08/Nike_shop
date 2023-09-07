import React from "react";
import Product from "./Product";
import Error from "./Error";
import Cart from "./Cart";
import Singlepage from "../page/Singlepage";
const Section = () => {
  return (
    <section className="Section">
      <Product />
      <Cart />
      <Singlepage />
      {/* <Error /> */}
    </section>
  );
};

export default Section;
