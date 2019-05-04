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

// Code to uodate round obj based on letter from User
function updateRound(setupRound,letter) {
    if (isCorrectGuess(setupRound.word, letter) === true) {
        setupRound.puzzleState = fillBlanks(setupRound.word, setupRound.puzzleState, letter);

    } else {
        setupRound.wrongGuesses.push(letter);
        setupRound.guessesLeft-=1;
    }
}


// Code to check to see if game is won

function hasWon(puzzleState) {
        for (var i = 0; i < puzzleState.length; i++) {
            if (puzzleState[i] === "_") {
                return false;
            }
        }
        return true;
}

// Code to check to see if game is lost
 function hasLost(guessesLeft) {
     if (guessesLeft === 0) {
         return true;
     }
     return false;
 }

 // Code to check if round is over

 function isEndOfRound(setupRound){
     if (hasWon(setupRound.puzzleState) || hasLost(setupRound.guessesLeft)){
         return true;
     }
     return false;
 } 

 // Code to set up an inital game, traks wins and losses;
 
 function setupGame(gameWords, wins, losses) {
     var game = {
         words: gameWords,
         wins: wins,
         losses: losses, 
         round: setupRound(randomWord(gameWords)),
     }
    return game;
 }

 // Code to start a new round 

 function startNewRound(game) {
     var puzzleState = game.round.puzzleState
    if (hasWon(puzzleState)) {
        game.wins++;
        alert('You won and the word was ' + game.round.word);
    } else {
        game.losses++;
        alert('You lost fool the word was ' + game.round.word);
    }
    return game;
 }

var myGame = setupGame(gameWords);

