import React, { useState } from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Product from "./components/Product";
import Footer from "./components/Footer";

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
      case "laptops":
        productName = "Laptops";
        products = laptops;
        break;
      case "mice":
        productName = "Mice";
        products = mice;
        break;
      case "keyboards":
        productName = "Keyboards";
        products = keyboards;
        break;
    }

    setProduct({
      name: productName,
      items: products
    });
  };

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
