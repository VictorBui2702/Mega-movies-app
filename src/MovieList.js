import React, { Component } from "react";
import {Card, Button} from "reactstrap";
import ReactModal from 'react-modal';
import YouTube from '@u-wave/react-youtube';


export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      movieList: [],
      trailerList: [],
      showModal: false

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

  fetchTrailer = movie_id => {
    
      this.setState({ showModal: true})
    let apiKey = "af6a5c351fe40351a80dac8d8116f035";
    let url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}&language=en-US`;

    fetch(url).
      then(results => results.json()).
      then( data => this.setState({trailerList: data.results.filter(video => video.type === "Trailer")}))
  }


  render() {
    const { error, isLoaded, movieList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      const imgBase = `https://image.tmdb.org/t/p/w200`;
      return (
          movieList
          .filter(item => item.title.toLowerCase().includes(this.props.searchProp.toLowerCase()))
          .map(item => {
            return (
                <Card className="col-lg-4 col-md-6 col-sm-12 my-1 px-0">
                  <img src={imgBase + item.poster_path} alt="" />
                  <div className = "font-weight-bold">{item.title}</div>
                  <div>Release date: {item.release_date}</div>
                  
                  <div>Rating: {item.vote_average}</div>
                  <Button color="danger" onClick={()=>{
                    this.fetchTrailer(item.id);
                  }} > Show trailer </Button>
                    <ReactModal isOpen={this.state.showModal}>
                     
                     <YouTube
                        video= {this.state.trailerList[0] && this.state.trailerList[0].key}
                        autoplay />)
                          <button onClick={() => this.setState({ showModal: false})}> Hide Modal </button>
                       </ReactModal>
               
                </Card>
               
            );
          })
      );
    }
    
  }
}
