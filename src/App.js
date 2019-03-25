import React, { Component } from "react";
import logo from "./logo.svg";
import MovieList from "./MovieList.js";
import DropDownBar from "./DropDownBar.js";
import SearchBar from "./SearchBar.js";
// import YearRange from "./YearRange.js";
// import YearRangeNew from "./YearRangeNew.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      dropDownButtonClicked: false,
      updatedByGenre: false,
      genres: []
    };
  }

  onSearchTermChanged = text => {
    this.setState({
      searchTerm: text,
      filteredGenreId: null
    });
  };

  async componentDidMount() {
    this.fetchGenre();
  }

  async fetchGenre () {
    
    let apiKey = "af6a5c351fe40351a80dac8d8116f035";
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    try {
      let response = await fetch(url);
      let genreInfo = await response.json();
      console.log('gengreInfo', genreInfo);
      this.setState({      
        genres: genreInfo.genres
      });
    } catch (err) {
      this.setState({
        error: err
      });
    }
  }

  handleFilter(genreId) {
    this.setState({
      filteredGenreId: genreId
    }) 
  }

  render() {
    return (
      <div className="App">
        {/* Create navbar */}
        <nav className="navbar navbar-light bg-dark text-light font-weight-bold px-5">
          <a className="navbar-brand text-light" href="#">
            Movies in a click
          </a>
          <div>
            <SearchBar textChange={this.onSearchTermChanged} />
          </div>
        </nav>
        {/* Create the body */}
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-3 text-left font-weight-bold">
              <br />
              <div style={{ fontSize: 40 }}>Genre</div>
              <div>
                <DropDownBar options={this.state.genres} isClicked = {! this.state.dropDownButtonClicked} handleFilter={(gId) => this.handleFilter(gId)}/>
              </div>
              <br />
              <div>{/* <YearRange /> */}</div>
              <div>{/* <YearRangeNew /> */}</div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="row">
                <MovieList searchProp={this.state.searchTerm} filterGenreProp={this.state.filteredGenreId}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
