import React from "react";
import "./ItemPage.css";
import Item from './Item';
// import App from "./App";

function ItemPage({ items , onAddToCart }) {
  return (
    <ul className="ItemPage-items">
      {items.map((item) => (
        <li key={item.id} className="ItemPage-item">
            <Item item={item} onAddToCart={() => {
                return onAddToCart(item);
            }}/>
        </li>
      ))}
    </ul>
  );
}

export default ItemPage;