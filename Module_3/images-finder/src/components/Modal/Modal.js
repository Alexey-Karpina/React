import React from "react";

const Modal = ({ largeImageURL, onModalClick, onEscPress }) => {
  return (
    <div className="Overlay" onClick={onModalClick} onKeyDown={onEscPress} tabIndex="1">
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
