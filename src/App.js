// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square({value,onSquareClick}){
  return (
  <div className='square' onClick={onSquareClick}>
    {value}
  </div>
);
}
function Board() {
  const [squares,setSquares]=useState(Array(9).fill(null))
  function handleclick(i){
    const nextSquares=squares.slice()
    nextSquares[i]='X';
    setSquares(nextSquares);
  }
  return (
    <div id="board">
    <div>
    <Square value={squares[0]} onSquareClick={()=>handleclick(0)}/>
    <Square/>
    <Square/>
    </div>
    <div>
    <Square/>
    <Square/>
    <Square/>
    </div>
    <div>
    <Square/>
    <Square/>
    <Square/>
    </div>
    </div>
  );
}

export default Board;
