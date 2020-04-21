import React, { Component } from 'react';
import './App.css';
import List from './components/List/List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1 className="App-Title">Hello World! 🌎 Welcome to my App 🌈</h1>
       <br></br>
       <div className="separation"></div>
       <List/>
      </div>
    );
  }
}

export default App;
