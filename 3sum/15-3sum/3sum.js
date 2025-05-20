/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     const results = [];

//     const hashmap = {};

//     for (let i=0; i<nums.length; i++) {
//         const key = nums[i];
//         if (hashmap[key]) {
//             hashmap[key].push(i);
//         } else hashmap[key] = [i];
//     }

//     let keys = Object.keys(hashmap).map(k => Number(k));
//     keys.sort((a,b) => (a-b));

//     for (let i=0; i<keys.length; i++) {
//         let k = keys[i];
//         if (k === 0) continue;
//         if (hashmap[k].length >= 2) {
//             let target = - (2 * k);
//             if (hashmap[target]) results.push([k,k,target]);           
//         }

//         for (let j=i+1; j<keys.length; j++) {
            
//             let j_num = keys[j];
//             if (keys[j] == keys[j-1]) continue;
            
//             let target = 0 - (k + keys[j]);

//             if (
//                 target > j_num &&
//                 hashmap[target] && 
//                 target != k &&
//                 target != j_num
//             ) {
//                 results.push([k, j_num, target]);
//             }
//         }
//     }
//     if (hashmap[0]?.length > 2) results.push([0,0,0])

//     return results;
// };




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

    // while (leftIndex < rightIndex) {
    //     let leftValue = hashmapKeysAsNumbers[leftIndex];
    //     let rightValue = hashmapKeysAsNumbers[rightIndex];

    //     if (leftValue == hashmapKeysAsNumbers[leftIndex-1]) leftIndex++;
    //     if (rightValue == hashmapKeysAsNNumbers[rightIndex-1]) rightValue--;


    // }

    for (let leftIndex=0; leftIndex<hashmapKeysAsNumbers.length; leftIndex++) {
        let leftValue = hashmapKeysAsNumbers[leftIndex];
        if (leftValue === 0) continue;
        // if there are two or more instances of this number
        if (hashmap[leftValue].length >= 2) {
            let target = - (2 * leftValue);
            if (hashmap[target]) results.push([leftValue,leftValue,target]);           
        }

        // all subsequent numbers will be higher, break here
        if (leftValue > 0) continue;

        for (let midIndex=leftIndex+1; midIndex<hashmapKeysAsNumbers.length; midIndex++) {
            
            let midValue = hashmapKeysAsNumbers[midIndex];
            if (midValue == hashmapKeysAsNumbers[midIndex-1]) continue;
            
            let target = 0 - (leftValue + midValue);

            // there are no further valid numbers, no further checks worthwhile
            if (midValue > 0 && target < 0) break;

            if (
                target > midValue &&
                hashmap[target] && 
                target != leftValue &&
                target != midValue
            ) {
                results.push([leftValue, midValue, target]);
            }
        }
    }
    if (hashmap[0]?.length > 2) results.push([0,0,0])

    return results;
};