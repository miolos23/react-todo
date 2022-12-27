import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, markToDo, deleteToDo }) => {
    const allTodos = todos.map((todo, index) => {
        return (
            <ToDo todo={todo} key={todo.id} index={index} markToDo={markToDo} deleteToDo={deleteToDo} />
        )
    })

    return (
        <div className="container">
            <div className="row">
                {/* <div className="col-12"> */}
                {allTodos}
                {/* </div> */}
            </div>
        </div>
    )
}

export default ToDoList;