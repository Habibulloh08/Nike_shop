import React, { useState } from "react";
import Menu from "../assets/burger.svg";
import Close from "../assets/xmark.svg";
import Cart from "../assets/cart.svg";
import Logo from "../assets/sport-logo.avif";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { useGlobalContext } from "./Context";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useGlobalContext();

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="burger" width={20} />
      </div>
      <div className="logo">
        <h1>
          <Link to={"/"}>Shop by sport</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? "nav toggle" : "nav"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/login"}>Login / Register</Link>
          </li>
          <li className="close" onClick={menuToggle}>
            <img src={Close} alt="burger" width={20} />
          </li>
        </ul>
        <div className="nav-cart">
          <span>{cart.length}</span>
          <Link to={"/cart"}>
            <img src={Cart} alt="burger" width={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
