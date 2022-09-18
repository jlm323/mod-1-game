// player vs computer
// player chooses between rock, paper, or scissors

// rock -   images/skel-rock.png

// paper -  images/skel-paper.png

// scissors - images/skel-scissors.png

// 5 rounds
// game round begins on a delay
// player has to win more rounds than computer within 5 rounds to win the whole game
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
const resetBtn = document.querySelector('.reset');
const winAnim = document.getElementById('win-animation');
const loseAnim = document.getElementById('lose-animation');

let playerPick;
let computerPick;
let result;
let round = 0;
const rounds = 5;
let playerScore = 0;
let computerScore = 0;

// creates score keeping element
const roundNum = document.createElement('p');
roundNum.setAttribute('id', 'score');

// results
const roundResult = document.createElement('p');
roundResult.setAttribute('id', 'roundResult');

// result of round
const winLoseDraw = document.createElement('p');
winLoseDraw.setAttribute('id', 'win-lose');

// creates play again button when game ends
const playAgain = document.createElement('button');
playAgain.setAttribute('id', 'play-again');
playAgain.innerText = "Play Again?";
playAgain.addEventListener('click', (e) => {
    location.reload();
})

// event listener on buttons 
// depending on choice, related image appears in the player area
options.forEach(options => options.addEventListener('click', (e) => {
    playerPick = e.target.id;
    playerArea.innerHTML = playerPick;
    newGame();
}))

function newGame() {
    if (playerPick == 'Rock') {
        let rockPic = document.createElement('img');
        rockPic.setAttribute('src', '/images/skel-rock.png');
        rockPic.className = 'choicePic';
        playerArea.appendChild(rockPic);
    }

    if (playerPick == 'Paper') {
        let paperPic = document.createElement('img');
        paperPic.setAttribute('src', '/images/skel-paper.png');
        paperPic.className = 'choicePic';
        playerArea.appendChild(paperPic);
    }

    if (playerPick == 'Scissors') {
        let scissorsPic = document.createElement('img');
        scissorsPic.setAttribute('src', '/images/skel-scissors.png');
        scissorsPic.className = 'choicePic';
        playerArea.appendChild(scissorsPic);
    }
    console.log('player choice: ' + playerPick)
    // computer makes random choice:
    randomComputer()
    
    if (round < rounds) {
        gameRound();

        // increases scores of player or computer then increases the round
        setTimeout(() => {
            if (result == 'You win!') {
                playerScore += 1;
            } else if (result == 'You lose!') {
                computerScore += 1;
            } 
            round++; 
            if (result == "It's a draw!") {
                round--;
            }
            
            // updates rounds won aka player score and current round
            resultArea.appendChild(roundNum);
            roundNum.innerHTML = `Current round: ${round} <br><br> Rounds won: ${playerScore} / 5`;
    
            if (round === rounds) {
                // player wins game
                if (playerScore > computerScore) {
                    resultArea.appendChild(roundResult);
                    winAnim.style.display = 'inline';
                    roundResult.innerHTML = `YOU WON THE GAME!<br>`;
                    roundResult.appendChild(playAgain);
                } // player loses game
                if (computerScore > playerScore) {
                    resultArea.appendChild(roundResult);
                    loseAnim.style.display = 'inline';
                    roundResult.innerHTML = `YOU LOST THE GAME!<br>`;
                    // play again button
                    roundResult.appendChild(playAgain);
                }
            }
        }, 2000);
    }
}

// computer randomly picking an option
function randomComputer() {
    const randomChoice = Math.floor(Math.random() * options.length) + 1;

    if (randomChoice === 1) {
        computerPick = 'Rock';
    }

    if (randomChoice === 2) {
        computerPick = 'Paper';        
    }

    if (randomChoice === 3) {
        computerPick = 'Scissors';        
    }
    console.log('computer choice: ' + computerPick)
    setTimeout(() => {
        computerArea.innerHTML = computerPick;
    }, 1000);
    

    // once computer picks, related image appears in computer area
    setTimeout(() => {
        if (computerPick == 'Rock') {
            let rockPic = document.createElement('img');
            rockPic.setAttribute('src', '/images/skel-rock.png');
            rockPic.className = 'choicePicCPU';
            computerArea.appendChild(rockPic);
        }
    
        if (computerPick == 'Paper') {
            let paperPic = document.createElement('img');
            paperPic.setAttribute('src', '/images/skel-paper.png');
            paperPic.className = 'choicePicCPU';
            computerArea.appendChild(paperPic);
        }
    
        if (computerPick == 'Scissors') {
            let scissorsPic = document.createElement('img');
            scissorsPic.setAttribute('src', '/images/skel-scissors.png');
            scissorsPic.className = 'choicePicCPU';
            computerArea.appendChild(scissorsPic);
        }
    }, 1000);
    
}

// results for if player wins, if computer wins, or draw
function gameRound(){
    if (playerPick === 'Scissors' && computerPick === 'Paper') {
        result = 'You win!';
    }

    if (playerPick === 'Rock' && computerPick === 'Scissors') {
        result = 'You win!';
    }

    if (playerPick === 'Paper' && computerPick === 'Rock') {
        result = 'You win!';
    }

    if (playerPick === 'Scissors' && computerPick === 'Rock') {
        result = 'You lose!';
    }

    if (playerPick === 'Rock' && computerPick === 'Paper') {
        result = 'You lose!';
    }

    if (playerPick === 'Paper' && computerPick === 'Scissors') {
        result = 'You lose!';
    }

    if (playerPick === computerPick) {
        result = "It's a draw!";
    }
    setTimeout(() => {
        resultArea.appendChild(winLoseDraw);
        winLoseDraw.innerHTML = ` ${result}<br>`;
    }, 2000);
        
}
// reset button
resetBtn.addEventListener('click', (e) => {
    location.reload();
})






