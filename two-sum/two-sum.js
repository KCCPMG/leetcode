/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let leftIndex = 0;
    while (leftIndex < nums.length - 1) {
        let rightIndex = nums.length - 1;
        while (rightIndex > leftIndex) {
            if ((nums[leftIndex] + nums[rightIndex]) === target) {
                return [leftIndex, rightIndex]
            } else rightIndex--;
        }
        leftIndex++;
    }
    

};