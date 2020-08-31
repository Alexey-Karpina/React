import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ id, title, onItemClick }) => {
  return (
    <li key={id} className="HomePageItem" onClick={onItemClick}>
      <Link to="/movies/:id">{title}</Link>
    </li>
  );
};
export default MovieItem;
