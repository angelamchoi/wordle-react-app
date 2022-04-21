import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptVal][letterPos]; // access letter individually

  const correct = correctWord.toUpperCase()[letterPos] === letter;

  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  //can't be correct, can't be empty, and correct word must include letter

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  // useEffect(() => {
  //   if (letter !== "" && !correct && !almost) {
  //     setDisabledLetters((prev) => [...prev, letter]);
  //   }
  // }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;

//Notes
// check correct, almost, and not correct
