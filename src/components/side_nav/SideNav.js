import React, { Component } from "react";
class SideNav extends Component {
  render() {
    return (
      <div className="uk-width-1-2@s uk-width-2-5@m">
        <ul className="uk-nav uk-nav-default">
          <li className="uk-active">
            <a href="#">Criminal</a>
          </li>
          <li>
            <a href="#">Shaper</a>
          </li>
          <li>
            <a href="#">Anarch</a>
          </li>
          <li classNameName="uk-active">
            <a href="#">Criminal</a>
          </li>
          <li>
            <a href="#">Shaper</a>
          </li>
          <li>
            <a href="#">Anarch</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
