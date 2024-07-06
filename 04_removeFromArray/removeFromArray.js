// //MY TRY

// const removeFromArray = function() {
//     let array = arguments[0];
//     let result;

//     for(i=1; i<=arguments.length; i++){
//         // search for index of arguments[i] (something like 'let index = array.indexOf(arguments[i]);') ==> https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
//         // remove from arry with splice function (use the index to remove) ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//         result = array.splice(array.indexOf(arguments[i]), 1);
//     }
//     return result;
// };

// // Do not edit below this line
// module.exports = removeFromArray;


//Wrong Baseline //
//Solution:

// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of the rest of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((itemx) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(itemx)) {
        newArray.push(itemx);
      }
    });
    // and return that array
    return newArray;
  };
  
  // A simpler, but more advanced way to do it is to use the 'filter' function,
  // which basically does what we did with the forEach above.
  
  // const removeFromArray = function(array, ...args) {
  //   return array.filter(val => !args.includes(val))
  // }
  //
  
  module.exports = removeFromArray;
  
