// Positions (from left to right, top to bottom; aka reading order) labeled and given unequal values

var board = {
  'Pos0': 3,
  'Pos1': 4,
  'Pos2': 5,
  'Pos3': 6,
  'Pos4': 7,
  'Pos5': 8,
  'Pos6': 9,
  'Pos7': 10,
  'Pos8': 11,
};

var checkForWin = function () {  
  if (
     (board.Pos0 == board.Pos1 && board.Pos1 == board.Pos2) ||
     (board.Pos3 == board.Pos4 && board.Pos4 == board.Pos5) ||
     (board.Pos6 == board.Pos7 && board.Pos7 == board.Pos8) ||
     (board.Pos0 == board.Pos3 && board.Pos3 == board.Pos6) ||
     (board.Pos1 == board.Pos4 && board.Pos4 == board.Pos7) ||
     (board.Pos2 == board.Pos5 && board.Pos5 == board.Pos8) ||
     (board.Pos0 == board.Pos4 && board.Pos4 == board.Pos8) ||
     (board.Pos2 == board.Pos4 && board.Pos4 == board.Pos6)
     ) {
    return true;
  } else return false;  
};

var turnCount = 0;

var currentPlayer = 1;

$('.tttrow').bind('click', function () {
  $(this).css('background', '#706e6e');
  var iconElement = $(this).children('i');
  var position = $(this).attr('id')

  if($(this).hasClass('played')) { //already chosen
    alert("Looks like that's been selected");
  } 
  else { //not yet played
    $(this).addClass('played');
    board['Pos' + position] = currentPlayer;
  

    if (currentPlayer === 1) {
      iconElement.addClass('fa-circle-o');
      if (checkForWin()) {
        alert('Player' + currentPlayer + ' has won the game!');
        location.reload();
      }
      currentPlayer = 2;
    }

    else {
      iconElement.addClass('fa-close');
      if (checkForWin()) {
        alert('Player' + currentPlayer + ' has won the game!');
        location.reload();
      }
      currentPlayer = 1;
    }

    turnCount ++;
    
  }
  if (turnCount == 9) {
    alert("Looks like it's a tie! Lets try again.");
    location.reload();
  };
  console.log(turnCount)
});


// var Board = [Pos0, Pos1, Pos2, Pos3, Pos4, Pos5, Pos6, Pos7, Pos8];

//input would be typed in

// var playerOChoice = function () {
//   var ChoiceO = prompt ("Player 1, where would you like to place your circle? (Type the position number)");
//   if (Board[ChoiceO] > 1) {
//     Board[ChoiceO] = 0;
//     alert ("Player 1 has placed an O in location" + Choice0);
//     checkForWin ();
//   } else print ("That location has already been played.");
//   playerOChoice ();
// };

// var playerXChoice = function () {
//   var ChoiceX = prompt ("Player 2, where would you like to place your X? (Type the position number)");
//   if (Board[ChoiceX] > 1) {
//   Board[ChoiceX] = 1;
//   alert ("Player 2 has placed an X in location" + ChoiceX);
//   checkForWin ();
//   } else print ("That location has already been played.");
//   playerXChoice ();
// };


// for (i=0; i<9; i++) {
//   if (i%2 == 0) {
//     playerOChoice ();
//   } else playerXChoice ();
//   if (checkForWin ()) {
//     if (i%2 == 0) { 
//       alert ("Player 1 wins!");
//     } else alert ("Player 2 wins!");
//   };
// };
  