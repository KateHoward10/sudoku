import React from 'react';
import { StyledCell, Input, Button } from './styles';

const Cell = ({ index, number, onFocus, onChange, value, wrong, currentInput }) => (
  <StyledCell index={index} wrong={wrong}>
    {number ? (
      number
    ) : (
      <React.Fragment>
        <Input type="text" value={value} onChange={onChange} />
        <Button onClick={onFocus} focused={currentInput === index && !wrong}>
          {value}
        </Button>
      </React.Fragment>
    )}
  </StyledCell>
);

export default Cell;
