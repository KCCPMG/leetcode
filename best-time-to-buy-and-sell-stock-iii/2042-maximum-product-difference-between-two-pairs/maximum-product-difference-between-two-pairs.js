/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {

  let [lowest, secondLowest, secondHighest, highest] = nums
    .slice(0,4)
    .sort((a,b) => a-b);

  for (let i=4; i<nums.length; i++) {
    let num = nums[i];
    if (num > secondHighest) {
      if (num > highest) {
        secondHighest = highest;
        highest = num;
      } else {
        secondHighest = num;
      }
    } else if (num < secondLowest) {
      if (num < lowest) {
        secondLowest = lowest;
        lowest = num;
      } else {
        secondLowest = num;
      }
    }
  }

  return (highest*secondHighest) - (lowest*secondLowest);
};