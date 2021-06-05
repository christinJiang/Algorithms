/* 最长有效括号
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

示例 1：
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"

示例 2：
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"

示例 3：
输入：s = ""
输出：0
 
提示：
0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')'
*/
var longestValidParentheses = function(s) {
  const list = s.split('');
  const { length } = list;
  let maxValue = 0;
  let currentVal = 0
  const stack = [ -1 ];
  for (let i = 0; i < length; i++) {
    if (list[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length) {
        currentVal = i - stack[stack.length - 1];
        maxValue = Math.max(maxValue, currentVal);
      } else {
        stack.push(i);
      }
    }
  }
  return maxValue;
};

const s =  ")()())"; // "()(()";
const result = longestValidParentheses(s);
console.log(result);