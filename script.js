
// Use Query Slector to get items that I need
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const container = document.querySelector('.containerBody');
const uiPlayerScore = document.querySelector('.player-score')
const uiCompScore = document.querySelector('.comp-score');
// const reset = document.querySelector('.restart');


// Add Envent listeners to the buttons
scissors.addEventListener('click', keepScore);
paper.addEventListener('click', keepScore);
rock.addEventListener('click', keepScore);
// reset.addEventListener('click', reLoad)



// Restart Button that pops up after 5 rounds
const restartButton = document.createElement('button');
restartButton.textContent = 'Play Again'
restartButton.className = 'restart'
// SCORE

var playerScore = 0;
var compScore= 0;

// Div to show winner after 5 rounds.
const winnerDiv = document.createElement('div');

// Function that reloads page when restart button is pressed
function reLoad(){
    location.reload();
}


// Function to Run when button is clicked and it keeps track of the Score.
// When score is greater than 5, it displays the winner.

function keepScore(e){

    const player = e.target.className;
    if(compScore<5 && playerScore <5){
        game(player);
    }else if(compScore>4 ){
        console.log('computer won')
        winnerDiv.innerHTML = '<h1>COMPUTER WINS</h1>';
        container.appendChild(winnerDiv);
        container.append(restartButton)
        const reset = document.querySelector('.restart');
        reset.addEventListener('click', reLoad)
    }else{
        winnerDiv.innerHTML = '<h1>NICE WORK. YOU WON</h1>';
        container.appendChild(winnerDiv);
        container.append(restartButton)
        const reset = document.querySelector('.restart');
        reset.addEventListener('click', reLoad)
    }
       
    }

//Function that runs the game, and prints to Document
function game(a){
   
   const comp = computerChoice()
   const player = a;
   const div = document.createElement('div');
   const winner = playRound(player, comp)
   div.textContent = winner;
   
   
   if(winner == 'computer'){
    compScore ++;
    div.textContent = 'You chose. '+a+" Computer Chose "+comp+ ". You lose";
   container.append(div);
    console.log('Computer wins')
   }else if(winner == 'player'){
    div.textContent = 'You chose. '+a+" Computer Chose "+comp+". You win.";
   container.append(div);
    playerScore++;
    console.log('Player wins')
   uiCompScore.textContent = compScore;
   uiPlayerScore.textContent = playerScore;
   console.log(compScore);
   console.log(playerScore);
}else{
    div.textContent = winner; //Returns its a draw
    container.append(div)
}
}
    

// Plays one round of rock paper,scissors
function playRound(playChoice, compChoice){
   
    if (playChoice == compChoice){
        return `Computer also chose ${compChoice}. Its a draw.`;

    }else if(playChoice == 'Rock'){
        if(compChoice == 'Paper'){
           
            return 'computer';
        }else{
            
            return 'player';
           
        }

    }else if(playChoice=='Paper'){
        if(compChoice == 'Scissors'){
           
            return 'computer';
           
        }else{
            return 'player';
        }
    }else if(playChoice=='Scissors'){
        if(compChoice=='Rock'){
            
            return 'computer';
        }else{
            return 'player';
        }
    }

    

}

//Function to play 5 rounds of rock paper scissors
// function game(){
//     let playerSelection = prompt('Make a selction: ');
//     computerSelection = computerChoice();
//     let result = playRound(playerSelection, computerSelection);
//     console.log(result);
//     document.getElementById("rock").innerHTML = result;
// }


// function using Math.random get a computer choice. 0 represents rock,
// 1 is paper and 2 is scissors

function computerChoice() {
    compChoice = Math.floor(Math.random()*3);
   
    if (compChoice == 0){
        return 'Rock'
    }else if (compChoice == 1){
        return 'Paper'
    }else {
        return 'Scissors'
    }
};

