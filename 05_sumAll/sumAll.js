const sumAll = function(num1, num2) {
    //check that passed values are positive numbers
    let larger;
    let smaller;
    if (typeof(num1) != typeof(1) || typeof(num2) != typeof(1) || num1 < 0 || num2 < 0){
        return "ERROR";
    }
    // determine which number is larger
    else if (num1 > num2) {
        larger = num1;
        smaller = num2;
    }
    else {
        larger = num2;
        smaller = num1;
    }
    //create array with numbers between numbers
    let numbers = [];
    for(let i = smaller; i <= larger; i++) {
        numbers.push(i);
    }
    //sum all values with reduce
    function add (total, num) {
        return total + num;
    }
    let sum = numbers.reduce(add, 0);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
