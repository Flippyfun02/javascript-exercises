const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    rString = "";
    for (i = 0; i < num; i++) {
        rString += str;
    }
    return rString;
};

// Do not edit below this line
module.exports = repeatString;
