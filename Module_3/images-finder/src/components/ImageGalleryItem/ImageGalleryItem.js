import React from "react";

const ImageGalleryItem = ({id, webformatURL, onImageClick}) => {
  return (
    <li key={id} className="ImageGalleryItem" onClick={onImageClick}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
