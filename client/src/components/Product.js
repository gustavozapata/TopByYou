import React, { useState, useEffect } from "react";
import "./styles/Product.css";

export default function Product(props) {
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {}, []);

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

  const { productName, product } = props;

  return (
    <div className="Product">
      <h1>{productName}</h1>
      <div className="items-container">
        <div className="items-ranking">
          {product &&
            product.map(item => (
              <div
                className="item"
                key={item.id}
                onClick={() => selectItem(item)}
              >
                <img
                  src={require(`../images/laptops/${item.image}`)}
                  alt={item.image}
                />
                <div
                  className={`${
                    currentItem.id === item.id ? "item-selected" : ""
                  }`}
                >
                  <h3>{item.name}</h3>
                  <span
                    className="bar"
                    style={{ width: `${item.votes / 60}px` }}
                  >
                    {item.votes} votes
                  </span>
                </div>
              </div>
            ))}
        </div>

        <div className="item-description">
          {currentItem.id ? (
            <div>
              <img
                src={require(`../images/laptops/${currentItem.image}`)}
                alt={currentItem.image}
              />
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
