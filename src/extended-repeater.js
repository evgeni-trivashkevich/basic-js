const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', 
 * { 
 * repeatTimes: 3, 
 * separator: '**', 
 * addition: 'PLUS', 
 * additionRepeatTimes: 3, 
 * additionSeparator: '00' 
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  const addition = options.addition !== undefined ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

    const subStrLittle = addition + additionSeparator;
    const subStr = `${str}${subStrLittle.repeat(additionRepeatTimes - 1)}${addition}`;
    const subStrMain = subStr + separator;
    return (subStrMain.repeat(repeatTimes - 1) + subStr);




}

module.exports = {
  repeater
};
