import React from "react";

const Letter = ({ letterPos, attemptVal }) => {
  const letter = board[attemptVal][letterPos]; // access letter individually
  return <div className="letter">Letter</div>;
};

export default Letter;
