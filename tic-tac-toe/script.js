// ######################### Create Players #########################
const Player = (sign) => {
  this.sign = sign;
  this.answers = [];

  const getAnswers = () => {
    return answers;
  };

  return { getAnswers };
};

// ######################### Game Controller #########################
const playGame = (() => {
  const playerX = Player("X");
  const playerO = Player("O");
  let round = 0;

  const cell = document.querySelectorAll(".cell");
  cell.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.textContent != "") return;
      element.textContent = getCurrentPlayer();
      round++;
    });
  });

  const getCurrentPlayer = () => {
    let currentPlayer = "";
    if (round % 2 === 0) {
      currentPlayer = "X";
    } else {
      currentPlayer = "O";
    }
    return currentPlayer;
  };

  const resetGame = () => {
    cell.forEach((element) => {
      element.textContent = "";
    });
    round = 0;
  };

  //compare answers to winning answers
  return { resetGame };
})();

// ######################### Game Board #########################
// const gameBoard =()

// ######################### Click to Restart #########################
const restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", () => {
  playGame.resetGame();
});
