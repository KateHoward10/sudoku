import React, { useState, useEffect, useCallback } from 'react';
import useInterval from './hooks/useInterval';
import { usePersistedState, useSavedState } from './hooks/usePersistedState';
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku';
import Controls from './components/Controls';
import Buttons from './components/Buttons';
import Cell from './components/Cell';
import Grid from './components/Grid';
import Footer from './components/Footer';
import Settings from './components/Settings';

function App() {
  const [playing, togglePlaying] = useState(false);
  const [time, setTime, saveTime, clearTime] = useSavedState('savedTime', 0);
  const [puzzle, setPuzzle, savePuzzle, clearPuzzle] = useSavedState('savedPuzzle', Array.from(Array(81)));
  const [rating, setRating, saveRating, clearRating] = useSavedState('savedRating', null);
  const [guesses, setGuesses, saveGuesses, clearGuesses] = useSavedState('savedGuesses', null);
  const [status, setStatus, saveStatus, clearStatus] = useSavedState('savedStatus', null);
  const [modalOpen, toggleModalOpen] = useState(false);
  const [currentInput, setCurrentInput] = useState(null);
  const [highlight, toggleHighlight] = usePersistedState('highlightWrongNumbers', false);
  const [topGames, setTopGames] = usePersistedState('topGames', []);

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
    const guesses = newPuzzle.map(number => (number !== null ? number + 1 : null));
    setGuesses(guesses);
  }

  function giveUp() {
    setStatus('given up');
    togglePlaying(false);
    setGuesses(solvepuzzle(puzzle).map(number => number + 1));
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

  function pause() {
    togglePlaying(false);
    setStatus('paused');
    saveStatus('paused');
    saveTime();
    savePuzzle();
    saveRating();
    saveGuesses();
  }

  function resume() {
    togglePlaying(true);
    setStatus(null);
    clearStatus();
    clearTime();
    clearPuzzle();
    clearRating();
    clearGuesses();
  }

  const getTopGames = useCallback((games) => {
    if (games.length < 5 || time < games[games.length - 1].time) {
      const today = new Date();
      let updatedGames = [{ time, rating, date: today.toLocaleDateString('en-GB') }, ...games];
      updatedGames = updatedGames.sort((a, b) => a.time - b.time);
      if (updatedGames.length > 5) updatedGames = updatedGames.slice(0, 5);
      return updatedGames;
    } else return games;
  }, [time, rating]);

  useInterval(() => setTime(time + 1), playing ? 1000 : null);

  useEffect(() => {
    if (
      !status &&
      guesses &&
      solvepuzzle(puzzle) &&
      guesses.join('') ===
        solvepuzzle(puzzle)
          .map(number => number + 1)
          .join('')
    ) {
      setStatus('solved');
      setTopGames(t => getTopGames(t));
      togglePlaying(false);
      toggleModalOpen(true);
    } else if (guesses && guesses.every(guess => typeof guess === 'number')) {
      setStatus('filled');
    }
  }, [status, setStatus, guesses, puzzle, setTopGames, getTopGames]);

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
            value={guesses && guesses[index] ? guesses[index] : ''}
            wrong={((highlight && guesses && guesses[index]) || status === 'filled') && solvepuzzle(puzzle)[index] + 1 !== guesses[index]}
            currentInput={currentInput}
            status={status}
          />
        ))}
      </Grid>
      <Footer time={time} playing={playing} pause={pause} resume={resume} status={status} openModal={() => toggleModalOpen(true)} />
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
