function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Define getComputerChoice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Use your original getHumanChoice function
    function getHumanChoice() {
        let result = prompt("Rock, Paper, Scissors?");
        return result;
    }

    // Define playRound
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice.toLowerCase();

        // Check for tie
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}`);
            return "tie";
        } 
        // Check if human wins
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
            return "human";
        } 
        // Otherwise, computer wins
        else {
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
            return "computer";
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        // Update scores based on round result
        if (roundResult === "human") {
            humanScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }
    }

    // Declare the overall winner
    console.log("Final Scores:");
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
