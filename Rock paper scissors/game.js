let choice = '';
let compChoice = null;
let userScore = 0;
let compScore = 0;
let inference = "";

function main() {
    compChoice = Math.random()

    if (compChoice>=0 && compChoice<=1/3) {
        compChoice = "rock";
    } else if (compChoice>=1/3 && compChoice<=2/3) {
        compChoice = "paper";
    } else if (compChoice>=1/3 && compChoice<=1) {
        compChoice = "scissors";
    }

    if ((choice==="paper" && compChoice==="rock") || (choice==="scissors" && compChoice==="paper") || (choice==="rock" && compChoice==="scissors")) {
        inference = "win"
        userScore++
    }
    else {
        inference = "lose"
        compScore++
    }

    document.querySelector(".result").innerHTML = "You chose- " + (choice) + ". Computer chose- " + (compChoice)
    document.querySelector(".inference").innerHTML = "You " + (inference)
    document.querySelector(".score").innerHTML = "Your score- " + (userScore) + ". Computer score- " + (compScore)

}
