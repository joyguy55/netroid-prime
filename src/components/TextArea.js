import React from "react";
import PropTypes from "prop-types";

export const TextArea = props => {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" data-for="form-horizontal-select">
        {props.label}
      </label>
      <div className="uk-form-controls">
        <textarea
          className="uk-textarea uk-form-small"
          rows="4"
          placeholder={props.label}
          onChange={e => {
            props.handleChange(e, props.label.toLowerCase());
          }}
        />
      </div>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func
};
