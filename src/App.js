import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import WordCard from './WordCard.js';

const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className="bt">
        <WordCard value="Hello" />
        <h1 className="tx">กดปุ่มเพื่อเรียงคำให้ถูกต้อง</h1>
      </div>
    );
  }
}
export default App;