// this is a list of the nigiri
var nigiriList = ["shake", "maguro", "hamachi", "tai", "toro", "akami", "tako", "uni", "akamutsu", "kodai"];

// randomizes the array for the game
var randomNigiri = nigiriList[Math.floor(Math.random() * nigiriList.length)];

var s;
var winCount = 0;
var answerArray = [];
var guessArray = [];


function startUp() {
    for (var i = 0; i < randomNigiri.length; i++) {
        answerArray[i] = "_";
    }

    s = answerArray.join(" ");
    document.getElementById("_placeholders").innerHTML = s;

    document.onkeyup = function (event) {

            // this is to make any input lower case to fit in to the for statement, the variable for user input is x
            var x = event.key.toLowerCase();



            // this is where the game starts
            var first = "a",
                last = "z";
            for (var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
                var alphabet = String.fromCharCode(i);
            };
        };

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
        };

