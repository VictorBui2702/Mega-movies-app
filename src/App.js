import React, { Component } from "react";
import logo from "./logo.svg";
import MovieList from "./MovieList.js";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-dark text-center text-light font-weight-bold text-center">
          <div className="mx-auto">Sweet Pumpkins</div>
        </nav>
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-4">Search Bar</div>
            <div className="col-8">
              <div className="row">
                <MovieList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// font-weight-bold

export default App;
