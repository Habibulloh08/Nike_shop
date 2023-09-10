import React, { createContext, useContext, useState, useEffect } from "react";
import { data } from "../utils/data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const addToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product._id === productId
    );

    const updatedCart = [...cart];

    if (!updatedCart.find((product) => product._id === selectedProduct._id)) {
      updatedCart.push({ ...selectedProduct, count: 1 });
    } else {
      updatedCart.forEach((item) => {
        if (item._id === selectedProduct._id) {
          item.count += 0;
          alert("Mahsulot savatga qo'shildi");
        }
      });
    }

    setCart(updatedCart);
  };

  const reduction = (id) => {
    const updatedCart = [...cart];
    updatedCart.forEach((item) => {
      if (item._id === id) {
        if (item.count === 1) {
          return;
        }
        item.count -= 1;
      }
    });
    setCart(updatedCart);
  };

  const incarse = (id) => {
    const updatedCart = [...cart];
    updatedCart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart(updatedCart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Maxsulotni olib tashlamoqchi misiz?")) {
      const updatedCart = cart.filter((item) => item._id !== id);
      setCart(updatedCart);
    }
  };

  const getTotal = () => {
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    setTotal(res);
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));

    if (dataCart !== null) {
      setCart(dataCart);
    }

    if (dataTotal !== null) {
      setTotal(dataTotal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
    localStorage.setItem("dataTotal", JSON.stringify(total));
  }, [cart, total]);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        reduction,
        incarse,
        removeProduct,
        getTotal,
        total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
