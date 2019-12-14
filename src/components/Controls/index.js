import React from 'react';
import { getRating } from '../../helpers';
import { Container, Button, StarContainer } from './styles';

function Controls({ start, giveUp, playing, rating }) {
  return (
    <Container>
      <Button onClick={playing ? giveUp : start}>{playing ? 'Give up' : 'Play'}</Button>
      {playing && (
        <div>
          {getRating(rating)} <StarContainer rating={rating}>★★★★★</StarContainer>
        </div>
      )}
    </Container>
  );
}

export default Controls;
