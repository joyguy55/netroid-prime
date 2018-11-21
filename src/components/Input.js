import React from "react";
import PropTypes from "prop-types";

export const Input = props => {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" htmlFor="form-horizontal-select">
        {props.label}
      </label>
      <div className="uk-form-controls">
        <div className="uk-margin">
          <input
            className="uk-input uk-form-small"
            type="text"
            placeholder="Input"
            onChange={e => {
              props.handleChange(e, props.label.toLowerCase());
            }}
          />
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func
};
