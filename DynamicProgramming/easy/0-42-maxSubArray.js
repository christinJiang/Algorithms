/*
连续子数组的最大和
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
要求时间复杂度为O(n)。

示例1:
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/
var maxSubArray = function(nums) {
  const len = nums.length;
  const dp = [];
  dp[0] = nums[0];
  let max = dp[0];
  if (len === 1) {
    return dp[0];
  }
  for (let i = 1; i < len; i++) {
    dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i];
    max = Math.max(max, dp[i]);
  }
  return max;
};
const nums = [-2,1,-3,4,-1,2,1,-5,4];
const result = maxSubArray(nums);
console.log(result);