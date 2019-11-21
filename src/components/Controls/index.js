import React from 'react';
import { getRating } from '../../helpers';
import { Container, StarContainer } from './styles';

function Controls({ start, playing, rating }) {
  return (
    <Container>
      <button onClick={start}>Play</button>
      {playing && (
        <div>
          {getRating(rating)} <StarContainer rating={rating}>★★★★★</StarContainer>
        </div>
      )}
    </Container>
  );
}

export default Controls;
