import React from "react";

function Joke(props) {
  return (
    <div>
      <h4 style={{ display: props.question ? "block" : "none", color: "#333" }}>
        Question : {props.question}
      </h4>
      <h4 style={{ color: props.question ? "blue" : "green" }}>
        {props.question ? "Answer : " : ""} {props.answer}
      </h4>
    </div>
  );
}

export default Joke;
