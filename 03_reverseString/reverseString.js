const reverseString = function(str) {
    let rString = "";
    for (i = str.length - 1; i >= 0; i--) {
        rString += str[i];
    }
    return rString;
};

// Do not edit below this line
module.exports = reverseString;
