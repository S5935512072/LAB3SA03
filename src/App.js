import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import WordCard from './WordCard.js';

const word = "ประเทศไทย";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="ประเทศไทย" />
      </div>
    );
  }
}
export default App;