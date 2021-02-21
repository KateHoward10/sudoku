import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.p`
  color: ${props => props.paused ? 'dodgerblue' : '#000'};
  font-family: monospace;
  font-size: 16px;
  margin-right: 5px;
`;

export const Button = styled.button`
  font-size: 14px;
  background: transparent;
`;
