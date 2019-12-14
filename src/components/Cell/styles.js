import styled from 'styled-components';

export const StyledCell = styled.div(
  props => `
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${props.index % 9 === 2 || props.index % 9 === 5 ? 2 : 1}px solid grey;
  border-bottom: ${(props.index > 17 && props.index < 27) || (props.index > 44 && props.index < 54) ? 2 : 1}px
    solid grey;
  font-size: 20px;
`
);

export const Input = styled.input`
  width: 40px;
  height: 40px;
  border: none;
  text-align: center;
  font-size: 20px;
  font-family: cursive;
  background: transparent;
`;
