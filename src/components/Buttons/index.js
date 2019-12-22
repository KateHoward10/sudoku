import React from 'react';
import { Container, Button } from './styles';

function Buttons({ onPress }) {
  return (
    <Container>
      {Array.from(Array(9).keys()).map(i => (
        <Button key={i} value={i + 1} onClick={onPress}>
          {i + 1}
        </Button>
      ))}
    </Container>
  );
}

export default Buttons;
