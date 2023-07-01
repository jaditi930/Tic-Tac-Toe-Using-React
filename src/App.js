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
function Game(){
  // const [xIsNext,setxIsNext]=useState(true);
  const [history,setHistory]=useState([Array(9).fill(null)]);
  let [currentMove,setCurrentMove]=useState(0);
  let currentSquares=history[currentMove];

  function onplay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
    // setxIsNext(!xIsNext);
  }
  function gotomove(move){
    setCurrentMove(move);
    // if(move===0)
    // setxIsNext(true);
    // else
    // setxIsNext(currentMove%2===0);
  }
  const moves=history.map((squares,move)=>{
    let desc="";
    if(move ===0)
    desc="Go to game start";
    else
    desc="Go to move #"+move;
    return (
      <li key={move}><button onClick={()=>{gotomove(move)}}>{desc}</button>
      </li>
    );
  });
  return (
  <>
  <h1 id="title">Tic Tac Toe Game</h1>
  <Board squares={currentSquares} currentMove={currentMove} onplay={onplay}/>
  <ol>{moves}</ol>
  </>
  );
  
}
function Board({squares,currentMove,onplay}) {

  function isWinner(squares){
  const possibleWins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<possibleWins.length; i++)
    {
      const [a,b,c]=possibleWins[i];
      if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c] )
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
    if(currentMove%2===0)
    nextSquares[i]='X';
    else
    nextSquares[i]='O';
    onplay(nextSquares);
    
  }
  let message="";
  if(isWinner(squares))
  message="Winner : "+(currentMove%2===0 ?"O":"X");
  else
  message="Next turn : "+(currentMove%2===0 ?"X":"O");
  return (
    <>
    <div id="status">{message}</div>
    <div id="board">
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
    </>
  );
}

export default Game;
