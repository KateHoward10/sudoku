import React, { useState } from 'react';
import { StyledCell, Input } from './styles';

function Cell({ index, number, answer }) {
  const [correct, setCorrect] = useState(false);

  function setNumber(e) {
    if (parseInt(e.target.value) === answer) {
      setCorrect(true);
    }
  }

  return (
    <StyledCell index={index} correct={correct}>
      {number ? number : <Input onChange={setNumber} />}
    </StyledCell>
  );
}

export default Cell;
