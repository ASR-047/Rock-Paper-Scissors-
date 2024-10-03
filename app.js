function getComputerChoice()
{
    let random;
    random=Math.floor(Math.random()*3)+1;
    if(random==1)
    {
        return "rock";
    }
    else if(random==2)
    {
        return "paper"
    }
    else
    {
        return "scissors"
    }
}

const formatChoice = (choice) => choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

function getHumanChoice()
{
    let choice=prompt("Choose: rock, paper , scissor")
    return formatChoice(choice);

}

let humanScore=0;
let computerScore=0;


function playRound(computerChoice, humanChoice)
{
    let computer ="You Loose " + computerChoice + " beats " + humanChoice;
    let human = "You WIN " + humanChoice + " beats " + computerChoice;

    if(computerChoice === humanChoice)
    {
        console.log("Its a draw")
    }
    else if(computerChoice === "paper" && humanChoice === "rock")
    {
        console.lpg(computer);
        computerScore++;
    }
    else if(computerChoice === "paper" && humanChoice === "scissor")
        {
            console.lpg(human);
            humanScore++;
        }
    else if(computerChoice === "rock" && humanChoice === "paper")
        {
            console.lpg(computer);
            computerScore++;
        }
    else if(computerChoice === "rock" && humanChoice === "scissor")
       {
         console.lpg(human);
         humanScore++;
        }
    else if(computerChoice === "scissor" && humanChoice === "paper")
    {
        console.log(computer);
        computerScore++;
    }
    else if(computerChoice === "scissor" && humanChoice === "rock")
    {
        console.log(human);
        humanScore++;
    }
                   
            
}

function playGame()
{
    let i =0;
    while(i<=5){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        
        playRound(computerSelection, humanSelection);
        i++;

    }

    if(humanSelection === computerSelection)
    {
        console.log("its a draw");

    }
    else if( humanSelection > computerSelection)
    {
        console.log("You win!");
    }
    else
    {
        console.log("You loose! Computer won");
    }

}

playGame();