import React from 'react';
import { StyledCell, Input, Button } from './styles';

const Cell = ({ index, number, onFocus, onChange, value, wrong, currentInput, status }) => (
  <StyledCell index={index} wrong={wrong}>
    {status !== 'paused' && (
      <>
        {number || (
          <>
            <Input type="text" value={value} onChange={onChange} />
            <Button onClick={onFocus} focused={currentInput === index}>
              {value}
            </Button>
          </>
        )}
      </>
    )}
  </StyledCell>
);

export default Cell;
