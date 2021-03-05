let currentPlayer = "X";
let totalTurns = 0;
let gameOver = false;
$("#reset").hide();

function performLogic(button, tiles) {
  $(button).hide();
  $(tiles).find("span").text(currentPlayer);
  changeTurn();

  function checkIfWon(tile1, tile2, tile3) {
    if (
      $(tile1).find("span").text() === ""
    ) {
      return false;
    } else if (
      $(tile1).find("span").text() ===
      $(tile2).find("span").text() &&
      $(tile1).find("span").text() ===
      $(tile3).find("span").text()
    ) {
      return true;
    }
  }

  function horizontalWin() {
    if (
      checkIfWon("#tile1", "#tile2", "#tile3") === true ||
      checkIfWon("#tile4", "#tile5", "#tile6") === true ||
      checkIfWon("#tile7", "#tile8", "#tile9") === true
    ) {
      gameOver = true;
    }
  }
  horizontalWin();

  function verticleWin() {
    if (
      checkIfWon("#tile1", "#tile4", "#tile7") === true ||
      checkIfWon("#tile2", "#tile5", "#tile8") === true ||
      checkIfWon("#tile3", "#tile6", "#tile9") === true
    ) {
      gameOver = true;
    }
  }
  verticleWin();

  function diagonalWin() {
    if (
      checkIfWon("#tile1", "#tile5", "#tile9") === true ||
      checkIfWon("#tile3", "#tile5", "#tile7") === true
    ) {
      gameOver = true;
    }
  }
  diagonalWin();

  function winGame(){
  if (gameOver === true){
   if (currentPlayer === "X"){
     $(".button").hide();
     $("#result").text("ez dub, " + " player O wins!");
   } else if (currentPlayer === "O"){
     $(".button").hide();
     $("#result").text("ez dub, " + " player X wins!");
   }
  }
}
winGame();
  
  function reset() {
    if (gameOver === true) {
      $("#reset").show();
    }

    $("#reset").click(function() {
      $("#reset").hide();
      currentPlayer = "X";
      totalTurns = 0;
      gameOver = false;
      $(".button").show();
      $(tiles).find("span").text("");
      $("#result").text("");
    });
  }
  reset();
}

function changeTurn() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function tieGame(button) {
  totalTurns++;
  if (totalTurns === 9) {
    $("#result").text("tie");
    gameOver = true;
  }
}


$("#button1").click(function() {
  performLogic("#button1", "#tile1");
  tieGame("#button1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
  tieGame("#button2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
  tieGame("#button3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
  tieGame("#button4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
  tieGame("#button5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
  tieGame("#button6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
  tieGame("#button7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
  tieGame("#button8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
  tieGame("#button9");
});
