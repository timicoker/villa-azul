import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h2>
              <a href="#" id="logo">
                LOGO
              </a>
            </h2>
            <button className="nav-button fa fa-bars" />
            <div />
          </nav>
          <div className="center">
            <h1 className="alex-brush">Surf Blue</h1>
            <span id="asterisk">*</span>
            <p>vacation with us</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Landing;
