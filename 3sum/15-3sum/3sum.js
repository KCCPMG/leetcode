/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [];

    const hm = {};

    for (let i=0; i<nums.length; i++) {
        const key = nums[i];
        if (hm[key]) {
            hm[key].push(i);
        } else hm[key] = [i];
    }

    let keys = Object.keys(hm).map(k => Number(k));
    keys.sort((a,b) => (a-b));

    for (let i=0; i<keys.length; i++) {
        let k = keys[i];
        if (hm[k].length >= 2 && k != 0) {
            console.log("Multiples of: ", k);
            let target = 0 - (2 * k);
            if (hm[target]) results.push([k,k,target]);           
        }

        for (let j=i+1; j<keys.length; j++) {
            
            let j_num = keys[j];
            if (j_num == keys[j-1]) continue;
            
            let target = 0 - (k + j_num);

            if (
                target > j_num &&
                hm[target] && 
                target != k &&
                target != j_num
            ) {
                results.push([k, j_num, target]);
            }
        }
    }
    if (hm[0]?.length > 2) results.push([0,0,0])

    return results;
};