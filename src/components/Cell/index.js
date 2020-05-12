import React from 'react';
import { StyledCell, Input, Button } from './styles';

function Cell({ index, number, onFocus, onChange, value, wrong, currentInput }) {
  return (
    <StyledCell index={index} wrong={wrong}>
      {number ? (
        number
      ) : (
        <React.Fragment>
          <Input value={value} onChange={onChange} />
          <Button onClick={onFocus} focused={currentInput === index && !wrong}>
            {value}
          </Button>
        </React.Fragment>
      )}
    </StyledCell>
  );
}

export default Cell;
