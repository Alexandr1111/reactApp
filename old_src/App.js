import React from 'react';
import logoName from './logo.svg'; //Импортируем картинку
import './App.css';
import {render} from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoName} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;