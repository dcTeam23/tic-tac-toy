import {useState} from 'react'
import {Square} from './Square'


export function Board() {
  const SQUARES = [
  
    '',  'O', 'X', 
    '',  'O', 'X', 
    'X', 'O', 'Z'

  ];
  
  const [squares1, setSquare] = useState(SQUARES);
  
  return (
    <>
      <div>
        <Square value={squares1[1-1]}/>
        <Square value={squares1[2-1]}/>
        <Square value={squares1[3-1]}/>
      </div>
      <div>
        <Square value={squares1[4-1]}/>
        <Square value={squares1[5-1]}/>
        <Square value={squares1[6-1]}/>
      </div>

      <div>
        <Square value={squares1[7-1]}/>
        <Square value={squares1[8-1]}/>
        <Square value={squares1[9-1]}/>
      </div>
    </>
  );
}
