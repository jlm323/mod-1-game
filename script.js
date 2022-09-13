// player vs computer
// player chooses between rock, paper, or scissors

// rock -   images/skel-rock.png

// paper -  images/skel-paper.png

// scissors - images/skel-scissors.png

// 3 rounds
// game round begins on a countdown from 3 
// player has to win 2 out of 3 rounds to win the whole game
// randomize computer choice for each round
// player chooses between r, p, s for each round
// write func that says 
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
// keep track of how many rounds player and computer has won
// button to reset during the game, makes game start over
// play again button when game is won or lost
// if a draw, the round starts over

const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const options = document.querySelectorAll('.choice');
const resultArea = document.getElementById('result');
const resetBtn = document.querySelector('reset');
let rockPic = document.getElementById('rockPic');
let paperPic = document.getElementById('paperPic');
let scissorsPic = document.getElementById('scissorsPic');
let playerPick
let computerPick
let result

options.forEach(options => options.addEventListener('click', (e) => {
    playerPick = e.target.id
    playerChoice.innerHTML = playerPick
    randomComputer()
    game()
}))

function randomComputer() {
    const randomChoice = Math.floor(Math.random() * options.length) + 1;
    console.log(randomChoice)
    if (randomChoice === 1) {
        computerPick = 'rock'
        
    }
    if (randomChoice === 2) {
        computerPick = 'paper'
        
    }
    if (randomChoice === 3) {
        computerPick = 'scissors'
        
    }
    computerChoice.innerHTML = computerPick
}

function game(){
    if (playerPick === 'scissors' && computerPick === 'paper') {
        result = 'You win!'
    }

    if (playerPick === 'rock' && computerPick === 'scissors') {
        result = 'You win!'
    }

    if (playerPick === 'paper' && computerPick === 'rock') {
        result = 'You win!'
    }

    if (playerPick === 'scissors' && computerPick === 'rock') {
        result = 'You lose!'
    }

    if (playerPick === 'rock' && computerPick === 'paper') {
        result = 'You lose!'
    }

    if (playerPick === 'paper' && computerPick === 'scissors') {
        result = 'You lose!'
    }

    if (playerPick === computerPick) {
        result = "It's a draw!"
    }

    resultArea.innerHTML = result
}