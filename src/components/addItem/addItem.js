import React, { useState } from "react";

const AddItem = ({ add }) => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "product") {
      setProduct(e.target.value);
    } else if (e.target.id === "price") {
      const value = Math.max(0, parseFloat(e.target.value));
      setPrice(value);
    } else if (e.target.id === "quantity") {
      setQuantity(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add({ product, price, quantity });
    setProduct("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={product}
          placeholder="Enter Product"
          id="product"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          value={price}
          placeholder="Enter Price"
          id="price"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          value={quantity}
          placeholder="Enter Quantity"
          id="quantity"
          onChange={handleChange}
          required
          min={1}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItem;
