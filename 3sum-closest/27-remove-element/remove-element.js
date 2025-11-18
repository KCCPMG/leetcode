/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    while (i<nums.length) {
        console.log(i, nums[i]);
        if (nums[i] == val) {
            nums.splice(i, 1);
        } else i++;
    }
    return nums.length;
};