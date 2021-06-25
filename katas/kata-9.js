const camelCase = function(input) {
 let stringArr = input.split(" ")
  for (i = 0; i < stringArr.length; i++) {
  stringArr[i] = stringArr[i].charAt(0).toUpperCase()
  }
 return stringArr
}

console.log(camelCase("this is a string"));
