/*搜索插入位置
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0
*/

var searchInsert = function(nums, target) {
  const binarySearch = (nums, low, high, target) => {
    if (low <= high) {
      const middle = Number.parseInt(low + (high - low) / 2);
      if (target === nums[middle]) {
        return middle;
      } else if (target < nums[middle]) {
        return binarySearch(nums, low, middle - 1, target);
      } else {
        return binarySearch(nums, middle + 1, high, target);
      }
    } else {
      return low;
    }
  }
  return binarySearch(nums, 0, nums.length - 1, target);
};
const nums1 = [1,3], target1 = 2; //,5,6
const result1 = searchInsert(nums1, target1);
console.log('result1', result1);