
// Use Query Slector to get items that I need
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const container = document.querySelector('.containerBody');

// Add Envent listeners to the buttons
scissors.addEventListener('click', keepScore);
paper.addEventListener('click', keepScore);
rock.addEventListener('click', keepScore);

// SCORE

var playerScore = 0;
var compScore= 0;

// Function to Run when button is clicked and it keeps track of the Score.
// When score is greater than 5, it displays the winner.
function keepScore(e){
    const player = e.target.className;
    if(compScore<5){
        game(player);
    }else{
        console.log('Computer Won')
    }
}

//Function that runs the game, and prints to Document
function game(a){
   
   const comp = computerChoice()
   const player = a;

   const div = document.createElement('div');
   div.textContent = 'You chose '+a+" Computer Chose "+computerChoice();
   container.append(div);

   const winner = playRound(player, comp)
   div.textContent = winner;
   
   
   if(winner == 'computer'){
    compScore ++;

    console.log('computer +1')
   }
   console.log(compScore)
}

 


// Plays one round of rock paper,scissors
function playRound(playChoice, compChoice){
   
    if (playChoice == compChoice){
        return `Computer also chose ${compChoice}. Its a draw.`;

    }else if(playChoice == 'Rock'){
        if(compChoice == 'Paper'){
           
            return 'computer';
        }else{
            
            return 'player'
           
        }

    }else if(playChoice=='Paper'){
        if(compChoice == 'Scissors'){
           
            return 'Computer chose Scissors. Scissors beats Paper. You lose'
           
        }else{
            return 'Computer chose rock. You win'
        }
    }else if(playChoice=='Scissors'){
        if(compChoice=='Rock'){
            
            return 'Computer Chose Rock. Rock beats scissors. You lose'
        }else{
            return 'Computer chose Paper. You win'
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