import React, { Component } from "react";
import MovieList from "./MovieList.js";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form class="form-inline my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search for..."
            onChange={(e) => this.props.textChange(e.target.value)}
            
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
