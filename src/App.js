import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku';
import { formatTime, getRating } from './helpers';
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
  const [topGames, setTopGames] = useState(JSON.parse(localStorage.getItem('topGames')) || []);

  function start() {
    setPuzzle(Array.from(Array(81)).fill(null));
    setStatus(null);
    togglePlaying(true);
    const newPuzzle = makepuzzle();
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
  }, [guesses, puzzle, topGames, time, rating]);

  useEffect(() => {
    if (status === 'solved' && (topGames.length < 5 || time < topGames[topGames.length - 1].time)) {
      const today = new Date();
      let updatedGames = [{ time, rating, date: today.toLocaleDateString('en-GB') }, ...topGames].sort(
        (a, b) => a.time - b.time
      );
      if (updatedGames.length > 5) updatedGames = updatedGames.slice(0, 5);
      localStorage.setItem('topGames', JSON.stringify(updatedGames));
      setTopGames(updatedGames);
    }
  }, [status]);

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
      <p>{formatTime(time)}</p>
      <div>
        <h3>Your top games:</h3>
        <ol>
          {topGames &&
            topGames.map((game, index) => (
              <li key={index}>
                <strong>{game.date}</strong> {formatTime(game.time)} ({getRating(game.rating)})
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
