import React, { useState } from "react";

import Actions from "./components/Actions";
import ListContainer from "./components/ListContainer";
import { items } from "./data";
import { intersection, not } from "./utils";

const App = () => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  const leftCheckedItems = intersection(leftItems, checkedItem);
  const rightCheckedItems = intersection(rightItems, checkedItem);

  const handleToggle = (item) => {
    const currentIndex = checkedItem.indexOf(item);
    const newCheckedItem = [...checkedItem];

    //Gerer l'état coché

    if (currentIndex === -1) {
      newCheckedItem.push(item);
    } else {
      newCheckedItem.splice(currentIndex, 1);
    }

    setCheckedItem(newCheckedItem);

    console.log(newCheckedItem);
  };

  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems));

    setLeftItems(not(leftItems, leftCheckedItems));
    setCheckedItem(not(checkedItem, leftCheckedItems));
  };

  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems));
    setRightItems(not(rightItems, rightCheckedItems));
    setCheckedItem(not(checkedItem, rightCheckedItems));
  };

  return (
    <>
      <ListContainer items={leftItems} handleToggle={handleToggle} />
      <Actions moveLeft={moveLeft} moveRight={moveRight} />
      <ListContainer items={rightItems} handleToggle={handleToggle} />
    </>
  );
};

export default App;
