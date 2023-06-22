/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

  re = new RegExp(`^${p}$`);
  return Boolean(s.match(re));
};