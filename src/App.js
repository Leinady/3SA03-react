import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = "Hello";

function App() {
  return (
    <div>
      <h1>React LAB</h1>
      <a>6135512040</a>
      <img src={logo} className="App-logo" alt="logo" />
     <WordCard value="hello"/>
    </div>
  );
}

export default App;
