/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/?tab=Description
 */
var twoSum = function(nums, target) {
    var length = nums.length;
    for (var i = 0; i< length; i++) {
        for (var j = i+1; j < length; j++) {
            var result = nums[i] + nums[j];
            if (result === target) {
                return [i, j];
            }
        }
    }
};

var nums = [2, 7, 11, 15];
var target = 26;

var result = twoSum(nums, target);
console.log(result);