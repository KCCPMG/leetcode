/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if (numRows === 1) return s;
    
    stringArray = new Array(numRows).fill("");
    let loopSize = numRows * 2 - 2;
    let maxRowIndex = numRows - 1;

    for (let stringIndex=0; stringIndex<s.length; stringIndex++) {

        let currentlyExaminingRowIndex = 0;

        while (currentlyExaminingRowIndex < numRows) {
            let positionInLoop = stringIndex % loopSize;
            let lowerCandidate = currentlyExaminingRowIndex;
            let upperCandidate = loopSize - currentlyExaminingRowIndex;
            if (positionInLoop === lowerCandidate || positionInLoop === upperCandidate) {
                stringArray[currentlyExaminingRowIndex] += s[stringIndex];
                break;
            }

            currentlyExaminingRowIndex++;
        }

    }
    return stringArray.join("");
}