function isValid(s: string): boolean {
  // need to make a last in first out stack of open parentheses
  // each closing parenthesis needs to be checked against last open parenthesis

  const open_parens: string[] = [];

  // traverse the string
  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      open_parens.unshift(ch);
    } else if (ch === ')') {
      if (open_parens[0] === '(') open_parens.shift();
      else return false;
    } else if (ch === '}') {
      if (open_parens[0] === '{') open_parens.shift();
      else return false;
    } else if (ch === ']') {
      if (open_parens[0] === '[') open_parens.shift();
      else return false;
    }

  }

  return open_parens.length === 0;

};