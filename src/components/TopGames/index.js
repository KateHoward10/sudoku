import React from 'react';
import { formatTime, getRating } from '../../helpers.js';
import { Background, Container, CloseButton } from './styles';

function TopGames({ topGames, closeModal, thisTime }) {
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
      </Container>
    </Background>
  );
}

export default TopGames;
