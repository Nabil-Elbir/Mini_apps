
// Function: When a square is clicked, an X or O is added to that square.

var cells = document.querySelectorAll(".square");
for (var cell of cells) {
    cell.addEventListener('click', marker)
};

var counter = 0;
var x = "X";
var o = "O";

function marker() {

    if (this.innerHTML.length === 0) {     // Ensure the clicked square is empty. 
        counter += 1;
        if (counter % 2 === 0) {
            this.innerHTML = o;
        } else {                           // Swap the state in each play.
            this.innerHTML = x;
        }
    }
    winningOdds();
    console.log('counter', counter);
};

var one   = document.getElementById("one").innerHTML;
var two   = document.getElementById("two").innerHTML;
var three = document.getElementById("three").innerHTML;
var four  = document.getElementById("four").innerHTML;
var five  = document.getElementById("five").innerHTML;
var six   = document.getElementById("six").innerHTML;
var seven = document.getElementById("seven").innerHTML;
var eight = document.getElementById("eight").innerHTML;
var nine  = document.getElementById("nine").innerHTML;

function winningOdds() {
    // Winning odds for player 'O'.
    if (one === o && two === o && three === o) {
        alert("The Player 'O' Won!");
    }
    else if (four === o && five === o && six === o) {
        alert("The Player 'O' Won!");
    }
    else if (seven === o && eight === o && nine === o) {
        alert("The Player 'O' Won!");
    }
    else if (one === o && four === o && seven === o) {
        alert("The Player 'O' Won!");
    }
    else if (two === o && five === o && eight === o) {
        alert("The Player 'O' Won!");
    }
    else if (three === o && six === o && nine === o) {
        alert("The Player 'O' Won!");
    }
    else if (one === o && five === o && nine === o) {
        alert("The Player 'O' Won!");
    }
    else if (three === o && five === o && seven === o) {
        alert("The Player 'O' Won!");
    }

    // Winning odds for player 'X'.
    else if (one === x && two === x && three === x) {
        alert("The Player 'X' Won!");
    }
    else if (four === x && five === x && six === x) {
        alert("The Player 'X' Won!");
    }
    else if (seven === x && eight === x && nine === x) {
        alert("The Player 'X' Won!");
    }
    else if (one === x && four === x && seven === x) {
        alert("The Player 'X' Won!");
    }
    else if (two === x && five === x && eight === x) {
        alert("The Player 'X' Won!");
    }
    else if (three === x && six === x && nine === x) {
        alert("The Player 'X' Won!");
    }
    else if (one === x && five === x && nine === x) {
        alert("The Player 'X' Won!");
    }
    else if (three === x && five === x && seven === x) {
        alert("The Player 'X' Won!");
    }
    else if (counter === 9) {
        alert("It's a tie, NO WINNERS!");     // When it's a tie.
    }
};

