/* N 皇后
n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例 1：
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。

示例 2：
输入：n = 1
输出：[["Q"]]
*/
var solveNQueens = function(n) {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  const res = [];
  
  const backTrack = (row) => {
    if (row === n) {
      const stringBoard = board.slice();
      for (let i = 0; i < n; i++) {
        stringBoard[i] = stringBoard[i].join('');
      }
      res.push(stringBoard);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
        cols.add(col);
        diag1.add(row + col);
        diag2.add(row - col);
        board[row][col] = 'Q';
        backTrack(row + 1);
        board[row][col] = '.';
        cols.delete(col);
        diag1.delete(row + col);
        diag2.delete(row - col);
      }
    }
  }
  backTrack(0);
  return res;
};

const result = solveNQueens(4);
console.log(result);