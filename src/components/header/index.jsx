import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="header" className="app-header">
        <div className="app-header-inner">
          Header 
        </div>
      </div>
    );
  }
}
export default Header;
