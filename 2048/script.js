document.addEventListener("DOMContentLoaded", () => {
  const gridDisplay = document.querySelector(".grid");
  const scoreDisplay = document.querySelector(".score");
  const resultDisplay = document.querySelector(".result");
  const newGameBtn = document.querySelector(".btn");
  const width = 4;
  let squares = [];
  let score = 0;

  //   Create board
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

  //  Delete board
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

  //   Move right
  const moveRight = () => {
    for (let i = 0; i < width * width; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
        let row = [
          parseInt(totalOne),
          parseInt(totalTwo),
          parseInt(totalThree),
          parseInt(totalFour),
        ];
        // console.log(row);

        let filteredRow = row.filter((num) => num);
        // console.log(filteredRow);
        let missing = 4 - filteredRow.length;
        let zeros = Array(missing).fill(0);
        let newRow = zeros.concat(filteredRow);
        // console.log(newRow);

        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  };

  //   Move left
  const moveLeft = () => {
    for (let i = 0; i < width * width; i++) {
      if (i % 4 === 0) {
        let total1 = squares[i].innerHTML;
        let total2 = squares[i + 1].innerHTML;
        let total3 = squares[i + 2].innerHTML;
        let total4 = squares[i + 3].innerHTML;
        let row = [
          parseInt(total1),
          parseInt(total2),
          parseInt(total3),
          parseInt(total4),
        ];

        let filteredRow = row.filter((num) => num);
        let missing = 4 - filteredRow.length;
        let zeros = Array(missing).fill(0);
        let newRow = filteredRow.concat(zeros);
        // console.log(newRow);

        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  };

  //   Move up
  const moveUp = () => {
    for (let i = 0; i < width; i++) {
      let total1 = squares[i].innerHTML;
      let total2 = squares[i + width].innerHTML;
      let total3 = squares[i + width * 2].innerHTML;
      let total4 = squares[i + width * 3].innerHTML;
      let col = [
        parseInt(total1),
        parseInt(total2),
        parseInt(total3),
        parseInt(total4),
      ];
      //   console.log(col);

      let filteredCol = col.filter((num) => num);
      let missing = 4 - filteredCol.length;
      let zeros = Array(missing).fill(0);
      let newCol = filteredCol.concat(zeros);
      //   console.log(newCol);

      squares[i].innerHTML = newCol[0];
      squares[i + width].innerHTML = newCol[1];
      squares[i + width * 2].innerHTML = newCol[2];
      squares[i + width * 3].innerHTML = newCol[3];
    }
  };

  //   Move down
  const moveDown = () => {
    for (let i = 0; i < width; i++) {
      let total1 = squares[i].innerHTML;
      let total2 = squares[i + width].innerHTML;
      let total3 = squares[i + width * 2].innerHTML;
      let total4 = squares[i + width * 3].innerHTML;
      let col = [
        parseInt(total1),
        parseInt(total2),
        parseInt(total3),
        parseInt(total4),
      ];

      let filteredCol = col.filter((num) => num);
      let missing = 4 - filteredCol.length;
      let zeros = Array(missing).fill(0);
      let newCol = zeros.concat(filteredCol);

      squares[i].innerHTML = newCol[0];
      squares[i + width].innerHTML = newCol[1];
      squares[i + width * 2].innerHTML = newCol[2];
      squares[i + width * 3].innerHTML = newCol[3];
    }
  };
});
