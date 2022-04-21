import React, { useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

const Keyboard = () => {
  const letters1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const letters2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const letters3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { board, currAttempt } = useContext(AppContext);

  return (
    <div className="keyboard">
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
        <Key keyVal={"DEL"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
