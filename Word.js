let Letter = require("./letter");

//Word Constructor
let Word = function(word) {
  this.arry = word.split("").map(element => new Letter(element));
  this.wordReturn = () =>
    this.arry.map(element => element.ltrReturn()).join(" ");
  this.checkLtr = ltr => {
    this.arry.forEach(element => element.guessLtr(ltr));
  };
};
module.exports = Word;
