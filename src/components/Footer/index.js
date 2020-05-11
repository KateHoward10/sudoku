import React from 'react';
import { formatTime } from '../../helpers.js';
import { Container, OpenButton } from './styles';

function Footer({ time, openModal }) {
  return (
    <Container>
      <p>{formatTime(time)}</p>
      <OpenButton onClick={openModal}>Settings</OpenButton>
    </Container>
  );
}

export default Footer;
