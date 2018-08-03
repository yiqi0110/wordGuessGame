// this is a list of the nigiri
var nigiriList = ["shake", "maguro", "hamachi", "tai", "toro", "akami", "tako", "uni", "akamutsu", "kodai"]
nigiriList.sort(function(a, b){return 0.5 - Math.random()});

// this is where the user will input a letter
document.onkeyup = function (event) {
    // this is to make any input lower case to fit in to the for statement, the variable for user input is x
    var x = event.key.toLowerCase();


    // this is where the game starts
    var first = "a",
        last = "z";
    for (var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
        var alphabet = String.fromCharCode(i);
        // This is saying that if you press any letter the game will initiate
        if (x === alphabet) {
            
            // console.log("some shit happens")        dubugging test
        }
        // console.log(i)      debugging test
    }
    // console.log("hello")        debugging test
}


// THIS BELOW IS THE INTIAL PSEUDOCODE THAT DID NOT GO INTO THE ACTUAL CODE







// this is the variable holding the win count

// this is the varibale holding the letters or the _ _ _ _ _ thing

// this is the variable hoiding the letters guessed already

// this is the variable holding the guesses left before failure

// this is the sound when you get a correct letter

// this is the sound when you get a incorrect letter

//