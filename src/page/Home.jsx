import Puma from "../assets/logo_puma.png";
import Nike from "../assets/logo_nike.png";
import Adidas from "../assets/logo_adidas.png";
import Boss from "../assets/logo_boss.png";
import Reebok from "../assets/logo_reebok.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../components/Context";
import "../components/css/Product.css";
import "../components/css/Home.css";

const Home = () => {
  const [filter, setFilter] = useState("default");
  const { products, addToCart } = useGlobalContext();

  // Mahsulotlar ro'yxatini filtrlash
  const filteredProducts = products.filter((product) => {
    if (filter === "All") {
      return true;
    } else {
      return product.title.includes(filter);
    }
  });

  return (
    <div className="single-page">
      <div className="home-waraper">
        <div className="home-img">
          <button onClick={() => setFilter("Reebok")}>
            <img src={Reebok} alt="" />
          </button>
          <hr />
          <button onClick={() => setFilter("Nike")}>
            <img src={Nike} alt="" />
          </button>
          <hr />
          <button onClick={() => setFilter("Adidas")}>
            <img src={Adidas} alt="" />
          </button>
          <hr />
          <button onClick={() => setFilter("Puma")}>
            <img src={Puma} alt="" />
          </button>
          <hr />
          <button onClick={() => setFilter("Boss")}>
            <img src={Boss} alt="" />
          </button>
        </div>
      </div>

      {/* Filtrlangan mahsulotlarni chiqarish */}
      <div className="home-product">
        {filteredProducts.map((product, index) => (
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

export default Home;
