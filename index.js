let Word = require("./word");
let inquirer = require("inquirer");

let wordPool = [
  "dilapidated",
  "screenplay",
  "screenwriting",
  "hacksaws",
  "torture",
  "chains",
  "gore",
  "blood",
  "screams"
];

let word = new Word(wordPool[Math.floor(Math.random() * wordPool.length)]);
let numberGuesses = 12;

function gameLoop() {
  inquirer
    .prompt({ type: "input", message: "Guess a letter", name: "letter" })
    .then(function(inquirerResponse) {
      word.checkLtr(inquirerResponse.letter);
      console.log(word.wordReturn());
      numberGuesses--;
      if (numberGuesses > 0) gameLoop();
    });
}

gameLoop();
