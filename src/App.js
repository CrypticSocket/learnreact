import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import TodoList from "./Exercise0/TodoList";
import ContactCard from "./Exercise0/ContactCard";

import Joke from "./Exercise0/Joke";
import jokesData from "./Exercise0/jokesData";

import Exercise1 from "./Exercise1/Exercise1";
import Exercise2 from "./Exercise2/Exercise2";
import State from "./Exercise3/State";
import StateTodoList from "./Exercise4/StateTodoList"

let jokesHere = jokesData.map(function(joke) {
  return (
    <Joke key={joke.id} question={joke.question} answer={joke.punchLine} />
  );
});

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <TodoList />
      <h1>Adding Contact Cards</h1>
      {/* React Props */}
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
      <h1>Some Jokes</h1>
      {jokesHere}

      {/* Learning Cleaner React */}
      <Exercise1 />
      <h1>Redone TodoList</h1>
      <Exercise2 />
      <h1>Learning State</h1>
      <State />
      <h1>Todo List Using State</h1>
      <StateTodoList />
    </div>
  );
}

export default App;

// Things to check out
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex
// https://reactjs.org/docs/events.html#supported-events
