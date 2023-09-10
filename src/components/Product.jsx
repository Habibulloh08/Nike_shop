// Product.js
import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
import "../components/css/Product.css";
import Search from "../assets/search.svg";

const Product = () => {
  const { products, addToCart } = useGlobalContext();
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="single-page">
      <div className="filtr">
        <div className="filter-buttons">
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Nike")}>Nike</button>
          <button onClick={() => setFilter("Adidas")}>Adidas</button>
          <button onClick={() => setFilter("Puma")}>Puma</button>
          <button onClick={() => setFilter("Boss")}>Boss</button>
          <button onClick={() => setFilter("Reebok")}>Reebok</button>
        </div>
        <div className="filtr-search">
          <img src={Search} alt="" />
          <input
            type="text"
            placeholder="Maxsulotlarni qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div id="product">
        {products
          .filter((product) => {
            const titleMatch = product.title
              .toLowerCase()
              .includes(searchQuery.toLowerCase());

            if (filter === "All") {
              return titleMatch;
            } else {
              return (
                (product.brand === filter || product.title.includes(filter)) &&
                titleMatch
              );
            }
          })
          .map((product, index) => (
            <div key={product._id} className="card">
              <Link to={`/product/${product._id}`}>
                <img src={product.src} alt={product.title} />
              </Link>
              <div className="content-product">
                <h2>{product.title}</h2>
                <div className="content-text">
                  <p>{product.description}</p>
                  <span>${product.price}</span>
                </div>
                <button onClick={() => addToCart(product._id)}>
                  Add TO Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
