// Letter construtor

let Letter = function(ltr) {
  this.ltr = ltr;
  this.isGuessCorrect = false;
  this.ltrReturn = () => (this.isGuessCorrect ? this.ltr : "_");
  this.guessLtr = guess => {
    if (this.ltr === guess) this.isGuessCorrect = true;
  };
};

// //Test code
// let letter = new Letter("a");
// letter.guessLtr("a");
// console.log(letter.ltrReturn());

module.exports = Letter;
