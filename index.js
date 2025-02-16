console.log("Js Linked correctly");


// pseudocode

// ---playGame
// initialise rounds to 5
// initialise humanScore, computerScore to zero 
// while both humanScore and computerScore < 5 
// 		CALL getHumanChoice
// 		CALL getComputerChoice 
// 		if humanChoice === computerChoice, display draw message
//		if player wins, increment player score by 1 and display message
//		if computer wins, increment computer score by 1 and display message
// if player score is 5, display win message
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
