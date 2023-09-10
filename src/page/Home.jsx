import React, { useState, useEffect } from "react";
import Puma from "../assets/logo_puma.png";
import Nike from "../assets/logo_nike.png";
import Adidas from "../assets/logo_adidas.png";
import Boss from "../assets/logo_boss.png";
import Reebok from "../assets/logo_reebok.png";
import Angle_right from "../assets/angle-right.svg";
import Angle_left from "../assets/angle-left.svg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/Context";
import "../components/css/Product.css";
import "../components/css/Home.css";

const Home = () => {
  const [filter, setFilter] = useState("default");
  const { products, addToCart } = useGlobalContext();

  const filteredProducts = products.filter((product) => {
    if (filter === "All") {
      return true;
    } else {
      return product.title.includes(filter);
    }
  });

  const reviews = [
    {
      id: 1,
      image: "http://localhost:5173/src/assets/adidas_shop.png",
    },
    {
      id: 2,
      image: "https://panel.di-sport.com/uploads/sliders/w_1692956940.png",
    },
    {
      id: 3,
      image: "https://panel.di-sport.com/uploads/sliders/w_1684471308.png",
    },
    {
      id: 4,
      image: "https://panel.di-sport.com/uploads/sliders/w_1686819323.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number >= reviews.length) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPerson();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="single-page">
      <div className="home-waraper">
        <div className="home-brend">
          <img src={reviews[index].image} alt="" />
          <div className="home-brend_button">
            <button onClick={nextPerson} className="home-brend_btn1">
              <img src={Angle_right} alt="" />
            </button>
            <button onClick={prevPerson} className="home-brend_btn2">
              <img src={Angle_left} alt="" />
            </button>
          </div>
        </div>
        <div className="home-img">
          <Link to={"/product"}>
            <button onClick={() => setFilter("Reebok")} className="brt">
              <img src={Reebok} alt="" />
            </button>
          </Link>
          <Link to={"/product"}>
            <button onClick={() => setFilter("Nike")} className="brt">
              <img src={Nike} alt="" />
            </button>
          </Link>
          <Link to={"/product"}>
            <button onClick={() => setFilter("Adidas")} className="brt">
              <img src={Adidas} alt="" />
            </button>
          </Link>
          <Link to={"/product"}>
            <button onClick={() => setFilter("Puma")} className="brt">
              <img src={Puma} alt="" />
            </button>
          </Link>
          <Link to={"/product"}>
            <button onClick={() => setFilter("Boss")} className="brt">
              <img src={Boss} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
