function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Get references to DOM elements
    const resultsDiv = document.getElementById('results');
    const buttons = document.querySelectorAll('.choice');

    // Define getComputerChoice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Define playRound
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        // Determine the outcome
        if (humanChoice === computerChoice) {
            return `It's a tie! You both chose ${humanChoice}.`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return `You win this round! ${humanChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        }
    }

    // Check for a winner
    function checkWinner() {
        if (humanScore === 5 || computerScore === 5) {
            // Announce winner
            const winner = humanScore === 5 ? "You win the game!" : "The computer wins the game!";
            resultsDiv.innerHTML += `
                <p><strong>${winner}</strong></p>
                <p>Final Scores - Human: ${humanScore}, Computer: ${computerScore}</p>
            `;

            // Disable buttons
            buttons.forEach(button => button.disabled = true);
        }
    }

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            const roundResult = playRound(humanChoice, computerChoice);

            // Update the results div with round result and running scores
            resultsDiv.innerHTML = `
                <p>${roundResult}</p>
                <p><strong>Scores:</strong> Human: ${humanScore}, Computer: ${computerScore}</p>
            `;

            // Check if the game is over
            checkWinner();
        });
    });
}

// Start the game
playGame();
