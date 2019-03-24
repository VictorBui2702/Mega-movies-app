import React, { Component } from "react";

export default class DropDownBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
        <div className="btn-group dropdown" onClick={this.toggleOpen}>
          <button
            type="button"
            className="btn btn-info btn-lg dropdown-toggle"
            data-toggle="dropdown"
            aria-hasPopup="true"
            aria-expanded="false"
          >
            Movie Genre
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>
    );
  }
}
