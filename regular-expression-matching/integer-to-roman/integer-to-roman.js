/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // input is between 1 and 3999 (inclusive)

  let outputStr = '';

  // thousands place
  const thousands = Math.floor(num / 1000);
  outputStr += repeatChar('M', thousands);
  num -= (thousands * 1000);

  // hundreds place
  const hundreds = Math.floor(num / 100);
  if (hundreds === 9) outputStr += 'CM';
  else if (hundreds >= 5) outputStr += ('D' + repeatChar('C', (hundreds-5)));
  else if (hundreds === 4) outputStr += 'CD';
  else outputStr += repeatChar('C', hundreds);
  num -= (hundreds * 100);

  // tens place
  const tens = Math.floor(num / 10);
  if (tens === 9) outputStr += 'XC';
  else if (tens >= 5) outputStr += ('L' + repeatChar('X', (tens-5)));
  else if (tens === 4) outputStr += 'XL';
  else outputStr += repeatChar('X', tens);
  num -= (tens * 10);

  // ones place
  const ones = Math.floor(num / 1);
  if (ones === 9) outputStr += 'IX';
  else if (ones >= 5) outputStr += ('V' + repeatChar('I', (ones-5)));
  else if (ones === 4) outputStr += 'IV'
  else outputStr += repeatChar('I', ones);

  return outputStr;


};

function repeatChar(char, times) {
  
  let outputStr = '';
  for (let i=0; i<times; i++) {
    outputStr += char;
  }
  return outputStr;
}

/**
 * 
 */
function strOfPlace(num, place, timesOneChar, timesFiveChar, timesTenChar) {
  let value = (Math.floor(num / place)) % (place * 10);
  if (value === 9) return timesOneChar + timesTenChar;
  else if (value >= 5) return timesFiveChar + repeatChar(timesOneChar, (value-5));
  else if (value === 4) return timesFiveChar + timesOneChar;
  else return repeatChar(timesOneChar, value);
}

function intToRoman(num) {
  let outputStr = '';
  outputStr += strOfPlace(num, 1000, 'M', '', '');
  outputStr += strOfPlace(num, 100, 'C', 'D', 'M');
  outputStr += strOfPlace(num, 10, 'X', 'L', 'C');
  outputStr += strOfPlace(num, 1, 'I', 'V', 'X');
  return outputStr;
}