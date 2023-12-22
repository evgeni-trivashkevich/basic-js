const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const arrDomains = domains.forEach(element => { 
    const arrStr = element.split('.');
    // ['code', 'yandex', 'ru']
    // reverse
    arrStr.reverse();
    arrStr.forEach((str, index) => {
      const newArr = arrStr.slice(0, index+1);
      const resultStr = '.' + newArr.join('.');
      result[resultStr] = result[resultStr] ? result[resultStr]+1 : 1;
    })
  });
  
  

return result;

}

module.exports = {
  getDNSStats
};
