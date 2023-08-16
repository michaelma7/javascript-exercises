const convertToCelsius = function(temp) {
  if (isNaN(temp)) {
    return "Error";
  }
  celsius = (temp -32) * 5/9;
  rounded = parseFloat(celsius.toFixed(1));
  return rounded;
};

const convertToFahrenheit = function(temp) {
  if (isNaN(temp)) {
    return "Error";
  }
  fahrenheit = (temp *9/5) +32;
  rounded = parseFloat(fahrenheit.toFixed(1));
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
