console.log("Js Linked correctly");


// pseudocode

// ---playGame
// initialise rounds to 5
// initialise humanScore, computerScore to zero 
// while both humanScore and computerScore < rounds 
// 		CALL getHumanChoice
// 		CALL getComputerChoice 
// 		if humanChoice === computerChoice, display draw message
//		if player wins, increment player score by 1 and display message
//		if computer wins, increment computer score by 1 and display message
// if player score is rounds, display win message
// otherwise display loss message

// ---getHumanChoice
// initialise choice to empty string
// while choice is empty string
//   	prompt user to pick rock, paper or scissors
//		if prompt is equal to rock, paper or scissors, set choice to it
// return choice


// ---getComputerChoice
// initialise seed to random number between zero and 1
// if seed < 1/3 return "rock"
// if seed < 2/3 return "paper"
// return "scissors"


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


