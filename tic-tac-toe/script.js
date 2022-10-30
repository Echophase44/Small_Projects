// ######################### Create Players #########################
const Player = (sign) => {
  this.sign = sign;
  this.answers = [];

  const getAnswers = () => {
    return answers;
  };

  const getSign = () => {
    return sign;
  };

  return { getAnswers, getSign, answers };
};

// ######################### Game Controller #########################
const playGame = (() => {
  const playerX = Player("X");
  const playerO = Player("O");
  let round = 0;
  let winner = false;

  const cell = document.querySelectorAll(".cell");
  cell.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.textContent != "" || winner === true) return;
      element.textContent = getCurrentPlayer().getSign();
      getCurrentPlayer().answers.push(parseInt(element.dataset.index));
      checkForWinner(getCurrentPlayer().answers);
      updateMessage();
      round++;
    });
  });

  const getCurrentPlayer = () => {
    let currentPlayer = playerX;
    if (round % 2 === 0) {
      currentPlayer = playerX;
    } else {
      currentPlayer = playerO;
    }
    return currentPlayer;
  };

  const resetGame = () => {
    cell.forEach((element) => {
      element.textContent = "";
    });
    round = 0;
    playerO.answers = [];
    playerX.answers = [];
    winner = false;
  };

  const checkForWinner = (answerKey) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winConditions.forEach((condition) => {
      let count = 0;
      answerKey.forEach((answer) => {
        if (condition.includes(answer)) {
          count++;
        }
        if (count === 3) {
          winner = true;
        }
      });
      count = 0;
    });
  };

  const updateMessage = () => {
    const gameMessage = document.querySelector("#gameMessage");
    if (winner === true) {
      gameMessage.innerText = `Player ${getCurrentPlayer().getSign()} Won!`;
      return;
    } else if (round === 8) {
      gameMessage.innerText = "It's a draw!";
    } else if (getCurrentPlayer().getSign() === "X") {
      gameMessage.textContent = "Player O's Turn";
    } else if (getCurrentPlayer().getSign() === "O") {
      gameMessage.textContent = "Player X's Turn";
    }
  };
  return { resetGame };
})();

// ######################### Restart Game Button #########################
const restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", () => {
  playGame.resetGame();
});
