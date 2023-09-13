/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {



  let leftIndex = 0;
  let rightIndex = 1;
  let smallest = nums.length + 1;
  let currentSum = nums[0];

  while (leftIndex < nums.length && rightIndex <= nums.length) {
    if (currentSum >= target) {
      smallest = Math.min(smallest, rightIndex-leftIndex);
      currentSum -= nums[leftIndex];
      leftIndex++;
    } else {
      currentSum += nums[rightIndex]
      rightIndex++;
    }
  }

  if (smallest === nums.length + 1) return 0;
  else return smallest;
};