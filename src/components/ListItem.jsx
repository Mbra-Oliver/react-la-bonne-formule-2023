import React from "react";

export default function ListItem({ item, handleToggle }) {
  return (
    <label>
      <input type="checkbox" onChange={() => handleToggle(item)} />
      {item}
    </label>
  );
}
