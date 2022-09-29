

// function using Math.random get a computer choice. 0 represents rock,
// 1 is paper and 2 is scissors

function computerChoice() {
    compChoice = Math.floor(Math.random()*3);
   
    if (compChoice == 0){
        return 'rock'
    }else if (compChoice == 1){
        return 'paper'
    }else {
        return 'scissors'
    }
};


// Plays one round of rock paper,scissors
function playRound(playChoice, compChoice){
   

    if (compChoice === playChoice){
        return "Its a draw"
    }else if (compChoice == 'rock'){
        if (playChoice = 'scissors'){
            return'Computer chose Rock. You lose'
     }else{
            return'Computer chose Rock. You win'
    }
    } else if (compChoice == 'paper'){
        if (playChoice = 'scissors'){
            return'Computer chose Paper. You win'
     }else{
            return'Computer chose Paper. You lose'
      }
    } else if (compChoice == 'scissors'){
        if (playChoice = 'paper'){
            return'Computer chose Scissors. You win'
        }else{
            return'Computer chose Scissors. You lose'
        }
    }

}

//Function to play 5 rounds of rock paper scissors
function game(){
    let playerSelection = prompt('Make a selction: ');
    computerSelection = computerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    document.getElementById("rock").innerHTML = result;
}
for(let i =0; i <3; i++){
    game()
}
