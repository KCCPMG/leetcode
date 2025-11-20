/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const min = nums[0];
    if (target <= min) return 0;

    const max = nums[nums.length - 1];
    if (target === max) return nums.length - 1;

    if (target > max) return nums.length;

    let start = 0;
    let end = nums.length - 1;
    let midpoint = Math.floor((end + start) / 2);

    while (true) {
        console.log(start, midpoint, end);
        const midpointValue = nums[midpoint];
        if (midpointValue === target) return midpoint;

        if (midpointValue < target) {
            console.log("midpointValue < target")
            if ((end - midpoint) <= 1) return end;
            else {
                start = midpoint;
                midpoint = Math.floor((end + start) / 2);
            }
        }
        else if (midpointValue > target) {
            console.log("midpointValue > target")
            if ((midpoint - start) <= 1) return midpoint;
            else {
                end = midpoint;
                midpoint = Math.floor((end + start) / 2);
            }
        
        }

    }

};