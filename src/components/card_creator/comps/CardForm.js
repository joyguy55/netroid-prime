import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { InputSelect } from "../../InputSelect";
import { Input } from "../../Input";
import { TextArea } from "../../TextArea";

class CardForm extends Component {
  render() {
    const { card, updateCard } = this.props;
    return (
      <Form className="uk-form-horizontal uk-margin-large">
        <legend className="uk-legend">Card Creator</legend>
        <InputSelect
          label="side"
          items={["runner", "corp"]}
          handleChange={updateCard}
        />
        <InputSelect
          label="faction"
          items={
            card.side === "runner"
              ? ["neutral", "anarch", "criminal", "shaper"]
              : ["neutral", "haas", "jinteki", "nbn", "weyland"]
          }
          handleChange={updateCard}
        />
        <InputSelect
          label="kind"
          items={
            card.side === "runner"
              ? ["event", "hardware", "resource", "program", "identity"]
              : ["agenda", "asset", "operation", "upgrade", "ice", "identity"]
          }
          handleChange={updateCard}
        />

        <div className="uk-margin">
          <div className="uk-form-label" />
          <div className="uk-form-controls uk-form-controls-text">
            <label>
              <input
                className="uk-radio"
                type="radio"
                name="radio1"
                onChange={updateCard}
              />{" "}
              Is unique
            </label>
          </div>
        </div>

        <Input label="Name" handleChange={updateCard} />
        <Input label="Influence" handleChange={updateCard} />
        <Input label="Types" handleChange={updateCard} />
        <Input label="Cost" handleChange={updateCard} />
        <TextArea label="Text" handleChange={updateCard} />
        <TextArea label="Flavor" handleChange={updateCard} />
      </Form>
    );
  }
}

export default CardForm;

CardForm.propTypes = {
  card: PropTypes.object,
  updateCard: PropTypes.func
};

const Form = styled.div`
  width: 500px;
`;
