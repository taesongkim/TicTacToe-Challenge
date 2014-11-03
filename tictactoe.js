// Positions (from left to right, top to bottom; aka reading order) labeled and given unequal values

var Pos0 = 2;
var Pos1 = 3;
var Pos2 = 4;
var Pos3 = 5;
var Pos4 = 6;
var Pos5 = 7;
var Pos6 = 8;
var Pos7 = 9;
var Pos8 = 10;
var turnCount = 0;

var Board = [Pos0, Pos1, Pos2, Pos3, Pos4, Pos5, Pos6, Pos7, Pos8];

//input would be typed in

var playerOChoice = function () {
  var ChoiceO = prompt ("Player 1, where would you like to place your circle? (Type the position number)");
  if (Board[ChoiceO] > 1) {
    Board[ChoiceO] = 0;
    alert ("Player 1 has placed an O in location" + Choice0);
    checkForWin ();
  } else print ("That location has already been played.");
  playerOChoice ();
};

var playerXChoice = function () {
  var ChoiceX prompt ("Player 2, where would you like to place your X? (Type the position number)");
  if (Board[ChoiceX] > 1) {
  Board[ChoiceX] = 1;
  alert ("Player 2 has placed an X in location" + ChoiceX);
  checkForWin ();
  } else print ("That location has already been played.");
  playerXChoice ();
};

var checkTurn = {
  if (turnCount%2 == 0) {
    
  }
}

var checkForWin = function () {  
  if (
     (Pos0 == Pos1 && Pos1 == Pos2) ||
     (Pos3 == Pos4 && Pos4 == Pos5) ||
     (Pos6 == Pos7 && Pos7 == Pos8) ||
     (Pos0 == Pos3 && Pos3 == Pos6) ||
     (Pos1 == Pos4 && Pos4 == Pos7) ||
     (Pos2 == Pos5 && Pos5 == Pos8) ||
     (Pos0 == Pos4 && Pos4 == Pos8) ||
     (Pos2 == Pos4 && Pos4 == Pos6)
     ) {
    return true;
  } else return false;  
};

for (i=0; i<9; i++) {
  if (i%2 == 0) {
    playerOChoice ();
  } else playerXChoice ();
  if (checkForWin ()) {
    if (i%2 == 0) { 
      alert ("Player 1 wins!");
    } else alert ("Player 2 wins!");
  };
};
  