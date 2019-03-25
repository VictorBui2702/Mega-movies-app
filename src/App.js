import React, { Component } from "react";
import logo from "./logo.svg";
import MovieList from "./MovieList.js";
import DropDownBar from "./DropDownBar.js";
import SearchBar from "./SearchBar.js";
import YouTube from '@u-wave/react-youtube';
import ReactModal from 'react-modal';
// import YearRange from "./YearRange.js";
// import YearRangeNew from "./YearRangeNew.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  onSearchTermChanged = text => {
    this.setState({
      searchTerm: text
    });
  };

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
                <DropDownBar />
              </div>
              <br />
              <div>{/* <YearRange /> */}</div>
              <div>{/* <YearRangeNew /> */}</div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="row">
                <MovieList searchProp={this.state.searchTerm} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
