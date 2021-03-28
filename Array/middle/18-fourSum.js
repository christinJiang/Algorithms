/*
四数之和
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
注意：答案中不可以包含重复的四元组。

示例 1：
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

示例 2：
输入：nums = [], target = 0
输出：[]
*/
var fourSum = function(nums, target) {
  const result = [];
  if (!Array.isArray(nums) || nums.length < 4) {
    return result;
  }
  nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let i = 0; i < len - 3; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]> target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue; 
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; 
      let l = j + 1; 
      let r = len - 1;
      while (l < r) {        
        const total = nums[i] + nums[j] + nums[l] + nums[r];
        if (total === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;  
          l++;
          r--;
        } else if (total < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
  return result;
};

var fourSum1 = function(nums, target) {
  const result = [];
  if (!Array.isArray(nums) || nums.length < 4) {
    return result;
  }
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      for (let k = j + 1; k < len - 1; k++) {
        for (let l = k + 1; l < len; l++) {
          const total = nums[i] + nums[j] + nums[k] + nums[l] ;
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            result.push([nums[i], nums[j], nums[k], nums[l]]);
          }
        }
      }
    }
  }
  const map = {};
  result.forEach(item => {
    const key = item.join(',');
    if (!map[key]) {
      map[key] = item;
    }
  });
  return Object.values(map);
}
// const nums = [1,0,-1,0,-2,2], target = 0;
// const result = fourSum(nums, target);
// console.log(result);

// const nums1 = [-2,-1,-1,1,1,2,2], target1 = 0;
// const result1 = fourSum(nums1, target1);
// console.log(result1);

const nums2 = [0,4,-5,2,-2,4,2,-1,4], target2 = 12;
const result2 = fourSum1(nums2, target2);
console.log(result2);