import React, {useState} from "react";
import "./TicTacToe.css";

function TicTacToe() {
  // let firstPlayer = true;
  const [firstPlayer, setFirstPlayer] = useState(true);
  let fieldValue = '';
  // let gameArray = [];
  const [gameArray, setGameArray] = useState([]);

  function setGameLengthAction(value){
    let newValue = parseInt(value.replace(/,/g, ''));
    if(newValue < 3){
      alert('Game Length is too short');
      resetGame();
    }else{
      if(newValue > 10){
        alert('Game Length is too long');
        resetGame();
      }else{
        let newArray = [];
        for(let i = 0; i < newValue; i++){
            let pushArray = Array.from({length: newValue}, ()=>'');
            newArray.push(pushArray);
        }
        setGameArray(newArray);
      }
    }
  }

  function proceedGame1(objArray){
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
    while(i < arrayLength){
      for(let j = 0; j < arrayLength; j++){
        stringHori += objArray[i][j];
        stringVerti += objArray[j][i];
      }
      if(stringHori===winString || stringVerti===winString){
        i = arrayLength;
      }else{
        if(!stringHori.includes(charMustNotContained)){
          canWinHori++;
        }
        if(!stringVerti.includes(charMustNotContained)){
          canWinVerti++;
        }
        stringDiagLeft += objArray[i][i];
        stringDiagRight += objArray[arrayLength - 1 - i][i];
        i++;
        stringHori=''; stringVerti='';
      }
    }
    if(
      stringHori===winString || stringVerti === winString ||
      stringDiagLeft===winString || stringDiagRight===winString
    ){
      setTimeout(()=>{
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
          alert('The Game is Draw');
          resetGame();
        })
      }else{
        setFirstPlayer(!firstPlayer);
      }
    }
  }

  // function proceedGame2(objArray){
  //   let checkIfTrue = (theText) => {
  //     return theText===(firstPlayer?'X':'O');
  //   }
  //   let gameLength = objArray.length;
  //   let countDiagRight = 0, countDiagLeft = 0,
  //   countHori = 0, countVerti = 0, horiFull = 0, vertiFull = 0;
  //   for(let i = 0; i < gameLength; i++){
  //       for(let j = 0; j < gameLength; j++){
  //           if(checkIfTrue(objArray[i][j])){
  //               countHori++
  //           }
  //           if(checkIfTrue(objArray[j][i])){
  //               countVerti++
  //           }
  //       }
  //       if(countHori !== gameLength && countVerti !== gameLength){
  //           if(checkIfTrue(objArray[i][i])){
  //               countDiagLeft++
  //           }
  //           if(checkIfTrue(objArray[gameLength - 1 - i][i])){
  //               countDiagRight++
  //           }
  //       }else{
  //           if(countHori === gameLength){
  //               horiFull++
  //           }
  //           if(countVerti === gameLength){
  //               vertiFull++
  //           }
  //       }
  //       countVerti = 0;
  //       countHori = 0;
  //   }
  //   if(
  //       horiFull>0||vertiFull>0||
  //       countDiagLeft===gameLength||
  //       countDiagRight===gameLength
  //   ){
  //     setTimeout(()=>{
  //       alert(`${firstPlayer?'First':'Second'} Player Win the Game!`);
  //       resetGame();
  //     })
  //   }else{
  //     let stringCount = '';
  //     objArray.forEach(
  //         array => {
  //             stringCount += array.join('');
  //         }
  //     )
  //     if(stringCount.length === (gameLength*gameLength)){
  //       setTimeout(()=>{
  //         alert('The Game is Draw');
  //         resetGame();
  //       })
  //     }else{
  //       setFirstPlayer(!firstPlayer);
  //     }
  //   }
  // }

  function clickYourTurn(column, row){
    let objArray = JSON.parse(JSON.stringify(gameArray));
    objArray[row][column] = (firstPlayer?'X':'O');
    setGameArray(objArray);
    proceedGame1(objArray);
  }

  function resetGame(){
    fieldValue = '';
    setGameArray([]);
    setFirstPlayer(true);
  }

  let InputGameLength = () => {
    return (
      <>
        <div className="tic-tac-field">
            <span className="tic-tac-label">
                Input the Length
            </span>
            <input className="tic-tac-input" type={"text"} onInput={(event)=>{
                event.target.value = (parseInt(event.target.value.replace(/,/g, '')).toString())
                .replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                fieldValue = (event.target.value);
                // fieldValue = parseInt(event.target.value.replace(/,/g, ''));
            }}/>
        </div>
        <button className="reset-game" type="button" onClick={function (){setGameLengthAction(fieldValue)}}>
          Set Game Level
        </button>
      </>
    )
  }

  let GameAction = () => {
    return (
      <div className="game-wrapper">
        <span className="tic-tac-label center">
            Current Turn : 
            <br/>
            {
              firstPlayer?'First Player (X)':'Second Player (O)'
            }
        </span>
        {gameArray.map((array, i) =>
          <div key={i} className="tic-tac-row">
            {array.map((data, j) => 
              <div key={j} className={`tic-tac-column row-${i} column-${j}`}>
                {
                  (data==='X'||data==='O')?<div className="game-text">{data}</div>:
                  <button className="game-button" onClick={()=>{clickYourTurn(j, i)}}>{data}</button>
                }
              </div>
            )}
          </div>
        )}
        <button className="reset-game" onClick={resetGame}>
            Reset Game
        </button>
      </div>
    )
  }

  return (
    <div className="employee-page">
      <div className="employee-title">
          Tic Tac Toe Game
      </div>
      {
        gameArray.length > 0?
        <GameAction/>:
        <InputGameLength/>
      }
      {/* {
        gameArray.length < 1
        ?<InputGameLength/>
        :<GameAction/>
      } */}
    </div>
  );
}

export default TicTacToe;