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

    let keys = Object.keys(hm);
    // let firstNegative = keys.findIndex(el => Number(el) < 0)
    // if (firstNegative >= 0) {
    //     keys = [...keys.splice(firstNegative).reverse(), ...keys]
    // }
    keys = keys.map(k => Number(k));
    keys.sort((a,b) => (a-b));

    for (let i=0; i<keys.length; i++) {
        let k = keys[i];
        if (k === 0) continue;
        if (hm[k].length >= 2) {
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

    // for (let [k,v] of Object.entries(hm)) {
    //     let k_num = Number(k);
    //     if (v.length >= 2) {
    //         let target = 0 - (2 * k_num);
    //         if (hm[target]) results.push([k_num,k_num,target]);
    //     } 


    //     let startingIndex = keys.findIndex(k => k === k_num)

    //     for (let i=startingIndex + 1; i<keys.length; i++) {
            
    //         let i_num = keys[i];
    //         let target = 0 - (k_num + i_num);

    //         if (
    //             i_num != k_num && 
    //             target > i_num && 
    //             hm[target] &&
    //             target != k_num
    //         ) {
    //             results.push([k_num, i_num, target]);
    //         }
    //     }

    // }

    return results;
};