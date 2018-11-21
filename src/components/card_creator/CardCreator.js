import React, { Component } from "react";
import styled from "styled-components";
import CardForm from "./comps/CardForm";
import { CardView } from "./comps/CardView";

class CardCreator extends Component {
  state = {
    side: "runner",
    faction: "neutral",
    kind: "event",
    name: "",
    isUnique: false,
    influence: null,
    type: "",
    cost: null,
    text: "",
    flavor: ""
  };

  updateCard = (event, key) => {
    const value = event.target.value;
    this.setState({
      [key]: value
    });
    if (key === "side" && value === "runner") {
      console.log("runner");
      this.setState({
        faction: "neutral",
        kind: "event"
      });
    }
    if (key === "side" && value === "corp") {
      console.log("corp");
      this.setState({
        faction: "neutral",
        kind: "agenda"
      });
    }
  };

  render() {
    return (
      <Container>
        <CardForm card={this.state} updateCard={this.updateCard} />
        <CardView card={this.state} />
      </Container>
    );
  }
}

export default CardCreator;

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 70%;
`;
