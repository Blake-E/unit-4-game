//set variables for game
var wins = 0;
var losses = 0;
var addedGuessesValue = 0;
var crystalValue = [];
var gameValue = 0;

//to generate values for crystals between 1-12 and to randomly pick a number 19-120

function setScore() {
    for (i = 0; i < 4; i++) {
        crystalValue[i] = Math.floor(Math.random() * 12 + 1)
    };
    gameValue = Math.floor(Math.random() * (120 - 19) + 19);
    addedGuessesValue = 0;
    console.log("red value: " + crystalValue[0]);
    console.log("blue value: " + crystalValue[1]);
    console.log("yellow value: " + crystalValue[2]);
    console.log("green value: " + crystalValue[3]);
    console.log("gameValue: " + gameValue);
}

// to show the score in the game

function displayScore(){
    $("#scoreboard").text(addedGuessesValue);

}; 

// to check if player won or lost and to alert the player
function checkScore() {
    if (addedGuessesValue === gameValue) {
        alert("You won!");
        setScore();

    } else if (addedGuessesValue > gameValue) {
        alert("You lose!");
        setScore();
    }
}

// create click functions for the buttons
 $("#red").click(function () {
     addedGuessesValue += crystalValue[0];
     console.log("crystalValue" + gameValue);
     console.log("addedGuessesValue", addedGuessesValue);
     displayScore();
     checkScore();
 });

 $("#blue").click(function () {
     addedGuessesValue += crystalValue[1];
     console.log("crystalValue" + gameValue);
     console.log("addedGuessesValue", addedGuessesValue);
     displayScore();
     checkScore();
 });
 
 $("#yellow").click(function () {
     addedGuessesValue += crystalValue[2];
     console.log("crystalValue" + gameValue);
     console.log("addedGuessesValue", addedGuessesValue);
     displayScore();
     checkScore();
 });

 $("#green").click(function () {
     addedGuessesValue += crystalValue[3];
     console.log("crystalValue" + gameValue);
     console.log("addedGuessesValue", addedGuessesValue);
     displayScore();
     checkScore();
 });

// to run the setScore function that will reset the game and the displayed score 
setScore();
displayScore();



