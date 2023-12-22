const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names = []) {
  if (names.length <= 0){
    return [];
  }
  // let uniqueNames = new Set(names);
  // let countNames = {};



    let result = [names[0]];
    for (let i = 1 ; i < names.length; i++) {
      // let kolleter = 1;
      // find all by pattern name[i](*)
      let hasName = result.filter((item) => item === names[i] || (item === names[i]+'(1)'));
      let kolleter = hasName.length;
      if (kolleter > 0) {
        result.push(`${names[i]}(${kolleter})`);
      // let str = `${names[i]}(${kolleter})`;
      //   while(result.includes(str)) {
      //     kolleter+=1;
      //     str = `${names[i]}(${kolleter})`;
      //   }
      //   result[result.length-1] = `${names[i]}(${kolleter-1})`;
      } else {
        result.push(names[i]);
      }
    }
    return result;
}

module.exports = {
  renameFiles
};
