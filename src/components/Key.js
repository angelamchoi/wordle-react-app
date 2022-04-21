import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);

  const selectLetter = () => {
    const newBoard = [...board]; //import board
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal; //attempt=0, position=0,
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    console.log(newBoard);
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
