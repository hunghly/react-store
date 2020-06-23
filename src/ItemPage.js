import React from "react";
import "./ItemPage.css";
// import App from "./App";

function ItemPage({ items }) {
  return (
    <ul className="ItemPage-items">
      {items.map((item) => (
        <li key={item.id} className="ItemPage-item">
            {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ItemPage;