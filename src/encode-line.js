const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrStr = str.split('');
  let result = '';
  let collator = 1;
  arrStr.forEach((item, index) => {
    if (index === 0) {
      result = item;
    } else {
      if (item === arrStr[index - 1]){
        collator+=1; 
        result = !isNaN(Number(result[result.length - 2])) ? result.slice(0, -2) : result.slice(0, -1);
        result += collator + item;
      } else {
        result += item;
        collator = 1;
      }
    
    }
   
  })
  return result;
}

module.exports = {
  encodeLine
};
