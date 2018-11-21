import React from "react";
import PropTypes from "prop-types";

export const InputSelect = props => {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" data-for="form-horizontal-select">
        {props.label}
      </label>
      <div className="uk-form-controls">
        <select
          className="uk-select uk-form-small"
          id="form-horizontal-select"
          onChange={e => {
            props.handleChange(e, props.label.toLowerCase());
          }}
        >
          {props.items.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

InputSelect.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array,
  handleChange: PropTypes.func
};
