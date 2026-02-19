document.addEventListener("DOMContentLoaded", () => {
  const gridDisplay = document.querySelector(".grid");
  const scoreDisplay = document.querySelector(".score");
  const resultDisplay = document.querySelector(".result");
  const newGameBtn = document.querySelector(".btn");
  const width = 4;
  let squares = [];
  let score = 0;

  //   Creating board
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("DIV");
      square.innerHTML = 0;
      square.setAttribute("class", "square");
      gridDisplay.appendChild(square);
      squares.push(square);
    }
    // console.log(squares);
  };
  createBoard();

  const deleteBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const square = document.querySelector(".square");
      square.remove();
    }
    // console.log(squares);
  };

  //   Check for 2048 tile to win
  const checkForWin = () => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML === 2048) {
        resultDisplay.innerHTML = "Congratulation, You have <b>won</b>!";
        resultDisplay.style.color = "green";
        document.removeEventListener("keydown", control);
        setTimeout(clearInterval, 3000);
      }
    }
  };

  // Check for no more 0s to add to lose.
  const checkForGameOver = () => {
    let zeros = 0;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML == 0) {
        zeros++;
      }
    }
    if (zeros === 0) {
      resultDisplay.style.color = "red";
      resultDisplay.innerHTML = "Sorry, You Lost!";
      document.removeEventListener("keydown", control);
      setTimeout(clearInterval, 3000);
    }
  };

  //   Generate 2 in random grid squares
  const generate2 = () => {
    const randIndex = Math.floor(Math.random() * squares.length);
    // console.log(randIndex);
    if (squares[randIndex].innerHTML == 0) {
      squares[randIndex].innerHTML = 2;
      checkForGameOver();
    } else generate2();
  };
  generate2();
  generate2();

  //   New Game
  const newGame = () => {
    resultDisplay.innerHTML = "Join the number to get <b>2048</b> tile!";
    scoreDisplay.innerHTML = "0";
    deleteBoard();
    createBoard();
    generate2();
    generate2();
  };
  newGameBtn.addEventListener("click", newGame);
});
