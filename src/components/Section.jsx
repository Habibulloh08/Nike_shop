import React from 'react';
import Product from './Product';
import Error from './Error'
import Cart from './Cart';
const Section = () => {
  return (
    <section>
      <Product />
      <Cart />
      {/* <Error /> */}
 
      
    </section>
  );
};

export default Section;
