import React, { Component } from "react";
import {Card} from "reactstrap";

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      movieList: []
    };
  }

  async componentDidMount() {
    let apiKey = "af6a5c351fe40351a80dac8d8116f035";
    let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    try {
      let response = await fetch(url);
      let movieInfo = await response.json();
      console.log(movieInfo);
      this.setState({
        error: null,
        isLoaded: true,
        movieList: movieInfo.results
      });
    } catch (err) {
      this.setState({
        error: err
      });
    }
  }

  render() {
    const { error, isLoaded, movieList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      const imgBase = `https://image.tmdb.org/t/p/w200`;
      return (
          movieList.map(item => {
            return (
                <Card className="col-4">
                  <img src={imgBase + item.poster_path} alt="" />
                  <div className = "font-weight-bold">{item.title}</div>
                  <div>Release date: {item.release_date}</div>
                  <div>Rating: {item.vote_average}</div>
                </Card>
            );
          })
      );
    }
  }
}
