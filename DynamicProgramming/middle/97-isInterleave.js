/* 交错字符串
给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。
两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
提示：a + b 意味着字符串 a 和 b 连接。

示例 1：
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true

示例 2：
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false

示例 3：
输入：s1 = "", s2 = "", s3 = ""
输出：true
 
提示：
0 <= s1.length, s2.length <= 100
0 <= s3.length <= 200
s1、s2、和 s3 都由小写英文字母组成
*/

var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const check = (i, j, k) => {
    if (k === s3.length) return true;
    let valid = false;
    if (i < s1.length && s1[i] === s3[k]) {
      valid = check(i + 1, j, k + 1);     
    }
    if (j < s2.length && s2[j] === s3[k]) {
      valid = valid || check(i, j + 1, k + 1);
    }
    return valid;
  }
  return check(0, 0, 0); 
};
var isInterleave2 = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const memo = new Array(s1.length + 1);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(s2.length + 1);
  }
  const check = (i, j, k) => {
    if (memo[i][j] !== undefined) return memo[i][j];
    if (k === s3.length) {
      memo[i][j] = true;
      return memo[i][j];
    }
    let valid = false;
    if (i < s1.length && s1[i] === s3[k]) {
      valid = check(i + 1, j, k + 1);     
    }
    if (j < s2.length && s2[j] === s3[k]) {
      valid = valid || check(i, j + 1, k + 1);
    }
    memo[i][j] = valid;
    return valid;
  }
  return check(0, 0, 0); 
};
const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
// const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc";
const result = isInterleave2(s1, s2, s3);
console.log(result);