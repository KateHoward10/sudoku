import React from 'react';
import { formatTime, getRating } from '../../helpers.js';
import { Background, Container, ToggleContainer, Toggle, Hidden, CloseButton } from './styles';

function Settings({ topGames, closeModal, thisTime, highlight, toggleHighlight }) {

  function toggle(e) {
    toggleHighlight(e.target.checked);
    localStorage.setItem('highlightWrongNumbers', e.target.checked);
  }

  return (
    <Background>
      <Container>
        <CloseButton onClick={closeModal}>✖</CloseButton>
        {thisTime && <h2>Solved in {formatTime(thisTime)}!</h2>}
        <span>Your top games:</span>
        {topGames.length ? (
          <ol>
            {topGames &&
              topGames.map((game, index) => (
                <li key={index}>
                  <strong>{game.date}</strong> {formatTime(game.time)} ({getRating(game.rating)})
                </li>
              ))}
          </ol>
        ) : (
          <p>None yet...</p>
        )}
        {!thisTime && (
          <ToggleContainer>
            Highlight wrong numbers
            <Toggle highlight={highlight}>
              <Hidden
                type="checkbox"
                onChange={toggle}
              />
              {highlight && "✔"}
            </Toggle>
          </ToggleContainer>
        )}
      </Container>
    </Background>
  );
}

export default Settings;
