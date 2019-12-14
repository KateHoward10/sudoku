import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku';
import Controls from './components/Controls';
import Cell from './components/Cell';
import Grid from './components/Grid';

function App() {
  const [playing, togglePlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [puzzle, setPuzzle] = useState(Array.from(Array(81)));
  const [rating, setRating] = useState(null);
  const [guesses, setGuesses] = useState(null);
  const [status, setStatus] = useState(null);

  function start() {
    setPuzzle(Array.from(Array(81)).fill(null));
    setStatus(null);
    togglePlaying(true);
    const newPuzzle = makepuzzle();
    console.log(solvepuzzle(newPuzzle).map(number => number + 1));
    setPuzzle(newPuzzle);
    const newRating = ratepuzzle(newPuzzle, 5);
    setRating(newRating);
    setGuesses(newPuzzle.map(number => (number !== null ? number + 1 : null)));
  }

  function giveUp() {
    setStatus(null);
    togglePlaying(false);
    setPuzzle(solvepuzzle(puzzle));
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
      <Controls start={start} giveUp={giveUp} playing={playing} rating={rating} />
      <Grid status={status}>
        {puzzle.map((number, index) => (
          <Cell
            key={index}
            index={index}
            number={number !== null ? number + 1 : null}
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
      </Grid>
      <p>
        {Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)}:
        {time % 60 < 10 ? `0${time % 60}` : time % 60}
      </p>
    </div>
  );
}

export default App;
