import React from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Laptops from "./components/Laptops";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="viewport">
        {/* <Search /> */}
        <Laptops />
      </div>
      <Footer />
    </div>
  );
}

export default App;
