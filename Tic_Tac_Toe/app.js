
// Function: When a square is clicked, an X is added to that square.

var cells = document.querySelectorAll(".square");
for (var cell of cells) {
  cell.addEventListener('click', marker)
}
function marker() {
    this.innerHTML = "X";
}