// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//     // word goes straight down, then up/right, then down
//     // a character will go up/right by going up one row and
//     // right one space, there is always at least a minimum of 
//     // one space between characters

//     if (numRows === 1) return s;
//     const rows = new Array(numRows).fill("");
//     console.log(s, rows);

//     for (let i=0; i<numRows && i<s.length; i++) {
//         let indices = []
//         if (i === 0 || i === (numRows - 1)) {
//             let spacing = numRows * 2 - 2;
//             for (let c=i; c<s.length; c+=spacing) {
//                 indices.push(c);
//             }
//         } else {
//             let firstSpacing = (numRows - 1 - i) * 2;
//             let secondSpacing = numRows * 2 - 2;
//             let lookahead = i;
//             indices.push(lookahead);
//             while (lookahead < s.length) {
//                 lookahead += firstSpacing;
//                 if (lookahead < s.length) indices.push(lookahead);
//                 lookahead = lookahead - firstSpacing + secondSpacing;
//                 if (lookahead < s.length) indices.push(lookahead);
//             }
//         }

//         console.log(indices);

//         for (let index of indices) {
//             rows[i] += s[index];
//         }
//         console.log(rows[i])
//     } 


//     return rows.join("");




// }

// 0 > 0, 6
// 1 > 1, 5
// 2 > 2, 4
// 3 > 3


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