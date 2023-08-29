const add = function(num1, num2) {
  const sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	const result = num1 - num2;
  return result;
};

const sum = function(nums) {
	const sum = nums.reduce((total, next) => {
   return total + next;
  }, 0);
  return sum;
};

const multiply = function(nums) {
  return nums.reduce((total, next) => total * next, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let nums = [];
	for(let i=num; i>0; i--) {
    nums.push(i);
  }
  return nums.reduce((total, next) => total * next, 1);
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
