import React, { Component } from "react";
class SignIn extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-3 col-sm-12">
            <label className="form-label" htmlFor="input-example-1">
              Name
            </label>
          </div>
          <div className="col-9 col-sm-12">
            <input
              className="form-input"
              type="text"
              id="input-example-1"
              placeholder="Name"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SignIn;
