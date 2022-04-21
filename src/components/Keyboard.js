import React, { useContext, useCallback, useEffect } from "react";
import Key from "./Key";
import { AppContext } from "../App";

const Keyboard = () => {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

  const letters1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const letters2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const letters3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      letters1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      letters2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      letters3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  }); // prevents reupdating components

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {letters1.map((letter, key) => {
          return (
            <div key={key}>
              <Key keyVal={letter} />
            </div>
          );
        })}
      </div>
      <div className="line2">
        {letters2.map((letter, key) => {
          return (
            <div key={key}>
              <Key keyVal={letter} />
            </div>
          );
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {letters3.map((letter, key) => {
          return (
            <div key={key}>
              <Key keyVal={letter} />
            </div>
          );
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
