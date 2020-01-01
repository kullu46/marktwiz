import React, { Component } from "react";
export default class NotFound extends Component {
  render() {
      return (
        <section>
          <div id="notfound">
            <div class="notfound">
              <div class="notfound-404">
                <h1>Oops!</h1>
              </div>
              <h2>404 - Page not found</h2>
              <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
              <a onClick={() => this.props.history.push("/")}>Go To Homepage</a>
            </div>
          </div>
        </section>
      );
  }
}