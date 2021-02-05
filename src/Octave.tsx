import React from 'react';
import styled from 'styled-components';
import { NoteType } from './keyboard_notes';
import Note from './Note';

type Props = {
  notes: NoteType[]
}

const Octave: React.FC<Props> = ({ notes }) => (
  <Wrapper>
    <div>
      {notes.map((element: NoteType) => (
        <Note 
          key={element.note}
          color={element.color}
          note={element.note}
        />
      ))}
    </div>
  </Wrapper>
)

export default Octave

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;