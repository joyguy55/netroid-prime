import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div
        className="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed uk-active uk-sticky-below"
        style={{
          position: "fixed",
          top: "0px",
          height: "80px",
          width: "100%",
          padding: "0 2%"
        }}
      >
        <nav className="uk-navbar-container uk-margin" uk-navbar>
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="#">
              Netroid Prime
            </a>

            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav uk-visible@m">
                <li>
                  <a href="../about">About</a>
                </li>
                <li className="uk-active">
                  <a href="../cards">Cards</a>
                </li>
                <li className="uk-active">
                  <a href="../create">Create</a>
                </li>
                <li>
                  <a href="../donate">Donate</a>
                </li>
                <li className="uk-active">
                  <a href="../sign-in">Sign In</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
