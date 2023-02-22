const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  
  for (let num of array) {sum = sum + num;}

  return sum;
};

const multiply = function(array) {
  let product = 1;

  for (num of array) {product *= num;}

  return product;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let product = 1;

  if (num !=0) {
    for(let i=2; i<=num;i++) {product *= i;}
  }
  return product;
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
