let Letter = require("./letter");

let Word = function(word) {
  this.arry = word.split("").map(element => new Letter(element));
  this.wordReturn = () =>
    this.arry.map(element => element.ltrReturn()).join(" ");
  this.checkLtr = ltr => {
    this.arry.forEach(element => element.guessLtr(ltr));
  };
};

// Test Code
// let word = new Word("cow");
// console.log(word.arry);
// console.log(word.wordReturn());
// word.checkLtr("c");
// console.log(word.wordReturn());

module.exports = Word;
