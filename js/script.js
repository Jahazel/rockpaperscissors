$("#shoot").click(function(){
  let choice = $("#input").val();
  $("#userChoice").text(choice);
  $("#computerChoice").text(computerChoice());
});

function computerChoice() {
  let i = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[i];
  
}








