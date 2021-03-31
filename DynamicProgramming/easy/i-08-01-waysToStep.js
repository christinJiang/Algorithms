/*
三步问题
三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

示例1:
 输入：n = 3 
 输出：4
 说明: 有四种走法

 示例2:
 输入：n = 5
 输出：13

 提示:
n范围在[1, 1000000]之间
*/
var waysToStep = function(n) {
  if (n === 0) return 1; 
  if (n === 1) return 1;
  if (n === 2) return 2; 
  if (n === 3) return 4;
  return (waysToStep(n - 3) + waysToStep(n -2) + waysToStep(n - 1)) % 1000000007;
};
var waysToStep1 = function(n) {
  let dp = [1, 1, 2, 4];
  for (let i = 4; i <= n; i ++) {
    dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % 1000000007;
  }
  return dp[n];
}
const result = waysToStep1(5);
console.log(result);