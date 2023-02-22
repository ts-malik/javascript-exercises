const sumAll = function(low, high) {
    let sum = 0;

    if (low < 0 || high < 0) {return "ERROR"}
    if (typeof low != "number" || typeof high != "number") {return "ERROR"}

    if (high<low) {
        temp = low;
        low = high;
        high = temp;
    }

    for(let i=low; i<=high; i++) {
        sum += i;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
