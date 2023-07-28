const prompt = require('prompt-sync')();
// list 3 by 3 all with zeros; zero means the cell is empty; player1 = X and player2 = O
// player1 starts first
/* 
0,0 ; 1,0 ; 2,0
1,0; 1,1; 2,1
2,0; 2,1; 2,2

*/

let board = [
    ["   ", "   ", "   "],
    ["   ", "   ", "   "],
    ["   ", "   ", "   "],
]

const displayBoard = board => {
    console.clear()
    for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            process.stdout.write(`| ${board[i][j]} |`)
        }
        process.stdout.write("\n")
    }
}


const playerMove = (playerTurn) => {
    let xCord, yCord
    // we need to make sure player choice is not already taken
    do {
        let playerInput = prompt(`Player ${playerTurn}'s turn: (e.g 1,1)`)
        if (!validInputChecker(playerInput)) {
            console.log("Invalid input")
            continue
        }
        let playerChoice = playerInput.split(",")

        xCord = playerChoice[0]
        yCord = playerChoice[1]
        
    } while(board[xCord][yCord] != "   ")

    board[xCord][yCord] = ` ${playerTurn} `
}

const validInputChecker = str => {
    if (!str) {
        return false
    } else if (str.length !== 3) {
        return false
    } else if (str.charAt(1) !== "," ) {
        return false
    } else if ((isNaN(str.charAt(0))) || (isNaN(str.charAt(2)))) {
        return false
    } else if ((str.charAt(0) < 0) || (str.charAt(2) > 2)) {
        return false
    }
    return true
}



const checkWin = board => {
    const n = 3; // Size of the Tic Tac Toe board (3x3)
  
    // Check rows and columns
    for (let i = 0; i < n; i++) {
      if (board[i][0] !== '   ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true; // Row win
      }
      if (board[0][i] !== '   ' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true; // Column win
      }
    }
    // Check diagonals
    if (board[0][0] !== '   ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true; // Diagonal from top-left to bottom-right win
    }
    if (board[0][2] !== '   ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true; // Diagonal from top-right to bottom-left win
    }
    // No win found
    return false;
  }

  

  const main = () => {
    let turnCount=0, player1Score = 0, player2Score = 0, playerTurn = "O"
    console.log(`Welcome to tic tac toe!`)
    do {
        playerTurn = (playerTurn === 'X' ? 'O' : 'X')
        displayBoard(board)
        playerMove(playerTurn)
        turnCount++
    } while(!checkWin(board) && turnCount < 8)
    if (turnCount === 8) {
        console.log(`It's a draw`)
    } else {
        playerTurn === "X" ? player1Score++ : player2Score++
        displayBoard(board)
        console.log(`Player ${playerTurn} won the game. ${playerTurn}'s score = ${player1Score} and ${playerTurn === 'X' ? 'O' : 'X'}'s score = ${player2Score}`)
    }
  }
  main()




