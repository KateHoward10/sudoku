import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku';
import { formatTime, getRating } from './helpers';
import { useCookies } from 'react-cookie';
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
  const [cookies, setCookie] = useCookies(['topGames']);
  const { topGames } = cookies;

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
      if (!topGames.length || time < topGames[0].time) {
        const updatedGames = [{ time, rating }, ...topGames];
        setCookie('topGames', JSON.stringify(updatedGames));
      }
    } else if (guesses && guesses.every(guess => typeof guess === 'number')) {
      setStatus('filled');
    }
  }, [guesses, puzzle, topGames, time, rating, setCookie]);

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
        <ul>
          {topGames &&
            topGames.map((game, index) => (
              <li key={index}>
                {formatTime(game.time)}: ({getRating(game.rating)})
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
