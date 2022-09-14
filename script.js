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


//////////////////////////////////////////////////////////


const playerArea = document.getElementById('player-choice');
const computerArea = document.getElementById('computer-choice');
const options = document.querySelectorAll('.choice');
const resultArea = document.getElementById('result');
const resetBtn = document.querySelector('reset');

let playerPick;
let computerPick;
let result;
let round = 0;
const rounds = 3;
let playerScore = 0;
let computerScore = 0;


// event listener on buttons 
// depending on choice, related image appears in the player area
options.forEach(options => options.addEventListener('click', (e) => {
    playerPick = e.target.id;
    playerArea.innerHTML = playerPick;
    if (playerPick == 'rock') {
        let rockPic = document.createElement('img');
        rockPic.setAttribute('src', '/images/skel-rock.png');
        rockPic.className = 'choicePic';
        playerArea.appendChild(rockPic);
    }

    if (playerPick == 'paper') {
        let paperPic = document.createElement('img');
        paperPic.setAttribute('src', '/images/skel-paper.png');
        paperPic.className = 'choicePic';
        playerArea.appendChild(paperPic);
    }

    if (playerPick == 'scissors') {
        let scissorsPic = document.createElement('img');
        scissorsPic.setAttribute('src', '/images/skel-scissors.png');
        scissorsPic.className = 'choicePic';
        playerArea.appendChild(scissorsPic);
    }
    console.log('player choice: ' + playerPick)
    randomComputer()
    gameRound()

    if (round <= rounds) {
        if (result == 'You win!') {
            playerScore += 1;
            resultArea.innerHTML = "Rounds won: " + playerScore;
        } else if (result == 'You lose!') {
            computerScore += 1;
        } 
        round++; 
        if (round === rounds) {
            
            if (playerScore >= 2) {
                resultArea.innerHTML = "YOU WON THE GAME!"
            }
            if (computerScore >= 2) {
                resultArea.innerHTML = "YOU LOST THE GAME!"
            }
        }
    }
}))

// computer randomly picking an option
function randomComputer() {
    const randomChoice = Math.floor(Math.random() * options.length) + 1;

    if (randomChoice === 1) {
        computerPick = 'rock';
    }

    if (randomChoice === 2) {
        computerPick = 'paper';        
    }

    if (randomChoice === 3) {
        computerPick = 'scissors';        
    }
    console.log('computer choice: ' + computerPick)

    computerArea.innerHTML = computerPick;

    // once computer picks, related image appears in computer area
    if (computerPick == 'rock') {
        let rockPic = document.createElement('img');
        rockPic.setAttribute('src', '/images/skel-rock.png');
        rockPic.className = 'choicePic';
        computerArea.appendChild(rockPic);
    }

    if (computerPick == 'paper') {
        let paperPic = document.createElement('img');
        paperPic.setAttribute('src', '/images/skel-paper.png');
        paperPic.className = 'choicePic';
        computerArea.appendChild(paperPic);
    }

    if (computerPick == 'scissors') {
        let scissorsPic = document.createElement('img');
        scissorsPic.setAttribute('src', '/images/skel-scissors.png');
        scissorsPic.className = 'choicePic';
        computerArea.appendChild(scissorsPic);
    }
}

// results for if player wins, if computer wins, or draw
function gameRound(){
    if (playerPick === 'scissors' && computerPick === 'paper') {
        result = 'You win!';
    }

    if (playerPick === 'rock' && computerPick === 'scissors') {
        result = 'You win!';
    }

    if (playerPick === 'paper' && computerPick === 'rock') {
        result = 'You win!';
    }

    if (playerPick === 'scissors' && computerPick === 'rock') {
        result = 'You lose!';
    }

    if (playerPick === 'rock' && computerPick === 'paper') {
        result = 'You lose!';
    }

    if (playerPick === 'paper' && computerPick === 'scissors') {
        result = 'You lose!';
    }

    if (playerPick === computerPick) {
        result = "It's a draw!";
    }

    resultArea.innerHTML = result;
}


