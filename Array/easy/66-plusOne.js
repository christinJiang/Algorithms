/*
加一
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。

示例 2：
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。

示例 3：
输入：digits = [0]
输出：[1]
*/
var plusOne = function(digits) {
    //先遍历 从右向左
    for(let i = digits.length-1;i>=0;i--){
        console.log('i', i);
      if(digits[i] !==9){
          digits[i]++
          return digits;
      }else{
          // 是 9
          digits[i] = 0
      }
    }

  let result = [1,...digits];
  return result;
};
const digits1 = [4, 3, 2, 1]// [9];
const result1 = plusOne(digits1);
console.log(result1);
const digits2 = [9, 9]// [9];
const result2 = plusOne(digits2);
console.log(result2);