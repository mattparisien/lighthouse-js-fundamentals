
const repeatNumbers = function(data) {
  let finalStr = ""
  let numToRepeat = ""
  let repeat = 0
  for (i = 0; i < data.length; i++) {
    numToRepeat = data[i][0].toString()
    repeat = data[i][1] + "\n"
    finalStr += numToRepeat.repeat(repeat) + "," 
  }
  return finalStr
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
