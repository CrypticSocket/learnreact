import React from "react";

import Addition from "./Addition";

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
      </div>
    );
  }
}

export default State;
