/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...new Set(nums));
    return nums.length;
};