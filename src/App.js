import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import WordCard from './WordCard.js';

const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className="bt">
         <h2 className="tx2">3SA03</h2>
        <WordCard value="Hello" />
        <h1 className="tx">กดปุ่มเพื่อเรียงคำให้ถูกต้อง</h1>
      </div>
    );
  }
}
export default App;