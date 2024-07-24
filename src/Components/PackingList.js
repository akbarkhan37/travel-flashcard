import React from "react";
import "./PackingList.css";

const initialItems = [
  {
    id: 1,
    description: "passport",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "T-shirt",
    quantity: 5,
    packed: true,
  },
  {
    id: 3,
    description: "Shorts",
    quantity: 7,
    packed: false,
  },
];

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
    </li>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <h3>List</h3>
      <ul className="list-items">
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
