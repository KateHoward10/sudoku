import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 50px);
  grid-template-columns: repeat(9, 50px);
  border: 1px solid grey;
  border-top: 2px solid grey;
  border-left: 2px solid grey;
  background: transparent;
`;

export default Grid;
