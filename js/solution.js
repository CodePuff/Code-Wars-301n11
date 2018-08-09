const myArr = [2, 10, 9, 3, -2, -3];

function isNice(myArr) {
  if (myArr.length === 0) {
    return ‘false;
  }
  let result;
  for (let i = 0; i < myArr.length; i++) {
    let current = myArr[i];
    let prev = current - 1;
    let next = current + 1;

    if (myArr.indexOf(prev) !== -1 || myArr.indexOf(next) !== -1) {
      result = true
       } else {
      result = false;
      break;
    }
  }
  return result;
}
console.log(isNice(myArr));