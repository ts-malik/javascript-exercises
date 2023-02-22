const convertToCelsius = function(farenheit) {
  return Number(((5/9)*(farenheit-32)).toFixed(1)); 
};

const convertToFahrenheit = function(celsius) {
  return Number(((9/5)*(celsius+32)).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
