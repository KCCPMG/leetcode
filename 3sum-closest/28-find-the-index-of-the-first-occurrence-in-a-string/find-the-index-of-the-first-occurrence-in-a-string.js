/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const match = haystack.match(needle);
    if (match) return match.index;
    else return -1;
};