import React from "react";
import { TransitionGroup } from "react-transition-group";

import Item from "./item";

const ItemList = ({ items, onDelete }) => {
  const elem = items.map((item) => {
    return <Item {...item} onDelete={() => onDelete(item.id)} />;
  });
  return (
    <TransitionGroup
      component="ul"
      className="list-group"
      childFactory={(child) => React.cloneElement(child)}
    >
      {elem}
    </TransitionGroup>
    // <ul className="list-group">{elem}</ul>
  );
};

export default ItemList;
