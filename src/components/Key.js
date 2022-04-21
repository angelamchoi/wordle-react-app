import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard } = useContext(AppContext);

  const selectLetter = () => {
    const newBoard = [...board]; //import board
    newBoard[0][0] = keyVal; //attempt=0, position=0,
    setBoard(newBoard);
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
