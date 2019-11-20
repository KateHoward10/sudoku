import styled from 'styled-components';

export const StyledCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${props => (props.index % 9 === 2 || props.index % 9 === 5 ? 2 : 1)}px solid grey;
  border-bottom: ${props =>
      (props.index > 17 && props.index < 27) || (props.index > 44 && props.index < 54) ? 2 : 1}px
    solid grey;
`;
