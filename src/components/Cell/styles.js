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
  background: ${props.wrong ? 'rgba(255, 0, 0, 0.5)' : 'transparent'};
`
);

export const Input = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  text-align: center;
  font-size: 20px;
  font-family: 'Kalam', cursive;
  color: grey;
  background: transparent;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Kalam', cursive;
  color: grey;
  background: transparent;
  box-shadow: ${props => (props.focused ? 'inset 0 0 10px dodgerblue' : 'none')};
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
