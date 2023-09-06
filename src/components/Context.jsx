import React, { createContext, useContext, useState } from "react";
import { data } from "../utils/data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product._id === productId
    );

    if (!cart.find((product) => product._id === selectedProduct._id)) {
      setCart((prevCart) => [...prevCart, selectedProduct]);
    } else {
      alert("Siz bu maxsulotni xarid qildingiz");
    }
  };

  return (
    <AppContext.Provider value={{ products, setProducts, cart, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
