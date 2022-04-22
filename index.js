function game() {
    const games = 5;

    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < games; i++) {

        let round = playRound(playerSelection, computerSelection){
            if (round === "Win!") {
                playerPoints++;
                console.log("you win!");
            } else if (round === "Lost!") {
                computerPoints++;
                console.log("you lost!");
            } else if ( round === "Tied!") {
                console.log("tied");
            }
        }
    }



function playRound(playerSelection, computerSelection) {
  if(playerSelection == "rock") {
      if (computerSelection == "scissors") {
          return "Win!";
      } else if (computerSelection == "paper") {
          return "Lost!";
      } else {
          return "Tied!"
      }
  }
  if (playerSelection == "paper") {
      if (computerSelection == "rock") {
          return "Win!";
      }else if(computerSelection == "scissors") {
          return "Lost!";
      } else {
          return "Tied!";
      }
  }
  if (playerSelection  == "scissors") {
      if (computerSelection == "paper") {
          return "Win!";
      } else if( computerSelection == "rock") {
          return "Lost!";
      } else {
          return "Tied!";
      }
  }
}


function computerPlay() {
    return (["rock", "paper", "scissors"])
    [Math.random() * 3 | 0]};

let playerSelection = prompt("choose rock paper or scissors").toLowerCase();

let computerSelection = computerPlay();
