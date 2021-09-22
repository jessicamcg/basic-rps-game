
var choices = ['rock', 'paper','scissors'];
var computer = choices[Math.floor(Math.random()*choices.length)];
var player;
var newGame;
var wins = 0;
var losses = 0;
var ties = 0;

// game prompts
var play = window.confirm('would you like to play rock, paper, scissors?');
while (play) {
    player = window.prompt('choose from: ' + choices);
    computer = choices[Math.floor(Math.random()*choices.length)];
    game(player,computer);
    newGame = window.confirm('do you want to play again?');
    if (newGame != play) {
        break;
    }
} 
window.alert('ok bye! \r\n' + 
    wins + ' wins \r\n' +
    losses + ' losses \r\n' +
    ties + ' ties');



//win conditions
function game(player,computer){
if (player == computer){
    window.alert('computer: '+ computer
    + '\r\n player: '+ player +
    '\r\n tie');
    ties ++;
} else if (player == 'rock') {
    if (computer == 'paper') {
        window.alert('computer: '+ computer
        +'\r\n player: '+ player+
        '\r\n you lose');
        losses ++;
    }
    if (computer == 'scissors') {
        window.alert('computer: '+ computer
        +'\r\n player: '+ player+
        '\r\n you win');
        wins ++;
    }
} else if (player == 'paper') {   
    if (computer == 'scissors') {
        window.alert('computer: '+ computer
        +'\r\n player: '+ player+
        '\r\n you lose');
        losses ++;
    }
    if (computer == 'rock') {
        window.alert('computer: '+ computer
        +'\r\n player: '+ player+
        '\r\n you win');
        wins ++;
    }
} else if (player == 'scissors') {
    if (computer == 'paper') {
        window.alert('computer: '+ computer
        +'\r\n player: '+ player+
        '\r\n you win');
        wins ++;
    }
    if (computer == 'rock') {
        window.alert('computer: '+ computer
        +'\r\n player: '+ player+
        '\r\n you lose');
        losses ++;
    }
}
}
