import React, { Component } from "react";

import ApiService from "../ApiServices";
import MovieList from "../HomePage";
import MoviesPage from "../MoviesPage";
import MovieDetails from "../MovieDetailsPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      submit: "",
      id: null,
      trends: [],
      search: [],
      actors: [],
      reviews: [],
      details: null,
      apiService: new ApiService(),
    };
  }

  onItemClick = (id) => {
    if (id !== this.state.id) {
      this.setState({ id });
    }
    console.log(id);
  };

  detailsMovie() {
    const { id, apiService } = this.state;
    console.log(id);
    apiService.getMovieDetails(id).then((response) => {
      this.setState({
        details: response.data,
      });
    });
  }

  actorsMovie() {
    const { id, apiService } = this.state;
    apiService.getMovieCredits(id).then((response) => {
      this.setState({
        actors: response.cast,
      });
    });
  }

  reviewsMovie() {
    const { id, apiService } = this.state;
    apiService.getMovieReviews(id).then((response) => {
      this.setState({
        reviews: response.results,
      });
    });
  }

  onFormSubmit = (submit) => {
    if (submit !== this.state.submit) {
      this.setState({ submit });
    }
  };

  searchMovies() {
    const { submit, apiService } = this.state;
    apiService.searchMovies(submit).then((data) => {
      this.setState({
        search: data.results,
      });
    });
  }

  componentDidMount() {
    this.state.apiService.getTrending().then((data) => {
      this.setState({
        trends: data.results,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.submit !== prevState.submit) {
      this.searchMovies();
    }
    if (this.state.id !== prevState.id) {
      this.detailsMovie();
      this.actorsMovie();
      this.reviewsMovie();
    }
  }

  render() {
    const { trends, details, search, submit, id, actors, reviews } = this.state;
    return (
      <>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <MovieList
                    onItemClick={this.onItemClick}
                    movies={trends}
                    title={"Trending"}
                  />
                );
              }}
            />
            <Route
              path="/movies"
              exact
              render={() => {
                return (
                  <>
                    <MoviesPage onFormSubmit={this.onFormSubmit} />
                    <MovieList
                      onItemClick={this.onItemClick}
                      movies={search}
                      title={`Results with ${submit}:`}
                    />
                  </>
                );
              }}
            />
            {details && (
              <Route
                path="/movies/:id?"
                render={() => {
                  return (
                    <MovieDetails
                      items={details}
                      actors={actors}
                      reviews={reviews}
                    />
                  );
                }}
              />
            )}

            {/* // <MovieList
            //   onItemClick={this.onItemClick}
            //   movies={trends}
            //   title={"Trending"}
            // />{" "} */}
            {/* {details ? (
              <MovieDetails items={details} actors={actors} reviews={reviews} />
            ) : (
              <>
                <MoviesPage onFormSubmit={this.onFormSubmit} />
                <MovieList
                  onItemClick={this.onItemClick}
                  movies={search}
                  title={`Results with ${submit}:`}
                />
              </>
            )} */}
          </Switch>
        </Router>
      </>
    );
  }
}
