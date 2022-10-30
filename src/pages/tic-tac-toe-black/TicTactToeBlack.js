import React, {useState} from "react";
import "./TicTacToeBlack.css";

function TicTacToeBlack() {
  const [p1Win, setP1Win] = useState(0);
  const [p2Win, setP2Win] = useState(0);
  const [drawCount, setDrawCount] = useState(0);
  const [firstPlayer, setFirstPlayer] = useState(true);
  const [gameArray, setGameArray] = useState(Array.from({length: 3}, ()=>Array.from({length: 3}, ()=>'')));

  // let savedState = JSON.parse(sessionStorage.getItem('savedScore'));
  // if(savedState){
  //   setP1Win(savedState.p1Win);
  //   setP2Win(savedState.p2Win);
  //   setDrawCount(savedState.drawCount);
  // }

  function proceedGame(objArray){
    let arrayLength = objArray.length;
    let charMustNotContained = firstPlayer?'O':'X';
    let winString = Array.from({length: arrayLength}, ()=>firstPlayer?'X':'O').join('');
    let stringHori = '';
    let stringVerti = '';
    let stringDiagLeft = '';
    let stringDiagRight = '';
    let canWinHori = 0;
    let canWinVerti = 0;
    let i = 0;
    let winCondition = () => stringHori===winString || stringVerti===winString||
    stringDiagLeft===winString || stringDiagRight===winString;
    while(i < arrayLength){
      for(let j = 0; j < arrayLength; j++){
        stringHori += objArray[i][j];
        stringVerti += objArray[j][i];
        if(i<1){
          stringDiagLeft += objArray[j][j];
          stringDiagRight += objArray[arrayLength - 1 - j][j];
        }
      }
      if(winCondition()){
        i = arrayLength;
      }else{
        if(!stringHori.includes(charMustNotContained)){
          canWinHori++;
        }
        if(!stringVerti.includes(charMustNotContained)){
          canWinVerti++;
        }
        i++;
        stringHori=''; stringVerti='';
      }
    }
    if(winCondition()){
      setTimeout(()=>{
        if(firstPlayer){
          setP1Win(p1Win+1);
        }else{
          setP2Win(p2Win+1);
        }
        alert(`${firstPlayer?'First':'Second'} Player Win the Game!`);
        resetGame();
      })
    }else{
      if(
        canWinHori<1&&canWinVerti<1&&
        stringDiagLeft.includes(charMustNotContained)&&
        stringDiagRight.includes(charMustNotContained)
      ){
        setTimeout(()=>{
          setDrawCount(drawCount+1);
          alert('The Game is Draw');
          resetGame();
        })
      }else{
        setFirstPlayer(!firstPlayer);
      }
    }
  }

  function clickYourTurn(column, row){
    let objArray = JSON.parse(JSON.stringify(gameArray));
    objArray[row][column] = (firstPlayer?'X':'O');
    setGameArray(objArray);
    proceedGame(objArray);
  }

  function resetGame(){
    setGameArray(Array.from({length: 3}, ()=>Array.from({length: 3}, ()=>'')));
    setFirstPlayer(true);
    // sessionStorage.setItem('savedScore', JSON.stringify({
    //   p1Win: p1Win, p2Win: p2Win, drawCount: drawCount
    // }));
  }

  return (
    <div className="tic-tac-page">
      <div className="tic-tac-title">
          Tic Tac Toe Game
      </div>
      <div className="game-wrapper">
        <span className="tic-tac-label center">
            Current Turn : 
            <br/>
            {
              firstPlayer?'First Player (X)':'Second Player (O)'
            }
        </span>
        {gameArray.map((array, i) =>
          <div key={i} className={`tic-tac-row no-${i}`}>
            {array.map((data, j) => 
              <div key={j} className={`tic-tac-column row-${i} column-${j}`}>
                {
                  (data==='X')?
                  <div className="game-text cross">&#10005;</div>:
                  (data==='O')?<div className="game-text circle">&#9711;</div>:
                  <button className="game-button" onClick={()=>{clickYourTurn(j, i)}}>{data}</button>
                }
              </div>
            )}
          </div>
        )}
        <div className="point-wrapper">
          <div className="point-text">
            <div>{p1Win}</div>
            <div>P1</div>
          </div>
          <div className="point-text">
            <div>{drawCount}</div>
            <div>Draw</div>
          </div>
          <div className="point-text">
            <div>{p2Win}</div>
            <div>P2</div>
          </div>
        </div>
        <button className="reset-game" onClick={resetGame}>
            Reset Game
        </button>
      </div>
    </div>
  );
}

export default TicTacToeBlack;