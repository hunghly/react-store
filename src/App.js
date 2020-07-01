import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import ItemPage from './ItemPage';
import {items} from './static-data';

// comment
// added a branch called branching

const App = () => {
  const [activeTab, setActiveTab] = useState("item");
  const [cart, setCart] = useState([]);
  // console.log(activeTab);
  const addToCart = (item) => {
    // calls the function with the previous cart value, and replaces the old cart and rerenders
    setCart(prevCart => [...prevCart, item]);
  };


  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content tab={activeTab} onAddToCart={addToCart}/>

      </main>
    </div>
  );
};

const Content = ({ tab, onAddToCart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart}/>
    case "cart":
      return <span>the cart</span>;
  }
};

export default App;
