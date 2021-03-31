/*
最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"
 
提示：
1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成
*/
var longestPalindrome = function(s) {
  const len = s.length;
  if (len === 1) return s;

  let low = 0;
  let maxLen = 1;
  const extendPalindrome = (str, l, r) => {
    while (l >= 0 && r < len && str.charAt(l) === str.charAt(r)) {
      l--;
      r++;
    }
    const curLen = r - l - 1;
    if (curLen > maxLen) {
      maxLen = curLen;
      low = l + 1;
    }
  }

  for (let i = 0; i < len - 1; i++) {
    extendPalindrome(s, i, i);
    extendPalindrome(s, i, i + 1);
  }
  return s.substr(low, maxLen);
};
const result = longestPalindrome('babad');
