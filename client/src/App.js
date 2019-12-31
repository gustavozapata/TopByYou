import React, { useState, useEffect } from "react";

//components
import Header from "./components/Header";
import Search from "./components/Search";
import Product from "./components/Product";
import Footer from "./components/Footer";

//pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

//data
import { laptops } from "./data/laptops";
import { mice } from "./data/mice";
import { keyboards } from "./data/keyboards";

import "./App.css";

function App() {
  const [product, setProduct] = useState({});
  const [currentPage, setCurrentPage] = useState("Home");

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

  const goTo = page => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return (
          <>
            <Search selectRecent={selectRecent} isSelected={product.name} />
            <Product productName={product.name} product={product.items} />
          </>
        );
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Login":
        return <Login />;
      default:
        return;
    }
  };

  useEffect(() => {}, [product]);

  return (
    <div className="App">
      <div id="viewport">
        <Header goTo={goTo} active={currentPage} />
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
