import React from "react";

const ReviewsItem = ({ author, id, content }) => {
  return (
    <li className="ReviewsItem" key={id}>
      <p className="Author">Author:{author}</p>
      <p className="ReviewContent">{content}</p>
    </li>
  );
};

export default ReviewsItem;