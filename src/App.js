import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <TodoList />
    </div>
  );
}

export default App;
