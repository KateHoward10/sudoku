import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import { makepuzzle, solvepuzzle } from 'sudoku';
import Cell from './components/Cell';
import './App.css';

const puzzle = makepuzzle();
const solution = solvepuzzle(puzzle).map(number => number + 1);

function App() {
  const [playing, togglePlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [guesses, setGuesses] = useState(puzzle.map(number => (number ? number + 1 : null)));
  const [status, setStatus] = useState(null);

  useInterval(
    () => {
      setTime(time + 1);
    },
    playing ? 1000 : null
  );

  useEffect(() => {
    if (guesses.join('') === solution.join('')) {
      setStatus('solved');
      togglePlaying(false);
    } else if (guesses.every(guess => typeof guess === 'number')) {
      setStatus('filled');
    }
  }, [guesses]);

  return (
    <div>
      <button onClick={() => togglePlaying(true)}>Play</button>
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
      <p>
        {Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)}:
        {time % 60 < 10 ? `0${time % 60}` : time % 60}
      </p>
    </div>
  );
}

export default App;
