import React from 'react';
import { StyledCell } from './styles';

function Cell({ index, number }) {
  return <StyledCell index={index}>{number}</StyledCell>;
}

export default Cell;
