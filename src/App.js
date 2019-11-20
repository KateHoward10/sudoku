import React from 'react';
import { makepuzzle, solvepuzzle } from 'sudoku';
import Cell from './components/Cell';
import './App.css';

function App() {
  const puzzle = makepuzzle();
  const solution = solvepuzzle(puzzle);

  return (
    <div>
      <div className="grid">
        {puzzle.map((number, index) => (
          <Cell
            key={index}
            index={index}
            number={number ? number + 1 : null}
            answer={solution[index] ? solution[index] + 1 : null}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
