const palindromes = function (sentence) {
   let onlyLetters = sentence.replaceAll(/[^\w\']|_/g, '');
   let length = onlyLetters.length;
   let lowerCase = onlyLetters.toLowerCase();
   if (length === 0){
    return null;
   };
   let reversed = lowerCase.split("").reverse().join("");
   if (lowerCase === reversed) {
    return true;
   } else {
    return false;
   };
};

// Do not edit below this line
module.exports = palindromes;
