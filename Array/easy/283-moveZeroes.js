/*
移动零
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
*/
var moveZeroes = function(nums) {
  let j=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){          
        if(i!==j){
          console.log('i', i, 'j', j);
            [nums[i],nums[j]]=[nums[j],nums[i]]
        }
        j++;
    }
  }
  return nums;
};
const nums = [0,1,0,3,12];
const nums1 = [1,2,3,1];
const result = moveZeroes(nums);
console.log(result);
