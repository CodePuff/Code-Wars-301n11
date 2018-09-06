var gimme = function (inputArray) {
  let copy = Array.from(inputArray);
  copy.sort(function (a, b) { return a - b; });
  var number = copy[1];
  var answer = inputArray.indexOf(number);
  return answer;
};