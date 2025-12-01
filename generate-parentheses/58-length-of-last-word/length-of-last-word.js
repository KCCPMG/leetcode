/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    words = s.split(" ");
    for (let i=words.length-1; i>=0; i--) {
        if (words[i].match(/\S/)) {
            return words[i].length;
        }
    }
};