import React from 'react';
import { StyledCell, Input } from './styles';

function Cell({ index, number, onEnter, value }) {
  return <StyledCell index={index}>{number ? number : <Input value={value} onChange={onEnter} />}</StyledCell>;
}

export default Cell;
