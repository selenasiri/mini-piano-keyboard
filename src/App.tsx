import React from 'react';
import styled from 'styled-components';
import { notes } from './keyboard_notes';
import Octave from './Octave'

function App() {
  return (
    <Wrapper>
      <div>
        <Octave notes={notes} />
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: teal;
`

