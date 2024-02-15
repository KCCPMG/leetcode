/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
  let countEvens = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      countEvens++;
      if (countEvens > 1) {
        return true;
      }
    }
  }
  return false;
};