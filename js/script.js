let round = 1;
const round_board = document.getElementById("round-board");
const shoot = document.getElementById("shoot");
const refresh = document.getElementById("refresh");

function main() {
  shoot.addEventListener("click", function() {
    // user choice
    const input = document.getElementById("input").value;
    const userChoice = (document.getElementById(
      "userChoice"
    ).innerHTML = input.toLowerCase());

    // round board
    round_board.innerHTML = round++;

    //computer choice
    let choices = ["rock", "paper", "scissors"];
    let x = Math.floor(Math.random() * 3);
    let computerChoice = choices[x];
    document.getElementById("computerChoice").innerHTML = computerChoice;

    //comparison
    if (userChoice === computerChoice) {
      document.getElementById("result").innerHTML =
        "I See... Great Minds Think Alike...";
    } else if (userChoice == "rock" && computerChoice == "scissors") {
      document.getElementById("result").innerHTML =
        "Winner Winner, Chicken Dinner!";
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      document.getElementById("result").innerHTML = "What A Beast!";
    } else if (userChoice == "paper" && computerChoice == "rock") {
      document.getElementById("result").innerHTML =
        "You Should Consider Going Pro Because You're On Fire!";
    } else if (userChoice == "") {
      document.getElementById("userChoice").innerHTML = "";
      document.getElementById("computerChoice").innerHTML = "";
      document.getElementById("result").innerHTML =
        "Mate, I'd Recommend You Pick A Choice...";
    } else {
      document.getElementById("result").innerHTML =
        "How Did You Lose.... Could Not Be Me...";
    }
  });

  //refresh
  refresh.addEventListener("click", function() {
    round = 0;
    document.getElementById("round-board").innerHTML = round;
    document.getElementById("userChoice").innerHTML = "";
    document.getElementById("computerChoice").innerHTML = "";
    document.getElementById("result").innerHTML = "";
  });
}
main();
