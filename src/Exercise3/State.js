import React from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      feeling: "Awesome"
    };
  }

  render() {
    return (
      <h2 style={{ textAlign: "center" }}>This is {this.state.feeling}</h2>
    );
  }
}

export default State;
