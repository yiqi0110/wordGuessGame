// this is a list of the nigiri
var nigiriList = ["shake", "maguro", "hamachi", "tai", "toro", "akami", "tako", "uni", "akamutsu", "kodai"];

// randomizes the array for the game
var randomNigiri = nigiriList[Math.floor(Math.random() * nigiriList.length)];

var s;
var winCount = 0;
var answerArray = [];

function startUp() {
    for (var i = 0; i < randomNigiri.length; i++) {
        answerArray[i] = "_";
    }

    s = answerArray.join(" ");
    document.getElementById("_placeholders").innerHTML = s;
}

function Letter() {
    // so how intigrate this with the onclick thing so it reads it inplicitly
    var letter = document.getElementById("letter").value;

    if (letter.length = 1) {
        for (var i = 0; i < randomNigiri.length; i++) {
            if (randomNigiri[i] === letter) {
                answerArray[i] = letter;
            }
        }
        winCount++;
        document.getElementById("wins").innerHTML = count;

        // this is also linked to the onclick fucntion
        document.getElementById("_placeholders").innerHTML = answerArray.join(" ");
    }
    if (winCount > 10) {
        // this should show the guessed letters in an array type format

        for (var i = 10; i < 10; i -= i - 1) {
            var remaingGuesses = i
        }

        document.getElementById("guesses").innerHTML = remaingGuesses;
    }
}

// for (var i = 0; i < nigiriList.length; i++) {

// // To get the array to output the individual letters for each array index
// var listLetters = nigiriList[i].split('');
// for (var j = 0; j < listLetters.length; j++) {
// // console.log(listLetters[j])     test to get each letter out of array value
// var x = document.getElementById("_").placeholder;
// document.getElementsByName("_placeholders").item = x;
// console.log(x)           IGNOR FOR NOW
// }
// }

// this is for the place holders, class being called "_placeholders"

// So i guess this comes out with a random value from nigiriList array, so works?
// console.log(listLetters)

// this is where the user will input a letter
// document.onkeyup = function (event) {

//     // this is to make any input lower case to fit in to the for statement, the variable for user input is x
//     var x = event.key.toLowerCase();



//     // this is where the game starts
//     var first = "a",
//         last = "z";
//     for (var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
//         var alphabet = String.fromCharCode(i);

//         // This is saying that if you press any letter the game will initiate
//         if (x === alphabet) {

//             var guessesRemaining = -8;





//             // if user input is x, then replace placeholder "_" with letter, if not place x in wrong letter place
//             if (listLetters.includes(x)) {
//                 var wins = 0;
//                 // this is where the place holder comes into play

//                 wins++;
//                 document.getElementById("wins").innerHTML = wins;
//                 console.log(x);
//             } else {
//                 var userText = document.getElementById("_placeholders");

//                 document.onkeyup = function(event) {
//                     userText.textContent = event.key;
//                 }





//                 document.getElementById("remaining").innerHTML = guessesRemaining;
//                 guessesRemaining++;
//             }
//             // console.log("some shit happens")        dubugging test
//             console.log(guessesRemaining + "guess");
//         };
//         // console.log(i)      debugging test

//         // console.log("hello")        debugging test
//     }
// }


// THIS BELOW IS THE INTIAL PSEUDOCODE THAT DID NOT GO INTO THE ACTUAL CODE







// this is the variable holding the win count

// this is the varibale holding the letters or the _ _ _ _ _ thing

// this is the variable hoiding the letters guessed already

// this is the variable holding the guesses left before failure

// this is the sound when you get a correct letter

// this is the sound when you get a incorrect letter