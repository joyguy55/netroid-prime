import React, { Component } from "react";
class SignIn extends Component {
  render() {
    return (
      <form>
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Legend</legend>

          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Input" />
          </div>

          <div className="uk-margin">
            <select className="uk-select">
              <option>Option 01</option>
              <option>Option 02</option>
            </select>
          </div>

          <div className="uk-margin">
            <textarea className="uk-textarea" rows="5" placeholder="Textarea" />
          </div>

          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input className="uk-radio" type="radio" name="radio2" checked />{" "}
              A
            </label>
            <label>
              <input className="uk-radio" type="radio" name="radio2" /> B
            </label>
          </div>

          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input className="uk-checkbox" type="checkbox" checked /> A
            </label>
            <label>
              <input className="uk-checkbox" type="checkbox" /> B
            </label>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default SignIn;
