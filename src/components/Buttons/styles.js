import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  background: transparent;
`;
