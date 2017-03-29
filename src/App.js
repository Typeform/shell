import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="app">
        <div className="shell">
          <div className="shell__output"></div>
          <div className="shell__input-line">
            <span className="shell__prompt">></span>
            <input id="shell-input" className="shell__input" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
