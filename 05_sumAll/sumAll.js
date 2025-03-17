const sumAll = function(start, finish) {
    if (typeof start != "number" || typeof finish != "number" || start < 0 || 
        finish < 0 || start % 1 != 0 || finish % 1 != 0) {
        return "ERROR"
    }
    else if (start > finish) {
        let temp = start;
        start = finish;
        finish = temp;
    }
    let sum = 0;
    for (i = start; i <= finish; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
