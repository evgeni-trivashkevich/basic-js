const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    const nArr = n.split('-');
    let result = [];
    function isInteger(num) {
      return (num ^ 0) === num;
    }

    if (nArr.length !== 6) {
      result.push(1);
    } else {
      nArr.forEach(element => {
        result = isInteger(parseInt(element, 16)) === true ? result : result.push(1);
      });
    }
    return result.length === 0 ? true : false;
}

module.exports = {
  isMAC48Address
};
