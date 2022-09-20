
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

function game(){
    let playerSelection = prompt('Make a selction: ');
    computerSelection = computerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
}
for(let i =0; i <6; i++){
    game()
}