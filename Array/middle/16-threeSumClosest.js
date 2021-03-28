/*
最接近的三数之和
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

示例：
输入：nums = [-1,2,1,-4], target = 1

输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 
提示：
3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
*/
var threeSumClosest = function(nums, target) {
  let abs = Number.MAX_VALUE;
  let result;
  console.log(abs);
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j ++) {
      for (let k = j + 1; k < len; k++) {
        const newAbs = Math.min(abs, Math.abs(nums[i] + nums[j] + nums[k] - target));
        if (newAbs < abs) {
          abs = newAbs;
          result = nums[i] + nums[j] + nums[k];
        }
      }
    }
  }
  return result;
};
const nums = [-1,2,1,-4], target = 1;
const result = threeSumClosest(nums, target);
console.log(result);