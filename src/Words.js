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
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      wordSet = new Set(wordArr);
    });

  return { wordSet };
};

// our matrix
// attemptVal = row
// using Set because everytime you guess a word it checks the word exists in our word bank
// array will loop through the entire array to check
// Set will find it immediately
