/*
最大子序和
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：
输入：nums = [1]
输出：1

示例 3：
输入：nums = [0]
输出：0

示例 4：
输入：nums = [-1]
输出：-1

示例 5：
输入：nums = [-100000]
输出：-100000
*/
var maxSubArray = function(nums) {
  if (!Array.isArray(nums) || !nums.length) {
    return 0;
  }
  let pre = 0, maxVal = nums[0];
  nums.forEach(num => {
    pre = Math.max(pre + num, num);
    maxVal = Math.max(maxVal, pre);
  });
  return maxVal;
};
const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
const result1 = maxSubArray(nums1);
console.log('result1', result1);