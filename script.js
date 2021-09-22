

var choices = ['rock', 'paper','scissors'];

var computer = choices[Math.floor(Math.random()*choices.length)];

var player;

var newGame;

var score;

// game prompts
var play = window.confirm('would you like to play rock, paper, scissors?');
while (play) {
    player = window.prompt('choose from: ' + choices);
    game(player,computer);
    newGame = window.confirm('do you want to play again?')
    if (newGame != play) {
        break;
    }
} 
window.alert('ok bye!')



//win conditions
function game(player,computer){
if (player == computer){
    window.alert('computer: '+ computer);
    window.alert('player: '+ player);
    window.alert('tie');
} else if (player == 'rock') {
    if (computer == 'paper') {
        window.alert('computer: '+ computer);
        window.alert('player: '+ player);
        window.alert('you lose');
    }
    if (computer == 'scissors') {
        window.alert('computer: '+ computer);
        window.alert('player: '+ player);
        window.alert('you win');
    }
} else if (player == 'paper') {   
    if (computer == 'scissors') {
        window.alert('computer: '+ computer);
        window.alert('player: '+ player);
        window.alert('you lose');
    }
    if (computer == 'rock') {
        window.alert('computer: '+ computer);
        window.alert('player: '+ player);
        window.alert('you win');
    }
} else if (player == 'scissors') {
    if (computer == 'paper') {
        window.alert('computer: '+ computer);
        window.alert('player: '+ player);
        window.alert('you win');
    }
    if (computer == 'rock') {
        window.alert('computer: '+ computer);
        window.alert('player: '+ player);
        window.alert('you lose');
    }
}
}
