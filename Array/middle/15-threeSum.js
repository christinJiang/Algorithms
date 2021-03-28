/*
三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

示例 2：
输入：nums = []
输出：[]

示例 3：
输入：nums = [0]
输出：[]
 
提示：
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;
  if(nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len ; i++) {
      if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
      if(i > 0 && nums[i] == nums[i-1]) {
        console.log('nums[i]', nums[i], 'nums[i-1]', nums[i-1]);
        continue; // 去重
      }
      let L = i+1;
      let R = len-1;
      while(L < R){
          const sum = nums[i] + nums[L] + nums[R];
          if(sum == 0){
              ans.push([nums[i],nums[L],nums[R]]);
              while (L<R && nums[L] == nums[L+1]) L++; // 去重
              while (L<R && nums[R] == nums[R-1]) R--; // 去重
              L++;
              R--;
          }
          else if (sum < 0) L++;
          else if (sum > 0) R--;
      }
  }        
  return ans;
}

var threeSum1 = function(nums) {
  const result = [];
  if (!Array.isArray(nums) || nums.length < 3) {
    return result;
  }
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (num > 0) break;
    if (num === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      if (num + nums[l] + nums[r] === 0) {
        result.push([num, nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++; 
        r--;
      } else if (num + nums[l] + nums[r] <= 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
}

const nums = [-2, -1,0,1,2,-1,-4];
const result = threeSum1(nums);
console.log(result);
