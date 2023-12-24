const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

//   if (!Array.isArray(arr)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }
//   let result = []; 
  
//   arr.forEach((item, index) => { 
//     const typeOfCurrentItem = typeof item;
//     const typeOfPrevItem = typeof arr[index - 1];
//     const typeOfSecondPrevItem = typeof arr[index - 2];
//     const typeOfThirdPrevItem = typeof arr[index - 3];
//     if (typeOfCurrentItem !== 'string' && typeOfPrevItem !== 'string') {
//       result.push(item);
//     } else if (typeOfCurrentItem === 'string' && item !== "--discard-next" && item !== "--discard-prev" && item !== "--double-next" && item !== "--double-prev") {
//       result.push(item);
//     } else { 
//       if (typeOfCurrentItem !== 'string' && typeOfPrevItem === 'string') {
//         if (arr[index - 1] === '--double-next') {
//           result.push(item, item);
//         } else if (arr[index - 1] === '--discard-next') {
          
//         } else if (arr[index - 1] === '--discard-prev') {
//           if (typeOfThirdPrevItem === 'string' && arr[index - 3] === '--discard-next') {
//           } else {
//             result.pop();
//           }
//           result.push(item);
//         } else if (arr[index - 1] === '--double-prev') {
//           if (typeOfThirdPrevItem === 'string' && arr[index - 3] === '--discard-next') {
          
//           } else if (typeOfThirdPrevItem === 'string' && arr[index - 3] === '--double-next') {
//             if (arr[index - 2] && typeOfSecondPrevItem !== 'string') {
//               result.push(arr[index - 2]);
//             }
//           } else {
//             if (arr[index - 2] && typeOfSecondPrevItem !== 'string') {
//               result.push(arr[index - 2]);
//             }
//           }
//           result.push(item);
//         }
//       } else {
       
//       }
//     }
//   });
//   return result;
}
module.exports = {
  transform
};
