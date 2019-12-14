import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
`;

export const Button = styled.button`
  font-size: 1rem;
  background: transparent;
`;

export const StarContainer = styled.span(
  ({ rating }) => `
  background: linear-gradient(to right, #000 ${(rating / 5) * 100}%, lightgrey ${(rating / 5) * 100}%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
);
