import React from "react"

import todoData from "./todoData"
import TodoItem from "./TodoItem"

class StateTodoList extends React.Component{

    constructor()
    {
        super()
        this.state = {
            todos : todoData
        }
    }

    render()
    {
        let todoItems = this.state.todos.map(
            function(item)
            {
                return(
                    <TodoItem key={item.id} item={item}/>
                )
            }
        )

        return(
            <div className="todoList">
                {todoItems}
            </div>
        )
    }
}

export default StateTodoList