const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let result = [];

  for (let i = 0, hasFound = false; i < arr1.length; hasFound = false) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          result += arr1[i];
          hasFound = true;
          console.log('result', result);
          console.log('arr1 befot', arr1);
          console.log('arr2 befor', arr2);


          arr1.splice(i, 1);
          arr2.splice(j, 1);
          console.log('arr1 aftor', arr1);
          console.log('arr2 after', arr2);


          break;
        } 
        
    }
    if (!hasFound) {
      arr1.splice(i, 1);
    }
  }
 return result.length;
}

module.exports = {
  getCommonCharacterCount
};
