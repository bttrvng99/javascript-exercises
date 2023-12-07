const convertToCelsius = function(number) {
  var raw = (number - 32) / 9 * 5
  return Math.round(raw*10)/10;
};

const convertToFahrenheit = function(number) {
  
  var raw = (number * 9 / 5)+32;
  return Math.round(raw*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
