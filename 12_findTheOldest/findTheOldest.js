const findTheOldest = function(array) {
    yobArray = array.map(value => value.yearOfBirth);
    yodArray = array.map(value => value.yearOfDeath);
    age = yodArray.map((item, index) => item - yobArray[index]);
    oldest = age.indexOf(Math.max.apply(Math, age));
    return array[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
