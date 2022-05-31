
game();
function computerPlay()
{
   let rock = "rock";
   let paper = "paper";
   let scissors = "scissors"; 
   let objectReturned;

   objectReturned = Math.floor(Math.random() * 3);
   console.log(objectReturned);

   if(objectReturned === 0)
   {
       return rock;
   }
   else if(objectReturned === 1)
   {
       return paper;
   }
   else
   {
       return scissors;
   }
}


function playerSeclection()
{
    let playerChoice = prompt("Enter a selection, rock, paper, or scissors");
    return playerChoice;
}

function playRound(computerSelect, playerSelect)
{
    let playerWon = 1;
    let compWon = 2;

    console.log("comp " + computerSelect + " , player " + playerSelect);
    if(playerSelect.toUpperCase() === computerSelect.toUpperCase())
    {
        console.log("Draw");
        return;
    }
    else if((playerSelect.toUpperCase() === "PAPER" && computerSelect.toUpperCase() === "ROCK") ||
            playerSelect.toUpperCase() === "SCISSORS" && computerSelect.toUpperCase() === "PAPER" ||
            playerSelect.toUpperCase() === "ROCK" && computerSelect.toUpperCase() === "SCISSORS")    
    {
        console.log("You win " + playerSelect + " beats " + computerSelect);
        return playerWon;
    }
    else 
    {
        console.log("You lose " + computerSelect + " beats " + playerSelect);
        return compWon;
    }
}

function game()
{
    let player = 0;
    let computer = 0;

    for(let i = 0; i < 2; i++)
    {
        let whoWon = playRound(computerPlay(), playerSeclection());
        if(whoWon === 1)
        {
            player++;
        }
        else
        {
            computer++;
        }
    }

    if(player > computer)
    {
        console.log("You beat the computer " + player + " : " + computer);
    }
    else
    {
        console.log("You lost to the computer " + computer + " : " + player);
    }
}