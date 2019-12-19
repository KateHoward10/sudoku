import React from 'react';
import { formatTime } from '../../helpers.js';
import { Container, OpenButton } from './styles';

function TopGames({ time, openModal }) {
  return (
    <Container>
      <p>{formatTime(time)}</p>
      <OpenButton onClick={openModal}>Top Games</OpenButton>
    </Container>
  );
}

export default TopGames;
