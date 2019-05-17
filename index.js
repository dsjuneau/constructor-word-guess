//Word guess game using constructors in multiple files
//Functions only use arguments.  They do not access global variables directly.

let Word = require("./word");
let inquirer = require("inquirer");

let wordPool = [
  "amazon",
  "tesla",
  "google",
  "microsoft",
  "qualcomm",
  "cisco",
  "apple"
];

//Game loop, keeps going until the array of words is empty.
function gameLoop(arry) {
  if (arry.length === 0) {
    console.log("Game Over");
  } else {
    let textWord = arry[Math.floor(Math.random() * arry.length)];
    let word = new Word(textWord);
    let numberGuesses = 12;
    arry.splice(arry.indexOf(textWord), 1);
    console.log(word.wordReturn());
    wordLoop(word, numberGuesses, arry);
  }
}

//Word loop, keeps going until the guesses exceed 12 or the word is guessed.
function wordLoop(word, numberGuesses, arry) {
  inquirer
    .prompt({ type: "input", message: "Guess a letter", name: "letter" })
    .then(function(inquirerResponse) {
      //Checks to see if your guess was correct, provides feedback, and decrements counter
      let oldWord = word.wordReturn();
      word.checkLtr(inquirerResponse.letter);
      oldWord === word.wordReturn()
        ? (numberGuesses--,
          console.log(`Wrong guess.  You have ${numberGuesses} left`))
        : console.log("Correct!");
      console.log(word.wordReturn());
      //Checks to see if you won or lost this game
      //If yes, it starts with a new word
      //If no, it prompts the user for another guess
      if (!word.wordReturn().includes("_")) {
        console.log("Winner!");
        gameLoop(arry);
      } else if (numberGuesses > 0) {
        wordLoop(word, numberGuesses, arry);
      } else {
        console.log("You lose this one.");
        gameLoop(arry);
      }
    });
}

//Main program
gameLoop(wordPool);
