import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import "./App.css"

class App extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        let data = [];
        if (localStorage.data) {
            data = JSON.parse(localStorage.data)
        }
        this.setState({
            todos: data
        })
    }

    addIntoToDos = (todo) => {
        todo.id = Math.floor(Math.random() * (10000 - 10) - 10);
        localStorage.data = JSON.stringify([...this.state.todos, todo]);
        this.setState({ todos: [...this.state.todos, todo] });
    }

    markToDo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos[index].done = !copyTodos[index].done;
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({ todos: copyTodos });
    }

    deleteToDo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos.splice(index, 1);
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({ todos: copyTodos });
    }

    render() {
        return (
            <div className="wrapp">
                <Jumbotron />
                <NewToDo addIntoToDos={this.addIntoToDos} />
                <ToDoList todos={this.state.todos} markToDo={this.markToDo} deleteToDo={this.deleteToDo} />
            </div>
        )
    }
}

export default App;