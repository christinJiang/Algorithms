/* 接雨水
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
示例 1：
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

示例 2：
输入：height = [4,2,0,3,2,5]
输出：9
 
提示：
n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
*/
var trap = function(height) {
  const { length } = height;
  if (length === 0) {
    return 0;
  }
  let leftMax = height[0];
  const leftMaxList = [];
  let rightMax = height[length - 1];
  const rightMaxList = [];
  for (let i = 0; i < length; i++) {
    leftMax = Math.max(height[i], leftMax); 
    leftMaxList[i] = leftMax;
  }
  for (let i = length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, height[i]);
    rightMaxList[i] = rightMax;
  }
  let total = 0;
  for (let i = 0; i < length; i++) {
    const value = Math.min(leftMaxList[i], rightMaxList[i]) - height[i];
    total += value > 0 ? value : 0;
  }
  return total;
};
// const height = [];
// const result = trap(height);
// console.log(result);
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
const result = trap(height);
console.log(result);
// const height2 = [4,2,0,3,2,5];
// const result2 = trap(height2);
// console.log(result2);