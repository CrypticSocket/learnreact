import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className="todoList">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoList;
