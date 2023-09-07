import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
import "../components/css/Singlepage.css";
import "../components/css/Cart.css";
import Stiker from "../assets/stiker.svg";

const Cart = () => {
  const { cart, incarse, reduction, removeProduct, total, getTotal } =
    useGlobalContext();

  useEffect(() => {
    getTotal();
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="empty">
        <div className="empty-img">
          <img src={Stiker} alt="" />
        </div>
        <h2>Savatda mahsulot yo‘q :(</h2>
        <p>Siz yolg'onchimisiz? Kamida bitta buyurtma bering.</p>
        <Link to={"/product"}>
          <button>Buyurtma berish</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="single-page">
        <h2>Cart Shop</h2>
        {cart.map((product) => (
          <div className="details cart" key={product._id}>
            <img src={product.src} alt="" className="details-img" />
            <div className="content">
              <div className="row">
                <h2>{product.title}</h2>
                <span>${product.price} USD</span>
              </div>
              <p className="colors">
                {product.colors.map((color, index) => (
                  <button key={index} style={{ background: color }}></button>
                ))}
              </p>
              <p>{product.description}</p>
              <p>{product.content}</p>
              <div className="amount">
                <button
                  className="count"
                  onClick={() => reduction(product._id)}
                >
                  -
                </button>
                <span>{product.count}</span>
                <button className="count" onClick={() => incarse(product._id)}>
                  +
                </button>
              </div>
            </div>
            <div className="delete">
              <button onClick={() => removeProduct(product._id)}>X</button>
            </div>
          </div>
        ))}
        <div className="total">
          <Link to="/payment">
            <button>Proceed to Payment</button>
          </Link>
          <h3>Total: ${total}</h3>
        </div>
      </div>
    );
  }
};

export default Cart;
