import React from "react";

import ReviewsItem from "./ReviewsItem";

const Reviews = ({ reviews }) => {
  const elements = reviews.map((review) => {
    const { author, id, content } = review;
    return (
      <>
        <ReviewsItem key={id} id={id} author={author} content={content} />
      </>
    );
  });
  return (
    <>
      <ul className="ReviewsList">{elements}</ul>
    </>
  );
};

export default Reviews;
