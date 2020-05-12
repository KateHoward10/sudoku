import React from 'react';
import { Container, Button } from './styles';

function Buttons({ selectNumber }) {
  return (
    <Container>
      {Array.from(Array(9).keys()).map(i => (
        <Button key={i} value={i + 1} onClick={selectNumber}>
          {i + 1}
        </Button>
      ))}
      <Button value={null} onClick={selectNumber}>
        ←
      </Button>
    </Container>
  );
}

export default Buttons;
