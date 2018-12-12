import React, { Component } from 'react';
import './App.css';
import DagobahProvider from './DagobahProvider'
import DagobahPlanet from './DagobahContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DagobahProvider>
            <DagobahPlanet />
            <DagobahPlanet />
            <DagobahPlanet />
          </DagobahProvider>
        </header>
      </div>
    );
  }
}

export default App;
