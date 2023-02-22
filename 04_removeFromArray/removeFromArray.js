const removeFromArray = function(array, value1, value2, value3, value4) {
    
    values = [value1, value2, value3, value4];
    
    for (value of values) {
        if (value) {
            const index = array.indexOf(value);
            if (index != -1) {array.splice(index, 1);}
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
