import React from "react";
import { TransitionGroup } from "react-transition-group";

import Item from "./item";

const ItemList = ({ items, onDelete }) => {
  const elem = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <>
        <Item {...itemProps} onDelete={() => onDelete(id)} />
      </>
    );
  });
  return (
      <TransitionGroup>
        <ul className="list-group">{elem}</ul>
      </TransitionGroup>
  );
};

export default ItemList;
