let loopyLighthouse = function (range, multiples, words) {
  let start = range[0] // set range start for loop
  let end = range[1] // set range end for loop
  let finalNumbers = "" // set empty var that will be returned containing all numbers

  for (let i = start; i <= end; i++) { // loop through all numbers and store them into a variable
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0]+words[1])
    } else if (i % multiples[0] === 0) {
      console.log(words[0])
    } else if (i % multiples[1] === 0) {
      console.log(words[1])
    } else {
      console.log(i)
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]))
