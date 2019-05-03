// Array with the Game Words

var gameWords = "swerve woke salty cray-cray xennials millennials thirsty trolls basic bae fire lol lmao ratchet yolo jomo lit slay".split(" ");

// Code to grab Random Game Word

var randomWord = function(array) {
    return array[Math.floor(Math.random()*array.length)]
};

//Code to check if guess letter is correct

function isCorrectGuess(word, letter) {
    if (word.indexOf(letter) > -1) {
        return true;
    }
    return false;
}

// Code to generate "-" for Game Word
 
function getBlanks(word) {
    var array = [];
    for (var i = 0; i < word.length; i++) {
        array.push("_");
    }
    return array;   
}
// Code to fill in blanks with guesss

function fillBlanks(word, blanks,letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            blanks[i] = letter;
        }
    }
    return blanks;
}


// Game Management functions

function setupRound(word) {
    var obj = {
        word:word,
        guessesLeft: 9,
        wrongGuesses:[],
        puzzleState: getBlanks(word),
    }
    return obj;
}

function updateRound(setupRound,letter) {
    if (isCorrectGuess(letter) === true) {
      setupRound.puzzleState = setupRound.puzzleState.fillBlanks(word,blanks,letter);

    } else {
        setupRound.wrongGuesses.push(letter);
        setupRound.guessesLeft-=1;
    }
}
