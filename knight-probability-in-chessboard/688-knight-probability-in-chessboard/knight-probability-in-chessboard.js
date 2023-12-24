/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  let board=[];
  for (let r=0; r<n; r++) {
    board[r] = [];
    for (let c=0; c<n; c++) {
      board[r][c]=0;
    }
  }
  board[row][column] = 1;

  while (k>0) {
    let newBoard = [];
    for (let r=0; r<n; r++) {
      newBoard[r] = [];
      for (let c=0; c<n; c++) {
        newBoard[r][c]=0;
      }
    }
    for (let r=0; r<n; r++) {
      for (let c=0; c<n; c++) {
        // let row_p1 = board[r+2];
        // let row_p2 = board[r+1];
        // let row_p3 = board[r-1];
        // let row_p4 = board[r-2];

        if (board[r+2]) {
          newBoard[r][c] += board[r+2][c+1]/8 || 0;
          newBoard[r][c] += board[r+2][c-1]/8 || 0;
        }
        if (board[r+1]) {
          newBoard[r][c] += board[r+1][c+2]/8 || 0;
          newBoard[r][c] += board[r+1][c-2]/8 || 0;
        }
        if (board[r-1]) {
          newBoard[r][c] += board[r-1][c+2]/8 || 0;
          newBoard[r][c] += board[r-1][c-2]/8 || 0;
        }
        if (board[r-2]) {
          newBoard[r][c] += board[r-2][c+1]/8 || 0;
          newBoard[r][c] += board[r-2][c-1]/8 || 0;
        }
      }
    }
    board = newBoard;
    k--;
  }

  let probSum = 0;
  for (let r=0; r<n; r++) {
    for (let c=0; c<n; c++) {
      probSum += board[r][c];
    }
  }
  return probSum;
}