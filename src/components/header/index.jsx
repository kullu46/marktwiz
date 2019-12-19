import React, { Component } from "react";
import logo from '../../assets/images/logo.png';
import "bootstrap/dist/js/bootstrap.bundle.min";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="header" className="app-header">
        {/* <div className="logo position-absolute text-lg-left w-100" style={{zIndex: "10"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 pl-lg-5 pl-md-2 p-4">
                <a href="./"><img src={logo} alt="Marktwiz" className="img-fluid" /></a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
export default Header;
