import React from 'react';
import { StyledCell, Input, Button } from './styles';

function Cell({ index, number, onFocus, onEnter, value, wrong, currentInput }) {
  return (
    <StyledCell index={index} wrong={wrong}>
      {number ? (
        number
      ) : (
        <React.Fragment>
          <Input value={value} onChange={onEnter} />
          <Button onClick={onFocus} focused={currentInput === index}>
            {value}
          </Button>
        </React.Fragment>
      )}
    </StyledCell>
  );
}

export default Cell;
