var wins = 0,
    losses = 0,
    guessesLeft = 9,
    lettersGuessed = [];



var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letterSelector = [Math.floor(Math.random() * letters.length)];
var computerLetter = letters[letterSelector];
console.log(computerLetter)

document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess)


    if (userguess !== computerLetter) {
        console.log("wrong");
        guessesLeft--;
        lettersGuessed.push(userguess);
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

    }


    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        letterSelector = [Math.floor(Math.random() * letters.length)];
        computerLetter = letters[letterSelector];
        document.getElementById("losses").innerHTML = losses;
        lettersGuessed = [];


    }

    if (userguess === computerLetter) {
        wins++;
        letterSelector = [Math.floor(Math.random() * letters.length)];
        computerLetter = letters[letterSelector];
        document.getElementById("wins").innerHTML = wins;
        lettersGuessed = [];
        guessesLeft = 9;
    }


    var invalid = /[a-z]/gi;
    if (!invalid.test(userguess)) {
        alert("please enter an alphabetical letter");
        guessesLeft++;

    }


}

