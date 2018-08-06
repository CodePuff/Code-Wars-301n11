function insertDash(num) {
  //take number and convert to array (stringify and split)
  var newNumArray = [];
  var numArray = num.toString().split('');
  //identify odd numbers back to back via if/&&/else
  for (var i = 0; i < numArray.length - 1; i++) {
    var firstNum = numArray[i];
    var secondNum = numArray[i + 1];
    if ((numArray[i] % 2 !== 0) && (numArray[i + 1] % 2 !== 0)) {
      //insert dash and concatenate string
      newNumArray.push(firstNum);
      newNumArray.push('-');
    } else {
      newNumArray.push(firstNum);
    }
    if (i === numArray.length - 2) {
      newNumArray.push(secondNum);
    }
  }
  //combine new number string with dashes in between two odd numbers and display new string
  var newNumString = newNumArray.join('');
  return newNumString;
}