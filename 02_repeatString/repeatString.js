const repeatString = function(text, num) {
    let sentence = '';
    if (num < 0) {
        return "ERROR";
    }
    for(let i = num; i > 0; i--) {
        sentence += text;
    };
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
