import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.whatever = {
      a: 1
    }

    this.state = {
      todos: [
        {id: 1, name: 'Learn2', isComplete: true},
        {id: 2, name: 'Build2', isComplete: false},
        {id: 3, name: 'Ship2', isComplete: false}
      ]
    }
  }
  update(e, todo) {
    console.log('update', this, e, todo)
    // this.setState({

    // })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
        <div className="Todo-App">
          <form action="">
            <input type="text"/>
          </form>
          <div className="todo-list">
          <ul>
            {this.state.todos.map(todo =>
              <li key={todo.id}>
                <input
                  type="checkbox"
                  defaultChecked={todo.isComplete}
                  onChange={this.update.bind(this, todo)}
                /> {todo.name}</li>
              )}
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
