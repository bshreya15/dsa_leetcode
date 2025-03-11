/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {}
    let cols = {}
    let squares = {}

    for (let r = 0; r<9; r++){
        for(let c = 0; c<9; c++){
            if (board[r][c] === "."){
                continue;
            }
            // Initialize the sets if they don't exist 
            // for the current row, column, or square
            if (!rows[r]) rows[r] = new Set();
            if (!cols[c]) cols[c] = new Set();
            const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
            if (!squares[squareKey]) squares[squareKey] = new Set();

            if (rows[r].has(board[r][c]) ||
                cols[c].has(board[r][c]) ||
                squares[squareKey].has(board[r][c])) {
                return false;
            }

            // Add the number to the corresponding row, column, and square
            rows[r].add(board[r][c]);
            cols[c].add(board[r][c]);
            squares[squareKey].add(board[r][c]);

        }
    }

    return true;
};