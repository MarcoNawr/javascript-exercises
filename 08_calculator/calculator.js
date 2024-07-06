const add = function() {
  let total = 0;
  for(i=0, j=arguments.length; i<j; i++){
    total += arguments[i];
  }
  return total;
};

const subtract = function() {
  let total = arguments[0];
  for(i=arguments.length-1, j=0; i>j; i--){
    total -= arguments[i];
  }
  return total;
};

const sum = function(myArray) {
  // VARIANT 1
  // let total = 0;
  // for(i=0, j=myArray.length; i<j; i++){
  //   total += myArray[i];
  // }
  // return total;

  //VARIANT 2
  // {} ONLY WORKS FOR OBJECTS, NOT FOR ARRAYS: return myArray.reduce((total, current) => {total + current}, 0);
  return myArray.reduce((total, currentItem) => total + currentItem, 0);
};



const multiply = function(myArray) {
  return myArray.reduce((total, currentItem) => total * currentItem);
};

const power = function(basis, exponent) {
	//My Variation (IT WORKS!)
  // let potenz = basis;
  // for(i=0; i<exponent-1;i++){
  //   potenz = potenz * basis;
  // }
  // return potenz;

  // Solution (there is an easy function for it ;) )
  return Math.pow(basis, exponent);
};


const factorial = function(x) {
  result = 1;
  if(x === 0){return 1;}
  
  for(i=x; i>0;i--){
    result = result * i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
