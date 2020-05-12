import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 10px;
  min-width: 300px;
  max-width: 80vw;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  align-self: flex-end;
  font-size: 18px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Toggle = styled.label`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  box-shadow: inset 0 0 5px ${props => props.highlight ? "dodgerblue" : "grey"};
  color: dodgerblue;
  font-size: 14px;
`;

export const Hidden = styled.input`
  display: none;
`;
