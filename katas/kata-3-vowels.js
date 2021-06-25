const numberOfVowels = function(array) {
  let vowels = ["u", "e", "i", "o", "a"]
  let counter = 0;
  //looping through argument array
  for (let value of array) {
    if (value === "u" || value === "e" || value === "i" || value === "o" || value === "a") {
      counter += value;
    }
    
  }
  return counter.length;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
