import React from 'react';
import styled from 'styled-components';
import { notes } from './keyboard_notes';
import Octave from './Octave'

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  }

  return (
    <Wrapper>
      <div>
        <Octave notes={notes} clickHandler={handleClick} />
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

