import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../components/Context";
import "../components/css/Singlepage.css";

const Singlepage = () => {
  const { id } = useParams();
  const { products } = useGlobalContext();
  const product = products.find((product) => product._id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="single-page">
      <div className="details">
        <img src={product.src} alt={product.title} className="details-img" />
        <div className="content">
          <div className="row">
            <h2>{product.title}</h2>
            <span>${product.price}</span>
          </div>
          <p className="colors">
            {product.colors.map((color, index) => (
              <button key={index} style={{ background: color }}></button>
            ))}
          </p>
          <p>{product.description}</p>
          <p>{product.content}</p>
          <Link to={"/cart"} className="cart">
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
