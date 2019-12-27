import React, { useState, useEffect } from "react";

//components
import Header from "./components/Header";
import Search from "./components/Search";
import Product from "./components/Product";
import Footer from "./components/Footer";

//data
import { laptops } from "./data/laptops";
import { mice } from "./data/mice";
import { keyboards } from "./data/keyboards";

import "./App.css";

function App() {
  const [product, setProduct] = useState({});

  const selectRecent = item => {
    let productName = "";
    let products = [];

    switch (item) {
      case "Laptops":
        productName = item;
        products = laptops;
        break;
      case "Mice":
        productName = item;
        products = mice;
        break;
      case "Keyboards":
        productName = item;
        products = keyboards;
        break;
      default:
        break;
    }

    setProduct({
      name: productName,
      items: products
    });
  };

  useEffect(() => {}, [product]);

  return (
    <div className="App">
      <Header />
      <div id="viewport">
        <Search selectRecent={selectRecent} isSelected={product.name} />
        <Product productName={product.name} product={product.items} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
