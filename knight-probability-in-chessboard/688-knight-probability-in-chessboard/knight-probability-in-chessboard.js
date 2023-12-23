/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  if (row < 0 || row >= n || column < 0 || column >= n) {
    return 0;
  }
  else if (k === 0) return 1;
  else {
    // return (
    //   knightProbability(n, k-1, row-2, column-1) +
    //   knightProbability(n, k-1, row-2, column+1) +
    //   knightProbability(n, k-1, row-1, column-2) +
    //   knightProbability(n, k-1, row-1, column+2) +
    //   knightProbability(n, k-1, row+2, column-1) +
    //   knightProbability(n, k-1, row+2, column+1) +
    //   knightProbability(n, k-1, row+1, column-2) +
    //   knightProbability(n, k-1, row+1, column+2)
    // ) / 8;
    return (
      (1/8) * knightProbability(n, k-1, row-2, column-1) +
      (1/8) * knightProbability(n, k-1, row-2, column+1) +
      (1/8) * knightProbability(n, k-1, row-1, column-2) +
      (1/8) * knightProbability(n, k-1, row-1, column+2) +
      (1/8) * knightProbability(n, k-1, row+2, column-1) +
      (1/8) * knightProbability(n, k-1, row+2, column+1) +
      (1/8) * knightProbability(n, k-1, row+1, column-2) +
      (1/8) * knightProbability(n, k-1, row+1, column+2)
    );
  }
};


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
        let row_p1 = board[r+2];
        let row_p2 = board[r+1];
        let row_p3 = board[r-1];
        let row_p4 = board[r-2];

        if (row_p1) {
          newBoard[r][c] += row_p1[c+1]/8 || 0;
          newBoard[r][c] += row_p1[c-1]/8 || 0;
        }
        if (row_p2) {
          newBoard[r][c] += row_p2[c+2]/8 || 0;
          newBoard[r][c] += row_p2[c-2]/8 || 0;
        }
        if (row_p3) {
          newBoard[r][c] += row_p3[c+2]/8 || 0;
          newBoard[r][c] += row_p3[c-2]/8 || 0;
        }
        if (row_p4) {
          newBoard[r][c] += row_p4[c+1]/8 || 0;
          newBoard[r][c] += row_p4[c-1]/8 || 0;
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