//Play Game
//Create Player 1
//Assign X
//Create Player 2
//Assign O
//Create Game
//Switch between players
//Have each player build their own array to compare against winning arrays
//Compare each array against winning arrays

// ######################### Click to Start Game#########################
const playBtn = document.querySelector("#playBtn");
playBtn.addEventListener("click", () => {
  playGame();
});

// ######################### Main Game #########################
const playGame = () => {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((element) => {
    element.addEventListener("click", () => {
      element.textContent = "X";
    });
  });

  // const resetGame()
};
