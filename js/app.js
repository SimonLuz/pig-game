/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//+++++++++++++++++++
// DOM Manipulation
//+++++++++++++++++++
//Hiding the dice ++++++++++++++++++++++
document.querySelector(".dice").style.display = "none";

// Setting all scores to 0 ++++++++++++++++++
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

//++++++++++++++++
//BUTTONS
//++++++++++++++++
document.querySelector(".btn-roll").addEventListener("click", function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    
    var diceDOM = document.querySelector(".dice");
    
    diceDOM.style.display = "block";
    
    diceDOM.src = "img/dice-" + dice + ".png";
    
    if(dice !==1) {
        roundScore += dice;
        
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
        
    } else {
        nextPlayer();
    }
});

//++++++++++++++++++++++++++++
// Button HOLD functionality
//++++++++++++++++++++++++++++
document.querySelector(".btn-hold").addEventListener("click", function() {
    
    scores[activePlayer] += roundScore;
    
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
    if (scores[activePlayer] >= 20) {
        document.querySelector("#name-" + activePlayer).textContent = "Pl. "+ (activePlayer+1) + " WINS!!!"
        document.querySelector(".dice").style.display="none";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        
    } else {
        nextPlayer();        
    }
})

function nextPlayer() {
    document.querySelector("#current-" + activePlayer).textContent = 0;
        
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
        
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display="none";
}



//+++++++++++++++++++++++++++++++++
//COMMENTS ++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++

//HTML
// querySelector selects ONLY FIRST element of the kind

//document.querySelector("#current-" + activePlayer).textContent = dice; //TYPE COHERSION


//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>" - innerHTML sets HTML values, textContent only strings, text

//var x= document.querySelector("#score-0").textContent; // GETTER - gets and stores the value (SETTER - sets the value)

//STYLE
//document.querySelector(".dice").style = "display: none"; //OR
//document.querySelector(".dice").style.display = "none";

//++++++++++++++++
//BUTTONS
//document.querySelector(".btn-roll").addEventListener("click", btn); - "btn" is the CALLBACK function, no need for () - addEventListener is calling it when "clicked" / or we can use an annonymous function()




