import React from "react";
import ListItem from "./ListItem";

export default function ListContainer({ items, handleToggle }) {
  return (
    <div>
      {items.map((item, index) => {
        return <ListItem key={index} item={item} handleToggle={handleToggle} />;
      })}
    </div>
  );
}
