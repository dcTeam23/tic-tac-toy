import { useState } from 'react';
import { Square } from './Square';

export function Board() {
  const SQUARES = ['', '', '', '', '', '', '', '', ''];

  const [squares, setSquare] = useState(SQUARES);
  const [nextIsX, setNextIsX] = useState(true);

  /**
   * @param {number} i
   */
  const handleClick = (i) => () => {
    if (nextIsX) {
      squares[i] = 'X';
    } else {
      squares[i] = 'O';
    }

    setSquare(squares);
    setNextIsX(!nextIsX);
  };

  return (
    <>
      <div>
        <Square onClick={handleClick(0)} value={squares[0]} />
        <Square onClick={handleClick(1)} value={squares[1]} />
        <Square onClick={handleClick(2)} value={squares[2]} />
      </div>
      <div>
        <Square onClick={handleClick(3)} value={squares[3]} />
        <Square onClick={handleClick(4)} value={squares[4]} />
        <Square onClick={handleClick(5)} value={squares[5]} />
      </div>

      <div>
        <Square onClick={handleClick(6)} value={squares[6]} />
        <Square onClick={handleClick(7)} value={squares[7]} />
        <Square onClick={handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
}
