import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId} from './lib/todoHelpers'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [
        {id: 1, name: 'Learn2', isComplete: true},
        {id: 2, name: 'Build2', isComplete: false},
        {id: 3, name: 'Ship2', isComplete: false}
      ],
      currentTodo: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      name: this.state.currentTodo,
      isComplete: false,
      id: generateId()
    }

    const updatedTodos = addTodo(this.state.todos, newTodo)

    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
  }
  handleInputChange(e, todo) {
    this.setState({
      currentTodo: e.target.value

    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={this.handleSubmit}
          />
          <TodoList
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
