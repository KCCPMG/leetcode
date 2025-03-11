/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let i = nums.length-1;
    // while (i > 0) {
    //     if (nums[i] == nums[i-1]) nums.splice(i,1);
    //     i--;
    // }
    // return nums.length;
    nums.splice(0, nums.length, ...new Set(nums));
    return nums.length;
};