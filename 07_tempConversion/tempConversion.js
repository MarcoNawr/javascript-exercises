// convertToCelsius(32) // fahrenheit to celsius, should return 0 (Formel: (x°F − 32) × 5/9 = y°C)
// convertToFahrenheit(0) // celsius to fahrenheit, should return 32 (x°C × 9/5 + 32) = y°F

const convertToCelsius = function(number) {
  return parseFloat(((number-32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(number) {
  return parseFloat((number * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
