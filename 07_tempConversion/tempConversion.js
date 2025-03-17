const convertToCelsius = function(farenheit) {
  celsius = (farenheit - 32) * (5/9);
  if (celsius % 1 == 0) {
    return celsius;
  }
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  farenheit = (celsius * (9/5)) + 32;
  if (farenheit % 1 == 0) {
    return farenheit;
  }
  return parseFloat(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
