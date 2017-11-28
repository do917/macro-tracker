import React, { Component } from 'react';
import containers from './containers';

const { Overview } = containers;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Overview />
      </div>
    );
  }
}

export default App;
