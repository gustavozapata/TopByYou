import React, { useState, useEffect } from "react";
import "./Laptops.css";

export default function Laptops() {
  const [currentItem, setCurrentItem] = useState({});

  const laptops = [
    {
      id: 1,
      name: "ASUS Zenbook A13",
      image: "asus.png",
      votes: 26450,
      description:
        "This computer is great for gamers that look for a light and unexpensive computer"
    },
    {
      id: 2,
      name: "MacBook Pro 2019",
      image: "macbook.png",
      votes: 21599,
      description:
        "Apple keeps delivering the best quality in laptops in the market"
    },
    {
      id: 3,
      name: "Surface Pro 2018",
      image: "surface.png",
      votes: 17435,
      description:
        "Microsoft did it again, with this amazing portable and light tablet/laptop"
    },
    {
      id: 4,
      name: "HP XP 19",
      image: "hp.png",
      votes: 12343,
      description:
        "This laptop comes with the most advanced technology found on a computer so far"
    }
  ];

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
          {laptops.map(item => (
            <div
              className="item"
              key={item.id}
              onClick={() => selectItem(item)}
            >
              <img src={require(`../images/laptops/${item.image}`)} />
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
              <img src={require(`../images/laptops/${currentItem.image}`)} />
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
