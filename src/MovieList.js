import React, { Component } from "react";
import {Card} from "reactstrap";

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      movieList: [],
      genreList: []
    };
  }

  async componentDidMount() {
    let apiKey = "af6a5c351fe40351a80dac8d8116f035";
    let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    try {
      let response = await fetch(url);
      let movieInfo = await response.json();
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
    let filteredMoviesList = movieList;
    if(this.props.searchProp != '') {
      filteredMoviesList = filteredMoviesList.filter(item => item.title.toLowerCase().includes(this.props.searchProp.toLowerCase()))
    }
    if(this.props.filterGenreProp != null) {
      console.log('xxx', filteredMoviesList);
      filteredMoviesList = filteredMoviesList.filter( movie => movie.genre_ids.includes(this.props.filterGenreProp));
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      const imgBase = `https://image.tmdb.org/t/p/w200`;
      return (
          filteredMoviesList
          .map(item => {
            return (
                <Card className="col-lg-4 col-md-6 col-sm-12 my-1 px-0">
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
