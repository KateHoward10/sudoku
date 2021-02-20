import React from 'react';
import { getRating } from '../../helpers';
import { Container, Button, StarContainer } from './styles';

function Controls({ start, giveUp, playing, rating }) {

  function onClick() {
    if (window.confirm("Are you sure you want to give up?")) giveUp();
  }

  return (
    <Container>
      <Button onClick={playing ? onClick : start}>{playing ? 'Give up' : 'New game'}</Button>
      {playing && (
        <div>
          {getRating(rating)} <StarContainer rating={rating}>★★★★★</StarContainer>
        </div>
      )}
    </Container>
  );
}

export default Controls;
