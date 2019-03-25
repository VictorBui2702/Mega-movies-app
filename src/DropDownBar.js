import React, { Component } from "react";

export default class DropDownBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  // toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  clickHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
    return this.props.isClicked;
  }


  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
        <div className="btn-group dropdown" onClick={this.clickHandler}>
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
          
              {this.props.options.map(item => <a className="dropdown-item" href="#" onClick={() => this.props.handleFilter(item.id)}>
              {item.name}
            </a>)}
         
            {/* <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Comedy
            </a>
            <a className="dropdown-item" href="#">
              Romance
            </a>
            <a className="dropdown-item" href="#">
              Adventure
            </a>
            <a className="dropdown-item" href="#">
              Science fiction
            </a> */}
          </div>
        </div>
    );
  }
}
