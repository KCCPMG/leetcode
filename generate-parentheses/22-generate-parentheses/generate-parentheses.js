/**
 * @param {number} n
 * @return {string[]}
 */
var _generateParenthesis = function(n) {
    if (n === 1) return ["()"];
    // if (n === 2) return ["(())", "()()"];
    // if (n === 3) return ["((()))", "(()())", "(())()", "()(())", "()()()"];

    const arr = [];

    // n > 1
    for (let i=1; i<n; i++) {
        arr.push(...
            (generateParenthesis(n-i).map(gp => {
                return "(".repeat(i) + gp +")".repeat(i);
            })
        ));
    }

    return arr;

};


function createNestedPair(depth) {
    let str = "";
    let i = 0;
    while (i<depth) {
        str += "(";
        i++;
    }
    while (i>0) {
        str += ")";
        i--;
    }
    return str;
}

function createNestedPairs(depth) {
    const arr = [];
    for (let i=1; i<=depth; i++) {
        str = createNestedPair(depth+1-i).repeat(i);
        arr.push(str);
        for (let j=0; j<=depth; j++) {
            secondStr = createNestedPair()
        }
    }
    return arr;
}
/**
break a number into every combination
of positive integers which add up to it,
order dependent (ie [1,1,2] does not cancel
out [2,1,1])
 */
function breakdown(num) {
    const arr = [];
    let i = num;
    while (i > 0) {
        if (i === num) {
            arr.push([i]);
        } else {
            for (let result of breakdown(num-i)) {
                arr.push([i, ...result])
            }
        }

        i--;
    }
    return arr;
}















function generateParenthesis(n) {
    // base case
    if (n == 0) return [""];
    if (n == 1) return ["()"];
    
    // else
    const arr = [];

    for (let i=n-1; i>0; i--) {
        const secondDepth = n-i;
        if (secondDepth > 0) {
            nests = generateParenthesis(secondDepth);
            console.log(i, secondDepth, nests);
            nests.forEach(nst => {
                const firstString = "(".repeat(i) + nst + ")".repeat(i);
                console.log("firstString", n, secondDepth, firstString);
                arr.push(firstString);
            })
            nests.forEach(nst => {
                const secondString = "()".repeat(i) + nst;
                console.log("secondString", n, secondDepth, secondString);
                arr.push(secondString);
            })
        }
    } 

    return arr;
}


function generateParenthesis(n) {
    const arr = [];
    for (let i=1; i<n; i++) {
        let str = "(";
        let open=1;
        let closed=0;

    }
}






function completeStrings(strStart, depth, open, closed) {
    if (open == depth && closed == depth) return [strStart];

    else if (open == depth) {
        return completeStrings(strStart + ")", depth, open, closed+1);
    }

    else {
        if (closed < open) {
            return [
                ...completeStrings(strStart+"(", depth, open+1, closed),
                ...completeStrings(strStart+")", depth, open, closed+1)
            ]
        } else return completeStrings(strStart+"(", depth, open+1, closed);
    }
}

function generateParenthesis(n) {
    return completeStrings("(", n, 1, 0);
}








