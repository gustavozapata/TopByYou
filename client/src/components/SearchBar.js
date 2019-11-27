import React from "react";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <form>
        <input id="searchInput" placeholder="Search product" />
        <button className="button">Search</button>
      </form>
    </div>
  );
}
