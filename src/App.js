import React from 'react';
import { makepuzzle } from 'sudoku';
import './App.css';

function App() {
  const puzzle = makepuzzle();
  console.log(puzzle);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
