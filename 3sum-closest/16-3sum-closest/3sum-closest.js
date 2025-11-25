/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {

    sorted = nums.sort((a,b) => (a-b));

    nearestSum = sorted[0]+sorted[1]+sorted[2];
    leftPointer = 0;

    while (leftPointer < sorted.length - 2){
        
        midPointer = leftPointer + 1;
        rightPointer = sorted.length-1;

        leftValue = nums[leftPointer];
        
        while (midPointer < rightPointer) {
            midValue = sorted[midPointer];
            rightValue = sorted[rightPointer];

            let threeSum = leftValue + midValue + rightValue;

            if (threeSum == target) return threeSum;

            if (Math.abs(target-threeSum) < Math.abs(target-nearestSum)) {
                nearestSum = threeSum;
            }
            if (threeSum < target) midPointer++;
            else if (threeSum > target) rightPointer--;
        }

        leftPointer++;
    }

    return nearestSum;
}