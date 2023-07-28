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





