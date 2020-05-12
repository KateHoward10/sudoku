import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku';
import Controls from './components/Controls';
import Buttons from './components/Buttons';
import Cell from './components/Cell';
import Grid from './components/Grid';
import Footer from './components/Footer';
import Settings from './components/Settings';

function App() {
  const [playing, togglePlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [puzzle, setPuzzle] = useState(Array.from(Array(81)));
  const [rating, setRating] = useState(null);
  const [guesses, setGuesses] = useState(null);
  const [status, setStatus] = useState(null);
  const [modalOpen, toggleModalOpen] = useState(false);
  const [highlight, toggleHighlight] = useState(localStorage.getItem('highlightWrongNumbers') === 'true' || false);
  const [currentInput, setCurrentInput] = useState(null);
  const [topGames, setTopGames] = useState(JSON.parse(localStorage.getItem('topGames')) || []);

  function start() {
    setPuzzle(Array.from(Array(81)).fill(9));
    setStatus(null);
    togglePlaying(true);
    setTime(0);
    setCurrentInput(null);
    const newPuzzle = makepuzzle();
    setPuzzle(newPuzzle);
    const newRating = ratepuzzle(newPuzzle, 5);
    setRating(newRating);
    setGuesses(newPuzzle.map(number => (number !== null ? number + 1 : null)));
  }

  function giveUp() {
    setStatus('given up');
    togglePlaying(false);
    setPuzzle(solvepuzzle(puzzle));
  }

  function selectNumber(e, index) {
    e.preventDefault();
    if (playing) {
      const newGuesses = guesses.map((guess, i) => {
        if (i === index) {
          return e.target.value ? parseInt(e.target.value) : null;
        } else return guess;
      });
      setGuesses(newGuesses);
    }
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
      if (topGames.length < 5 || time < topGames[topGames.length - 1].time) {
        const today = new Date();
        let updatedGames = [{ time, rating, date: today.toLocaleDateString('en-GB') }, ...topGames];
        updatedGames = updatedGames.sort((a, b) => a.time - b.time);
        if (updatedGames.length > 5) updatedGames = updatedGames.slice(0, 5);
        localStorage.setItem('topGames', JSON.stringify(updatedGames));
        setTopGames(updatedGames);
      }
      togglePlaying(false);
      toggleModalOpen(true);
    } else if (guesses && guesses.every(guess => typeof guess === 'number')) {
      setStatus('filled');
    }
  }, [guesses]);

  return (
    <div>
      <Controls
        status={status}
        start={start}
        giveUp={giveUp}
        playing={playing}
        rating={rating}
      />
      <Buttons selectNumber={e => selectNumber(e, currentInput)} />
      <Grid>
        {puzzle.map((number, index) => (
          <Cell
            key={index}
            index={index}
            number={number !== null ? number + 1 : null}
            onFocus={() => setCurrentInput(index)}
            onChange={e => selectNumber(e, index)}
            value={guesses && guesses[index] ? guesses[index] : undefined}
            wrong={((highlight && guesses && guesses[index]) || status === 'filled') && solvepuzzle(puzzle)[index] + 1 !== guesses[index]}
            currentInput={currentInput}
          />
        ))}
      </Grid>
      <Footer time={time} openModal={() => toggleModalOpen(true)} />
      {modalOpen && (
        <Settings
          topGames={topGames}
          closeModal={() => toggleModalOpen(false)}
          thisTime={status === 'solved' ? time : null}
          highlight={highlight}
          toggleHighlight={toggleHighlight}
        />
      )}
    </div>
  );
}

export default App;
