/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // word goes straight down, then up/right, then down
    // a character will go up/right by going up one row and
    // right one space, there is always at least a minimum of 
    // one space between characters

    if (numRows === 1) return s;

    // initialize array (to be joined later)
    let s_position = 0;
    let row = 0;
    
    // set rows to be an array of strings representing the rows of the zigzag text
    let rows = []
    for (let i=0; i<numRows; i++) {
        rows.push("");
    }

    let descending = true;

    while (s_position < s.length) {
        if (descending) {
            rows[row] += s[s_position];
            console.log(row, s_position, s[s_position]);
            s_position++;
            row++;
        } else {
            rows[row] += s[s_position];
            console.log(row, s_position, s[s_position]);
            s_position++;
            row--;
        }
        if (row === 0) descending = true;
        if (row === numRows - 1) descending = false;
    }


    // function goDown() {
    //     // assuming row is starting at 0
    //     while (row < numRows && s_position < s.length) {
    //         // access correct string in row, add character
    //         rows[row] += s[s_position];
    //         console.log(row, s_position, s[s_position]);
    //         s_position++;
    //         row++;

    //     }
    //     row = numRows - 1;
    // }

    // // the number of characters between "columns" is irrelevant, and spaces are not needed
    // function goUpAndRight() {
    //     while (s_position < s.length) {
    //         if (row === numRows-1) {
    //             row--;
    //             continue;
    //         }
    //         else if (row === 0) {
    //             break;
    //         }
    //         else {
    //             rows[row] += s[s_position];
    //             console.log(row, s_position, s[s_position]);
    //             s_position++;
    //             row--;
    //         }
    //     }
    // }

    // while (s_position < s.length) {
    //     goDown();
    //     goUpAndRight();
    // }

    return rows.join("");


}