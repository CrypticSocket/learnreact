import React from "react";

function MainContent() {
  // Inline Styles
  const date = new Date(22, 3, 3, 19);
  const hours = date.getHours();
  let styleTime;
  if (hours < 12) {
    styleTime = { color: "#000" };
  } else if (hours >= 12 && hours < 18) {
    styleTime = { color: "red" };
  } else {
    styleTime = {
      color: "white",
      backgroundColor: "black"
    };
  }
  return (
    <main>
      <h1>Content</h1>
      <p>Main content goes here</p>
      <p style={styleTime}>My color changes at different times of the day</p>
    </main>
  );
}

export default MainContent;
