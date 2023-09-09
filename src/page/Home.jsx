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
          <Link to={"/product"}>
            <button onClick={() => setFilter("Reebok")}>
              <img src={Reebok} alt="" />
            </button>
          </Link>
          <hr />
          <Link to={"/product"}>
            <button onClick={() => setFilter("Nike")}>
              <img src={Nike} alt="" />
            </button>
          </Link>
          <hr />
          <Link to={"/product"}>
            <button onClick={() => setFilter("Adidas")}>
              <img src={Adidas} alt="" />
            </button>
          </Link>
          <hr />
          <Link to={"/product"}>
            <button onClick={() => setFilter("Puma")}>
              <img src={Puma} alt="" />
            </button>
          </Link>
          <hr />
          <Link to={"/product"}>
            <button onClick={() => setFilter("Boss")}>
              <img src={Boss} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
