import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
            <li><input type="checkbox"/> Learn</li>
            <li><input type="checkbox"/> Build</li>
            <li><input type="checkbox"/> Ship</li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
