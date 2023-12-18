import {useState} from 'react'
import {Square} from './Square'


export function Board() {
  const SQUARES = [
    '',  '', '', 
    '',  '', '', 
    '', '', ''

  ];
  
  const [squares1, setSquare] = useState(SQUARES);
  
  return (
    <>
      <div>
        <Square value={squares1[0]}/>
        <Square value={squares1[1]}/>
        <Square value={squares1[2]}/>
      </div>
      <div>
        <Square value={squares1[3]}/>
        <Square value={squares1[4]}/>
        <Square value={squares1[5]}/>
      </div>

      <div>
        <Square value={squares1[6]}/>
        <Square value={squares1[7]}/>
        <Square value={squares1[8]}/>
      </div>
    </>
  );
}
