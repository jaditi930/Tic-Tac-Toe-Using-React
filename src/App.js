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
  const [squares,setSquares]=useState(Array(9).fill(null));
  const [xIsNext,setxIsNext]=useState(true);

  function isWinner(squares){
  const possibleWins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<possibleWins.length; i++)
    {
      const [a,b,c]=possibleWins[i];
      if(squares[a] && squares[b] && squares[c] && squares[a]===squares[b]
        &&squares[b]===squares[c] )
        {
        return true;  
        }
    }
    return false;
  }
  function handleclick(i){
    if(squares[i]||isWinner(squares))
    return;
    const nextSquares=squares.slice();
    if(xIsNext)
    nextSquares[i]='X';
    else
    nextSquares[i]='O';
    setxIsNext(!xIsNext);
    setSquares(nextSquares);

    
  }
  let message="";
  if(isWinner(squares))
  message="Winner : "+(xIsNext ?"O":"X");
  else
  message="Next turn : "+(xIsNext ?"X":"O");
  return (
    <div id="board">
    <div>{message}</div>
    <div>
    <Square value={squares[0]} onSquareClick={()=>handleclick(0)}/>
    <Square value={squares[1]} onSquareClick={()=>handleclick(1)}/>
    <Square value={squares[2]} onSquareClick={()=>handleclick(2)}/>
    </div>

    <div>
    <Square value={squares[3]} onSquareClick={()=>handleclick(3)}/>
    <Square value={squares[4]} onSquareClick={()=>handleclick(4)}/>
    <Square value={squares[5]} onSquareClick={()=>handleclick(5)}/>
    </div>

    <div>
    <Square value={squares[6]} onSquareClick={()=>handleclick(6)}/>
    <Square value={squares[7]} onSquareClick={()=>handleclick(7)}/>
    <Square value={squares[8]} onSquareClick={()=>handleclick(8)}/>
    </div>

    </div>
  );
}

export default Board;
