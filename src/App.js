import React, { Component } from 'react'
import './App.css'
import Synth from './Components/Synth.js'
import AutoFilter from './Components/AutoFilter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Synth Simulator</h1>
        </header>
        <Synth />
      </div>
    );
  }
}

export default App;
