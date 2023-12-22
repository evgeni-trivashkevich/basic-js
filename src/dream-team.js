const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
    const newMembers = members;
    let result = '';
    const resultArr = newMembers.filter((item) => typeof item === "string");
    resultArr.forEach((item) => {
      result += item.trim()[0].toUpperCase();
    })
    const collator =  new Intl.Collator('en');
  return result.split('').sort((a,b)=>collator.compare(a,b)).join('');
}

module.exports = {
  createDreamTeam
};
