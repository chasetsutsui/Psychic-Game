var wins = 0,
    losses = 0,
    guessesLeft = 9,
    lettersGuessed = "[]";

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var letterSelector = [Math.floor(Math.random() * letters.length)];
var computerLetter = letters[letterSelector];
console.log(computerLetter)

document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess)
}

