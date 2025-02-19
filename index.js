const WIN_SCORE = 5;
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const message = document.querySelector("#message");
const score = document.querySelector("#score"); 

score.innerText 
	= `Human score: ${humanScore}, Computer score: ${computerScore}`;

rock.addEventListener('click', () => {
	playRound("rock");
})


paper.addEventListener('click', () => {
	playRound("paper");
})

scissors.addEventListener('click', () => {
	playRound("scissors");
})


 


function playRound(humanChoice) { 
	
	// prevent further play if game finished
	if (humanScore === WIN_SCORE || computerScore === WIN_SCORE) return;

	let computerChoice = getComputerChoice();
	// handle draw condition
	if (humanChoice === computerChoice) {
		message.textContent = "Draw";
	} else {
		// otherwise, decide winner, since draw condition accounted 
		// for if human does not win computer has won
		if (
			humanChoice === "rock" && computerChoice === "scissors" ||
			humanChoice === "paper" && computerChoice === "rock" ||
			humanChoice === "scissors" && computerChoice === "paper"
		) {
			message.textContent = 
				`${humanChoice} beats ${computerChoice}, human wins`;
			humanScore++;
		} else {
			message.textContent = 
				`${computerChoice} beats ${humanChoice}, computer wins`;
			computerScore++;
		} 
	}
	score.innerText = 
		`Human score: ${humanScore}, Computer score: ${computerScore}`;
	// check for win
	if (computerScore === WIN_SCORE) {
		message.textContent = "Computer Wins!";
	}
	if (humanScore === WIN_SCORE) {
		message.textContent = "Human Wins!";
	}
}


// return rock, paper or scissors with equal probability
function getComputerChoice() {

	// convert random range to integer ranging from 0 to 2 inclusive
	let seed = Math.floor(Math.random() * 3);
	
	// use seed to pick choice
	if (seed === 0) return "rock";
	if (seed === 1) return "paper";
	return "scissors";
}


// prompt user for choice of rock, paper or scissors until valid input encountered
function getHumanChoice() {
	let choice = "";

	while (choice === "") {
		// convert to lower case to allow for case insensitive input
		let tmp = prompt("Please type rock, paper or scissors").toLowerCase();

		if ((tmp === "rock") || (tmp === "paper") || (tmp === "scissors")) {
			choice = tmp;
		}
	}
	return choice;
}


