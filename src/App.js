import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/landing";
import { About } from "./components/about";
import CardDisplay from "./components/card_display";
import CardCreator from "./components/card_creator";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <DisplayContainer>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/cards" component={CardDisplay} />
            <Route path="/create" component={CardCreator} />
          </Switch>
        </DisplayContainer>
      </Fragment>
    );
  }
}

const DisplayContainer = styled.section`
  padding: 100px 3%;
`;

export default App;
