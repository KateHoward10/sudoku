import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku';
import Controls from './components/Controls';
import Cell from './components/Cell';
import './App.css';

function App() {
  const [playing, togglePlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [puzzle, setPuzzle] = useState(Array.from(Array(81)));
  const [rating, setRating] = useState(null);
  const [guesses, setGuesses] = useState(null);
  const [status, setStatus] = useState(null);

  function start() {
    togglePlaying(true);
    const newPuzzle = makepuzzle();
    setPuzzle(newPuzzle);
    const newRating = ratepuzzle(newPuzzle, 5);
    setRating(newRating);
    setGuesses(newPuzzle.map(number => (number ? number + 1 : null)));
  }

  useInterval(
    () => {
      setTime(time + 1);
    },
    playing ? 1000 : null
  );

  useEffect(() => {
    if (
      guesses &&
      solvepuzzle(puzzle) &&
      guesses.join('') ===
        solvepuzzle(puzzle)
          .map(number => number + 1)
          .join('')
    ) {
      setStatus('solved');
      togglePlaying(false);
    } else if (guesses && guesses.every(guess => typeof guess === 'number')) {
      setStatus('filled');
    }
  }, [guesses, puzzle]);

  return (
    <div>
      <Controls start={start} playing={playing} rating={rating} />
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
            value={guesses && guesses[index] ? guesses[index] : undefined}
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
