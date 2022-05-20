import React from "react";
import Square from '../Square/Square';
import './Gameboard.css';

function Gameboard({ squares, onClick }) {

  return (
    <div className='gameboard'>
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
  );
}

export default Gameboard;
