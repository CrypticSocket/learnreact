import React from "react";

import Addition from "./Addition";
import LoggedInOut from "./LoggedInOut"

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      feeling: "Awesome"
    };
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>This is {this.state.feeling}</h2>
        <h3>Practice</h3>
        <Addition />
        <h3>Practice Again</h3>
        <LoggedInOut />
      </div>
    );
  }
}

export default State;
