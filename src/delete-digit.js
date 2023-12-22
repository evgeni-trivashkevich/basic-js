const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const arrNumber = String(n).split('');
  if (arrNumber.length === 0) {
    return 0;
  }
  let arrNumberStart = [...arrNumber];
  let result = [];
  
  arrNumber.forEach(function (element, index) {
    arrNumberStart.splice(index, 1);
    result.push(arrNumberStart.join(''));
    arrNumberStart = [...arrNumber];
  } );
  result.sort((a, b) => Number(a) - Number(b));
  return Number(result[result.length - 1]);
} 


module.exports = {
  deleteDigit
};
