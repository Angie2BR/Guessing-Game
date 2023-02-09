let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");
let h1 = document.getElementsByTagName("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelector(".mode");
let easyButton = document.querySelector(".mode");

init();

function init() {
  colorDisplay.textContent = pickedColor;
  setupSquares();
  setupMode();
  reset();
}

resetButton.addEventListener("click", function () {
  reset();
});

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.display = "correct";
        resetButton.textContent = "play again";
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "try again";
      }
    });
  }
}

function setupMode() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove("selected");
      }
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

console.log(setupMode());
