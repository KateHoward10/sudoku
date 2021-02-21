import React from 'react';
import { formatTime } from '../../helpers.js';
import { Container, Time, Button } from './styles';

function Footer({ time, pause, resume, status, openModal }) {
  return (
    <Container>
      <Container>
        <Time paused={status === 'paused'}>{formatTime(time)}</Time>
        {status === 'playing' && <Button onClick={pause}>Pause</Button>}
        {status === 'paused' && (
          <Button onClick={resume}>Resume</Button>
        )}
      </Container>
      <Button onClick={openModal}>Settings</Button>
    </Container>
  );
}

export default Footer;
