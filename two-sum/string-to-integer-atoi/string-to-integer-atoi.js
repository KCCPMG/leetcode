/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // I first need to identify the part of the string for conversion
  let intString = identifyInt(s);

  let number = +intString;
  if (number >= (2 ** 31)) return ((2 ** 31) - 1);
  else if (number < (-(2 ** 31))) return -(2 ** 31);
  else return number;

};


function identifyInt(s) {
  const validRe = /( )*(-|\+)?[0-9]+/;

  // check that string starts with white space, negative
  // sign, or number
  const validMatch = s.match(validRe);
  if (!validMatch || validMatch?.index > 0) return "0";

  //else 

  // define regex to find first number
  const numRe = /[0-9]+/;

  // get regEx match object
  let numberMatch = s.match(numRe);
  
  if (!numberMatch) return "0";

  // find the index of the first number 
  let startIndex = numberMatch.index;

  // find the index of the last number
  let endIndex = startIndex+numberMatch[0].length;

  // check if there is a negative sign immediately before
  if (startIndex > 0 && s[startIndex-1] === '-') {
    startIndex--;
  }

  // select through to the last number
  return s.slice(startIndex, endIndex);

}