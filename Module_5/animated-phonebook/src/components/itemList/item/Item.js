import React from "react";
import { CSSTransition } from "react-transition-group";

const Item = ({ name, id, number, onDelete }) => {
  return (
    <CSSTransition
      key={id}
      classNames={{
          enter: "note-enter",
          enterActive: "note-enter-active",
          exitActive: "note-exit-active",
          exit: "note-exit",
      }}
      timeout={800}
      mountOnEnter
      unmountOnExit
    >
      <li className="list-group-item note">
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
