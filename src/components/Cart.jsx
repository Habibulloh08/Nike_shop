import React from "react";
import { useGlobalContext } from "./Context";
import "../components/css/Product.css";

const Cart = () => {
  const { cart } = useGlobalContext();

  return (
    <div id="product">
      <h2>Cart Shop</h2>
      {cart.map((product) => (
        <div key={product._id} className="card">
          <img src={product.src} alt="" />
          <div className="content">
            <h2>{product.title}</h2>
            <span>${product.price} USD</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
