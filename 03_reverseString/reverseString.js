const reverseString = function(text) {
    let separated = text.split("");
    let reversed = separated.reverse();
    let completed = reversed.join("");
    // let reversedString = reversed.toString();
    // let completed = reversedString.replaceAll(",","");
    return completed;
};

// Do not edit below this line
module.exports = reverseString;
