/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = nums.length-1;
    let dels = [];
    while (i > 0) {
        if (nums[i] == nums[i-1]) dels.push(i);
        i--;
    }
    dels.forEach(d => nums.splice(d, 1));
    return nums.length;
};