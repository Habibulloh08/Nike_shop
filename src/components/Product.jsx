import React from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
import "../components/css/Product.css";

const Product = () => {
  const { products, addToCart, cart } = useGlobalContext();
  return (
    <div id="product">
      {products.map((product, index) => (
        <div key={product._id} className="card">
          <Link to={`/product/${product._id}`}>
            <img src={product.src} alt="" />
          </Link>
          <div className="content">
            <h2>{product.title}</h2>
            <span>${product.price}</span>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product._id)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
