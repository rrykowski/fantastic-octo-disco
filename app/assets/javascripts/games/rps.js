
var totalGames = 0;
var playerPoints = 0;
var computerPoints = 0;
var ties = 0;

function getPlayerChoice(input) {
  return input;
}

function random() {
  return Math.floor(Math.random() * 3);
}


function getComputerChoice(choice) {
  switch (choice) {
    case 0:
    return "rock";
    break;
    case 1:
    return "paper";
    break;
    case 2:
    return "scissors";
    break;
  }
}

function playGame(player, computer){
  if (player == "rock" && computer == "scissors"){
    playerPoints +=1;
  }
  else if (player  === "paper" && computer === "rock"){
    playerPoints +=1;
  }
  else if (player  === "scissors" && computer === "paper"){
    playerPoints +=1;
  }
  else if (player  === computer){
    ties +=1;
  }
  else {
    computerPoints +=1;
  }
  console.log("Player chose " + player + " and Computer chose " + computer);
  totalGames +=1;
  $( "#gamelog" ).append("<br>Player chose " + player + " and Computer chose " + computer );
  $('#playerscore').html(playerPoints);
  $('#computerscore').html(computerPoints);
  $('#tiegames').html(ties);
  $('#totalgames').html(totalGames);
}

$("#rock").click(function() {
  playGame(getPlayerChoice("rock"), getComputerChoice(random()));
});
$('#paper').click(function() {
  playGame(getPlayerChoice("paper"), getComputerChoice(random()));
});
$('#scissors').click(function() {
  playGame(getPlayerChoice("scissors"), getComputerChoice(random()));
});
$("#reset").click(function() {
  totalGames = 0;
  playerPoints = 0;
  computerPoints = 0;
  ties = 0;
  $('#playerscore').html(playerPoints);
  $('#computerscore').html(computerPoints);
  $('#tiegames').html(ties);
});
