import React from "react";
import todoData from "./todoData";
import TodoItem from "./TodoItem.js";

let data = todoData.map(function(item) {
  return <TodoItem key={item.id} task={item} />;
});

function Exercise2() {
  return <div className="todoList">{data}</div>;
}

export default Exercise2;
