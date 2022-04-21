import React, { useContext } from "react";
import { AppContext } from "../App";
import GameOver from "./GameOver";

function Key({ keyVal, bigKey }) {
  const { gameOver, onDelete, onSelectLetter, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      // id={bigKey ? "big" : disabled && "disabled"}
      id={bigKey && "big"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
