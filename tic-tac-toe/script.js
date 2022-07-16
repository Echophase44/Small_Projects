//create game instance
// Structure: playgame -> opening prompts -> create game board -> player 1 and player 2 setup -> board loop (toggle players, detect for win conditions)

class Game {
  constructor() {}
  intro() {
    console.log(
      "Welcome to Tic-Tac-Toe. Would you like to play a new game? y/n"
    );
  }
}

let gameOne = new Game();

gameOne.intro();
