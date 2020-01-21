import React, { useState } from "react";

//components
import Header from "./components/Header";
import Search from "./components/Search";
import NoSearchResults from "./components/NoSearchResults";
import Product from "./components/Product";
import Footer from "./components/Footer";

//pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sign from "./pages/Sign";

//data
import { laptops } from "./data/laptops";
import { mice } from "./data/mice";
import { keyboards } from "./data/keyboards";

//third-party
import axios from "axios";

import "./App.css";

function App() {
  const [product, setProduct] = useState({});
  const [currentPage, setCurrentPage] = useState("Home");
  const [noResult, setNoResult] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("");

  const logIn = (e, email, password) => {
    axios
      .post("http://localhost:4000/login", { email, password })
      .then(res => {
        if (res.data.logged) {
          setLogged(true);
          setUser(res.data.user);
        }
      })
      .catch(err => console.log(err));
    e.preventDefault();
  };

  const selectRecent = item => {
    setNoResult(false);
    let productName = "";
    let products = [];

    switch (item) {
      case "laptops":
        productName = item;
        products = laptops;
        break;
      case "mice":
        productName = item;
        products = mice;
        break;
      case "keyboards":
        productName = item;
        products = keyboards;
        break;
      default:
        setNoResult(true);
        productName = item;
        products = [];
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
            <Search
              selectRecent={selectRecent}
              isSelected={product.name}
              noResult={noResult}
            />
            {noResult ? (
              <NoSearchResults resultName={product.name} />
            ) : (
              <Product productName={product.name} products={product.items} />
            )}
          </>
        );
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Sign":
        return <Sign logIn={logIn} />;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <div id="viewport">
        <Header user={user} goTo={goTo} active={currentPage} />
        {logged ? <h2>Welcome {user}</h2> : ""}
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
