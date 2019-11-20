import React from 'react';
import { StyledCell, Input } from './styles';

function Cell({ index, number, onEnter, status }) {
  return (
    <StyledCell index={index} status={status}>
      {number ? number : <Input onChange={onEnter} />}
    </StyledCell>
  );
}

export default Cell;
