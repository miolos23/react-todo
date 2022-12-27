import React from "react";
import styles from "../css/Todo.module.css"

const ToDo = ({ todo, index, markToDo, deleteToDo }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 m-2">
            <div className="card text-center">
                <div className="card-header">
                    <h4>ToDo: {index + 1}</h4>
                </div>
                <div className="card-body">
                    <h3 className={todo.done ? 'complete' : 'incomplete'}>{todo.msg}</h3>
                </div>
                <div className="card-footer">
                    <button onClick={() => { deleteToDo(index) }} className="btn btn-danger float-left">Delete</button>
                    <button onClick={() => { markToDo(index) }} className={styles.blue + " btn float-right"}>Mark</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;