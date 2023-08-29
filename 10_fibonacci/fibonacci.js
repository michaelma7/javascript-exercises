const fibonacci = function(num) {
    let oldestFib = 0;
    let oldFib = 1;
    if (num<0) {
        return "OOPS";
    };
    if (num == 1) {
        return 1;
    };
    for(let i = num; i>1; i--) {
        nextFib = oldestFib + oldFib;
        oldestFib = oldFib;
        oldFib = nextFib;
    }
    return nextFib;
};

// Do not edit below this line
module.exports = fibonacci;
