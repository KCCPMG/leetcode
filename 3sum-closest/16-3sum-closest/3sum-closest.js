/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function(nums, target) {
//     // create and populate hash map
//     let numsObj = {};
//     for (let i of nums) {
//         numsObj[i] = numsObj[i] ? numsObj[i] + 1 : 1;
//     }


// };

var twoSumClosest = function(nums, target) {
    // create and populate hash map
    let numsObj = {};
    for (let i of nums) {
        numsObj[i] = numsObj[i] ? numsObj[i] + 1 : 1;
    }

    let closest;
    const boundary = Math.max(Math.abs(Math.max(...nums)), Math.abs(Math.min(...nums)));

    for (let [k, v] of Object.entries(numsObj)) {
        if (k*2 === target && v >= 2) return target;
        else {
            const differenceTarget = target-k;
            if (numObjs[differenceTarget] && (differenceTarget) !== k) {
                return target;
            }
            else {
                for (let i=0; i<=boundary; i++) {
                    if (numObjs[differenceTarget + i]) {
                        let result = (differenceTarget+i) + k;
                        if (!closest) closest = result;
                        else {
                            if (Math.abs(target - result) < (target - closest)) {
                                closest = result;
                            }
                        }
                        break;
                    }
                    else if (numObjs[differenceTarget - i]) {
                        let result = (differenceTarget - i) + k;
                        if (!closest) closest = result;
                        else {
                            if (Math.abs(target - result) < (target - closest)) {
                                closest = result;
                            }
                        }
                        break;
                    }
                }
            }
        }
    }

    return closest;
}



function threeSumClosest(nums, target) {
    sorted = nums.sort((a,b) => a-b);
    hashmap = {};
    for (let num of sorted) {
        if (hashmap[num]) hashmap[num]++;
        else hashmap[num] = 1;
    }

    let nearestSum;
    let leftPointer = 0;
    let rightPointer = sorted.length - 1;

    console.log(leftPointer, rightPointer);

    while (leftPointer < rightPointer) {
        leftValue = sorted[leftPointer];
        rightValue = sorted[rightPointer];
        
        twoSum = leftValue + rightValue;
        targetLessTwoSum = target - twoSum;

        let midPointer = Math.floor((leftPointer + rightPointer) / 2);
        
        leftBoundary = leftPointer;
        rightBoundary = rightPointer;

        while (midPointer > leftBoundary && midPointer < rightBoundary) {
            midValue = sorted[midPointer];
            threeSum = twoSum + midValue;
            targetLessThreeSum = target - threeSum;


            if (threeSum == target) {
                return target;
            }
            
            // else

            console.log((
                nearestSum == undefined || 
                Math.abs(targetLessThreeSum) < Math.abs(target - nearestSum)
            ));
            
            if (
                nearestSum == undefined || 
                Math.abs(targetLessThreeSum) < Math.abs(target - nearestSum)
            ) {
                nearestSum = threeSum;
            }

            console.log(leftBoundary, midPointer, rightBoundary);

            // move midPointer
            if (threeSum < target) {
                if ((rightBoundary - midPointer) === 1) {
                    midPointer++; // should break while loop
                }
                else {
                    leftBoundary = midPointer;
                    midPointer = Math.floor((leftBoundary + rightBoundary) / 2);
                }
            }
            else if (threeSum > target) {
                if ((midPointer - leftBoundary) === 1) {
                    midPointer--; // should break while loop
                }
                else {
                    rightBoundary = midPointer;
                    midPointer = Math.floor((leftBoundary + rightBoundary) / 2);
                }
            }
        }

        // if (leftPointer > sorted.length - rightPointer) {
        if (nearestSum > target) {
            rightPointer--;
        }
        else leftPointer++;
    }

    return nearestSum;
}


/**
Can try to set leftPonter to 0, midPointer to 1, rightPointer between midPointer and end

 */

function threeSumClosest(nums, target) {
    sorted = nums.sort((a,b) => a-b);
    hashmap = {};
    for (let num of sorted) {
        if (hashmap[num]) hashmap[num]++;
        else hashmap[num] = 1;
    }

    let nearestSum;
    let leftPointer = 0;

    while (leftPointer < sorted.length-2) {
        let midPointer = leftPointer + 1;
        leftValue = sorted[leftPointer];

        // console.log({leftPointer, midPointer})

        while (midPointer < sorted.length-1) {
            midValue = sorted[midPointer];
            twoSum = leftValue + midValue;

            // stop this if we're already overshooting
            // if (twoSum > target && midPointer > 1) return nearestSum;

            leftBoundary = midPointer+1;
            rightBoundary = sorted.length-1;
            rightPointer = Math.floor((leftBoundary + rightBoundary) / 2);

            while (rightPointer >= leftBoundary && rightPointer <= rightBoundary) {
                rightValue = sorted[rightPointer];

                threeSum = twoSum + rightValue;

                // stop if we've hit the target
                if (threeSum == target) return target;

                if (
                    nearestSum == undefined || 
                    Math.abs(threeSum - target) < Math.abs(nearestSum - target)
                ) {
                    nearestSum = threeSum;
                }

                // console.log({
                //     leftPointer, 
                //     leftValue, 
                //     midPointer, 
                //     midValue, 
                //     rightPointer, 
                //     rightValue, 
                //     twoSum, 
                //     threeSum, 
                //     nearestSum, 
                //     leftBoundary, 
                //     rightBoundary
                // })

                // console.log(nearestSum);
                console.log("pre",leftBoundary, rightPointer, rightBoundary);

                // else
                if (threeSum < target) {
                    if (rightPointer == rightBoundary) break;
                    leftBoundary = rightPointer+1;
                    rightPointer = Math.ceil((leftBoundary + rightBoundary) / 2);
                } else if (threeSum > target) {
                    if (rightPointer == leftBoundary) break;
                    rightBoundary = rightPointer-1;
                    rightPointer = Math.floor((leftBoundary + rightBoundary) / 2);
                }
                console.log("post", leftBoundary, rightPointer, rightBoundary);

            }

            midPointer++;
        }

        leftPointer++;
        // console.log(leftPointer < sorted.length-2)
    }

    return nearestSum;
}









function threeSumClosest(nums, target) {
    leftPointer = 0;
    let nearestSum;

    hashmap = {};
    for (let num of nums) {
        if (hashmap[num]) hashmap[num]++;
        else hashmap[num] = 1;
    }

    keys = Object.keys(hashmap).map(el => Number(el));

    min = Math.min(...keys);
    max = Math.max(...keys);


    while (leftPointer < nums.length - 1) {
        leftValue = nums[leftPointer];
        rightPointer = leftPointer + 1;
        while (rightPointer < nums.length) {
            rightValue = nums[rightPointer];
            twoSum = leftValue + rightValue;

            adjustedTarget = target-twoSum;

            console.log(min, max, adjustedTarget, [leftValue, rightValue]);
            nearestComplement = findNearestKey(min, max, hashmap, adjustedTarget, [leftValue, rightValue]);
            console.log("nearestComplement:", nearestComplement)

            if (nearestComplement !== undefined) {
                threeSum = twoSum + nearestComplement;
                if (threeSum == target) return target;
                if (nearestSum == undefined || 
                    Math.abs(threeSum - target) < Math.abs(nearestSum - target)
                ) {
                    nearestSum = threeSum;
                }
            }

            rightPointer++;
        }

        leftPointer++;
    }

    return nearestSum;

}


function findNearestKey(min, max, countMap, seekTarget, alreadyCountedValues) {
    if (countMap[seekTarget]) {
        minCount = alreadyCountedValues.filter(el => el == seekTarget).length;
        if (countMap[seekTarget] > minCount) return seekTarget;    
    }

    // else
    lowSeekTarget = seekTarget - 1;
    highSeekTarget = seekTarget + 1;

    while (lowSeekTarget >= min || highSeekTarget <= max) {
        if (countMap[lowSeekTarget]) {
            minCount = alreadyCountedValues.filter(el => el == lowSeekTarget).length;
            if (countMap[lowSeekTarget] > minCount) return lowSeekTarget;
        }
        if (countMap[highSeekTarget]) {
            minCount = alreadyCountedValues.filter(el => el == highSeekTarget).length;
            if (countMap[highSeekTarget] > minCount) return highSeekTarget;
        }
        lowSeekTarget--;
        highSeekTarget++;
    }

    return undefined;
}

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