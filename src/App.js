import React from 'react';
import { makepuzzle } from 'sudoku';
import Cell from './components/Cell';
import './App.css';

function App() {
  const puzzle = makepuzzle();

  return (
    <div>
      <div className="grid">
        {puzzle.map((number, index) => (
          <Cell key={index} index={index} number={number ? number + 1 : null} />
        ))}
      </div>
    </div>
  );
}

export default App;
