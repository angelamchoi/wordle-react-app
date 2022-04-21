import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 }); //keep track of attempt and letter pos

  // selecting letter
  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
  const newBoard = [...board]; //import board
  newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal; //attempt=0, position=0,
  setBoard(newBoard);
  setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  console.log(newBoard);
  };
  
  // delete
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return; // first letter
    const newBoard = [...board]; //import board
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };


  //enter
  const onEnter = () => {
     // check if user typed 5 letters
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
        }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
