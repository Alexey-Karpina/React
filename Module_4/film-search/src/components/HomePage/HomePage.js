import React from "react";

import MovieItem from "./HomePageItem";

const MovieList = ({ movies, onItemClick, title }) => {
  const elements = movies.map((movie) => {
    const { id, title } = movie;
    return (
      <>
        <MovieItem
          key={id}
          id={id}
          title={title}
          onItemClick={() => onItemClick(id)}
        />
      </>
    );
  });
  return (
    <>
        {title !== '' && <h2>{title}</h2>}
      <ul className="MovieList">{elements}</ul>
    </>
  );
};

export default MovieList;
