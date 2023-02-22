const palindromes = function (str) {
    let forwards = str.replace(/[^\w]|_/g, "").toLowerCase();
    let backwards = forwards.split("").reverse().join("");
    
    if (forwards === backwards) {return true;}
    else {return false;}
};

// Do not edit below this line
module.exports = palindromes;
