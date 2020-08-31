import React from "react";

const CastItem = ({ character, name, profile_path, id }) => {
  return (
    <li key={id} className="CastItem">
      <img
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
        className="CastItem__photo"
      />
      <p className="CastItem__name">{name}</p>
      <p className="CastItem__character">{character}</p>
    </li>
  );
};

export default CastItem;
