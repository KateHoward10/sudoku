import React from 'react';
import { StyledCell, Input } from './styles';

function Cell({ index, number, onEnter, status, value }) {
  return (
    <StyledCell index={index} status={status}>
      {number ? number : <Input value={value} onChange={onEnter} />}
    </StyledCell>
  );
}

export default Cell;
