import React from 'react';
import { formatTime } from '../../helpers.js';
import { Container, Button } from './styles';

function Footer({ time, playing, pause, resume, status, openModal }) {
  return (
    <Container>
      <p>{formatTime(time)}</p>
      {(playing && !status) && <Button onClick={pause}>Pause</Button>}
      {status === 'paused' && (
        <Button onClick={resume}>Resume</Button>
      )}
      <Button onClick={openModal}>Settings</Button>
    </Container>
  );
}

export default Footer;
