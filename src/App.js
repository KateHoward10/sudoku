import React from 'react';
import { makepuzzle } from 'sudoku';
import './App.css';

function App() {
  const puzzle = makepuzzle();

  return (
    <div>
      <div className="grid">
        {puzzle.map((number, index) => (
          <div key={index} className="cell">
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
