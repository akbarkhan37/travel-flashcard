import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const options = Array.from({ length: 20 }, (_, index) => index + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {};
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Add Item
      </button>
    </form>
  );
};

export default Form;
