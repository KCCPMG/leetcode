3 > 4
4 > 6
5 > 8

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
    const rows = new Array(numRows).fill("");
    console.log(s, rows);

    for (let i=0; i<numRows && i<s.length; i++) {
        let indices = []
        if (i === 0 || i === (numRows - 1)) {
            let spacing = numRows * 2 - 2;
            for (let c=i; c<s.length; c+=spacing) {
                indices.push(c);
            }
        } else {
            let firstSpacing = (numRows - 1 - i) * 2;
            let secondSpacing = numRows * 2 - 2;
            let lookahead = i;
            indices.push(lookahead);
            while (lookahead < s.length) {
                lookahead += firstSpacing;
                if (lookahead < s.length) indices.push(lookahead);
                lookahead = lookahead - firstSpacing + secondSpacing;
                if (lookahead < s.length) indices.push(lookahead);
            }
        }

        console.log(indices);

        for (let index of indices) {
            rows[i] += s[index];
        }
        console.log(rows[i])
    } 


    return rows.join("");

}