import React from 'react';
import { StyledCell, Input } from './styles';

function Cell({ index, number, onFocus, onEnter, value, wrong }) {
  return (
    <StyledCell index={index} wrong={wrong}>
      {number ? number : <Input value={value} onChange={onEnter} onFocus={onFocus} data-disable-touch-keyboard />}
    </StyledCell>
  );
}

export default Cell;
