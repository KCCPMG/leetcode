/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const results = [];
    const hashmap = {};

    // populate hashmap
    for (let i=0; i<nums.length; i++) {
        const key = nums[i];
        if (hashmap[key]) {
            hashmap[key].push(i);
        } else hashmap[key] = [i];
    }

    let hashmapKeysAsNumbers = Object.keys(hashmap).map(k => Number(k));

    // generate array with keys as numbers, effectively an ordered set
    hashmapKeysAsNumbers.sort((a,b) => (a-b));


    let leftIndex = 0;
    let rightIndex = hashmapKeysAsNumbers.length-1;

    for (let leftIndex=0; leftIndex<hashmapKeysAsNumbers.length; leftIndex++) {
        let leftValue = hashmapKeysAsNumbers[leftIndex];
        if (leftValue === 0) continue;
        // if there are two or more instances of this number
        if (hashmap[leftValue].length >= 2) {
            let target = - (2 * leftValue);
            if (hashmap[target]) results.push([leftValue,leftValue,target]);           
        }

        // all subsequent numbers will be higher, continue here
        if (leftValue > 0) continue;

        for (let midIndex=leftIndex+1; midIndex<hashmapKeysAsNumbers.length; midIndex++) {
            
            let midValue = hashmapKeysAsNumbers[midIndex];
            if (midValue == hashmapKeysAsNumbers[midIndex-1]) continue;
            
            let target = 0 - (leftValue + midValue);

            // there are no further valid numbers, no further checks worthwhile
            if (midValue > 0 && target < 0) break;

            if (target > midValue && hashmap[target]) {
                results.push([leftValue, midValue, target]);
            }
        }
    }
    if (hashmap[0]?.length > 2) results.push([0,0,0])

    return results;
};