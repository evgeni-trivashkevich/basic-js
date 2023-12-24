const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexFor1 = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      indexFor1.push(index);
    }
  });
  const arrChange = arr.filter(item => item !== -1);
  const arrSort = arrChange.sort((a, b) => a -b);
  let result = arrSort;
  for (let i = 0 ; i < indexFor1.length ; i++) {
    result.splice(indexFor1[i], 0, -1);
  }
  return result;
}

module.exports = {
  sortByHeight
};
