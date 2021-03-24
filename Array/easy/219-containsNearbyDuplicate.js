/*
存在重复元素 II
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

示例 1:
输入: nums = [1,2,3,1], k = 3
输出: true

示例 2:
输入: nums = [1,0,1,1], k = 1
输出: true

示例 3:
输入: nums = [1,2,3,1,2,3], k = 2
输出: false
*/
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
const nums = [1,2,3,1], k = 3;
const result = containsNearbyDuplicate(nums, k);
const nums1 = [1,2,3,1,2,3], k1 = 2;
const result1 = containsNearbyDuplicate(nums1, k1);
console.log(result1);