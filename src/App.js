import React, { Component } from 'react';
import {Widget} from 'react-chat-widget';
import logo from './logo.svg';
import './App.css';
import 'react-chat-widget/lib/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Allan AI is coming soon.
          </h1>
        </header>
        <div>
          <Widget />
        </div>
      </div>
    );
  }
}

export default App;
