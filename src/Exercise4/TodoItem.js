import React from "react";

function doThis()
{
  console.log("This is done!")
}

function TodoItem(props) {
  return (
    <div className="todoItem">
      <input type="checkbox" checked={props.item.completed} onChange={doThis}></input>
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
