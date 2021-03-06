import React from "react";

function TodoItem(props) {
  return (
    <div className="todoItem">
      <input type="checkbox" checked={props.task.completed}></input>
      <p>{props.task.text}</p>
    </div>
  );
}

export default TodoItem;
