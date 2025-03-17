const removeFromArray = function(arr, ... items) {
    i = 0;
    while (i < arr.length) {
        for (var item of items) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
        i++;
    }
    return arr;

    /* for (i = 0; i < arrLength; i++) {
        for (var item of items) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
    }
    return arr; */
};

// Do not edit below this line
module.exports = removeFromArray;
