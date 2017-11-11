/*jslint devel: true*/
/*global
console, newGame, playerPick, prompt, getComputerPick, playerPickElem, computerPickElem, checkRoundWinner, setGamePoints
*/
/*jslint plusplus: true */
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function () { 'use strict'; playerPick('rock');
                                       /* var computerPick = getComputerPick();
                                            playerPickElem.innerHTML = playerPick;
                                            computerPickElem.innerHTML = computerPick;    */   });
pickPaper.addEventListener('click', function () { 'use strict'; playerPick('paper');
                                       /* var computerPick = getComputerPick();
                                                 playerPickElem.innerHTML = playerPick;
                                                 computerPickElem.innerHTML = computerPick;   */     });
pickScissors.addEventListener('click', function () { 'use strict'; playerPick('scissors');
                                       /* var computerPick = getComputerPick();
                                                    playerPickElem.innerHTML = playerPick;
                                                    computerPickElem.innerHTML = computerPick; */ });

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

function setGameElements() {'use strict'; switch (gameState) { case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerHTML = 'Try again';
            break;
        case 'notStarted':
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
            break; } }

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    'use strict';
    player.name = prompt('Please enter your name', 'Player name');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();
        playerNameElem.innerHTML = player.name;
    }
}

var x = Math.random();
Math.floor(Math.random() * 3);

function getComputerPick() {
    'use strict';
    var possiblePick = ['rock', 'paper', 'scissors'];
    return possiblePick[Math.floor(Math.random() * 3)];
}
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
//gdzieś zdefiniowana !!
function playerPick(playerPick) { 'use strict';
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick); }

function checkRoundWinner(playerPick, computerPick) {
    'use strict';
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick === computerPick) {
        winnerIs = 'none';
    } else if ((computerPick === 'rock' &&  playerPick === 'scissors') || (computerPick === 'scissors' &&  playerPick === 'paper') || (computerPick === 'paper' &&  playerPick === 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs === 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs === 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }

}
function setGamePoints() {
    'use strict';
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
