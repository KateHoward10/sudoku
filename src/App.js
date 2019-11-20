import React, { useState, useEffect } from 'react';
import { makepuzzle, solvepuzzle } from 'sudoku';
import Cell from './components/Cell';
import './App.css';

const puzzle = makepuzzle();
const solution = solvepuzzle(puzzle).map(number => number + 1);

function App() {
  const [guesses, setGuesses] = useState(puzzle.map(number => (number ? number + 1 : null)));
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (guesses.join('') === solution.join('')) {
      setStatus('solved');
    } else if (guesses.every(guess => typeof guess === 'number')) {
      setStatus('filled');
    }
  }, [guesses]);

  return (
    <div>
      <div className="grid">
        {puzzle.map((number, index) => (
          <Cell
            key={index}
            index={index}
            number={number ? number + 1 : null}
            onEnter={e => {
              e.preventDefault();
              const newGuesses = guesses.map((guess, i) => {
                if (i === index) {
                  return parseInt(e.target.value);
                } else return guess;
              });
              setGuesses(newGuesses);
            }}
            status={status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
