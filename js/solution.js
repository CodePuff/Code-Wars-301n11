let disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const strArr = str.split('');
  let resultArr = [];
  strArr.forEach(function (element) {
    if (vowels.indexOf(element) === -1) {
      resultArr.push(element);
    }
  })
  return resultArr.join('');
};

// The above is coded with Kevin. Below is a funck version that requires extra code (either to upper or lower case) and is not considered DRY.


// function disemvowel(str) {
//   var removeVowel = [];
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] != 'a'
//       && str[i] != 'e'
//       && str[i] != 'i'
//       && str[i] != 'o'
//       && str[i] != 'u') {
//       removeVowel.push(str[i]);
//     }
//   }
//   return removeVowel.join('');
// }

// disemvowel('This website is for losers LOL!')