import React, { useState } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, product: "Pen", price: 2, quantity: 1 },
    { id: 2, product: "Book", price: 10, quantity: 1 },
  ]);

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const addItem = (item) => {
    const newItem = {
      id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
      ...item,
    };

    setItems([...items, newItem]);
  };

  function increment(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(item.quantity) + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function decrement(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: parseInt(item.quantity) - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div className="container">
      <h1>Product List React App</h1>
      <div className="table">
        <Items items={items} del={deleteItem} dec={decrement} inc={increment} />
        <AddItem add={addItem} />
        <Total items={items} />
      </div>
    </div>
  );
};

export default App;
