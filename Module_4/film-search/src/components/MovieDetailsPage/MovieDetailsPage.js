import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Cast from "../Cast";
import Reviews from "../Reviews";

const MovieDetails = ({ items, actors, reviews }) => {
  console.log(items);
  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = items;
  const date = new Date(release_date);
  const userScore = vote_average * 10;
  const releaseDate = date.getFullYear();
  const movieGenres = genres.reduce((accum, item) => {
    return accum + "/" + item.name;
  }, "");
  return (
    <>
      <Router>
          <div className="MainInfo">
            <button className="goBack" type="button">
              Go Back
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
            />
            <h2>
              {title}({releaseDate})
            </h2>
            <p>User Score: {userScore}%</p>
            <p>
              <span className="boldText">Overview: </span>
              {overview}
            </p>
            <p>
              <span className="boldText">Genres: </span>
              {movieGenres}
            </p>
          </div>
          <div className="AdditionalInfo">
            <ul>
              <li>
                <Link to="/movies/:id/cast">Cast</Link>
              </li>
              <li>
                <Link to="/movies/:id/reviews">Reviews</Link>
              </li>
            </ul>
            <Route path="/movies/:id/cast" render={() =>{
              return <Cast credits={actors} />;
            }}/>
            <Route path="/movies/:id/reviews" render={() => {
              return <Reviews reviews={reviews} />;
            }} />
          </div>
      </Router>
    </>
  );
};

export default MovieDetails;
