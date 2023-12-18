import { useState } from 'react';
import { Square } from './Square';

export function Board() {
  const SQUARES = ['', '', '', '', '', '', '', '', ''];

  const [squares, setSquare] = useState(SQUARES);
  const [nextIsX, setNextIsX] = useState(true);

  const handleClick = () => {
    setNextIsX(!nextIsX);
  };

  return (
    <>
      <div>
        <Square onClick={handleClick} value={squares[0]} />
        <Square onClick={handleClick} value={squares[1]} />
        <Square onClick={handleClick} value={squares[2]} />
      </div>
      <div>
        <Square onClick={handleClick} value={squares[3]} />
        <Square onClick={handleClick} value={squares[4]} />
        <Square onClick={handleClick} value={squares[5]} />
      </div>

      <div>
        <Square onClick={handleClick} value={squares[6]} />
        <Square onClick={handleClick} value={squares[7]} />
        <Square onClick={handleClick} value={squares[8]} />
      </div>
    </>
  );
}
