const prompt = require('prompt-sync')();
// list 3 by 3 all with zeros; zero means the cell is empty; player1 = X and player2 = O
// player1 starts first
/* 
0,0 ; 1,0 ; 2,0
1,0; 1,1; 2,1
2,0; 2,1; 2,2

*/
/*
running checkIfWinner function after each player makes a move; if there's a winner end game
*/
// const checkIfWinner = board => {

// }

let board = [
    ["X", " ", " "],
    ["O", "X", "O"],
    ["X", "O", "X"],
]

const displayBoard = board => {
    for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            process.stdout.write(`| ${board[i][j]} |`)
        }
        process.stdout.write("\n")
    }
}
// displayBoard(board)
console.log(`Welcome to tic tac toe!`)
displayBoard(board) // displaying the empty board
let xCord, yCord
// we need to make sure player choice is not already taken
do {
    let player1input = prompt("Player 1's turn: (e.g 1,1)")
    let player1Choice = player1input.split(",")
    xCord = player1Choice[0]
    yCord = player1Choice[1]
    // if (board[xCord][yCord] == " ") {
    //     board[xCord][yCord] = " X"
    // }
} while(board[xCord][yCord] != " ")

board[xCord][yCord] = " X "
displayBoard(board)

const checkWin = board => {
    const n = 3; // Size of the Tic Tac Toe board (3x3)
  
    // Check rows and columns
    for (let i = 0; i < n; i++) {
      if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true; // Row win
      }
      if (board[0][i] !== ' ' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true; // Column win
      }
    }
  
    // Check diagonals
    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true; // Diagonal from top-left to bottom-right win
    }
    if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true; // Diagonal from top-right to bottom-left win
    }
  
    // No win found
    return false;
  }

  console.log(checkWin(board))





