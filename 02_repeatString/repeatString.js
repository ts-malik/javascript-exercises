const repeatString = function(input, num) {
  
  let output = '';

  if (num<0) {
    output = 'ERROR';
  }

  for (let i=0; i<num; i++) {
    output += input;
  }     
  return output;
};

// Do not edit below this line
module.exports = repeatString;
