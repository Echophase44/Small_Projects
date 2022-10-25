// ######################### Click to Restart #########################
const restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", () => {
  //restartGame();
});

// ######################### Game Controller #########################
const playGame = (() => {
  //create playerX
  //create playerO
  //round count
  const cell = document.querySelectorAll(".cell");
  cell.forEach((element) => {
    element.addEventListener("click", () => {
      element.textContent = "X";
    });
  });

  //const change main player()
  //compare answers to winning answers

  // const resetGame()
})();

// ######################### Create Players #########################
//const create player()
//sign = sign
//answer key

// ######################### Game Board #########################
// const gameBoard =()
//
