/*
不同路径
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？

 示例 1：
输入：m = 3, n = 7
输出：28

示例 2：
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

示例 3：
输入：m = 7, n = 3
输出：28

示例 4：
输入：m = 3, n = 3
输出：6
 
提示：
1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
*/

var uniquePaths = function(m, n) {
  const map = {};
  const uniquePath = (m, n) => {
    if (m < 1 || n < 1) {
      return 0;
    }
    if (m === 1 && n === 1) {
      return 1;
    }
    const mKey = (m - 1) * 1000 + n;
    let mValue;
    if (map[mKey]) {
      mValue = map[mKey];
    } else {
      mValue = uniquePath(m - 1, n);
      map[mKey] = mValue
    }
    const nKey = m * 1000 + n - 1;
    let nValue;
    if (map[nKey]) {
      nValue = map[nKey];
    } else {
      nValue = uniquePath(m, n - 1);
      map[nKey] = nValue
    }
    return  mValue + nValue;
  }
  return uniquePath(m, n);
};
var uniquePaths1 = function(m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    f[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    f[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
}
// const result = uniquePaths(7, 3);
const result = uniquePaths1(2, 100);
console.log(result);