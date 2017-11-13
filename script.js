/*jslint devel: true*/
/*global
console, newGame, playerPick, prompt, getComputerPick, playerPickElem, computerPickElem, checkRoundWinner, setGamePoints,checkGameWinner
*/
/*jslint plusplus: true */



var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() {
    playerPick('rock')
});
pickPaper.addEventListener('click', function() {
    playerPick('paper')
});
pickScissors.addEventListener('click', function() {
    playerPick('scissors')
});

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };


var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'Try again';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
                    }
}
setGameElements();
       
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Please enter your name', 'Player name');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();
        playerNameElem.innerHTML = player.name;
    }
}

/*var x = Math.random();
Math.floor(Math.random() * 3);*/

function getComputerPick() {
    var possiblePick = ['rock', 'paper', 'scissors'];
    return possiblePick[Math.floor(Math.random() * 3)];
}
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

//już zdefiniowana !!

function playerPick(playerPick) {
    
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
   //checkGameWinner(); //potrzebne mi to tu?
}
//funnkcja : ocena wygranej gracz vs komputer 
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    setGamePoints();

}

//ustawienie punktacji :
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
    setTimeout(checkGameWinner, 0); 
}
//kto wygrał?
function checkGameWinner () {
    if(player.score == 10) {
        //komentarz
     
       gameState = 'ended';
        
        alert('jak dorosnę będę komentarzem');
    } else if (computer.score == 10) {
        //komentarzem
        gameState = 'ended';
        
        alert('jak dorosnę będę komentarzem');
    } setGameElements();
}
                        


