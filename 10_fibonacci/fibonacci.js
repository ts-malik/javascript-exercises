const fibonacci = function(num) {
    let sum = "OOPS";
    let prev1 = 0;
    let prev2 = 1;

    if (Number(num)==0) {
        sum = prev1; 
    } else if (Number(num)==1) {
        sum = prev2;
    }
    else if (Number(num)>=2) {
        
        for(let i=2; i<=Number(num); i++) {
            sum = prev1 + prev2;
            prev1 = prev2;
            prev2 = sum;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
