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

    for (let leftIndex=0; leftIndex<hashmapKeysAsNumbers.length; leftIndex++) {
        let leftIndexValue = hashmapKeysAsNumbers[leftIndex];
        if (leftIndexValue === 0) continue;
        // if there are two or more instances of this number
        if (hashmap[leftIndexValue].length >= 2) {
            let target = - (2 * leftIndexValue);
            if (hashmap[target]) results.push([leftIndexValue,leftIndexValue,target]);           
        }

        for (let j=leftIndex+1; j<hashmapKeysAsNumbers.length; j++) {
            
            let j_num = hashmapKeysAsNumbers[j];
            if (hashmapKeysAsNumbers[j] == hashmapKeysAsNumbers[j-1]) continue;
            
            let target = 0 - (leftIndexValue + hashmapKeysAsNumbers[j]);

            if (
                target > j_num &&
                hashmap[target] && 
                target != leftIndexValue &&
                target != j_num
            ) {
                results.push([leftIndexValue, j_num, target]);
            }
        }
    }
    if (hashmap[0]?.length > 2) results.push([0,0,0])

    return results;
};