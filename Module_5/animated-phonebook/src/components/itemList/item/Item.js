import React from "react";
import { CSSTransition } from "react-transition-group";

const Item = ({ name, id, number, onDelete }) => {
  return (
    <CSSTransition 
        key={id}
        classNames="note"
        timeout={800}
    >
      <li className="list-group-item note" key={id}>
        {name}: {number}
        <button
          type="button"
          onClick={onDelete}
          className="btn btn-outline-danger btn-sm"
        >
          &times;
        </button>
      </li>
    </CSSTransition>
  );
};

export default Item;
