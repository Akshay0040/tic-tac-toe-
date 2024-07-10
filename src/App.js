// src/App.js
import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="app">
      <h1>Tic-Tac-Toe Game</h1>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
