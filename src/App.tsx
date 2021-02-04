import React from 'react';
import { notes } from './keyboard_notes';
import Octave from './Octave'

function App() {
  return (
    <div>
      <Octave notes={notes} />
    </div>
  );
}

export default App;

