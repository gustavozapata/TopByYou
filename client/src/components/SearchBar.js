import React, { useState } from "react";
import SearchSuggestions from "./SearchSuggestions";
import { products } from "../data/products";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const suggestProducts = e => {
    setSearchTerm(e.target.value);
    setSuggestions(
      products.filter(
        item =>
          item.toLowerCase().substr(0, searchTerm.length) ===
          searchTerm.toLowerCase()
        // item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const navigate = e => {
    if (searchTerm.length > 0) {
      if (e.keyCode === 40) {
        console.log("down");
      } else if (e.keyCode === 38) {
        console.log("up");
      }
    }
  };

  return (
    <div className="SearchBar">
      <form>
        <input
          id="searchInput"
          placeholder="Search product"
          autoComplete="off"
          onKeyUp={suggestProducts}
          onKeyDown={navigate}
        />
        <button className="button">Search</button>
        {searchTerm && (
          <SearchSuggestions
            suggestions={suggestions}
            selectRecent={props.selectRecent}
          />
        )}
      </form>
    </div>
  );
}
