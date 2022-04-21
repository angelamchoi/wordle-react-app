import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n"); //words in the next line
      wordSet = new Set(wordArr);
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]; //grabbing random word
      console.log(wordSet);
    });

  return { wordSet, todaysWord };
};

// our matrix
// attemptVal = row
// using Set because everytime you guess a word it checks the word exists in our word bank
// array will loop through the entire array to check
// Set will find it immediately
