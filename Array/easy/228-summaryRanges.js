/*
汇总区间
给定一个无重复元素的有序整数数组 nums 。
返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
列表中的每个区间范围 [a,b] 应该按如下格式输出：
"a->b" ，如果 a != b
"a" ，如果 a == b
 
示例 1：
输入：nums = [0,1,2,4,5,7]
输出：["0->2","4->5","7"]
解释：区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

示例 2：
输入：nums = [0,2,3,4,6,8,9]
输出：["0","2->4","6","8->9"]
解释：区间范围是：
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

示例 3：
输入：nums = []
输出：[]

示例 4：
输入：nums = [-1]
输出：["-1"]

示例 5：
输入：nums = [0]
输出：["0"]
*/

var summaryRanges = function(nums) {
  const result = [];
  if (!Array.isArray(nums) || !nums.length) {
    return result;
  }
  if (nums.length === 1) {
    result.push(`${nums[0]}`);
    return result;
  }
  let start = nums[0], pre = nums[0];
  const { length } = nums;
  for (let i = 1; i < length; i++) {
    if (nums[i] - pre === 1) {
      pre = nums[i];
    } else {
      if (start === pre) {
        result.push(`${start}`);        
      } else {
        result.push(`${start}->${pre}`);
      }
      pre = nums[i];
      start = nums[i];
    }
  }
  const end = nums[length - 1];
  if (end === start) {
    result.push(`${start}`); 
  } else {
    result.push(`${start}->${end}`);
  }
  return result;
};
var summaryRanges2 = function(nums) {
  let i = 0;
  const result = [];
  const { length } = nums;
  while (i < length) {
    const low = i;
    i += 1;
    while (i < length && (nums[i] - nums[i - 1] === 1)) {
      i += 1;
    }
    let str = `${nums[low]}`;
    const high = i - 1;
    if (nums[low] !== nums[high]) {
      str = `${str}->${nums[high]}`;
    }
    result.push(str);
  }
  return result;
}
const nums = [0,1,2,4,5,7];
const result = summaryRanges2(nums);
console.log(result);
const nums1 = [0,2,3,4,6,8,9]
const result1 = summaryRanges2(nums1);
console.log(result1);