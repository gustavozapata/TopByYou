import React, { useState, useEffect } from "react";
import "./Laptops.css";

export default function Laptops() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    async function getItems() {
      // const items = await fetch("../../laptops.json");
      // const items_json = await items.json();
      await fetch("laptops.json")
        .then(res => {
          console.log("res: ", res.json());
        })
        .catch(error => {
          console.log("error: ", error);
        });
    }
    getItems();
  }, []);

  const selectItem = item => {
    const { id, name, image, votes, description } = item;
    setCurrentItem({
      id,
      name,
      image,
      votes,
      description
    });
  };

  return (
    <div className="Laptops">
      <h1>Laptops</h1>
      <div className="items-container">
        <div className="items-ranking">
          {items.map(item => (
            <div
              className="item"
              key={item.id}
              onClick={() => selectItem(item)}
            >
              <img src={require(`../images/products/${item.image}`)} />
              <div
                className={`${
                  currentItem.id === item.id ? "item-selected" : ""
                }`}
              >
                <h3>{item.name}</h3>
                <span className="bar" style={{ width: `${item.votes / 60}px` }}>
                  {item.votes} votes
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="item-description">
          {currentItem.id ? (
            <div>
              <img src={require(`../images/products/${currentItem.image}`)} />
              <h3>{currentItem.name}</h3>
              <p>{currentItem.description}</p>
              <button className="button">Buy</button>
            </div>
          ) : (
            <h4>Select an item from the ranking</h4>
          )}
        </div>
      </div>
    </div>
  );
}
