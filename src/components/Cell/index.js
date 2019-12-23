import React from 'react';
import { StyledCell, Input, Button } from './styles';

function Cell({ index, number, onFocus, onEnter, value, wrong }) {
  return (
    <StyledCell index={index} wrong={wrong}>
      {number ? (
        number
      ) : (
        <React.Fragment>
          <Input value={value} onChange={onEnter} />
          <Button onClick={onFocus}>{value}</Button>
        </React.Fragment>
      )}
    </StyledCell>
  );
}

export default Cell;
