import React, { Component } from 'react';
import Chatbot from './components/Chatbot.js';
import Graph from './components/Graph.js';
import logo from './logo.svg';
import './App.css';
import 'react-chat-widget/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="jumbotron">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1> Allan AI </h1>
                <p> To Help You With The Day to Day </p>
              </div>
            </div>
          </div>
        </header>
        <div class="row">
          <div class="col-12 col-md-6">
            <p> This is content in a column </p>
          </div>
          <div class="col-12 col-md">
            <p> This is content in another column </p>
          </div>
        </div>
        <div>
          <Chatbot />
        </div>
        <div>
          <Graph />
        </div>
      </div>
    );
  }
}

export default App;
