/*
第三大的数
给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

示例 1：
输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。

示例 2：
输入：[1, 2]
输出：2
解释：第三大的数不存在, 所以返回最大的数 2 。

示例 3：
输入：[2, 2, 3, 1]
输出：1
解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。

提示：
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？
*/
var thirdMax = function(nums) {
  let max, mid, min;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (max === val || mid === val) {
      continue;
    }
    if (max === undefined || val > max ) {
      [ min, mid, max ] = [ mid, max, val ];      
    } else if (mid === undefined || val > mid) {
      [ min, mid ] = [ mid, val ];
    } else if (min === undefined || val > min) {
      min = val;
    }
  }
  if (max !== undefined && mid !== undefined && min !== undefined) {
    return min;
  }
  return max;
};

const nums = [2, 2, 3, 1];
const nums1 = [3,3,4,3,4,3,0,3,3];
const result = thirdMax(nums1);
console.log(result);