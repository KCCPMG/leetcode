
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

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    return completeStrings("(", n, 1, 0);
}








