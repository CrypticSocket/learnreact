import React from "react";

class Addition extends React.Component {
    constructor() {
        super();
        this.state = {
        name: "Saket",
        age: 23
    };
  }
  render() {
    return (
      <div>
        <h2>My name is {this.state.name}</h2>
        <p>I am {this.state.age} years old</p>
      </div>
    );
  }
}

export default Addition;
