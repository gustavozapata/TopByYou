import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Router>
      <div className="App">
        <Header />
        <div id="viewport">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Search
                    selectRecent={selectRecent}
                    isSelected={product.name}
                  />
                  <Product productName={product.name} product={product.items} />
                </>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
