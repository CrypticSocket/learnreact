import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import TodoList from "./TodoList";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <TodoList />
      <h1>Adding Contact Cards</h1>
      <ContactCard
        contact={{
          name: "Mickey Mouse",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png",
          phNo: "987654321"
        }}
      />
      <ContactCard
        contact={{
          name: "Bugs Bunny",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png",
          phNo: "912131231"
        }}
      />
    </div>
  );
}

export default App;
