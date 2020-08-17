import React from "react";

import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images, onImageClick }) => {
  const elements = images.map((image) => {
    const { id, webformatURL } = image;
    return (
      <>
        <ImageGalleryItem
          key={id}
          id = {id}
          webformatURL = {webformatURL}
          onImageClick={() => onImageClick(id)}
        />
      </>
    );
  });
  return <ul className="ImageGallery">{elements}</ul>;
};

export default ImageGallery;
