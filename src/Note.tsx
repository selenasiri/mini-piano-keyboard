import React from 'react';
import styled from 'styled-components';

const Black = styled.button`
  width: 40px;
  height: 130px;
  background: black;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`

const White = styled.button`
  width: 60px;
  height: 200px;
  background: white;
  border: 1px solid black;
  box-shadow: 2px 5px;
  position: absolute;
  margin: 1px;

  :active {
    background: #eee;
  }
`

type Props = {
  color: string;
  note: string;
}

const Note: React.FC<Props> = ({ color, note }) => 
  color === 'white' ? (
    <White value={note} />
  ) : (
    <Black value={note} />
  );

export default Note