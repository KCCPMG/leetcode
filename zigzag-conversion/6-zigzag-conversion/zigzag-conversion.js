


var convert = function(s, numRows) {

    if (numRows === 1) return s;
    
    stringArray = new Array(numRows).fill("");
    console.log(stringArray);
    let loopSize = numRows * 2 - 2;
    let maxRowIndex = numRows - 1;

    for (let stringIndex=0; stringIndex<s.length; stringIndex++) {

        let currentlyExaminingRowIndex = 0;

        while (currentlyExaminingRowIndex < numRows) {
            let positionInLoop = stringIndex % loopSize;
            let lowerCandidate = currentlyExaminingRowIndex;
            let upperCandidate = loopSize - currentlyExaminingRowIndex;
            // console.log({
            //     stringIndex,
            //     character: s[stringIndex],
            //     currentlyExaminingRowIndex,
            //     positionInLoop,
            //     lowerCandidate,
            //     upperCandidate
            // })
            if (positionInLoop === lowerCandidate || positionInLoop === upperCandidate) {
                stringArray[currentlyExaminingRowIndex] += s[stringIndex];
                break;
            }

            currentlyExaminingRowIndex++;
        }


    }
    return stringArray.join("");
}