import React from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="viewport">
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
