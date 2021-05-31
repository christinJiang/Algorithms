/* N皇后 II
n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

示例 1：
输入：n = 4
输出：2
解释：如上图所示，4 皇后问题存在两个不同的解法。

示例 2：
输入：n = 1
输出：1
 
提示：
1 <= n <= 9
皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
*/
var totalNQueens = function(n) {
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  let total = 0;

  const backTrack = row => {
    if (row === n) {
      total += 1;
    }
    for (let col = 0; col < n; col++) {
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
        cols.add(col);
        diag1.add(row + col);
        diag2.add(row - col);
        backTrack(row + 1);
        cols.delete(col);
        diag1.delete(row + col);
        diag2.delete(row - col);
      }
    }
  }

  backTrack(0);
  return total;
};

const result = totalNQueens(8);
console.log(result);